"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const periodoController_1 = require("../controllers/periodoController");
class PeriodoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', periodoController_1.periodoController.list);
        this.router.get('/:id', periodoController_1.periodoController.listOne);
        this.router.post('/create', periodoController_1.periodoController.create);
        this.router.delete('/delete/:idPeriodo', periodoController_1.periodoController.delete);
        this.router.put('/actualizar/:idPeriodo', periodoController_1.periodoController.actualizar);
    }
}
const periodoRoutes = new PeriodoRoutes();
exports.default = periodoRoutes.router;
