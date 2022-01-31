import { Router } from 'express';

import UserController from '../controllers/UserController';
import ContentController from '../controllers/ContentController';

const vecRoutes = Router();

// --- USER --- //
vecRoutes.get('/user', UserController.index);
vecRoutes.get('/user/:email', UserController.show);
vecRoutes.post('/user/create', UserController.create);
vecRoutes.delete('/user/:email', UserController.delete);
vecRoutes.put('/user/:email', UserController.edit);

// --- CONTENT --- //
vecRoutes.get('/content', ContentController.index);
vecRoutes.get('/content/create', ContentController.create);

export default vecRoutes;

