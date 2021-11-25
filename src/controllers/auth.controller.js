export default class AuthController {
  #authService;

  message = 'Hello World';

  constructor(authService) {
    this.#authService = authService;
  }

  login = async (req, res) => {
    const response = await this.#authService.login(req.body);
    res.send({ login: response });
  };
}