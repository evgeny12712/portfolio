import React from 'react'
import styled from 'styled-components'
export default function PortfolioItem({ direction, title, image, skills, projectLink, codeLink }) {
    console.log(image)
    return (
        <ItemContainer direction={direction} title={title}>
            <a href={projectLink} targer="_blank">
                <img src={image} alt="project-image" />
            </a>
            <ProjectInfo>
                <Info>
                    <h2>{title || 'title'}</h2>
                    <Skills>
                        {skills?.map(skill => <Skill key={skill + Math.random()}>{skill}</Skill>)}
                    </Skills>
                </Info>
                {title === 'Monday clone' && <div className="mobile-restrict">Not available on mobile devices!</div>}
                <Buttons>
                    <Button title={title}>
                        <a href={projectLink} target="_blank" className="main-btn">View Project</a>
                        <a href={projectLink} target="_blank" className="second-btn">View Project</a>
                    </Button>
                    <Button>
                        <a href={codeLink} target="_blank" className="main-btn">View Code</a>
                        <a href={codeLink} target="_blank" className="second-btn">View Code</a>
                    </Button>
                </Buttons>
            </ProjectInfo>
        </ItemContainer>
    )
}


const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;
    flex-direction: ${({ direction }) => direction ? 'row' : 'row-reverse'};
    width: 100%;
    padding-block: 20px;
    & a {
        align-self: center;
        width: 80%;
        & img {
        width: 100%;
        opacity: 0.5;
        object-fit: contain;
        transition: opacity 0.3s;
        cursor: pointer;
    }
    }
    &:hover {
        & img {
            opacity: 1;
        }
    }
    @media(max-width: 765px) {
        flex-direction: column;
        text-align: center;
        align-items: center;
        gap: 20px;
        & a {
            width: 100%;
            pointer-events: ${({ title }) => title === 'Monday clone' ? 'none' : 'auto'};
            & img {
                width: 100%;
                opacity: 1;
            }
        }
    }

`

const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #94a4b4;
    gap: 30px;
    & .mobile-restrict {
        display: none;
        color:red;
    }
    @media (max-width: 765px) {
        & .mobile-restrict {
            display: block;
        }
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    & h2 {
        padding: 0;
        margin: 0;
    }
`

const Buttons = styled.div`
    margin-block-start: 20px;
    display: flex;
    gap: 10px;
    & > a {
        opacity: 0;
    }
    @media (max-width: 765px) {
        margin-block-start: 5px;
    }
`

const Button = styled.div`
    width: 125px;
    height: 30px;
    position: relative;
    display: inline-block;
    & a {
        width: 100%;
        cursor: pointer;
        color: white;
        transition: .5s;
        top: 0;
        left: 0;
        font-family: Staatliches;
        letter-spacing: 0.1rem;
        text-align: center;
        line-height: 30px;
        vertical-align: middle;
        @media (max-width: 765px) {
            pointer-events: ${({ title }) => title === 'Monday clone' ? 'none' : 'auto'};
        }
    }
    
    & .main-btn {
      opacity: 0;
      color: #545c69;
      display: block;
      position: absolute;
      transform: translateY(50%) rotateX(-90deg);
      border: 1px solid #545c69;
      background-color: white;
    }

    & .second-btn{
      opacity: 1;
      display: block;
      position: relative;
      background: #545c69;
      transform: translateY(0) rotateX(0);
      color: rgb(256, 256, 256, 0.8);
      border: 1px solid rgb(256, 256, 256, 0.8);
    }

    &:hover{
      & .main-btn{
        opacity: 1;
        transform: translateY(0) rotateX(0);
      }
      
      & .second-btn{
        opacity: 0;
        transform: translateY(-50%) rotateX(-90deg);
      }
    }
`

const Skills = styled.div`
    display: flex;
    gap: 20px;
    color: white;
    flex-wrap: wrap;
    @media (max-width: 765px) {
        justify-content: center;
    }
`

const Skill = styled.div`
    height: 20px;
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-family: Staatliches;
    cursor: default;
`