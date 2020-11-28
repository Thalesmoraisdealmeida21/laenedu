import React, { useState} from 'react';
import {useHistory} from 'react-router-dom';

import { ContainerHome, LogoContent, FormContainer, ButtonToNext } from './styles';
import Header from './../../components/Header';
import logo from './../../assets/logo.png'

const arrayMessages = [
    "A LAENEDU auxilia no desenvolvimento e engajamento de colaboradores por meio de ações em parcerias com instituições e projetos sociais.",
    "O RH alimenta a plataforma com resultados de testes que apontam quais são os pontos de melhoria dos colaboradores",
    "Os colaboradores tem acesso a cursos com parceiros e atividades sociais que ajudam no desenvolvimento de  skills que lhes são importantes.",
    "Recebendo o reconhecimento da sociedade e também de outros colegas, assim melhoram ou desenvolvem novas competências e habilidades participando do desenvolvimento da sociedade."
]

const Home = () => {
    const [messageSelected, setMessageSelected] = useState(arrayMessages[0]);

    const history = useHistory();
    return (
        <>

            <ContainerHome>
                
                <LogoContent>
                    <img src={logo}></img>
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