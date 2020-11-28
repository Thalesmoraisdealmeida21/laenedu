import styled from 'styled-components';

interface ActiveItemInterface {
    isActive: boolean;
}

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

        h1 {
            font-weight: 700;
        }

        p {
            margin-top: 16px;
            height: 150px;
        }
`;

export const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: auto;

`;


export const OptionCircle = styled.div<ActiveItemInterface>`
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background: white;
    margin: 10px;
    cursor: pointer;
    transition: 0.4s;
    box-shadow: ${props => props.isActive ? '0px 0px 0px 6px #696666' : '0px'};

    &:hover {
        box-shadow: 0px 0px 0px 6px #696666;
    }
`;


export const ButtonToNext = styled.button`
     background: #FF8D27;
     border-radius: 100%;
     border: transparent;
     margin-top: auto;
     height: 50px;
     width: 50px;
     margin-left: auto;
     transition: 0.5s;

     margin-right: 30px;
     margin-bottom: 10px;

     span {
         font-size: 32px;
         color: #fff;
     }

     &:hover {
         background: #DF6900;
     }

`;



