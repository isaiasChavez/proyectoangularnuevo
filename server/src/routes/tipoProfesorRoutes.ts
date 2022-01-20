import { Router } from 'express';
import {tipoProfesoresController} from '../controllers/tipoProfesorController';
class TipoProfesoresRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
	this.router.get('/',tipoProfesoresController.list );
	this.router.get('/:id',tipoProfesoresController.listOne);
	this.router.post('/create', tipoProfesoresController.create);
	this.router.delete('/delete/:idTipoProfesor', tipoProfesoresController.delete);
	this.router.put('/actualizar/:idTipoProfesor',tipoProfesoresController.actualizar);
}
}
const tipoProfesoresRoutes= new TipoProfesoresRoutes();
export default tipoProfesoresRoutes.router;