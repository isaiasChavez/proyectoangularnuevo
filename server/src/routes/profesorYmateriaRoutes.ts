import { Router } from 'express';
import {profesorYmateriaController} from '../controllers/profesorYmateriaController';
class ProfesorYmateriaRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
	this.router.get('/',profesorYmateriaController.list );
	this.router.get('/:id',profesorYmateriaController.listOne);
	this.router.post('/create', profesorYmateriaController.create);
	this.router.delete('/delete/:idPyM', profesorYmateriaController.delete);
	this.router.put('/actualizar/:idPyM',profesorYmateriaController.actualizar);
}
}
const profesorYmateriaRoutes= new ProfesorYmateriaRoutes();
export default profesorYmateriaRoutes.router;