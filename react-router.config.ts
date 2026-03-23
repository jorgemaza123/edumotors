import type { Config } from '@react-router/dev/config';
import { vercelPreset } from '@vercel/remix/vite';

export default {
	appDirectory: './src/app',
	ssr: false,
	prerender: false,
	presets: [vercelPreset()],
} satisfies Config;
