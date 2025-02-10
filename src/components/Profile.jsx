import React from 'react'
import { Wrapper } from '../Style/Profile/Style';
import Typography from '../Style/Typography';
import { Container, PageWrapper } from '../Style/GlobalStyle';

export default function Profile() {
    return (
        <>
        <PageWrapper>
            <Container>
            <Wrapper>
                <Typography variant="h1">My Profile</Typography>
                <Typography variant="p">Lorem ipsum dolor sit amet, consectetur.</Typography>
            </Wrapper>
            </Container>
            </PageWrapper>
        </>
    )
}
