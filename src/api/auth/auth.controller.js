import AuthService from './auth.service';

export default class AuthController {
  #authService;

  /**
   * @param {AuthService} authService
   */
  constructor(authService) {
    this.#authService = authService;
  }

  login = async (req, res) => {
    const response = await this.#authService.login(req.body);
    res.send({ login: response });
  };
}
