import { FederalAddress, NonFederalAddress } from './types';

export interface IAddressValidator {
  validate(address: Address): boolean;
}

export class FederalAddressValidator implements IAddressValidator {
  validate(address: FederalAddress): boolean {
    // Federal countries require state
    return address.state !== '';
  }
}

export class NonFederalAddressValidator implements IAddressValidator {
  validate(address: NonFederalAddress): boolean {
    // Non-federal countries require province and region
    return address.province !== '' && address.region !== '';
  }
}
