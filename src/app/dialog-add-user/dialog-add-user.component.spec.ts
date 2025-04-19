import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddUserComponent } from './dialog-add-user.component';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogAddUserComponent', () => {
	let component: DialogAddUserComponent;
	let fixture: ComponentFixture<DialogAddUserComponent>;

	class MockFirestore {
		// Hier kannst du beliebige Methoden mocken, die du verwendest
	}
	class MockMatDialogRef {
		close() {} // Mock die close-Methode
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DialogAddUserComponent, BrowserAnimationsModule],
			providers: [
				{ provide: MatDialogRef, useClass: MockMatDialogRef },
				{ provide: Firestore, useClass: MockFirestore }, // Mock Firestore
			],
		}).compileComponents();

		fixture = TestBed.createComponent(DialogAddUserComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
