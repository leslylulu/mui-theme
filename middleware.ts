import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const locales = ['en', 'zh', 'fr'];
const defaultLocale = 'en';

export default createMiddleware({
	locales,
	defaultLocale,
	localePrefix: 'never', 
	localeDetection: true,
});

export const config = {
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};