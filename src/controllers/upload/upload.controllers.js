// const { success, error } = require('@Enseedling/enseedling-lib-handler');
const { google } = require('googleapis');
const formidable = require('formidable');
// const { Transaction } = require('../../utils');
// const { uploadValidation } = require('../../validations');
const { gcpServices } = require('../../services');

const youtube = google.youtube('v3');

async function uploadToYouTube(file) {
  const auth = new google.auth.GoogleAuth({
    keyFile: './src/config/venus-intern-33c818726701.json', // Replace with your Google API credentials file path
    scopes: ['https://www.googleapis.com/auth/youtube.upload'],
  });

  const authClient = await auth.getClient();
  google.options({ auth: authClient });

  const youtubeResponse = await youtube.videos.insert({
    auth: authClient,
    part: 'snippet',
    requestBody: {
      snippet: {
        title: file.name,
        description: 'Uploaded via API',
      },
    },
    media: {
      body: file.data,
    },
  });

  return youtubeResponse;
}

const fileUpload = async (req, res) => {
  const form = new formidable.IncomingForm();

  form.maxFileSize = 100 * 1024 * 1024; // Set maximum file size (100MB in this example)
  form.keepExtensions = true; // Keep file extensions
  form.multiples = false; // Allow only single file upload

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'An error occurred while parsing the form.' });
    }

    try {
      console.log('Fields:', fields);
      console.log('Files:', files);

      const { name, id } = fields;
      const { attachment } = files;

      // console.log(attachment);
      if (!attachment) {
        return res.status(400).json({ error: 'No attachment provided.' });
      }
      console.log('Attachment:', attachment);
      const isVideo = attachment && attachment.mimetype.startsWith('video/');

      if (isVideo) {
        const youtubeResponse = await uploadToYouTube(attachment);
        return res.status(200).json({ url: youtubeResponse.data.id });
      }

      const filePath = attachment.filepath;
      const fileName = attachment.originalFilename;

      const response = await gcpServices.uploadFileAndGetSignedUrl(filePath, fileName);
      return res.status(200).json({
        name,
        id,
        url: response,
      });
    } catch (error) {
      console.error('Error during file upload:', error);
      return res.status(500).json({ error: 'An error occurred during file upload.' });
    }
  });
};

module.exports = {
  fileUpload,
};
