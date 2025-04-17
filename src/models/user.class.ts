export class User {
	firstName: string;
	lastName: string;
	id?: string;
	email: string;
	birthDate: number;
	street: string;
	postCode: number;
	city: string;

	constructor(obj?: any) {
		this.firstName = obj?.firstName || '';
		this.lastName = obj?.lastName || '';
		this.id = obj?.id || '';
		this.email = obj?.email || '';
		this.birthDate = obj?.birthDate || '';
		this.street = obj?.street || '';
		this.postCode = obj?.postCode || '';
		this.city = obj?.city || '';
	}

	public toJSON() {
		return {
			firstName: this.firstName,
			lastName: this.lastName,
			id: this.id,
			email: this.email,
			birthDate: this.birthDate,
			street: this.street,
			postCode: this.postCode,
			city: this.city,
		};
	}
}
