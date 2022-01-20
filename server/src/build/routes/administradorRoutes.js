"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const administradorController_1 = require("../controllers/administradorController");
class AdministradorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', administradorController_1.administradorController.list);
        this.router.get('/:id', administradorController_1.administradorController.listOne);
        this.router.post('/create', administradorController_1.administradorController.create);
        this.router.delete('/delete/:id', administradorController_1.administradorController.delete);
        this.router.put('/actualizar/:id', administradorController_1.administradorController.actualizar);
    }
}
const administradorRoutes = new AdministradorRoutes();
exports.default = administradorRoutes.router;
