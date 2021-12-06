import Users from '../model';

export default class AuthService {
  #model;

  #token = 'super-secret';

  /**
   * @param {Users} model
   */
  constructor(model) {
    this.#model = model;
  }

  login = async (dto) => ({
    token: this.#token,
    user: this.#model.toJSON(dto),
  });
}
