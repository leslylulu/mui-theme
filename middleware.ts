import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

export default createMiddleware({
	locales: ['en', 'zh', 'fr'],
	defaultLocale: 'en',
	localePrefix: 'never', 

	localeDetection: (request: NextRequest) => {
		const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
		if (cookieLocale && ['en', 'zh', 'fr'].includes(cookieLocale)) {
			return cookieLocale;
		}

		return request.headers.get('Accept-Language')?.split(',')[0].split('-')[0] || 'en';
	}
});

export const config = {
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};