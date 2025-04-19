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
import { provideNativeDateAdapter } from '@angular/material/core';
import { Firestore, collection, updateDoc, doc } from '@angular/fire/firestore';

@Component({
	selector: 'app-edit-name',
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
	providers: [provideNativeDateAdapter()],
	templateUrl: './edit-name.component.html',
	styleUrl: './edit-name.component.scss',
})
export class EditNameComponent {
	user: User = new User();
	userId: string = '';
	loading = false;
	birthDate?: Date;

	public dialogRef = inject(MatDialogRef);
	private firestore = inject(Firestore);

	ngOnInit(): void {
		this.birthDate = new Date(this.user.birthDate);
	}

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
