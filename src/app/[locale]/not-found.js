import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Container from '@/_components/Container';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-6xl font-bold text-blue-100 mb-4">404</div>
            <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47.881-6.08 2.33m0 0L5 17m.924-2.297A7.962 7.962 0 0112 13c2.34 0 4.47.881 6.08 2.33L19 15"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {t('title', { defaultValue: 'الصفحة غير موجودة' })}
            </h1>
            <p className="text-gray-600 mb-8">
              {t('description', {
                defaultValue: 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
              })}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              href="/"
              className="block w-full bg-main-blue hover:bg-blue-hover text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
            >
              {t('goHome', { defaultValue: 'العودة للرئيسية' })}
            </Link>

            <Link
              href="/places"
              className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
            >
              {t('explorePlaces', { defaultValue: 'استكشف الأماكن' })}
            </Link>

            <Link
              href="/events"
              className="block w-full border-2 border-main-blue text-main-blue hover:bg-main-blue hover:text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
            >
              {t('browseEvents', { defaultValue: 'تصفح الفعاليات' })}
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}