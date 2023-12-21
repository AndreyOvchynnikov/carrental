import { useAuthContext } from 'components/context/authContext';
import s from './UserMenu.module.css';

const UserMenu = () => {

    const { userName, userLogout } = useAuthContext();

    return (
        <div className={s.userMenu}>
            <p className={s.userGreet}>Welcome, {userName}</p>
            <button
                className={s.userLogout}
                type="button"
                onClick={userLogout}
            >
                Logout
            </button>
        </div>
    )
};

export default UserMenu;