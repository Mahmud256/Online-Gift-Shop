import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                navigate(location?.state ? location.state : '/');
    
            })
            .catch((error) => {
                console.error('Error signing up:', error.message);
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