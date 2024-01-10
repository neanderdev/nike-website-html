import { navLinks } from "../constants";

import { hamburger } from "../assets/icons";
import { headerLogo } from '../assets/images';

export function Nav() {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img
                        src={headerLogo}
                        alt='Logo'
                        width={130}
                        height={29}
                    />
                </a>

                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden max-lg:block">
                    <img
                        src={hamburger}
                        alt="Ícone de Hamburguer"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    );
}
