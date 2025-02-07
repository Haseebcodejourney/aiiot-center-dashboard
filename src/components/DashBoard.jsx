import React from 'react'
import { Container, PageWrapper } from '../Style/GlobalStyle';
import Typography from '../Style/Typography';
import { CardsWrapper, HeadingWrapper } from '../Style/Dashboard/Style';
import Card from './Card';
import CardFetcher from './CardFetcher';

export default function DashBoard() {
    return (
        <>
            <PageWrapper>
                <Container>
                    <HeadingWrapper>
                        <Typography variant="h1">Dashboard</Typography>
                        <Typography variant="p">Lorem ipsum dolor sit amet, consectetur.</Typography>
                    </HeadingWrapper>
                    <CardsWrapper>
                       <Card/>
                    </CardsWrapper>
                </Container>
            </PageWrapper>
        </>
    )
}
