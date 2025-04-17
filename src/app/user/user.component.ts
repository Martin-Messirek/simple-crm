import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { User } from '../../models/user.class';

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [
		MatButtonModule,
		MatIconModule,
		MatTooltipModule,
		MatFormFieldModule,
		MatSelectModule,
		FormsModule,
		ReactiveFormsModule,
		MatDialogModule,
		MatCardModule,
		CommonModule,
		RouterModule,
	],
	templateUrl: './user.component.html',
	styleUrl: './user.component.scss',
})
export class UserComponent {
	positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
	position = new FormControl(this.positionOptions[1]);

	allUsers: User[] = [];
	user: User = new User();

	private dialog = inject(MatDialog);
	private firestore = inject(Firestore);

	ngOnInit(): void {
		const userCollection = collection(this.firestore, 'users');

		collectionData(userCollection, { idField: 'id' }).subscribe((changes: any[]) => {
			console.log('Received changes from DB:', changes);
			// this.allUsers = changes;
			this.allUsers = changes.map((userData) => new User(userData));
		});
	}

	openDialog() {
		this.dialog.open(DialogAddUserComponent);
	}
}
