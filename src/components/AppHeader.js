import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/imgs/logo.jpeg'
import logoMobile from '../assets/imgs/logo-mobile.jpeg'
import { Link } from 'react-router-dom'
import Burger from './Burger'
export default function AppHeader() {
    const [open, setOpen] = useState(false)

    function toggleNav() {
        console.log(open)
        setOpen(prevState => prevState = !prevState)
    }

    return (
        <Header>
            <LogoWrapper>
                <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                <Link to="/">
                    <img className="logo-mobile" src={logoMobile} alt="logo-mobile" />
                </Link>
            </LogoWrapper>
            <Burger isOpen={open} toggleNav={toggleNav} />
            <Nav isOpen={open} onClick={() => setOpen(false)}>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/">Home</Link>
            </Nav>
        </Header >
    )
}

const Header = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: 50px;
    font-size: 1.2rem;
    margin-block-start: 20px;
    margin-block-end: 150px;
    @media(max-width: 768px) {
        margin-inline: 10px;
        font-size: 0.875rem;
        margin-block-start: 0;
    }
`

const LogoWrapper = styled.div`
    height: 100%;
    cursor: pointer;
    & .logo, .logo-mobile{
        height: 100%;
    }
    & .logo-mobile {
        display: none;
        height: 80%;
        margin-block-start: 5px;
    }
    @media(max-width: 768px) {
        & .logo {
            display: none;
        }
        & .logo-mobile {
            display: inline-block;
        }
    }
`

const Nav = styled.div`
    color: white;
    display: flex;
    gap: 50px;
    font-family: Staatliches;
    letter-spacing: 0.3rem;
    & a {
        color: white;
        cursor: pointer;
        padding-block-end: 5px;
        border-block-end: 1px solid transparent;
        position: relative;
        &::before {
            background-color: white;
            content: '';
            height: 2px;
            position: absolute;
            left:0;
            right: 0;
            bottom: -6px;
            transform-origin: right center left;
            transform: scaleX(0);
            transition: all 100ms;
        }
        &:hover {
            &:before {
                transform: scaleX(1);
            }
        }
    }

    @media(max-width: 768px) {
        transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
        height: 100%;
        width: 150px;
        padding: 20px;
        padding-top: 60px;
        gap: 30px;
        flex-direction: column;
        position: fixed;
        right: 0;
        top: 0;
        background-color: #131538;
        transition: transform 0.3s ease-in-out;
        z-index: 2;
    }
`