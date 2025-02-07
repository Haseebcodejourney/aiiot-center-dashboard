import React from 'react';
import { Box, DetailWrapper, Icon, Left, PlaceHolder, Right, TextWrapper, Wrapper } from '../Style/Card/Style';
import Typography from '../Style/Typography';

export default function Card() {
	return (
		<>
			<Wrapper>
				<Box>
					<DetailWrapper>
						<Left>
							<Typography variant="p">Services Offered</Typography>
							<Typography variant="h2">25</Typography>
							<TextWrapper>
								<Typography variant="span" style={{ color: '#5aa75a' }}>10</Typography>
								<Typography variant="p" style={{ fontSize: '15px' }}>New Offered</Typography>
							</TextWrapper>
						</Left>
						<Right>
							<Icon>
								<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M31.8555 37.7778H9.33332C8.0833 37.7687 6.88662 37.2701 5.99998 36.3889C5.56064 35.9519 5.21181 35.4326 4.97348 34.8606C4.73516 34.2886 4.61201 33.6752 4.6111 33.0556V10.3111C4.60482 9.84214 4.69197 9.37661 4.86747 8.94166C5.04298 8.50672 5.30332 8.11107 5.63332 7.77778L10.1667 3.26667C10.4968 2.934 10.8898 2.67033 11.3228 2.49102C11.7558 2.31171 12.2202 2.22034 12.6889 2.22223H31.8555C32.7985 2.22223 33.7029 2.59683 34.3697 3.26363C35.0365 3.93042 35.4111 4.83479 35.4111 5.77778V34.2222C35.4111 35.1652 35.0365 36.0696 34.3697 36.7364C33.7029 37.4032 32.7985 37.7778 31.8555 37.7778ZM12.6889 4.58889C12.3766 4.58983 12.0773 4.71355 11.8555 4.93334L7.31109 9.47778C7.09231 9.70022 6.96877 9.99912 6.96665 10.3111V33.0333C6.96637 33.3454 7.0281 33.6545 7.14827 33.9425C7.26844 34.2305 7.44465 34.4918 7.66665 34.7111C8.11361 35.1524 8.71635 35.3999 9.34443 35.4H31.8555C32.0117 35.4 32.1663 35.3693 32.3105 35.3095C32.4547 35.2498 32.5858 35.1622 32.6962 35.0518C32.8066 34.9414 32.8942 34.8103 32.9539 34.6661C33.0137 34.5218 33.0444 34.3672 33.0444 34.2111V5.77778C33.0444 5.46247 32.9192 5.16007 32.6962 4.93711C32.4732 4.71415 32.1709 4.58889 31.8555 4.58889H12.6889Z" fill="#1F4B3F" />
									<path d="M11.7 11.7H28.2889V14.0667H11.7V11.7Z" fill="#1F4B3F" />
									<path d="M11.7 16.4445H28.2889V18.8111H11.7V16.4445Z" fill="#1F4B3F" />
									<path d="M11.7 21.1889H20V23.5556H11.7V21.1889Z" fill="#1F4B3F" />
									<path d="M11.7 28.3H23.5556V30.6667H11.7V28.3Z" fill="#1F4B3F" />
									<path d="M25.9222 28.3H28.2889V30.6667H25.9222V28.3Z" fill="#1F4B3F" />
								</svg>
								<PlaceHolder></PlaceHolder>
							</Icon>
						</Right>
					</DetailWrapper>
				</Box>
			</Wrapper>
		</>
	)
}
