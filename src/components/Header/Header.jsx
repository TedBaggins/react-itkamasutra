import React from 'react';
import styles from './Header.module.css';
import logo from '../../images/header_logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__inner}>
                    <div className={styles.header__logo}>
                        <img src={logo}></img>
                    </div>
                    <div className={styles.header__login}>
                        {props.isAuth ? <span>{props.login}</span> : <NavLink to={'/login'}>Login</NavLink>}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;