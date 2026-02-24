'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const locale = useLocale();


  const changeLanguage = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
  };

  return (
    <div className='space-x-4'>
      <button
        onClick={() => changeLanguage('en')}
        className={`${locale === "en" ? "text-green-500" : "text-slate-600"} cursor-pointer`}
      >
        English
      </button>

      <button
        onClick={() => changeLanguage('bn')}
        className={`${locale === "bn" ? "text-green-500" : "text-slate-600"} cursor-pointer`}
      >
        বাংলা
      </button>
    </div>
  );
}