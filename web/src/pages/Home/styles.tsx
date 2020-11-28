import styled from 'styled-components';



export const ContainerHome = styled.div`
    background: #FF8D27;
    display: flex;
    height: 100vh;
`;


export const LogoContent = styled.div`
        margin-left: 15vw;
        display: flex;
        img {
            margin: auto 0;
        }
`;


export const Messages = styled.div`
        background: #373636;
        color: #fff;
        width: 100%;
        display: flex;

`;


export const ContentMessages = styled.div`
        width: 250px;
        margin: auto 0;
        margin-left: 100px;

        p {
            margin-top: 16px;
        }
`;

export const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 24px;

`;


export const OptionCircle = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background: white;
    margin: 10px;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        box-shadow: 0px 0px 0px 6px #696666;
    }
`;
