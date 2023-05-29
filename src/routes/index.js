const express = require("express");
const { error } = require("@Enseedling/enseedling-lib-handler");
const userRoutes = require("./user.routes.js");
const projectsRoutes = require("./project.routes");
const coursesRoutes = require("./course.routes");
const categoryRoutes = require("./category.route.js");

const apiRoutes = express.Router();

apiRoutes.use("/user", userRoutes);
apiRoutes.use("/project", projectsRoutes);
apiRoutes.use("/course", coursesRoutes);
apiRoutes.use("*", () => error.throwNotFound({ item: "Route" }));
apiRoutes.use("/user", userRoutes);
apiRoutes.use("/category", categoryRoutes);
apiRoutes.use("/project", projectsRoutes);
apiRoutes.use("/course", coursesRoutes);
apiRoutes.use("*", () => error.throwNotFound({ item: "Route" }));

module.exports = apiRoutes;
