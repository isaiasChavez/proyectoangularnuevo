"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrerasController_1 = require("../controllers/carrerasController");
class CarrerasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', carrerasController_1.carrerasController.list);
        this.router.get('/:id', carrerasController_1.carrerasController.listOne);
        this.router.post('/create', carrerasController_1.carrerasController.create);
        this.router.delete('/delete/:idCarreras', carrerasController_1.carrerasController.delete);
        this.router.put('/actualizar/:idCarrera', carrerasController_1.carrerasController.actualizar);
        this.router.get('/getCarrerasbyInstituto/:idInstituto', carrerasController_1.carrerasController.getCarrerasbyInstituto);
    }
}
const carrerasRoutes = new CarrerasRoutes();
exports.default = carrerasRoutes.router;
