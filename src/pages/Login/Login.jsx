import React, { useState } from "react";
import { account, ID } from "../../appwrite/appwrite";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4, validate } from 'uuid';
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';

const useStyles = makeStyles({
  formControlStyle : {
    width : '20vw',
  },
  textFieldStyle : {
    marginTop : '20px'
  },
  formBtn : {
    marginTop : "60px",
    backgroundColor: "DodgerBlue",
    color: "white",
    padding: "5px 20px",
  },
});

function Login() {
  const classes = useStyles();
  const navigate = useNavigate();
  const regex = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*(?=.*[A-Z]).*(?=.*[a-z]).*(?=.*[0-9]).{8}$/;
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState(false);

  const funcDemo = async (e) => {
    e.preventDefault();

    try
    {
      const res = await account.createEmailSession(userData.email, userData.password);
      toast.success("Logged in successfully", {
        theme: "colored",
      })
      navigate('/profile');
    }
    catch(err)
    {
      console.log("Error :?", err.message);
      toast.error(err.message, {
        theme: "colored",
      })
    }
  };

  return (
    <div>
      <Header />
      {/* Sign Up form */}
      <div className="signUpForm">
        <div>
          <div>
            <img
              src="https://images.newscientist.com/wp-content/uploads/2021/12/14112035/PRI_214918718.jpg"
              alt=""
              width="700px"
            />
          </div>
        </div>
        <div className="form">
          <FormControl className={classes.formControlStyle}>
            <h3>Login</h3>
            <TextField id="standard-basic" label="Email" variant="standard" className={classes.textFieldStyle} 
            onChange={(e) => {
              setUserData({
                ...userData,
                email : e.target.value
              });
            }}/>
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              variant="standard"
              className={classes.textFieldStyle}
              onChange={(e) => {
                if(!regex.test(e.target.value))
                {
                  setErr("Please put atleast 8 characters with special, uppercase, lowercase characters and number");
                }
                else
                {
                  setErr(false)
                }
                setUserData({
                  ...userData,
                  password : e.target.value
                });
              }}
            />
            {err ? <div className="errMsg">{err}</div> : null}
            <Button
              className={classes.formBtn}
              onClick={(e) => {
                if(err)
                {
                  toast.error("Please put valid credentials", {
                    theme: "colored",
                  })
                }
                else
                {
                  funcDemo(e)
                }
              }}
            >
              Submit
            </Button>
            <div className="loginLink" onClick={(e) => {navigate('/sign-up')}}>New here? Sign up</div>
          </FormControl>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
