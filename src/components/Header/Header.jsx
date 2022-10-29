import React, { useContext } from 'react'
import { Avatar } from '@mui/material';
import { FiLogIn } from 'react-icons/fi';

import { MyContext } from '../../context/Provider';
import Menu from '../Menu/Menu';
import { images } from '../../constants'

import { useNavigate } from 'react-router';

import './Header.scss'

const Header = () => {
  const { userImage, userName, userEmail, isSignedIn } = useContext(MyContext);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="topo" className="app__header">
      <div className="app__flex login__logo-header" onClick={() => navigate('/')}>
        <img src={images.logo} draggable={false}/>
        <h1>Trybe Schedule</h1>
      </div>

      <div className="app__flex login__user-info">
        {isSignedIn ? (
          <>
           <div className='app__flex login__user-logged' onClick={handleClickOpen}>
            <div className="app__flex login__user-info-google">
              <h4>{userName}</h4>
              <h5>{userEmail}</h5>
            </div>

            <Avatar alt="User Image" src={userImage} style={{pointerEvents: 'none'}}/>
          </div>
          </>
        ) : (
          <div className='app__flex login__user-logout' onClick={() => navigate('/login')}>
            <h4>Entrar</h4>
            <FiLogIn className="icon" />
          </div>
        )}

        <Menu open={open} onClose={handleClose} />
      </div>
    </div>
  )
}

export default Header;