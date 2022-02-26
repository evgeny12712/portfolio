import React from 'react'
import styled from 'styled-components'
import logo from '../assets/imgs/logo.jpeg'
import logoMobile from '../assets/imgs/logo-mobile.jpeg'
import { Link } from 'react-router-dom'
export default function AppHeader() {
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

            <Nav>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/about">about</Link>
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
    @media(max-width: 768px) {
        margin-inline: 10px;
        font-size: 0.875rem;
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
        gap: 30px;
    }
`