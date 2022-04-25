import React from 'react';
import {Link} from 'react-router-dom';
import {
    InfoSec, 
    InfoRow, 
    InfoColumn, 
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img

} from './InfoStyle';

import {Container, Button} from '../../globalStyle';


const Info = ({
    lightBg, 
    imgStart, 
    headline, 
    topline, 
    description, 
    buttonLabel,
    lightText,
    lightTextDesc,
    lightTopLine,
    primary,
    start,
    img,
    alt

}) => {
  return (
    <>
    <InfoSec lightBg={lightBg}>
        <Container>
            <InfoRow imgStart={imgStart}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topline}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        <Link to='/signup'>
                            <Button big fontBig primary={primary}>{buttonLabel}</Button>
                        </Link>



                    </TextWrapper>
                     
                </InfoColumn>

                <InfoColumn>
                    <ImgWrapper start={start} >
                        <Img src={img} alt={alt} />


                    </ImgWrapper>
                </InfoColumn>
            </InfoRow>

        </Container>



    </InfoSec>
    </>
  )
}

export default Info