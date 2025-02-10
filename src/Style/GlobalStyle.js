import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;  
`;

export const Main = styled.main`
  display: flex;
  align-items: flex-start;
  width: 100%;
  background: #F0EFEC;
  height: 100vh;
`;

export const PageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  background: #F0EFEC;
  padding-top: 5%;
  border-radius: 4px;
`;

export const Container = styled.div`
  padding: 60px;
  width: 100%;
`;

// New Figure component
export const Figure = styled.figure`
  margin: 20px 0;
  text-align: center;
`;

// New Image component
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Optional: Styling for the figcaption
export const FigCaption = styled.figcaption`
  margin-top: 8px;
  font-size: 14px;
  color: #555;
`;
