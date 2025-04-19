import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNameComponent } from './edit-name.component';
import { MatDialogRef } from '@angular/material/dialog';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from '../firebase.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditNameComponent', () => {
	let component: EditNameComponent;
	let fixture: ComponentFixture<EditNameComponent>;

	beforeEach(async () => {
		const firebaseApp = initializeApp(firebaseConfig);

		await TestBed.configureTestingModule({
			imports: [EditNameComponent, BrowserAnimationsModule],
			providers: [
				{ provide: MatDialogRef, useValue: {} }, // Mock MatDialogRef
				// { provide: MatDialogRef, useClass: MockMatDialogRef }, // Mock MatDialogRef
				provideFirebaseApp(() => firebaseApp),
				provideFirestore(() => getFirestore(firebaseApp)),
			],
		}).compileComponents();

		fixture = TestBed.createComponent(EditNameComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { EditNameComponent } from './edit-name.component';
// import { MatDialogRef } from '@angular/material/dialog';
// import { Firestore } from '@angular/fire/firestore';

// describe('EditNameComponent', () => {
// 	let component: EditNameComponent;
// 	let fixture: ComponentFixture<EditNameComponent>;

// 	class MockFirestore {
// 		// Hier kannst du beliebige Methoden mocken, die du verwendest
// 	}
// 	class MockMatDialogRef {
// 		close() {} // Mock die close-Methode
// 	}

// 	beforeEach(async () => {
// 		await TestBed.configureTestingModule({
// 			imports: [EditNameComponent],
// 			providers: [
// 				{ provide: MatDialogRef, useValue: {} }, // Mock MatDialogRef
// 				// { provide: MatDialogRef, useClass: MockMatDialogRef }, // Mock MatDialogRef
// 				{ provide: Firestore, useClass: MockFirestore },
// 			],
// 		}).compileComponents();

// 		fixture = TestBed.createComponent(EditNameComponent);
// 		component = fixture.componentInstance;
// 		fixture.detectChanges();
// 	});

// 	it('should create', () => {
// 		expect(component).toBeTruthy();
// 	});
// });
