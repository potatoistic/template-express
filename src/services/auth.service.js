export default class AuthService {
  #repository = 'AuthRepository';

  login = async (dto) => ({
    token: 'super-secret-token',
    user: dto,
    repo: this.#repository,
  });
}
