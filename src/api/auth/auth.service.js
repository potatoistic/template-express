import AuthRepository from './auth.repository';

export default class AuthService {
  #repository;

  /**
   * @param {AuthRepository} authRepository
   */
  constructor(authRepository) {
    this.#repository = authRepository;
  }

  login = async (dto) => ({
    token: 'super-secret-token',
    user: dto,
    repo: this.#repository,
  });
}
