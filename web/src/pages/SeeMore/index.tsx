import React, { useCallback, useState } from 'react';
import {useHistory} from 'react-router-dom';

import { ContainerHome, LogoContent, FormContainer, ButtonToNext } from './styles';


import logo from './../../assets/logo.png'
import api from '../../services/api';


const Home = () => {
  

    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = useCallback((data: { name: string; email: string})=> {
       
       try {
        api.post("/reserve_account", data);
        


        alert("Recebemos seu contato, verifique seu e-mail !");
      
       } catch {
           alert("Ocorreu um erro :(")
       }

    },[])


    return (
        <>

            <ContainerHome>
                
                <LogoContent>
                    <img src={logo} alt=""></img>
                </LogoContent>


                <FormContainer>     
                      <form onSubmit={(evt) => {

                          evt.preventDefault();

                         
                          handleSubmit( {
                              email,
                              name
                          });
                      }}>
                          <h1>Interessados ? <br />Saiba Mais:</h1>
                          <span>Nome</span>
                        <input name="name" value={name} onChange={(evt)=> {
                            setName(evt.target.value);
                        }}></input>

                        <span>E-mail</span>
                        <input name="email" value={email} onChange={(evt)=> {
                            setEmail(evt.target.value);
                        }}></input>
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