interface BaseAddress {
  street: string;
  city: string;
  zip: string;
}

export interface FederalAddress extends BaseAddress {
  state: string;
}

export interface NonFederalAddress extends BaseAddress {
  province: string;
  region: string;
}

export type Address = FederalAddress | NonFederalAddress;
