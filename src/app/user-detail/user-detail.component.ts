import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { User } from '../../models/user.class';

import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { EditNameComponent } from '../edit-name/edit-name.component';
import { EditAddressComponent } from '../edit-address/edit-address.component';

@Component({
	selector: 'app-user-detail',
	standalone: true,
	imports: [MatCard, MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, MatDialogModule],
	templateUrl: './user-detail.component.html',
	styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
	user: User = new User();
	userId: string = '';
	private route = inject(ActivatedRoute);
	private firestore = inject(Firestore);
	private dialog = inject(MatDialog);

	ngOnInit() {
		this.getUserId();
	}

	getUserId() {
		const userId = this.route.snapshot.paramMap.get('id') || '';
		this.userId = userId;
		this.getUser();
	}

	getUser() {
		if (this.userId) {
			const userDoc = doc(this.firestore, `users/${this.userId}`);
			docData(userDoc, { idField: 'id' }).subscribe((userData: any) => {
				this.user = new User(userData);
			});
		}
	}

	editName() {
		const dialog = this.dialog.open(EditNameComponent);
		dialog.componentInstance.user = new User(this.user.toJSON());
		dialog.componentInstance.userId = this.userId;
	}

	editAddress() {
		const dialog = this.dialog.open(EditAddressComponent);
		dialog.componentInstance.user = new User(this.user.toJSON());
		dialog.componentInstance.userId = this.userId;
	}
}
