"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoProfesorController_1 = require("../controllers/tipoProfesorController");
class TipoProfesoresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tipoProfesorController_1.tipoProfesoresController.list);
        this.router.get('/:id', tipoProfesorController_1.tipoProfesoresController.listOne);
        this.router.post('/create', tipoProfesorController_1.tipoProfesoresController.create);
        this.router.delete('/delete/:idTipoProfesor', tipoProfesorController_1.tipoProfesoresController.delete);
        this.router.put('/actualizar/:idTipoProfesor', tipoProfesorController_1.tipoProfesoresController.actualizar);
    }
}
const tipoProfesoresRoutes = new TipoProfesoresRoutes();
exports.default = tipoProfesoresRoutes.router;
