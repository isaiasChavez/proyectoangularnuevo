import {Request,Response} from 'express';
import pool from '../database';
class AdministradorController
{
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM administrador order by telefono');
		console.log(respuesta);
		res.json( respuesta );
	}
	public async listOne(req: Request, res: Response): Promise <void>{
		const {id} = req.params;
		let consulta='SELECT * FROM administrador WHERE e-mail = '+id;
		const respuesta = await pool.query(consulta); 
		console.log(consulta);
		if(respuesta.length>0){
			res.json(respuesta[0]);
			return ;
		}
		res.status(404).json({'mensaje': 'Administrador no encontrado'});
	}
	public async create (req:Request, res:Response): Promise <void>{
		const resp= await pool.query ("INSERT INTO administrador set ?", [req.body]);
		res.json(resp);
	}
	
	public async delete (req:Request, res:Response): Promise <void>{
		const {id} = req.params
		const resp= await pool.query (`DELETE FROM administrador WHERE telefono = ${id}`);
		res.json(resp);
	}
	public async actualizar(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		console.log(req.params);
		const resp = await pool.query("UPDATE administrador set ? WHERE telefono= ?", [req.body, id]);
		res.json(resp);
		}
}
export const administradorController = new AdministradorController();