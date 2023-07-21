import { User, Auth } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

type SignInOutProps = {
  user: User | null | undefined;
  auth: Auth;
};

export default function SignInOut({ user, auth }: SignInOutProps): JSX.Element {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

    return (
      <div className="flex flex-col items-center justify-center">
        {user ? "you are signed in" : (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </button>
        )}
      </div>
    );
}
