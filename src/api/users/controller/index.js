import UsersService from '../services';

export default class AuthController {
  #usersService;

  /**
   * @param {UsersService} usersService
   */
  constructor(usersService) {
    this.#usersService = usersService;
  }

  login = async (req, res) => {
    const response = await this.#usersService.login(req.body);
    res.send(response);
  };
}
