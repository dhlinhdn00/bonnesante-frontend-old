import React from 'react'
import style from './HeaderBar.module.css'
import { Link } from 'react-router-dom'
import useUserContext from '../../hooks/useUserContext'
import LogoBK from "../../assets/images/LogoDHBK.jpg";
import LogoFast from "../../assets/images/FAST.png";
const HeaderBar = () => {
    const user = useUserContext();
    const username = user ? user.username : null;
    function logout() {
        localStorage.removeItem('user');
    }
    return (
        <div className={style.header}>
            <Link to='/home'>
                {username ? <ion-icon name="person-circle-outline"></ion-icon> : <ion-icon name="arrow-back-outline"></ion-icon>}
            </Link>
            <img src={LogoFast} alt="logoFast" className={style.logoFast} />
            <h3>{username ? 'Hello, ' + username : 'Blood Pressure'}</h3>
            <img src={LogoBK} alt="logoBk" className={style.logoBk} />
            {username ?
                <Link onClick={logout} to='/' className={style.logout}>
                    <ion-icon name="log-out-outline"></ion-icon>
                </Link> : null}

        </div>
    )
}
export default HeaderBar
