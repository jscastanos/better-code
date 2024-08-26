import EmailService from './EmailService';
import UserRepository from './UserRepository';
import UserValidator from './UserValidator';

export default class UserManagementService {
  addUser(username: string, email: string) {
    if (!UserValidator.validate(username, email)) {
      throw new Error('Invalid user data');
    }
    UserRepository.addUser(username);
    EmailService.sendWelcomeEmail(email);
  }

  deleteUser(username: string) {
    UserRepository.deleteUser(username);
  }

  getUser(username: string) {
    return UserRepository.getUser(username);
  }
}
