import './menu.scss';
import { NavLink } from 'react-router-dom';

export default function Menu() {

    return (
        <>
            <nav className="menu">
                <NavLink to="/hotels">Все гостиницы</NavLink>
                <NavLink to="*">Поиск номера</NavLink>
                <NavLink to="*">Добавить гостиницу</NavLink>
                <NavLink to="/users">Пользователи</NavLink>
            </nav>
        </>
    );
}
