import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const GoogleLogin = () => {


    // const { loginWithGoogle } = useAuth();
    const auth = getAuth();
    const axiosPublic = useAxiosPublic();
    const provider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                console.log('User Info:', userInfo); // Check if the user object is correctly populated

                // setUser(userInfo);

                // Display a success message with SweetAlert2
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log("Done:",res.data);
                        navigate(location?.state ? location.state : '/');

                    })
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