import express from 'express';

import cors from 'cors';
import helmet from 'helmet';

import routes from '@src/routes';

export default class App {
  /**
   * @type express.Application
   */
  server;

  constructor() {
    this.server = express();
    this.#setup();
  }

  async #setup() {
    this.server.use(express.json({ limit: '300kb' }));
    this.server.use(express.urlencoded({ extended: true }));

    this.server.use(cors());
    this.server.use(helmet());

    this.server.get('/health', (req, res) => {
      res.status(200).send({ message: 'Health Check' });
    });

    this.server.use('/api', routes);
  }
}
