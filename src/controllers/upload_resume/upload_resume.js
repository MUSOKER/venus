const processFileService = require('../../services');
const { format } = require('util');
const { Storage } = require('@google-cloud/storage');
const storage = new Storage({ keyFilename: "google-clude-key.json" });
const bucket = storage.bucket("bezkoder-e-commerce");
const upload = async(req, res, next) => {
    try {
        await processFileService.processFileService(req, res);
        if (!req.file) {
            return res.status(400).send({ message: "Please upload a file" });
        }
        // create a new blob and upload the data
        const blob = bucket.file(req.file.originalname);
        const blobStream = blob.createWriteStream({
            resumable: false,
        })
        blobStream.on("error", (err) => {
            res.status(500).send({ message: err.message });
        })
        blobStream.on("finish", async(data) => {
            const publicUrl = format(
                `https://storage.googleapis.com/${bucket.name}/${blob.name}`
            );

            try {
                //Make the file public
                await bucket.file(req.file.originalname).makePublic();
            } catch {
                return res.status(500).send({
                    message: `Uploade the file is successfully: ${req.file.originlname}, but public access is denied!`,
                    url: publicUrl
                })
            }
            res.status(200).send({
                message: `The file was successfully uploaded: ${req.file.originalname}`,
                url: publicUrl
            });
        })
        blobStream.end(req.file.buffer);
    } catch (err) {
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`
        })
    }

}


module.exports = { upload }