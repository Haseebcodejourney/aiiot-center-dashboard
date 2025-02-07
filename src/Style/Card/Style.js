import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Box = styled.div`
    min-width: 281px;
    max-width: 345px;
    width: 100%;
    height: auto;
    padding: 0px 32px;
    border-radius: 4px;
    background: #fff;
    min-height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DetailWrapper = styled.div`
    /* max-width: 285px; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`;

export const Left = styled.div`
    max-width: 116px;
    width: 100%;
    p{
        color: #6B7177;
        padding-bottom: 5px;
    }
    h2{
        padding-bottom: 8px;
        line-height: 34px;
    }
`;
export const Right = styled.div`
    max-width: 58px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.div`
    width: 58px;
    height: 52px;
    position: relative;
    z-index: 9;
    svg{
        z-index: 9;
    }
`;

export const PlaceHolder = styled.div`
    background-color: #FBF7ED;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    position: absolute;
    top: 16px;
    right: 4px;
    z-index: -1;
`;

export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    span{
        padding: 0;
    }
    p{
        padding: 0;
    }
`;

export const Paper = styled.span`
    
`;