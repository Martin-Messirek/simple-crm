/// <reference types="jasmine" />

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from '../firebase.config';

describe('UserDetailComponent', () => {
	let component: UserDetailComponent;
	let fixture: ComponentFixture<UserDetailComponent>;

	const activatedRouteMock = {
		snapshot: {
			paramMap: {
				get: (key: string) => 'mocked-id', // Beispiel für ein gemocktes ID
			},
		},
		paramMap: of({
			get: (key: string) => 'mocked-id',
		}),
	};

	class MockFirestore {
		// Hier kannst du beliebige Methoden mocken, die du verwendest
	}

	beforeEach(async () => {
		const firebaseApp = initializeApp(firebaseConfig);

		await TestBed.configureTestingModule({
			imports: [UserDetailComponent],
			providers: [
				{ provide: ActivatedRoute, useValue: activatedRouteMock }, // Mock für ActivatedRoute
				provideFirebaseApp(() => firebaseApp),
				provideFirestore(() => getFirestore(firebaseApp)),
			],
		}).compileComponents();

		fixture = TestBed.createComponent(UserDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
