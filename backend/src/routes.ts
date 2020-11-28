import { Router } from 'express';

import EmailController from './controllers/EmailController';

const routes = Router();

routes.get('/reserve_account', EmailController.index);
routes.get('/reserve_account/:id', EmailController.show);
routes.post('/reserve_account', EmailController.create);

export default routes;
