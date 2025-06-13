import { getRequestConfig } from 'next-intl/server';
import fs from 'fs/promises';
import path from 'path';
import { cookies } from 'next/headers';

export default getRequestConfig(async ({ locale }) => {
	const cookieStore = await cookies();
	const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;

	const safeLocale = cookieLocale || locale || 'en';

	try {
		const filePath = path.join(process.cwd(), 'messages', `${safeLocale}.json`);
		const fileContents = await fs.readFile(filePath, 'utf8');
		const messages = JSON.parse(fileContents);

		return {
			messages,
			locale: safeLocale
		};
	} catch (error) {
		console.error(`Failed to load messages for locale: ${safeLocale}`, error);
		try {
			const defaultFilePath = path.join(process.cwd(), 'messages', `en.json`);
			const defaultFileContents = await fs.readFile(defaultFilePath, 'utf8');
			const defaultMessages = JSON.parse(defaultFileContents);

			return {
				messages: defaultMessages,
				locale: safeLocale
			};
		} catch (defaultError) {
			console.error('Failed to load default messages:', defaultError);
			return {
				messages: {},
				locale: safeLocale
			};
		}
	}
});