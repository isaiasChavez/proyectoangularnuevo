import { Router } from 'express';
import {administradorController} from '../controllers/administradorController';
class AdministradorRoutes
{
	public router: Router=Router();
	constructor()
	{
		this.config();
	}
	config() : void
	{
		this.router.get('/',administradorController.list );
		this.router.get('/:id',administradorController.listOne);
		this.router.post('/create', administradorController.create);
		this.router.delete('/delete/:id', administradorController.delete);
		this.router.put('/actualizar/:id',administradorController.actualizar);
	}
}
const administradorRoutes= new AdministradorRoutes();
export default administradorRoutes.router;