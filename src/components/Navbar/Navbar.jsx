import { Link, NavLink } from "react-router-dom";
import logoImg from "../../images/logo/logo.png";
import { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { navLinks } from "data/navLinks";
import s from './Navbar.module.css';


const Navbar = () => {

    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    const [goUpArrow, setGoUpArrow] = useState(false);

    useEffect(() => {
      
        const onPageScroll = () => {
        
            if (window.scrollY > 600) {
                setGoUpArrow(true);
                return;
            }
            setGoUpArrow(false);
        };
        
        window.addEventListener("scroll", onPageScroll);

        return () => {
            window.removeEventListener("scroll", onPageScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsOpenMobileMenu(!isOpenMobileMenu);
    };

    return (
        <>
            <nav>
                <div className={!isOpenMobileMenu ? s.mobileNavbar : s.openNav}>
                    <div onClick={toggleMobileMenu} className={s.mobileNavbarClose}>
                        <IconX width={30} height={30} />
                    </div>
                    <ul className={s.mobileNavbarLinks}>
                        {navLinks.map((item, index) => {
                            const { link, to } = item;
                            return (
                                <li key={index}>
                                    <NavLink to={to} onClick={toggleMobileMenu}>{link}</NavLink>
                                </li>
                            );
                        })}
                        <li>
                            <Link onClick={toggleMobileMenu} to="/">Sign In</Link>
                        </li>
                        <li>
                            <Link onClick={toggleMobileMenu} to="/">Register</Link>
                        </li>
                    </ul>
                </div>
                <div className={s.navbar}>
                    <div className={s.navbarImg}>
                        <Link to="/">
                            <img src={logoImg} alt="logo-img" />
                        </Link>
                    </div>
                    <ul className={s.navbarLinks}>
                        {navLinks.map((item, index) => {
                            const { link, to } = item;
                            return (
                                <li key={index}>
                                    <NavLink to={to}>{link}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className={s.navbarButtons}>
                        <li>
                            <Link className={s.navbarButtonsSignIn} to="/">Sign In</Link>
                        </li>
                        <li>
                            <Link className={s.navbarButtonsRegister} to="/">Register</Link>
                        </li>                       
                    </ul>
                    <div className={s.mobileHamb} onClick={toggleMobileMenu}>
                        <IconMenu2 width={30} height={30} />
                    </div>
                </div>
            </nav>
            {goUpArrow && (
                <div
                    onClick={() => window.scrollTo(0, 0)}
                    className={s.scroll}
                >
                    ^
                </div>)}
        </>
    );
};

export default Navbar;