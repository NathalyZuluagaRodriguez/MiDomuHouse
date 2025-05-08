import { Router } from 'express';
import { generateAgentInvitation } from '../controllers/invitacionController';

const router = Router();

// POST /api/invitacion/agente
router.post('/agente', generateAgentInvitation);

export default router;
