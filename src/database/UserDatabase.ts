import { UserDB } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "/users";

  public findUsers = async (q: string | undefined): Promise<UserDB[]> => {
    if (q) {
      const userDB: UserDB[] = await BaseDatabase.connection(
        UserDatabase.TABLE_USERS
      ).where("name", "LIKE", `${q}`);
      return userDB;
    } else {
      const userDB: UserDB[] = await BaseDatabase.connection(
        UserDatabase.TABLE_USERS
      );
      return userDB;
    }
  };
}
