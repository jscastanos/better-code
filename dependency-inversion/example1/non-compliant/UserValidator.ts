interface Address {
  street: string;
  city: string;
  zip: string;
  province?: string;
  region?: string;
  state?: string;
}

class UserValidator {
  static validate(username: string, email: string, address: Address): boolean {
    if (address.province && address.province !== '') {
      return username !== '' && email.includes('@') && address.province !== '';
    }

    return username !== '' && address.state !== '' && email.includes('@');
  }
}
