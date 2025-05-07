import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import register from './routes/register';
import login from './routes/login';
import rolesRoutes from './routes/roles';
import searchRoutes from './routes/searchProperty';
import agendaRoutes from './routes/Agenda';
import iaRoute from './routes/iaRoutes';
import adminRoutes from './routes/adminRoutes';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/register',register);
app.use('/login',login);
app.use('/roles', rolesRoutes);
app.use('/', searchRoutes);
app.use('/agenda', agendaRoutes);
app.use('/ia', iaRoute);
app.use("/api", adminRoutes);

// Verificar API key
if (!process.env.GEMINI_API_KEY) {
    console.warn('⚠️ ADVERTENCIA: No se ha definido GEMINI_API_KEY en las variables de entorno');
    console.warn('Las funcionalidades de IA no funcionarán correctamente');
  }


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para logging
app.use((req, _res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
  });

  // Ruta para verificar el estado de la API
app.get('/status', (_req, res) => {
    res.json({
      status: 'online',
      iaIntegration: process.env.GEMINI_API_KEY ? 'configured' : 'missing',
      timestamp: new Date().toISOString()
    });
  });



  
const PORT = process.env.PORT || 10101;



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API de IA inmobiliaria activa en http://localhost:${PORT}/ia`);

});
