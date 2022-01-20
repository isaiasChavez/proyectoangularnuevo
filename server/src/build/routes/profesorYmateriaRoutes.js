"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesorYmateriaController_1 = require("../controllers/profesorYmateriaController");
class ProfesorYmateriaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', profesorYmateriaController_1.profesorYmateriaController.list);
        this.router.get('/:id', profesorYmateriaController_1.profesorYmateriaController.listOne);
        this.router.post('/create', profesorYmateriaController_1.profesorYmateriaController.create);
        this.router.delete('/delete/:idPyM', profesorYmateriaController_1.profesorYmateriaController.delete);
        this.router.put('/actualizar/:idPyM', profesorYmateriaController_1.profesorYmateriaController.actualizar);
    }
}
const profesorYmateriaRoutes = new ProfesorYmateriaRoutes();
exports.default = profesorYmateriaRoutes.router;
