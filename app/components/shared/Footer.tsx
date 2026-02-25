"use client";
import { Cannabis, Facebook, LocateIcon, Mail, Map, MapPin, Phone, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
    const t = useTranslations("Footer");
    const products = t.raw("products");
    const links = t.raw("links");
    const contact = t.raw("contact");
    const tags = t.raw("tags");

    return (
        <footer className="bg-linear-to-r from-gray-900 to-black text-white py-12 px-4 font-inter border-t border-gray-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <div className="p-2 rounded-xl bg-green-600 text-white">
                            <Cannabis />
                        </div>
                        <span className="font-bold text-[24px] text-white">
                            Agric.ai
                        </span>
                    </div>
                    <p className=" text-gray-300 text-sm leading-relaxed">
                        {t("pera")}
                    </p>

                    <div className="flex space-x-5 pt-2">
                        <a
                            href="#"
                            className="text-gray-500 hover:text-green-600 transition-transform transform hover:scale-110"
                        >
                            <Facebook />
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-green-600 transition-transform transform hover:scale-110"
                        >
                            <Youtube />
                        </a>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-100">
                        {tags[0]}
                    </h3>
                    <ul className="space-y-3">
                        {links.map(l => (
                            <li key={l}>
                                <a
                                    href="#"
                                    className=" text-gray-300 hover:text-green-600 transition-colors duration-300"
                                >
                                    {l}
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-100">
                        {tags[1]}
                    </h3>
                    <ul className="space-y-3">
                        {products.map(l => (
                            <li key={l}>
                                <a
                                    href="#"
                                    className=" text-gray-300 hover:text-green-600 transition-colors duration-300"
                                >
                                    {l}
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-100">
                        {tags[2]}
                    </h3>
                    <div className="flex items-center gap-3">
                        <Mail className="text-green-300"/>
                        <p className=" text-gray-300 text-[20px]">
                            {contact[0]}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="text-green-300"/>
                        <p className=" text-gray-300 text-[20px]">
                            {contact[1]}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="text-green-300"/>
                        <p className=" text-gray-300 text-[20px]">
                            {contact[2]}
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-400 text-sm pt-10 mt-10 border-t border-gray-700">
                <p>
                    &copy; {new Date().getFullYear()} Agric.ai. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
