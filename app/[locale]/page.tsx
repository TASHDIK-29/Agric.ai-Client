'use client';

import { useTranslations } from 'next-intl';
import Banner from '../components/home/Banner';
import TheMystery from '../components/home/TheMystery';
import KnowledgeHub from '../components/home/KnowledgeHub';

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <div>
     <Banner />
     <TheMystery />
     <KnowledgeHub />

    </div>
  );
}