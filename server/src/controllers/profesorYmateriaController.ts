import {Request,Response} from 'express';
import pool from '../database';
class ProfesorYmateriaController
{
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM profesorYmateria order by idPyM');
		console.log(respuesta);
		res.json( respuesta );
	}
	public async listOne(req: Request, res: Response): Promise <void>{
		const {id} = req.params;
		let consulta='SELECT * FROM profesorYmateria WHERE idPyM = '+id;
		const respuesta = await pool.query(consulta); 
		console.log(consulta);
		if(respuesta.length>0){
			res.json(respuesta[0]);
			return ;
		}
		res.status(404).json({'mensaje': 'profesorYmateria no encontrada'});
	}
	public async create (req:Request, res:Response): Promise <void>{
        const resp = pool.query("INSERT INTO profesorYmateria set ?",[req.body]);
        res.json(resp);
	}
	
	public async delete (req:Request, res:Response): Promise <void>{
		const {idPyM} = req.params
		const resp= await pool.query (`DELETE FROM profesorYmateria WHERE idPyM = ${idPyM}`);
		res.json(resp);
	}
	public async actualizar(req: Request, res: Response): Promise<void> {
		const { idPyM } = req.params;
		console.log(req.params);
		const resp = await pool.query("UPDATE profesorYmateria set ? WHERE idPyM= ?", [req.body, idPyM]);
		res.json(resp);
		}

	


}
export const profesorYmateriaController = new ProfesorYmateriaController();