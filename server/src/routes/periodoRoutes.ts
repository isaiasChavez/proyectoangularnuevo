import { Router } from 'express';
import {periodoController} from '../controllers/periodoController';
class PeriodoRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
	this.router.get('/',periodoController.list );
	this.router.get('/:id',periodoController.listOne);
	this.router.post('/create', periodoController.create);
	this.router.delete('/delete/:idPeriodo', periodoController.delete);
	this.router.put('/actualizar/:idPeriodo',periodoController.actualizar);
}
}
const periodoRoutes= new PeriodoRoutes();
export default periodoRoutes.router;