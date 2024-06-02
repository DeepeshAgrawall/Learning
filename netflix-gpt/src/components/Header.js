import React, { useEffect } from "react";
import { auth } from "./../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const showGptSearch =  useSelector(store => store.gpt?.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    // onAuthStateChanged returns unsubscribe function
    const unsubscribeFn = onAuthStateChanged(auth, (user) => {

      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribeFn();
    };
  }, []);

  const onChangeLanguage = (event) => {

    dispatch(changeLanguage(event.target.value))
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="w-screen absolute  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

      {user && (
        <div className="flex p-2 h-14">
        {showGptSearch &&  <select
            className="p-2 mr-4 rounded bg-cyan-300"
            onChange={onChangeLanguage}
          >
            {SUPPORTED_LANGUAGES.map((langObj) => {
              return (
                <option key={langObj.identifier} value={langObj.identifier}>
                  {langObj.name}
                </option>
              );
            })}
          </select> }
          <button
            onClick={handleGptSearch}
            className="bg-purple-800 text-white p-2 rounded cursor-pointer"
          >
           {showGptSearch? "Home": "GPT Search" } 
          </button>
          <h1 className="text-white mx-2 text-xl mr-2 mt-2">
            {user?.displayName}
          </h1>
          {/* <img
            className="w-18 h-14"
            alt="image"
            src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
          /> */}
          <button
            onClick={handleSignOut}
            className="bg-red-500 mb-1 p-2 text-white rounded cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
