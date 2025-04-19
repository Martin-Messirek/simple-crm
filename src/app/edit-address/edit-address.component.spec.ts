import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddressComponent } from './edit-address.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('EditAddressComponent', () => {
	let component: EditAddressComponent;
	let fixture: ComponentFixture<EditAddressComponent>;

	class MockMatDialogRef {
		close() {} // Mock die close-Methode
	}
	class MockFirestore {
		// Hier kannst du beliebige Methoden mocken, die du verwendest
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [EditAddressComponent, BrowserAnimationsModule],
			providers: [
				{ provide: MatDialogRef, useClass: MockMatDialogRef }, // Mock MatDialogRef
				{ provide: Firestore, useClass: MockFirestore },
			],
		}).compileComponents();

		fixture = TestBed.createComponent(EditAddressComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
