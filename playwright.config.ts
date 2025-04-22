// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './e2e', // Verzeichnis für E2E-Tests
	use: {
		baseURL: 'http://localhost:4200', // Deine lokale App-Adresse
		headless: true,
		viewport: { width: 1280, height: 720 },
		ignoreHTTPSErrors: true,
	},
	webServer: {
		command: 'npm start', // Startet den Angular-Server
		port: 4200,
		timeout: 120 * 1000, // Timeout von 2 Minuten für den Start
		reuseExistingServer: !process.env['CI'], // Verhindert mehrfaches Starten des Servers
	},
});
