import { Router } from 'express';
import {profesoresController} from '../controllers/profesoresController';
class ProfesoresRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
	this.router.get('/',profesoresController.list );
	this.router.get('/:id',profesoresController.listOne);
	this.router.get('/:correo/:password', profesoresController.existe );
	this.router.post('/create', profesoresController.create);
	this.router.delete('/delete/:idProfesores', profesoresController.delete);
	this.router.put('/actualizar/:idProfesor',profesoresController.actualizar);
	this.router.get('/getByIdCarr/:id',profesoresController.getByIdCarr);
	this.router.get('/getByIdIns/:id',profesoresController.getByIdIns);


}
}
const profesoresRoutes= new ProfesoresRoutes();
export default profesoresRoutes.router;