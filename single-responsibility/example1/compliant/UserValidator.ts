export default class UserValidator {
  static validate(username: string, email: string): boolean {
    return username !== '' && email.includes('@');
  }
}
