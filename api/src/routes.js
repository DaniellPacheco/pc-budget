const { Router } = require("express");

const routes = Router();

const ComponentController = require("./controllers/ComponentController");
const componentController = new ComponentController();

routes.get("/components", componentController.index);
routes.get("/components/:id", componentController.show);
routes.post("/components", componentController.create);
routes.put("/components/:id", componentController.update);
routes.delete("/components/:id", componentController.delete);


module.exports = routes;