export class Services
{
  // tslint:disable-next-line:variable-name
  service_id: number;
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  civilStatus: string;
  job: string;
  typeService: string;
  otherService: string;
  emptyTime: string;
  stateService: string;


  constructor(firstName: string, lastName: string, phone: number, email: string, civilStatus: string, job: string, typeService: string, otherService: string, emptyTime: string, stateService: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.civilStatus = civilStatus;
    this.job = job;
    this.typeService = typeService;
    this.otherService = otherService;
    this.emptyTime = emptyTime;
    this.stateService = stateService;
  }
}


