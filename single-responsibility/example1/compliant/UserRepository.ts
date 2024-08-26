export default class UserRepository {
  static addUser(username: string) {
    console.log(`Adding user ${username}`);
  }

  static deleteUser(username: string) {
    console.log(`Deleting user ${username}`);
  }

  static getUser(username: string) {
    console.log(`Getting user ${username}`);
  }
}
