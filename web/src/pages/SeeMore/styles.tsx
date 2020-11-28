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


export const FormContainer = styled.div`
        background: #373636;
        color: #fff;
        width: 100%;
        display: flex;
      

      form {
          margin: auto;
          display: flex;
          flex-direction: column;

            span {
                margin-left: 10px;
              
            }
          input {
              height: 40px;
              border-radius: 25px;
              margin: 10px;
              border: transparent;
              padding: 20px;
          }

          button {
              height: 40px;
              background: #FF8D27;
              border: transparent;
              border-radius: 8px;
              margin-top: 30px;
              width: 250px;
              margin: 20px auto;
              
          }
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


