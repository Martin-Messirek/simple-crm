import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './e2e',
	use: {
		baseURL: 'http://localhost:4200',
		headless: true,
		viewport: { width: 1280, height: 720 },
		ignoreHTTPSErrors: true,
	},
	webServer: {
		command: 'npm start',
		port: 4200,
		timeout: 120 * 1000,
		reuseExistingServer: !process.env['CI'],
	},
});
