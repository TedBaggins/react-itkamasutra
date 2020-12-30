import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" className={s.navbar__item_profile} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={s.navbar__item_messages} activeClassName={s.active}>Messages</NavLink>
                </div>
            <div className={s.item}>
                <NavLink to="/news" className={s.navbar__item_news} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={s.navbar__item_music} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={s.navbar__item_settings} activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;