import { Router } from 'express';
import {institutosController} from '../controllers/institutosController';
class InstitutosRoutes
{
	public router: Router=Router();
	constructor()
	{
		this.config();
	}
	config() : void
	{
		this.router.get('/',institutosController.list );
		this.router.get('/:id',institutosController.listOne);
		this.router.post('/create', institutosController.create);
		this.router.delete('/delete/:idInstitutos', institutosController.delete);
		this.router.put('/actualizar/:idInstituto',institutosController.actualizar);
		
	}
}
const institutosRoutes= new InstitutosRoutes();
export default institutosRoutes.router;