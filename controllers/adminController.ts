import { Request, Response } from 'express';
import * as adminService from '../services/adminServices';

export const registerAdmin = async (req: Request, res: Response) => {
  try {
    const nuevoAdmin = await adminService.registerAdmin(req.body);
    res.status(201).json({ message: 'Administrador registrado exitosamente', data: nuevoAdmin });
  } catch (error: any) {
    res.status(500).json({ message: 'Error al registrar el administrador', error: error.message });
  }
};
