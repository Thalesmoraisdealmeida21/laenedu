import React from 'react';

import { ContainerHome, LogoContent, Messages, ContentMessages, Navigation, OptionCircle} from './styles';
import Header from './../../components/Header';
import logo from './../../assets/logo.png'

const Home = () => {
    return (
        <>

            <ContainerHome>
                
                <LogoContent>
                    <img src={logo}></img>
                </LogoContent>


                <Messages>

                    <ContentMessages>
                    <h1>Bem-Vindo</h1>
                    <p>
                    A LAENEDU auxilia no desenvolvimento e engajamento de colaboradores por meio de ações em parcerias com instituições e projetos sociais.
                    </p>
                    <Navigation>
                            <OptionCircle></OptionCircle>
                            <OptionCircle></OptionCircle>
                            <OptionCircle></OptionCircle>
                            <OptionCircle></OptionCircle>

                    </Navigation>
                    </ContentMessages>
                  
                </Messages>
            </ContainerHome>
        </>
    )
}


export default Home;