import { User, Auth } from "firebase/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";


type UserProps = {
	user: User | null | undefined;
	auth: Auth;
};

export default function UserBtn({ user, auth }: UserProps): JSX.Element {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };
  const ref = useDetectClickOutside({
    onTriggered: () => setIsMenuVisible(false),
  });
	const handleClick = () => {
		auth.signOut();
		setIsMenuVisible(false);
  };

  return (
    <div className="pl-3">
      {user ? (
        <div ref={ref} className="relative mr-4">
          <button onClick={toggleMenu} className="flex items-center">
            <img
              src={user.photoURL || "https://placehold.co/50"}
              alt="User Avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
          </button>
          <div
            className={`${
              isMenuVisible ? "" : "hidden"
            } absolute z-10 mt-1 -translate-x-12 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
          >
            <button
              className="w-20 flex items-center cursor-pointer p-2 dark:text-white"
              onClick={() => handleClick()}
            >
              Sing out
            </button>
          </div>
        </div>
      ) : (
        <Link to="/signin">
          <button className=" text-l text-gray-500 dark:text-gray-200">
            Sign in
          </button>
        </Link>
      )}
    </div>
  );
}
