"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const materiaController_1 = require("../controllers/materiaController");
class MateriaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', materiaController_1.materiaController.list);
        this.router.get('/:id', materiaController_1.materiaController.listOne);
        this.router.post('/create', materiaController_1.materiaController.create);
        this.router.delete('/delete/:idMateria', materiaController_1.materiaController.delete);
        this.router.put('/actualizar/:idMateria', materiaController_1.materiaController.actualizar);
    }
}
const materiaRoutes = new MateriaRoutes();
exports.default = materiaRoutes.router;
