import { useTranslations } from 'next-intl';
import React from 'react';

const Banner = () => {
    const t = useTranslations("Banner");

    return (
        <div className="relative min-h-146 md:min-h-screen w-full ">
            {/* Background Video */}
            <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/banner-video.mp4" type="video/mp4" />
            </video>

            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 pt-12 pl-20 w-1/2 space-y-8">
                {/* <h1 className='text-[64px] text-slate-200 font-bold leading-[110%]'>
                    Professional Crop <br /> Disease Detection <br /> with 98% Accuracy
                </h1> */}
                <h1 className='text-[64px] text-slate-200 font-bold leading-[110%]'>
                    {t("heading")}
                </h1>

                <p className='text-[20px] text-slate-200 font-medium leading-[160%]'>
                    {t("pera")}
                </p>

                <button className='px-4 py-2 bg-green-500 rounded-md text-[20px] font-semibold text-white cursor-pointer'>
                   {t("buttonTxt")}
                </button>

                <div className='flex items-center gap-8'>
                    <div className='flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30 shadow-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-white"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>

                        <p className='text-[16px] text-slate-200 font-medium leading-[160%]'>
                            {t.raw('badge')[0]}
                        </p>
                    </div>

                    <div className='flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30 shadow-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-5 h-5 text-white"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>

                        <p className='text-[16px] text-slate-200 font-medium leading-[160%]'>
                             {t.raw('badge')[1]}
                        </p>
                    </div>

                    
                </div>
            </div>
        </div>

    );
};

export default Banner;