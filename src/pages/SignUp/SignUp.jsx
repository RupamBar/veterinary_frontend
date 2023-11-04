import React, { useState } from "react";
import { account, ID } from "../../appwrite/appwrite";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import "./SignUp.css"

function SignUp() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const funcDemo = async (e) => {
    e.preventDefault();

    const promise = account.create(
      ID.unique(),
      userData.email,
      userData.password,
      userData.name
    );

    promise.then(
      (res) => {
        console.log(res, "res????");
      },
      (error) => {
        console.log("Error occured : ", error);
      }
    );
  };

  return (
    <div>
        <Header/>
        {/* Sign Up form */}
        <div className="signUpForm">
            <div>
                <div>
                    <img src="https://images.newscientist.com/wp-content/uploads/2021/12/14112035/PRI_214918718.jpg" alt="" width="700px"/>
                </div>
            </div>
            <div className="form">
                <h3>Sign Up</h3>
                <div className="signUpFields">
                    <TextField id="standard-basic" label="Email" variant="standard" />
                </div>
                <div className="signUpFields">
                    <TextField id="standard-basic" label="Password" variant="standard" />
                </div>
                <div className="signUpFields">
                    <TextField id="standard-basic" label="Name" variant="standard" />
                </div>
                <div className="signUpFieldsBtn">
                    <Button style={{backgroundColor:'blue', color:'white', padding:'5px 20px'}}>Submit</Button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default SignUp;
