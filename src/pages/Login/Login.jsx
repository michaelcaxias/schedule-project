import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { MyContext } from '../../context/Provider';
import LoginButton from '../../components/LoginButton/LoginButton';
import Loading from '../../components/Loading/Loading';

import { AppWrap, MotionWrap } from '../../wrapper';
import APISelector from '../../components/APISelector/APISelector';
import Footer from '../../components/Footer/Footer';

import { images } from '../../constants';

import './Login.scss';

const Login = () => {
  const { loading, isSignedIn } = useContext(MyContext);

  const loginPage = (
    <>
    <div className="login__logo">
      <img src={images.logo} alt=""/>
      <h1>Trybe Scheduler</h1>
    </div>

    <div className="app__flex login__box">
      <h2 className="login__head">Faça login!</h2>
        <p className="p-text">
          Para a aplicação conseguir alterar seu calendar, você precisa nos autorizar, não se preocupe com a mensagem de
          <span className="bold-text"> aplicação não verificada</span>
          , estamos resolvendo isso.
        </p>
      <LoginButton />
    </div>

    <div className="app__flex login__changeapi">
      <APISelector />
        <p>Se der aplicativo bloqueado,
          <br />troque de API, isso é temporário!</p>
    </div>
    </>
  );

  function validar() {
    if (isSignedIn) {
      return <Navigate to="/scheduler" />;
    }
    return loginPage;
  }

  return loading ? <Loading /> : validar();
};

export default AppWrap(MotionWrap(Login, ''), null, Footer, 'Login', '');
