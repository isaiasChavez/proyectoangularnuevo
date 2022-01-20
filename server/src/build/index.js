"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const institutosRoutes_1 = __importDefault(require("./routes/institutosRoutes"));
const carrerasRoutes_1 = __importDefault(require("./routes/carrerasRoutes"));
const profesoresRoutes_1 = __importDefault(require("./routes/profesoresRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const express_1 = __importDefault(require("express"));
const tipoProfesorRoutes_1 = __importDefault(require("./routes/tipoProfesorRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.app.use('/documentacion', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/institutos', institutosRoutes_1.default);
        this.app.use('/api/carreras', carrerasRoutes_1.default);
        this.app.use('/api/profesores', profesoresRoutes_1.default);
        this.app.use('/api/tipoProfesor', tipoProfesorRoutes_1.default);
        //this.app.use('/api/administrador', administradorRoutes);
        //this.app.use('/api/rentas', rentasRoutes);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
