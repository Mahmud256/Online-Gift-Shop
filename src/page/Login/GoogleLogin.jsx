import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const GoogleLogin = () => {


    const { loginWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                console.error(error);
            })
    }


    return (
        <div>
            <p className="text-center">Or Login With<button onClick={handleGoogleSignIn} className='btn text-[2rem] w-full'><FcGoogle></FcGoogle>
                Google</button></p>
        </div>
    );
};

export default GoogleLogin;