import database from '@config/database';
import omit from 'lodash/omit';

/**
 * @model User
 * @description User model
 *
 * @property {string} id
 * @property {string} name
 * @property {string} username
 * @property {string} email
 * @property {string} created_at
 * @property {string} updated_at
 *
 */
export default class User {
  #db;

  #privateFields = ['password'];

  /**
   * @param {database} db
   */
  constructor(db) {
    this.#db = db;
  }

  toJSON = (user) => omit(user, this.#privateFields);
}
