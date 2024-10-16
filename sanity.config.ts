import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/lib/schemaTypes';

export default defineConfig({
	basePath: '/studio',
	name: 'default',
	title: 'Sveltekit Blog',

	projectId: 'tjedknvi',
	dataset: 'production',

	plugins: [structureTool(), visionTool()],

	schema: {
		types: schemaTypes
	}
});
