import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { Firestore, collection, updateDoc, doc } from '@angular/fire/firestore';

@Component({
	selector: 'app-edit-address',
	standalone: true,
	imports: [
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		MatButtonModule,
		MatDialogTitle,
		MatDialogContent,
		MatDialogActions,
		MatDialogClose,
		MatDatepickerModule,
		MatProgressBarModule,
		CommonModule,
	],
	templateUrl: './edit-address.component.html',
	styleUrl: './edit-address.component.scss',
})
export class EditAddressComponent {
	user: User = new User();
	userId: string = '';
	loading = false;

	public dialogRef = inject(MatDialogRef);
	private firestore = inject(Firestore);

	saveUser() {
		this.loading = true;
		const userDocRef = doc(this.firestore, `users/${this.userId}`);

		updateDoc(userDocRef, this.user.toJSON())
			.then(() => this.handleSuccess())
			.catch((error) => this.handleError(error));
	}

	handleSuccess() {
		this.loading = false;
		this.dialogRef.close();
	}

	handleError(error: unknown) {
		this.loading = false;
		console.error('Error updating user: ', error);
	}
}
