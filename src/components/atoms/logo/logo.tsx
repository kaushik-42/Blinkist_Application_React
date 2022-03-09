import React from "react";
import ImageFileLogo from "./../../../stories/assets/Blinkist.png";
export const Logo = () => {
    return (
        <div>
            <img src={ImageFileLogo} alt="logo Cover" />
        </div>
    )
}

/*
import React from 'react'
import styled from 'styled-components'

interface Props {
    alt: string
    src: string
}

const Image = styled.img`
    height: 24px;
    width: 99.09677124023438px;
    border-radius: 20px;
    object-fit: cover;
    left: 0;
    top: 0;
`

const logoImage = ({ alt, src}: Props) => {
    return <Image src={src} alt={alt}/>
}

export default logoImage
*/