import {Request,Response} from 'express';
import pool from '../database';
class PlanesController
{
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM planes order by idPlan');
		console.log(respuesta);
		res.json( respuesta );
	}
	public async listOne(req: Request, res: Response): Promise <void>{
		const {id} = req.params;
		let consulta='SELECT * FROM planes WHERE idPlan = '+id;
		const respuesta = await pool.query(consulta); 
		console.log(consulta);
		if(respuesta.length>0){
			res.json(respuesta[0]);
			return ;
		}
		res.status(404).json({'mensaje': 'planes no encontrada'});
	}
	public async create (req:Request, res:Response): Promise <void>{
        const resp = pool.query("INSERT INTO planes set ?",[req.body]);
        res.json(resp);
	}
	
	public async delete (req:Request, res:Response): Promise <void>{
		const {idPlan} = req.params
		const resp= await pool.query (`DELETE FROM planes WHERE idPlan = ${idPlan}`);
		res.json(resp);
	}
	public async actualizar(req: Request, res: Response): Promise<void> {
		const { idPlan } = req.params;
		console.log(req.params);
		const resp = await pool.query("UPDATE planes set ? WHERE idPlan= ?", [req.body, idPlan]);
		res.json(resp);
		}

	


}
export const planesController = new PlanesController();