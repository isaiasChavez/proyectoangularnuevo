import indexRoutes from './routes/indexRoutes';
import institutosRoutes from './routes/institutosRoutes';
import carrerasRoutes from './routes/carrerasRoutes';
import administradorRoutes from './routes/administradorRoutes';
import rentasRoutes from './routes/rentasRoutes';
import profesoresRoutes from './routes/profesoresRoutes';
import morgan from 'morgan';
import cors from 'cors';
import swagger_ui_express from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import express, {Application} from 'express';
import tipoProfesorRoutes from './routes/tipoProfesorRoutes';

class Server
{
public app: Application;
constructor()
{
this.app= express();
this.config();
this.routes();
this.app.use('/documentacion',swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));
}
config (): void
{
this.app.set('port',process.env.PORT|| 3000);
this.app.use(morgan('dev'));
this.app.use(cors());
this.app.use(express.json());
this.app.use(express.urlencoded({extended: false}));
}
routes (): void
{
	this.app.use(indexRoutes);
	this.app.use('/api/institutos',institutosRoutes);
	this.app.use('/api/carreras',carrerasRoutes);
	this.app.use('/api/profesores',profesoresRoutes);
	this.app.use('/api/tipoProfesor',tipoProfesorRoutes);
	//this.app.use('/api/administrador', administradorRoutes);
	//this.app.use('/api/rentas', rentasRoutes);
}
start (): void
{
this.app.listen(this.app.get('port'), () =>
{
console.log('Server on port',this.app.get('port'));
});
}
}
const server = new Server();
server.start();