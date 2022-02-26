import React from 'react'
import styled from 'styled-components'
export default function Contact() {
    return (
        <Contacts>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/evgeny-mashkevich-7099aa1a6/">
                        <span>Linkedin</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/evgeny12712">
                        <span>Github</span>
                    </a>
                </li>
                <li>
                    <a href="mailto:evgeny12712@gmail.com">
                        <span>Email</span>
                    </a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1ssJR7PdTa9fp-BiJtr5lN6F-a9z4I2N-/view">
                        <span>Resume</span>
                    </a>
                </li>
            </ul>
        </Contacts>
    )
}

const Contacts = styled.div`

`
