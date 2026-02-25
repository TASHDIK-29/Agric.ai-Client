import { ArrowRight, ScanSearch, ShieldAlert, TrendingUpDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

const KnowledgeHub = () => {
    const t = useTranslations("KnowledgeHub");

    const cards = t.raw('cards');

    return (
        <div className='p-20'>
            <div className='text-center space-y-4 px-40 mb-12'>
                <h1 className='text-[48px] text-[#1f293e] font-bold'>
                    {t("heading")}
                </h1>

                <p className='text-[20px] text-[#1f293e] font-normal leading-[110%]'>
                    {t("pera")}
                </p>
            </div>

            <div className='grid grid-cols-3 gap-4 px-12'>

                <div className='p-6 rounded-2xl shadow-xl space-y-4'>
                    <button className='p-3 bg-green-200 rounded-lg'>
                        <ScanSearch className='text-green-700 w-8 h-8' />
                    </button>

                    <h3 className='text-[20px] text-[#1f293e] font-bold leading-[110%]'>
                        {cards[0].title}
                    </h3>

                    <p className='text-[16px] text-[#1f293e] font-medium leading-[130%]'>
                        {cards[0].description}
                    </p>

                    <button className='text-[16px] text-green-400 font-medium flex items-center gap-2 cursor-pointer'>
                        {cards[0].buttonTxt}

                        <ArrowRight />
                    </button>
                </div>

                <div className='p-6 rounded-2xl shadow-xl space-y-4'>
                    <button className='p-3 bg-green-200 rounded-lg'>
                        <TrendingUpDown className='text-green-700 w-8 h-8' />
                    </button>

                    <h3 className='text-[20px] text-[#1f293e] font-bold leading-[110%]'>
                        {cards[1].title}
                    </h3>

                    <p className='text-[16px] text-[#1f293e] font-medium leading-[130%]'>
                        {cards[1].description}
                    </p>

                    <button className='text-[16px] text-green-400 font-medium flex items-center gap-2 cursor-pointer'>
                        {cards[1].buttonTxt}

                        <ArrowRight />
                    </button>
                </div>

                <div className='p-6 rounded-2xl shadow-xl space-y-4'>
                    <button className='p-3 bg-green-200 rounded-lg'>
                        <ShieldAlert className='text-green-700 w-8 h-8' />
                    </button>

                    <h3 className='text-[20px] text-[#1f293e] font-bold leading-[110%]'>
                        {cards[2].title}
                    </h3>

                    <p className='text-[16px] text-[#1f293e] font-medium leading-[130%]'>
                        {cards[2].description}
                    </p>

                    <button className='text-[16px] text-green-400 font-medium flex items-center gap-2 cursor-pointer'>
                        {cards[2].buttonTxt}

                        <ArrowRight />
                    </button>
                </div>

            </div>

            <div className='mt-12 flex justify-center'>
                <button className='text-[20px] bg-green-400 px-4 py-3 rounded-xl text-white font-medium flex items-center gap-2 cursor-pointer'>
                    {t("button")}

                    <ArrowRight />
                </button>
            </div>
        </div>
    );
};

export default KnowledgeHub;