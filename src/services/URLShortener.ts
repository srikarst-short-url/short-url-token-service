import { scrypt } from "crypto";
import { promisify } from "util";

var asyncClientGet = promisify(scrypt);

export class URLShortener {
  static async convertToShort(longURL: string) {
    return "0";
  }
}
