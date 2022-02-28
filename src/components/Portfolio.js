import React from 'react'
import styled from 'styled-components'
import PortfolioItem from './PortfolioItem'
import mondayClone from '../assets/imgs/projects/monday-clone.jpg'
import disneyClone from '../assets/imgs/projects/disney-clone.jpg'
import netflixClone from '../assets/imgs/projects/netflix-clone.jpg'
import appsus from '../assets/imgs/projects/appsus.jpg'
import bitwallet from '../assets/imgs/projects/bitwallet.jpg'
import memeGenerator from '../assets/imgs/projects/meme-generator.jpg'

export default function Portfolio() {
    return (
        <Container>
            <h1>Portfolio</h1>
            <PortfolioItem direction='start' title='Monday clone' image={mondayClone}
                skills={['html & css', 'javascript', 'sass', 'vue.js', 'vuex', 'node.js', 'restapi', 'mongodb', 'git']}
                projectLink='https://monday-proj.herokuapp.com/' codeLink='https://github.com/evgeny12712/monday-proj-frontend' />

            <PortfolioItem title="Disneyplus clone" image={disneyClone}
                skills={['html & css', 'javascript', 'react.js', 'styled-components', 'firebase', 'git', 'responsive']}
                projectLink='https://disneyplus-clone-bace5.web.app' codeLink='https://github.com/evgeny12712/Disneyplus-clone' />

            <PortfolioItem direction='start' title="Appsus" image={appsus}
                skills={['html & css', 'javascript', 'vue.js', 'git', 'responsive']}
                projectLink='https://iamkhirsah.github.io/APPSUS/' codeLink='https://github.com/iAmKhirsah/APPSUS' />

            <PortfolioItem title="Netflix clone" image={netflixClone}
                skills={['html & css', 'javascript', 'react.js', 'styled-components', 'firebase', 'git']}
                projectLink='https://neftlix-clone-cadbd.web.app/' codeLink='https://github.com/evgeny12712/netflix-clone' />

            <PortfolioItem direction='start' title="bitWallet" image={bitwallet}
                skills={['html & css', 'javascript', 'react.js', 'git', 'responsive']}
                projectLink='https://evgeny12712.github.io/bitcoin-wallet-proj/' codeLink='https://github.com/evgeny12712/bitcoin-wallet-proj' />\

            <PortfolioItem title="Meme generator" image={memeGenerator}
                skills={['html & css', 'javascript', 'git', 'responsive']}
                projectLink='https://evgeny12712.github.io/meme-generator/' codeLink='https://github.com/evgeny12712/meme-generator' />\
        </Container>
    )
}


const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    margin: auto;
    margin-block-end: 50px;
    & h1 {
        font-size: 3rem;
        letter-spacing: 0.875rem;
        color: whitesmoke;
        text-shadow: 0px 0px 6px rgb(213 226 254);
        padding: 15px;
    }
    & > *:not(:first-child, :last-child) {
        border-bottom: 1px solid rgb(255, 255, 255, 0.1);
    }
    @media (max-width: 765px) {
        & h1 {
            margin: 0;
        }
    }
`