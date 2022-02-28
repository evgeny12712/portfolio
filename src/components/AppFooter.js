import React from 'react'
import styled from 'styled-components'
export default function AppFooter() {
    return (
        <Footer>
            <Wrapper>
                <div>© 2022 Evgeny Mashkevich. All Rights Reserved.</div>
                <div>
                    <span>Email : </span>
                    <a href="mailto:evgeny12712@gmail.com">Evgeny12712@gmail.com</a>
                </div>
            </Wrapper>
        </Footer>
    )
}


const Footer = styled.footer`
    padding: 2rem;
    background: #171a1d;
    color: #94a4b4;
    font-size: 1rem;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    border-top: 1px solid #343a41;
    @media(max-width: 765px) {
        font-size: 0.875rem;
        padding: 1rem;
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 150px;
    & a {
        color: white;
    }
    @media(max-width: 765px) {
        gap: 20px;
        flex-direction: column;
    }
`