"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rentasController_1 = require("../controllers/rentasController");
class RentasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', rentasController_1.rentasController.list);
        this.router.get('/:id', rentasController_1.rentasController.listOne);
        this.router.post('/create', rentasController_1.rentasController.create);
        this.router.delete('/delete/:idR', rentasController_1.rentasController.delete);
        this.router.put('/actualizar/:idR', rentasController_1.rentasController.actualizar);
    }
}
const rentasRoutes = new RentasRoutes();
exports.default = rentasRoutes.router;
