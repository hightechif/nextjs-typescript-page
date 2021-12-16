import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { faBars, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import globalVariables from "../../styles/globalVariables";

const StyledHeader = styled.header`
    background: ${globalVariables.color.white};
    box-shadow: 0px 2px 2px 0px rgba(173, 181, 189, 0.16);
    width: 100%;
    color: ${globalVariables.color.gray};
    padding: 0px 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .container {
        display: flex;
        justify-content: space-between;
    }
    .logo {
        display: inline-flex;
        margin: 24px 0;
    }
    ul {
        display: flex;
        align-items: center;
        gap: 30px;
        list-style: none;
    }
    .navbar {
        background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        position: sticky;
        top: 0;
        z-index: 999;
    }

    .navbar-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        max-width: 1500px;
    }

    .navbar-logo {
        color: #fff;
        justify-self: start;
        margin-left: 20px;
        cursor: pointer;
        text-decoration: none;
        font-size: 2rem;
        display: flex;
        align-items: center;
        &:hover {
            text-decoration: none;
        }
    }

    .logo {
        margin-left: 0.5rem;
        width: 40px;
    }

    .fa-typo3 {
        margin-left: 0.5rem;
        font-size: 1.8rem;
    }

    .nav-menu {
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-gap: 10px;
        list-style: none;
        text-align: center;
        width: 60vw;
        justify-content: end;
        margin-right: 2rem;
    }

    .nav-item {
        height: 80px;
    }

    .nav-links {
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 1.5rem 1rem 1rem 1rem;
        box-sizing: border-box;
        height: 100%;
    }

    .nav-links:hover {
        border-bottom: 4px solid #fff;
        transition: all 0.2s ease-out;
        text-decoration: none;
    }

    .fa-bars {
        color: #fff;
    }

    .nav-links-mobile {
        display: none;
    }

    .menu-icon {
        display: none;
    }

    @media screen and (max-width: 767px) {
        .NavbarItems {
            position: relative;
        }

        .nav-menu {
            display: flex;
            flex-direction: column;
            width: 100%;
            position: absolute;
            top: 80px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;
        }

        .nav-menu.active {
            background: ${globalVariables.color.white};
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 1;
        }

        .nav-links {
            text-align: center;
            padding: 2rem;
            width: 100%;
            display: table;
        }

        .nav-links:hover {
            background-color: ${globalVariables.color.primary};
            color: ${globalVariables.color.white};
            border-radius: 0;
        }

        .navbar-logo {
            position: absolute;
            left: 0;
        }

        .menu-icon {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 60%);
            font-size: 1.8rem;
            cursor: pointer;
        }

        .icon {
            color: ${globalVariables.color.black};
            width: 32px;
            position: absolute;
            right: 25px;
            top: 25px;
        }
    }
`

export const Header = () => {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <StyledHeader>
            <div className='container'>
                <Link href="">
                    <a className="logo"><Image src="/favicon.ico" width="50px" height="50px" alt="logo" /></a>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon className="icon" icon={click ? faTimes : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link href="">
                            <a onClick={closeMobileMenu}>Jelajahi Kategori</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a onClick={closeMobileMenu}>Riset & Artikel</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a onClick={closeMobileMenu}>Tentang Kami</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a><Button text="Masuk" color="#1F7AE0" /></a>
                        </Link>
                    </li>
                </ul>
            </div>
        </StyledHeader>
    )
}
