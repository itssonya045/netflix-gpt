import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { supabase } from '../utils/Client';
import { useNavigate } from 'react-router-dom';
const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          const { id, email,  } = session.user;

          dispatch(
            addUser({
              uid: id,
              email: email,
              
             
            })
          );
        } else {
          dispatch(removeUser());
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
