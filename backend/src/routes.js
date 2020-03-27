const express = require("express");

const HeaderValidator = require("./middlewares/validators/HeaderValidator");

const CreateOngValidator = require("./middlewares/validators/CreateOngValidator");

const CreateIncidentValidator = require("./middlewares/validators/CreateIncidentValidator");
const IncidentValidator = require("./middlewares/validators/IncidentValidator");
const DeleteIncidentValidator = require("./middlewares/validators/DeleteIncidentValidator");

const SessionValidator = require("./middlewares/validators/SessionValidator");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionValidator, SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", CreateOngValidator, OngController.create);
routes.delete("/ongs", HeaderValidator, OngController.delete);

routes.get("/profile", HeaderValidator, ProfileController.index);

routes.get("/incidents", IncidentValidator, IncidentController.index);
routes.post(
  "/incidents",
  HeaderValidator,
  CreateIncidentValidator,
  IncidentController.create
);
routes.delete(
  "/incidents/:id",
  HeaderValidator,
  DeleteIncidentValidator,
  IncidentController.delete
);

module.exports = routes;
