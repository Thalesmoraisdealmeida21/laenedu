import React from 'react';
import {useHistory} from 'react-router-dom';

import { ContainerHome, LogoContent, FormContainer, ButtonToNext } from './styles';

import logo from './../../assets/logo.png'


const Home = () => {
  

    const history = useHistory();


    return (
        <>

            <ContainerHome>
                
                <LogoContent>
                    <img src={logo} alt=""></img>
                </LogoContent>


                <FormContainer>     
                      <form>
                          <h1>Interessados ? <br />Saiba Mais:</h1>
                          <span>Nome</span>
                        <input name="name"></input>

                        <span>E-mail</span>
                        <input name="name"></input>
                        <button>
                            Enviar
                        </button>
                      </form>
                   
                <ButtonToNext onClick={()=> {
                        history.push('/');
                    }}>
                    <span>{"<"}</span>
                    </ButtonToNext>
                </FormContainer>



           
            </ContainerHome>
     
        </>
    )
}


export default Home;