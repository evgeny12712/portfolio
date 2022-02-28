import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <Container>
            <Wrapper>
                <h2>Hey, my name is Evgeny,</h2>
                <h2>I'm a web developer from israel</h2>
                <p>
                    Full-Stack / Frontend web developer, experienced in writing single-page-applications using the latest
                    WEB technologies such as Node.js, Vue.js, React.js, Angular.js.
                </p>
                <span>Checkout my latest projects : </span>
                <Button>
                    <Link to="/portfolio">
                        <span>
                            Portfolio
                        </span>
                    </Link>
                </Button>
            </Wrapper>
        </Container>
    )
}


const Container = styled.div`
    min-height: calc(100vh - 334px);
    color: white;
    display: flex;
    justify-content: center;
    font-family: Staatliches;
    margin-block-start: 150px;
    @media(max-width: 765px) {
        margin-block-start: 50px;
        margin-block-end: 120px;
        padding-inline: 30px;
    }
    `

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: 0.2rem;
    h2 {
        letter-spacing: 0.5rem;
        color: #fff;
    }
    & p {
        max-width: 100ch;
        font-size: 1.2rem;
        letter-spacing: 0.2rem;
        line-height: 1.5rem;
        text-align: center;
        color: #94a4b4
    }
    & span {
        margin-block-end: 15px;
        color: #94a4b4
    }
    
    @media (max-width: 765px) {
        text-align: center;
        h2 {
            font-size: 1rem;
        }
        p {
            font-size: 1rem;
          }
    }
`

const Button = styled.div`
    & a {
        color: rgb(255,255,255,0.8);
        border: 1px solid rgb(255,255,255,0.3);
        display: block;
        width: 200px;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        font-family: sans-serif;
        text-decoration: none;
        letter-spacing: 2px;
        text-align: center;
        position: relative;
        transition: all .35s;
        & span {
            position: relative;
            z-index: 1;
        }

        &:after{
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: white;
            transition: all .35s;
        }

        &:hover{
          color: rgb(255,255,255,0.3);
        }
        
        &:hover:after{
          width: 100%;
        }
    }
`