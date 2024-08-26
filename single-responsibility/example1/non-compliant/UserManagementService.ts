export default class UserManagementService {
  addUser(username: string, email: string) {
    if (!this.validateUser(username, email)) {
      throw new Error('Invalid user data');
    }
    console.log(`Adding user ${username}`);
    this.sendWelcomeEmail(email);
  }

  deleteUser(username: string) {
    console.log(`Deleting user ${username}`);
  }

  getUser(username: string) {
    console.log(`Getting user ${username}`);
  }

  private validateUser(username: string, email: string): boolean {
    return username !== '' && email.includes('@');
  }

  private sendWelcomeEmail(email: string) {
    console.log(`Sending welcome email to ${email}`);
  }
}
