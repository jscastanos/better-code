import {
  FederalAddressValidator,
  IAddressValidator,
  NonFederalAddressValidator,
} from './AddressValidator';

interface IUserValidator {
  validate(username: string, email: string, address: Address): boolean;
}

export default class UserValidator implements IUserValidator {
  private addressValidator: IAddressValidator;

  constructor(addressValidator: IAddressValidator) {
    this.addressValidator = addressValidator;
  }

  validate(username: string, email: string, address: Address): boolean {
    return (
      username !== '' &&
      email.includes('@') &&
      this.addressValidator.validate(address)
    );
  }
}

// Example:
const userValidator1 = new UserValidator(new FederalAddressValidator());

userValidator1.validate('john.doe', 'john.doe@email.com', {
  street: '123 Main St',
  city: 'Springfield',
  zip: '12345',
  state: 'IL',
});

//or

const userValidator2 = new UserValidator(new NonFederalAddressValidator());

userValidator2.validate('john.doe', 'john.doe@email.com', {
  street: 'Business Park',
  city: 'Davao City',
  zip: '8000',
  province: 'Davao del Sur',
  region: '11',
});
