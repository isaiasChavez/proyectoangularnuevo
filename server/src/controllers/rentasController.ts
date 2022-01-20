import {Request,Response} from 'express';
import pool from '../database';
class RentasController
{
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM rentas order by idRenta');
		console.log(respuesta);
		res.json( respuesta );
	}
	public async listOne(req: Request, res: Response): Promise <void>{
		const {id} = req.params;
		let consulta='SELECT * FROM rentas WHERE idRenta = '+id;
		const respuesta = await pool.query(consulta); 
		console.log(consulta);
		if(respuesta.length>0){
			res.json(respuesta[0]);
			return ;
		}
		res.status(404).json({'mensaje': 'Renta no encontrada'});
	}
	public async create (req:Request, res:Response): Promise <void>{
		const resp= await pool.query ("INSERT INTO rentas set ?", [req.body]);
		res.json(resp);
	}
	
	public async delete (req:Request, res:Response): Promise <void>{
		const {idR} = req.params
		const resp= await pool.query (`DELETE FROM rentas WHERE idRenta = ${idR}`);
		res.json(resp);
	}
	public async actualizar(req: Request, res: Response): Promise<void> {
		const { idR } = req.params;
		console.log(req.params);
		const resp = await pool.query("UPDATE rentas set ? WHERE idRenta = ?", [req.body, idR]);
		res.json(resp);
		}
}
export const rentasController = new RentasController();