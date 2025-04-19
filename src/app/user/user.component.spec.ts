import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from '../firebase.config';

describe('UserComponent', () => {
	let component: UserComponent;
	let fixture: ComponentFixture<UserComponent>;

	beforeEach(async () => {
		const firebaseApp = initializeApp(firebaseConfig);

		await TestBed.configureTestingModule({
			imports: [UserComponent], // Die zu testende Komponente importieren
			providers: [provideFirebaseApp(() => firebaseApp), provideFirestore(() => getFirestore(firebaseApp))],
		}).compileComponents();

		fixture = TestBed.createComponent(UserComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
