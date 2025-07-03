import {Link} from "react-router-dom";

import { User, Search, ShoppingCart, Menu, Phone, Mail, Instagram, Youtube, Facebook, Twitter, Heart } from 'lucide-react';
import hero from "../assets/hero.png"


export default function Header() {
    return (
        <header className="header">
            <section className="header-navbar">
                <div className="mobile mt-[2.388rem] block md:hidden">
                    <div className="upper flex justify-between items-center px-[2.375rem]">
                        <div className="logo">
                            <span className="text-2xl font-bold leading-8 text-[#252B42]">Bandage</span>
                        </div>
                        <div className="tools flex gap-6">
                            <User />
                            <Search />
                            <ShoppingCart />
                            <Menu />
                        </div>
                    </div>
                    <div className="header-navbar">
                        <nav className="navbar flex flex-col items-center gap-[1.875rem] text-3xl font-normal leading-[2.813rem] text-[#737373] my-[7.875rem]">
                            <a href="/">Home</a>
                            <a href="/">Product</a>
                            <a href="/">Pricing</a>
                            <a href="/">Contact</a>
                        </nav>
                    </div>
                </div>
                <div className="desktop hidden md:block">
                    <div className="header-topbar bg-[#252B42] text-white px-6 flex justify-between items-center py-2.5 text-sm font-bold leading-6">
                        <div className="contact flex gap-8 p-2.5">
                            <div className="phone flex gap-[0.313rem]">
                                <Phone />
                                <span className="text">(225) 555-0118</span>
                            </div>
                            <div className="email flex gap-[0.313rem]">
                                <Mail />
                                <span className="text">michelle.rivera@example.com</span>
                            </div>
                        </div>
                        <div className="message p-2.5">
                            <span className="text">Follow Us and get a chance to win 80% off</span>
                        </div>
                        <div className="socials flex gap-2.5 p-2.5">
                            <span className="text">Follow Us :</span>
                            <Instagram />
                            <Youtube />
                            <Facebook />
                            <Twitter />
                        </div>
                    </div>
                    <div className="dektop-navbar flex items-center px-[2.375rem] mt-[0.813rem]">
                        <div className="logo flex-none">
                            <span className="text text-2xl font-bold text-[#252B42] leading-8">Bandage</span>
                        </div>
                        <div className="header-navbar flex grow justify-between items-center ml-30">
                            <nav className="navbar flex gap-[0.938rem] text-sm font-bold leading-6 text-[#737373]">
                                <a href="/">Home</a>
                                <a href="/">Shop</a>
                                <a href="/">About</a>
                                <a href="/">Blog</a>
                                <a href="/">Contact</a>
                                <a href="/">Pages</a>
                            </nav>
                            <div className="tools flex text-[#23A6F0] text-sm font-bold leading-6 gap-3.5">
                                <div className="login flex gap-[0.313rem] mr-3">
                                    <User />
                                    <span className="legin-text">Login / Register</span>
                                </div>
                                <Search />
                                <ShoppingCart />
                                <Heart />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hero bg-linear-to-r from-[#96E9FB] to-[#ABECD6] pt-20 rounded-[1.25rem] mx-5 md:mx-[3.688rem] flex flex-col md:flex-row md:mt-5">
                <div className="hero-title flex flex-col items-center gap-8 md:gap-[1.875rem] md:ml-[12.875rem] md:justify-center md:items-start">
                    <span className="text-[#2A7CC7] text-base font-bold leading-6">SUMMER 2020</span>
                    <div className="text-[#252B42] text-[2.5rem] md:text-[3.625rem] font-bold leading-[3.125rem] md:leading-20 flex flex-col items-center md:flex-row md:gap-4">
                        <span>NEW</span>
                        <span>COLLECTION</span>
                    </div>
                    <span className="text-[#737373] text-xl leading-[1.875rem] font-normal text-center w-2xs h-[5.625rem] block md:hidden">We know how large objects<br/> will act, but things on a<br/> small scale.</span>
                    <span className="text-[#737373] text-xl leading-[1.875rem] font-normal hidden md:block">We know how large objects will act,<br/> but things on a small scale.</span>
                    <button className="w-[13.813rem] h-[3.875rem] bg-[#23A6F0] text-white text-2xl font-bold leading-8 rounded-[0.313rem] hover:cursor-pointer">SHOP NOW</button>
                </div>
                <div className="hero-img">
                    <img className="" src={hero} />
                </div>
            </section>
        </header>
    );
}