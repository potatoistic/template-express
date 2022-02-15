import get from "lodash/get";
import has from "lodash/has";

export class env {
  static get node_env () {
    const environment = (process.env.NODE_ENV || "development").toLowerCase();

    switch (environment) {
      case "prod":
      case "production":
        return "production";

      case "unstable":
        return "unstable";

      case "test":
      case "testing":
        return "test";

      case "dev":
      case "develop":
      case "development":
      default:
        return "development";
    }
  }

  /**
   * @param {string} key 
   * @param {string} defaultValue 
   */
  static string (key, defaultValue = "") {
    return has(process.env, key) ? String(get(process.env, key)) : defaultValue;
  }

  /**
   * @param {number} key 
   * @param {number} defaultValue 
   */
  static number (key, defaultValue = NaN) {
    return has(process.env, key) ? Number(get(process.env, key)) : defaultValue;
  }

  /**
   * @param {boolean} key 
   * @param {boolean} defaultValue 
   */
  static boolean (key, defaultValue = false) {
    return has(process.env, key) || defaultValue;
  }
}