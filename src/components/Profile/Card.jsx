import React from 'react'
import { DetailWrapper, IL, ImageWrapper, IR, IRIcon, IRIconWrapper, IRUpload, Wrapper } from '../../Style/Profile/Card'
import Typography from '../../Style/Typography'
import { Figure, FormWrapper, Image, Input, InputGroup, Label } from '../../Style/GlobalStyle'
import UserImage from '../../assets/images/user.jpg'

export default function Card() {
  return (
    <>
    <Wrapper>
        <Typography variant="h3">Profile Details</Typography>
        <DetailWrapper>
            <ImageWrapper>
                <IL>
                    <Figure>
                       <Image src={UserImage} alt="User-Profile" width={90} height={90} style={{borderRadius:'50%'}}/> 
                    </Figure>
                </IL>
                <IR>
                    <IRIconWrapper>
                        <IRIcon>  
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_127_15634)">
                            <path d="M14.4003 2.135H10.5503L10.3203 1.215C10.2343 0.867805 10.0343 0.559463 9.75245 0.339225C9.47058 0.118986 9.12304 -0.000446193 8.76533 3.3199e-06H7.23533C6.87829 -0.000723749 6.53127 0.117991 6.24949 0.337255C5.96771 0.556519 5.76736 0.863732 5.68033 1.21L5.45033 2.135H1.60033C1.52607 2.1278 1.45112 2.13621 1.38029 2.15969C1.30947 2.18317 1.24435 2.22121 1.1891 2.27136C1.13385 2.32151 1.0897 2.38265 1.05949 2.45088C1.02928 2.5191 1.01367 2.59289 1.01367 2.6675C1.01367 2.74212 1.02928 2.81591 1.05949 2.88413C1.0897 2.95235 1.13385 3.0135 1.1891 3.06365C1.24435 3.1138 1.30947 3.15183 1.38029 3.17532C1.45112 3.1988 1.52607 3.20721 1.60033 3.2H14.4003C14.4746 3.20721 14.5495 3.1988 14.6204 3.17532C14.6912 3.15183 14.7563 3.1138 14.8116 3.06365C14.8668 3.0135 14.911 2.95235 14.9412 2.88413C14.9714 2.81591 14.987 2.74212 14.987 2.6675C14.987 2.59289 14.9714 2.5191 14.9412 2.45088C14.911 2.38265 14.8668 2.32151 14.8116 2.27136C14.7563 2.22121 14.6912 2.18317 14.6204 2.15969C14.5495 2.13621 14.4746 2.1278 14.4003 2.135ZM6.55033 2.135L6.71533 1.47C6.74346 1.3574 6.80745 1.25699 6.89764 1.18393C6.98783 1.11088 7.09934 1.06914 7.21533 1.065H8.75033C8.86633 1.06914 8.97783 1.11088 9.06802 1.18393C9.15821 1.25699 9.2222 1.3574 9.25033 1.47L9.41533 2.135H6.55033Z" fill="#1F4B3F"/>
                            <path d="M13.3356 4.26501H2.66565C2.59093 4.26532 2.51711 4.28127 2.44894 4.31183C2.38076 4.3424 2.31974 4.38691 2.26982 4.44249C2.21989 4.49807 2.18215 4.56349 2.15904 4.63454C2.13594 4.70559 2.12797 4.7807 2.13565 4.85501L3.00065 13.6C3.06549 14.2604 3.37479 14.8727 3.86786 15.3167C4.36092 15.7607 5.00213 16.0044 5.66565 16H10.3356C10.9992 16.0044 11.6404 15.7607 12.1334 15.3167C12.6265 14.8727 12.9358 14.2604 13.0006 13.6L13.8656 4.85501C13.8726 4.78109 13.8641 4.70653 13.8406 4.63608C13.8172 4.56563 13.7793 4.50083 13.7295 4.4458C13.6796 4.39078 13.6189 4.34673 13.5511 4.31647C13.4833 4.2862 13.4099 4.27038 13.3356 4.27001V4.26501ZM11.9306 13.5C11.8921 13.8948 11.7079 14.261 11.4139 14.5272C11.1199 14.7935 10.7373 14.9406 10.3406 14.94H5.66565C5.26816 14.9419 4.8843 14.7953 4.58926 14.5289C4.29422 14.2626 4.10927 13.8956 4.07065 13.5L3.25565 5.33501H12.7556L11.9306 13.5Z" fill="#1F4B3F"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_127_15634">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </IRIcon>
                        <IRUpload>Upload Images</IRUpload>
                    </IRIconWrapper>
                    <Typography variant="p">Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png</Typography>
                </IR>
            </ImageWrapper>
        </DetailWrapper>
        <FormWrapper>
            <InputGroup>
                <Label>Username</Label>
                <Input  type='text' placeholder='Hamza'></Input>
            </InputGroup>
            <InputGroup>
                <Label>Email Address</Label>
                <Input  type='mail' placeholder='Hamza@gmail.com'></Input>
            </InputGroup>
            <InputGroup>
                <Label>Phone Number</Label>
                <Input  type='number' placeholder='+90 533 000 00 00'></Input>
            </InputGroup>
            <InputGroup>
                <Label>Country</Label>
                <Input  type='text' placeholder='Cyprus'></Input>
            </InputGroup>
        </FormWrapper>
    </Wrapper>
    </>
  )
}
