import React from 'react'
import { DetailWrapper, IL, ImageWrapper, IR, Wrapper } from '../../Style/Profile/Card'
import Typography from '../../Style/Typography'
import { Figure } from '../../Style/GlobalStyle'

export default function Card() {
  return (
    <>
    <Wrapper>
        <Typography variant="h3">Profile Details</Typography>
        <DetailWrapper>
            <ImageWrapper>
                <IL>
                    <Figure>
                        
                    </Figure>
                </IL>
                <IR></IR>
            </ImageWrapper>
        </DetailWrapper>
    </Wrapper>
    </>
  )
}
