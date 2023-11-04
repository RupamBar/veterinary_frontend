import React, {useState, useEffect} from 'react';
import "./Profile.css";
import { Button } from "@material-ui/core";
import { account, ID, databases } from "../../appwrite/appwrite";
import {makeStyles} from "@material-ui/core";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  logoutBtn : {
    backgroundColor : 'red',
    color : 'white'
  },
  formBtn : {
    marginTop : "60px",
    backgroundColor: "DodgerBlue",
    color: "white",
    padding: "5px 20px",
  },
});

function Profile() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const getUserData = async() => {
    try
    {
      const res = await account.get();
      setUser(res);
      console.log(res, "resssss???");
    }
    catch(err)
    {
      console.log("Err", err);
    }
  };

  const handleLogout = async() => {
    try
    {
      const res = await account.deleteSession("current");
      toast.success("Logged out successfully", {
        theme: "colored",
      })
      navigate("/");
    }
    catch(err)
    {
      console.log("Err", err);
    }
  };

  useEffect(() => {
    getUserData()
  }, []);

  return (
    <div>
      {
        user ? 
        <>
          <div>Profile</div>
          <Button className={classes.logoutBtn} onClick={handleLogout}>Logout</Button>
        </>
        :
        <>
          <div>401 : You are not authorized to view this page</div>
          <div>
            <Button onClick={(e) => {navigate("/login")}} className={classes.formBtn}>
              Login
            </Button>
          </div>
        </>
      }
      
    </div>
  )
}

export default Profile