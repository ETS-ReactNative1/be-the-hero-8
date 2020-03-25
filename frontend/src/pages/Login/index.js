import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { LoginContainer } from './styles';

import HeroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';

function Login() {
  return (
    <LoginContainer>
      <section>
        <img src={LogoImg} alt="Be The Hero" />
        <form>
          <h1>Faça seu Login</h1>
          <input placeholder="Sua ID" />
          <button className="button" type="submit" >Entrar</button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#e02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={HeroesImg} alt="Heores" />
    </LoginContainer>
  )
}

export default Login;