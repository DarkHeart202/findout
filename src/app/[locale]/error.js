'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Container from '@/_components/Container';

export default function LocaleError({ error, reset }) {
  const router = useRouter();
  const t = useTranslations('Error');

  useEffect(() => {
    console.error('Locale Error:', error);
  }, [error]);

  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 19c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {t('title')}
            </h1>
            <p className="text-gray-600 mb-8">
              {t('description')}
            </p>
          </div>

          {/* Error Details (development only) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-8 p-4 bg-gray-100 rounded-lg text-left">
              <h3 className="font-bold text-sm text-gray-700 mb-2">
                {t('errorDetails')}:
              </h3>
              <p className="text-xs text-gray-600 font-mono break-all">
                {error?.message || 'Unknown error'}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={reset}
              className="w-full bg-main-blue hover:bg-blue-hover text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
            >
              {t('tryAgain')}
            </button>

            <button
              onClick={() => router.back()}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
            >
              {t('goBack')}
            </button>

            <button
              onClick={() => router.push('/')}
              className="w-full border-2 border-main-blue text-main-blue hover:bg-main-blue hover:text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
            >
              {t('goHome')}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}