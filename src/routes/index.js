import { Router as _Router } from 'express';

import UserRouter from '@api/users/routes';

const Router = _Router();

Router.use('/auth', UserRouter);

export default Router;
