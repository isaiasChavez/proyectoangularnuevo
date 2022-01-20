import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import pool from '../database';
class ProfesoresController {
	public async list(req: Request, res: Response): Promise<void> {
		const respuesta = await pool.query('SELECT * FROM profesores order by idProfesor');
		console.log(respuesta);
		res.json(respuesta);
	}
	public async listOne(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		let consulta = 'SELECT * FROM profesores WHERE idProfesor = ' + id;
		const respuesta = await pool.query(consulta);
		console.log(consulta);
		if (respuesta.length > 0) {
			res.json(respuesta[0]);
			return;
		}
		res.status(404).json({ 'mensaje': 'profesor no encontrado' });
	}
	public async existe(req: Request, res: Response): Promise<void> {
		const { correo, password } = req.params;
		let consulta = "SELECT idProfesor,password FROM profesores WHERE correoProfesor = '" + correo + "'";
		const respuesta = await pool.query(consulta);
		if (respuesta.length > 0) {
			bcrypt.compare(password, respuesta[0].password, (err, resEncriptar) => {
				if (resEncriptar == true)

					res.json(respuesta[0].idProfesor);

				else

					res.json(-1);
				return;
			})
		}
		else
			res.json(-1);
	}
	public async create(req: Request, res: Response): Promise<void> {
		let password = req.body.password as any;
		var salt = bcrypt.genSaltSync(10);
		bcrypt.hash(password, salt).then(function (nuevoPassword) {
			req.body.password = nuevoPassword;
			const resp = pool.query("INSERT INTO profesores set ?", [req.body]);
			res.json(resp);
		})
	}

	public async delete(req: Request, res: Response): Promise<void> {
		const { idProfesores } = req.params
		const resp = await pool.query(`DELETE FROM profesores WHERE idProfesor = ${idProfesores}`);
		res.json(resp);
	}
	public async actualizar(req: Request, res: Response): Promise<void> {
		const { idProfesor } = req.params;
		console.log(req.params);
		const resp = await pool.query("UPDATE profesores set ? WHERE idProfesor= ?", [req.body, idProfesor]);
		res.json(resp);
	}

	public async getByIdCarr(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		let consulta = 'SELECT idProfesor, nombres, apellidoP, apellidoM FROM profesores WHERE idCarrera =' + id;
		const respuesta = await pool.query(consulta);
		console.log(consulta);
		if (respuesta.length > 0) {
			res.json(respuesta[0]);
			return;
		}
		res.status(404).json({ 'mensaje': 'profesor no encontrado' });
	}

	public async getByIdIns(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		let consulta = 'SELECT idProfesor, nombres, apellidoP, apellidoM FROM profesores P INNER JOIN carreras C on P.idCarrera = C.idCarrera WHERE C.idInstituto =' + id;
		const respuesta = await pool.query(consulta);
		console.log(consulta);
		if (respuesta.length > 0) {
			res.json(respuesta[0]);
			return;
		}
		res.status(404).json({ 'mensaje': 'profesor no encontrado' });
	}


}
export const profesoresController = new ProfesoresController();