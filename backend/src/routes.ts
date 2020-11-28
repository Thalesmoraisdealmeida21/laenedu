import { Router } from 'express';

import EmailController from './controllers/EmailController';
import BootcampsController from './controllers/BootcampsController';

const routes = Router();

routes.get('/reserve_account', EmailController.index);
routes.get('/reserve_account/:id', EmailController.show);
routes.post('/reserve_account', EmailController.create);

routes.get('/bootcamps', BootcampsController.index);
routes.get('/bootcamps/:id', BootcampsController.show);
routes.post('/bootcamps', BootcampsController.create);

export default routes;
