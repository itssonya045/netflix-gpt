import { supabase } from "../utils/Client"; // update path if different
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/UserSlice";

const Header = () => {
  const user = useSelector((store)=>store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  };



  return (
    <div className='px-8 py-2 w-screen bg-gradient-to-b from-black absolute z-10 flex justify-between items-center'>
        <img className="w-44 "src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"/>
        {user &&
        <div>
          <button onClick={ handleSignOut}
          className="bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">Sign Out</button>
        </div>}
    </div>
    
  )
}

export default Header