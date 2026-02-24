'use client';

import { useTranslations } from 'next-intl';
import Banner from '../components/home/Banner';

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <div>
     <Banner />

    </div>
  );
}