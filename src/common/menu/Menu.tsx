import './menu.scss';
import { Link } from 'react-router-dom';

export default function Menu() {

    return (
        <>
            <nav className="menu">
                <Link to="/hotels">Все гостиницы</Link>
                <Link to="*">Поиск номера</Link>
                <Link to="*">Добавить гостиницу</Link>
                <Link to="/users">Пользователи</Link>
            </nav>
        </>
    );
}
