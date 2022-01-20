import { Router } from 'express';
import {materiaController} from '../controllers/materiaController';
class MateriaRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
	this.router.get('/',materiaController.list );
	this.router.get('/:id',materiaController.listOne);
	this.router.post('/create', materiaController.create);
	this.router.delete('/delete/:idMateria', materiaController.delete);
	this.router.put('/actualizar/:idMateria',materiaController.actualizar);
}
}
const materiaRoutes= new MateriaRoutes();
export default materiaRoutes.router;