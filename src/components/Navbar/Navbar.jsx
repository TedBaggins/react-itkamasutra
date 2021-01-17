import {NavLink, withRouter} from 'react-router-dom';
import styles from './Navbar.module.css';
import {connect} from "react-redux";

const Navbar = (props) => {

    // if (!props.isAuth) {
    //     return (
    //         <section className={styles.navbar}>
    //             <nav className={styles.nav}>
    //                 <div className={styles.nav__item}>
    //                     <NavLink to="/news" className={`${styles.nav__link_news} ${styles.nav__link}`} activeClassName={styles.nav__link_active}>News</NavLink>
    //                 </div>
    //             </nav>
    //         </section>
    //     )
    // }

    return (
        <section className={styles.navbar}>
            <nav className={styles.nav}>
                <div className={`${styles.nav__item} ${styles.active}`}>
                    <NavLink to="/profile" className={`${styles.nav__link_profile} ${styles.nav__link}`} activeClassName={styles.nav__link_active}>Profile</NavLink>
                </div>
                <div className={styles.nav__item}>
                    <NavLink to="/dialogs" className={`${styles.nav__link_messages} ${styles.nav__link}`} activeClassName={styles.nav__link_active}>Messages</NavLink>
                </div>
                <div className={styles.nav__item}>
                    <NavLink to="/news" className={`${styles.nav__link_news} ${styles.nav__link}`} activeClassName={styles.nav__link_active}>News</NavLink>
                </div>
                <div className={styles.nav__item}>
                    <NavLink to="/music" className={`${styles.nav__link_music} ${styles.nav__link}`} activeClassName={styles.nav__link_active}>Music</NavLink>
                </div>
                <div className={styles.nav__item}>
                    <NavLink to="/settings" className={`${styles.nav__link_settings} ${styles.nav__link}`} activeClassName={styles.nav__link_active}>Settings</NavLink>
                </div>
                <div className={styles.nav__item}>
                    <NavLink to="/users" className={`${styles.nav__link_settings} ${styles.nav__link}`} activeClassName={styles.nav__link_active}>Users</NavLink>
                </div>
            </nav>
        </section>
    );
}

// export default Navbar;

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {})(Navbar);