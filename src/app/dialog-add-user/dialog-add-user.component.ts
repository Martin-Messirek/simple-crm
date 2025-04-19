import { ChangeDetectionStrategy, Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
	MAT_DIALOG_DATA,
	MatDialog,
	MatDialogActions,
	MatDialogClose,
	MatDialogContent,
	MatDialogRef,
	MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-dialog-add-user',
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
	templateUrl: './dialog-add-user.component.html',
	styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
	private dialog = inject(MatDialog);
	private firestore = inject(Firestore);
	public dialogRef = inject(MatDialogRef);

	user: User = new User();
	birthDate: Date = new Date('');
	loading = false;

	saveUser() {
		this.loading = true;
		this.user.birthDate = this.birthDate.getTime() | 0;
		const userCollection = collection(this.firestore, 'users'); //users: frei gewählt

		addDoc(userCollection, this.user.toJSON())
			.then(() => this.handleSuccess())
			.catch((error) => this.handleError(error));
	}

	handleSuccess() {
		this.loading = false;
		this.dialogRef.close();
	}

	handleError(error: unknown) {
		this.loading = false;
		console.error('Error adding user: ', error);
	}
}
