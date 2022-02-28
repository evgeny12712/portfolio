import React, { useState } from 'react'
import styled from 'styled-components'
export default function Burger({ isOpen, toggleNav }) {
    return (
        <StyledBurger open={isOpen} onClick={toggleNav}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    )
}


const StyledBurger = styled.div`
    opacity: 0;
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    z-index: 3;
    div {
        width: 2rem;
        height: .25rem;
        background-color: ${({ open }) => open ? '#ccc' : '#333'};
        border-radius: 10px;
        transform-origin : 1px;
        transition: all .3s linear;
        &:first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)'}
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'rotateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1}
        }
        &:last-child {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0deg)'}
        }
    }
    @media(max-width: 765px) {
        opacity: 1;
    }
`