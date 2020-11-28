import React, { useState} from 'react';
import { useHistory} from 'react-router-dom';

import { ContainerHome, LogoContent, Messages, ContentMessages, Navigation, OptionCircle,ButtonToNext} from './styles';

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
    const [indexMessage, setIndexMessage] = useState(1);

    window.setInterval(()=> {


    
       
      
   

        if(indexMessage < 4) {
            setMessageSelected(arrayMessages[indexMessage])
            setIndexMessage(indexMessage + 1);
        
        } else {
            setIndexMessage(0);
        }
 

      
    }, 6000)  
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
                   {messageSelected}
                    </p>

                  
                    <Navigation>
                            <OptionCircle isActive={ messageSelected === arrayMessages[0] ? true : false} onClick={()=> {
                                setMessageSelected(arrayMessages[0])
                                setIndexMessage(0)
                                
                            }}></OptionCircle>
                            <OptionCircle  isActive={ messageSelected === arrayMessages[1] ? true : false}onClick={()=> {
                                setMessageSelected(arrayMessages[1])
                                setIndexMessage(0)
                            }}></OptionCircle>
                            <OptionCircle  isActive={ messageSelected === arrayMessages[2] ? true : false} onClick={()=> {
                                setMessageSelected(arrayMessages[2])
                                setIndexMessage(0)
                            }}></OptionCircle>
                            <OptionCircle isActive={ messageSelected === arrayMessages[3] ? true : false} onClick={()=> {
                                setMessageSelected(arrayMessages[3])
                                setIndexMessage(0)
                            }}></OptionCircle>
                    </Navigation>

                 
                   
                    </ContentMessages>
            
                    <ButtonToNext onClick={()=> {
                        history.push('/seemore');
                    }}>
                    <span>{">"}</span>
                    </ButtonToNext>
                </Messages>


           
            </ContainerHome>
     
        </>
    )
}


export default Home;