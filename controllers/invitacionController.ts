import { Request, Response } from 'express';
import { generateInvitationToken } from '../utils/GenerarToken';
import { sendInvitationEmail } from '../utils/sendEmailer';

export const generateAgentInvitation = async (req: Request, res: Response) => {
  try {
    const { correo, nombre } = req.body;

    if (!correo || !nombre) {
      return res.status(400).json({ message: 'Nombre y correo son requeridos' });
    }

    const token = generateInvitationToken({ correo, nombre, rol: 'AGENTE' });

    // Enviar correo con el token
    await sendInvitationEmail(correo, token);

    return res.status(200).json({
      message: 'Token de invitación generado y enviado por correo exitosamente',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al generar o enviar el token de invitación',
      error: error instanceof Error ? error.message : error,
    });
  }
};
