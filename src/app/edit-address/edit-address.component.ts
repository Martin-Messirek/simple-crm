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
	loading = false;

	public dialogRef = inject(MatDialogRef);

	saveUser() {}
}
