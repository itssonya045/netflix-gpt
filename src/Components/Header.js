import React, { useEffect  } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../utils/Client";
import { addUser, removeUser } from "../utils/UserSlice";
import { toggleGptSearch } from "../utils/GptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/Constant";
import { changelanguage } from "../utils/ConfigSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGPT = useSelector((store)=>store.gpt.showGPT)
  const navigate = useNavigate();
  const location = useLocation(); 
  const dispatch = useDispatch();


  useEffect(() => {
    let subscription;

    const setupAuthListener = async () => {
      const { data } = await supabase.auth.onAuthStateChange((event, session) => {
        if (session?.user) {
          const { id, email } = session.user;
          dispatch(
            addUser({
              uid: id,
              email: email,
            })
          );

          
          if (location.pathname !== "/browse") {
            navigate("/browse");
          }
        } else {
          dispatch(removeUser());
          if (location.pathname !== "/") {
            navigate("/");
          }
        }
      });

      subscription = data?.subscription;
    };

    setupAuthListener();

    return () => {
      subscription?.unsubscribe();
    };
  }, [dispatch, navigate, location.pathname]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      dispatch(removeUser());
      navigate("/"); 
    }
  };

  const handletoggle =()=>{
    dispatch(toggleGptSearch())
  }
  const handleLanguageChange = (e)=>{

    dispatch(changelanguage(e.target.value))
      
  }



  return (
    <div className="px-8 py-2 w-screen bg-gradient-to-b from-black absolute z-10 flex justify-between items-center">

      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div>{showGPT &&
          <select className="m-2 p-2 bg-gray-900 text-white rounded-lg"  onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
        <button className="bg-purple-800 text-white m-4 px-4 py-2 rounded-lg" onClick={handletoggle}>{showGPT ? "Homepage" :"GPT-page"}</button>
          <button
            onClick={handleSignOut}
            className="bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
