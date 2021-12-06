import { Router as _Router } from 'express';

import AuthRouter from '@api/auth/auth.route';

const Router = _Router();

Router.use('/auth', AuthRouter);

export default Router;
