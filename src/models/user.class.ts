export class User {
  firstName: string;
  lastName: string;
  birthDate: number;
  street: string;
  postCode: number;
  city: string;

  constructor(obj?: any) {
    this.firstName = obj?.firstName || '';
    this.lastName = obj?.lastName || '';
    this.birthDate = obj?.birthDate || '';
    this.street = obj?.street || '';
    this.postCode = obj?.postCode || '';
    this.city = obj?.city || '';
  }
}
