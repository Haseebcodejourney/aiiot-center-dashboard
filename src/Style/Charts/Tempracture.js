import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 970px;
    width: 100%;
    border-radius: 4px;

    .box {
        border-radius: 4px;
        padding: 16px;
        width: 100%;
        box-shadow: none;

        /* Remove unnecessary padding reset */
        div {
            box-shadow: none;
        }
    }
`;
