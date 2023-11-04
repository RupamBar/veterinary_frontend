import React, {useState, useEffect} from 'react';
import "./Profile.css";
import { Button } from "@material-ui/core";
import { account, ID, databases } from "../../appwrite/appwrite";
import {makeStyles} from "@material-ui/core";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import AuthorizedHeader from '../../components/Header/AuthorizedHeader';

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
        user ? 
        <>
          <AuthorizedHeader user={user} handleLogout={handleLogout}/>
          <div className='adminDashboard'>
            <div className='innerDiv'>
              <h2 className='dashboardHeader'>Admin Dashboard</h2>
              <div className='usersMainContainer firstelement'>
                <h3>Manage Users</h3>
                <div className='userContainer'>
                  <div className='dashCards'>Manage Customers</div>
                  <div className='dashCards'>Manage Doctors</div>
                  <div className='dashCards'>Manage Employees</div>
                </div>
              </div>
              <div className='usersMainContainer'>
                <h3>Manage Products</h3>
                <div className='userContainer'>
                  <div className='dashCards'>Manage Animals</div>
                  <div className='dashCards'>Manage Foods</div>
                  <div className='dashCards'>Manage Assets</div>
                  <div className='dashCards'>Manage Medicines</div>
                </div>
              </div>
              <div className='usersMainContainer'>
                <h3>Manage Services</h3>
                <div className='userContainer'>
                  <div className='dashCards'>Check ups</div>
                  <div className='dashCards'>Grooming</div>
                  <div className='dashCards'>Prescriptions</div>
                  <div className='dashCards'>Payments</div>
                </div>
              </div>
            </div>
          </div>
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
  )
}

export default Profile