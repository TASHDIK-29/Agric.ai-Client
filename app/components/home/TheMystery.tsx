import React from 'react';

import { ScanEye, Clock3, Sprout } from 'lucide-react';
import DiseaseCarousal from './DiseaseCarousal';
import { useTranslations } from 'next-intl';

const TheMystery = () => {
    const t = useTranslations("Mystery");

    const cards =  t.raw('cards');

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
                        <ScanEye className='text-green-700 w-8 h-8' />
                    </button>

                    <h3 className='text-[20px] text-[#1f293e] font-bold leading-[110%]'>
                         {cards[0].title}
                    </h3>

                    <p className='text-[16px] text-[#1f293e] font-medium leading-[130%]'>
                        {cards[0].description}
                    </p>
                </div>

                <div className='p-6 rounded-2xl shadow-xl space-y-4'>
                    <button className='p-3 bg-green-200 rounded-lg'>
                        <Clock3 className='text-green-700 w-8 h-8' />
                    </button>

                    <h3 className='text-[20px] text-[#1f293e] font-bold leading-[110%]'>
                        {cards[1].title}
                    </h3>

                    <p className='text-[16px] text-[#1f293e] font-medium leading-[130%]'>
                       {cards[1].description}
                    </p>
                </div>

                <div className='p-6 rounded-2xl shadow-xl space-y-4'>
                    <button className='p-3 bg-green-200 rounded-lg'>
                        <Sprout className='text-green-700 w-8 h-8' />
                    </button>

                    <h3 className='text-[20px] text-[#1f293e] font-bold leading-[110%]'>
                        {cards[2].title}
                    </h3>

                    <p className='text-[16px] text-[#1f293e] font-medium leading-[130%]'>
                       {cards[2].description}
                    </p>
                </div>

            </div>

            <div>
                <DiseaseCarousal />
            </div>
        </div>
    );
};

export default TheMystery;