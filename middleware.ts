import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

export default createMiddleware({
	locales: ['en', 'zh', 'fr'],
	defaultLocale: 'en',
	localePrefix: 'never', 
	localeDetection: true,
});

export const config = {
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};