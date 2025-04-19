import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent', () => {
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

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppComponent, BrowserAnimationsModule],
			providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	// it(`should have the 'simple-crm' title`, () => {
	//   const fixture = TestBed.createComponent(AppComponent);
	//   const app = fixture.componentInstance;
	//   expect(app.title).toEqual('simple-crm');
	// });

	// it('should render title', () => {
	//   const fixture = TestBed.createComponent(AppComponent);
	//   fixture.detectChanges();
	//   const compiled = fixture.nativeElement as HTMLElement;
	//   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, simple-crm');
	// });
});
