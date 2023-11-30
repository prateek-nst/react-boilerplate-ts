import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ command, mode }) => {
	// location of env files
	const ENV_DIR = './env';

	const env = loadEnv(mode, ENV_DIR, 'VITE_');
	const PORT = env.VITE_PORT || 3000;

	return {
		server: {
			port: +PORT,
		},
		plugins: [react()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		envDir: ENV_DIR,
	};
});
