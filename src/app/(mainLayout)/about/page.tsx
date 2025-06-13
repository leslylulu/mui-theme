import { useTranslations } from 'next-intl';

export default function AboutUsPage() {
	const t = useTranslations('About');
	return (
		<main className="text-slate-900 dark:text-slate-100">
			{t("welcome")}
		</main>
	);
}
