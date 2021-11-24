import express from 'express';

import cors from 'cors';
import helmet from 'helmet';

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

    // Temp route
    this.server.get('/', (req, res) => {
      res.send({ message: 'Hello World' });
    });
  }
}
