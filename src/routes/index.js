import { Router } from 'express';

import UserRouter from '@api/users/routes';

const router = Router();

router.use('/auth', UserRouter);

export default router;
