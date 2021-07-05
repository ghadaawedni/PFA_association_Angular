export class Member
{
  // tslint:disable-next-line:variable-name
    member_id: number;
    firstName: string;
    lastName: string;
    post: string;
     url: string ;

  constructor(firstName: string, lastName: string, post: string, url: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.post = post;
    this.url = url;
  }
}
