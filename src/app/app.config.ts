import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { importProvidersFrom } from '@angular/core';
import { firebaseConfig } from './firebase.config';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseProviders = [
	provideFirebaseApp(() => firebaseApp),
	provideFirestore(() => getFirestore()),
	// provideAuth(), // Optional, nur wenn du Auth benötigst
	// provideFirestore(), // Optional, nur wenn du Firestore benötigst
];

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes), provideAnimationsAsync(), ...firebaseProviders],
};
