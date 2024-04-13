import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Logout = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut().then(() => {
            console.log("LogOut");
        })
            .catch(error => {
                console.log('Error', error);
            })
    }

    return (
        <div className="group relative">
            <div className='flex items-center group-hover:bg-gray-200 group-hover:rounded-box cursor-pointer'>
                <li className="mt-2 p-2 space-y-2">
                    <h2 className="user-name">{user.displayName}</h2>
                    <h1 onClick={handleLogout} className="w-full text-center font-bold hover:text-red-500">Logout</h1>
                </li>
            </div>
        </div>
    );
}

export default Logout;
