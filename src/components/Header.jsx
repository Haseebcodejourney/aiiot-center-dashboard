// src/components/header/Header.js
import React from 'react';
import { Bell, Mail, Heart, Search } from 'lucide-react';
import SideBarIcon from '../assets/sidebar-control.jpg'
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 20px 0px;
  background: white;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.05);
  width: 100%;
  position: fixed;
`;

const SideBarControl = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {

  }
`;

const SearchBarWrapper = styled.div`
  flex: 1;
  margin: 0px;
  position: relative;
  max-width: 628px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 40px;
  

  input {
    max-width: 540px;
    width: 100%;
    padding: 16px 18px;
    border: 1px solid #eee;
    border-radius: 8px;
    font-size: 14px;
    transition: 0.3s ease all;
    /* height: 50px; */
    &::placeholder{
      color: #6B7177;
      font-size: 15px;
    }
    &:hover{
      border-color: #1F4B3F;
    }
    &:focus{
      outline: none;
      border-color: #1F4B3F;
    }
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Header = ({ activeComponent }) => {
  return (
    <HeaderContainer>
      
      <SearchBarWrapper>
      <SideBarControl>
        <img src={SideBarIcon} alt='Icon' height={20} width={18}/>
      </SideBarControl>
        <Search size={20} style={{ position: "absolute", right: 16, top: 14, color: "#666" }} />
        <input type="text" placeholder="What service are you looking for today?" />
      </SearchBarWrapper>
      <UserActions>
        <Bell size={20} />
        <Mail size={20} />
        <Heart size={20} />
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="Profile" />
      </UserActions>
    </HeaderContainer>
  );
};

export default Header;
