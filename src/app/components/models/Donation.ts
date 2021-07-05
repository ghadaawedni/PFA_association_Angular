export class Donation
{
  // tslint:disable-next-line:variable-name
  don_id: number;
  firstName: string;
  LastName: string;
  phone: number;
  email: string;
  address: string;
  donation: string;
  SugDonation: string;


  constructor(firstName: string, LastName: string, phone: number, email: string, address: string, donation: string, SugDonation: string) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.donation = donation;
    this.SugDonation = SugDonation;
  }
}


