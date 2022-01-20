import { Router } from 'express';
import {rentasController} from '../controllers/rentasController';
class RentasRoutes
{
	public router: Router=Router();
	constructor()
	{
		this.config();
	}
	config() : void
	{
		this.router.get('/',rentasController.list );
		this.router.get('/:id',rentasController.listOne);
		this.router.post('/create', rentasController.create);
		this.router.delete('/delete/:idR', rentasController.delete);
		this.router.put('/actualizar/:idR',rentasController.actualizar);
	}
}
const rentasRoutes= new RentasRoutes();
export default rentasRoutes.router;