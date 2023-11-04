import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import "./Header.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // Define your styles here
  menuStyle: {
    position: "absolute",
    top: "25px",
  },
  menuTexts : {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: '700',
  },
  loginBox : {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    fontFamily: "'Manrope', sans-serif",
    fontWeight: '700',
  },
  callBox : {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: '700',
  }
}));

function Header() {
  const classes = useStyles();
  const [animalFood, setAnimalFoods] = useState(null);
  const [anchorElAnimals, setAnchorElAnimals] = useState(null);
  const [anchorElMedicines, setAnchorElMedicines] = useState(null);
  const [anchorElAssets, setAnchorElAssets] = useState(null);
  const [anchorElGrooming, setAnchorElGrooming] = useState(null);
  const [anchorElCheckUp, setAnchorElCheckUp] = useState(null);

  const handleClick = (event, str) => {
    if(str === 'animalFoods')
      setAnimalFoods(event.currentTarget);
    else if(str === 'animals')
      setAnchorElAnimals(event.currentTarget);
    else if(str === 'medicines')
    setAnchorElMedicines(event.currentTarget);
    else if(str === 'assets')
    setAnchorElAssets(event.currentTarget);
    else if(str === 'grooming')
    setAnchorElGrooming(event.currentTarget);
    else if(str === 'checkUp')
    setAnchorElCheckUp(event.currentTarget);
  };

  const handleClose = () => {
    setAnimalFoods(null);
    setAnchorElAnimals(null);
    setAnchorElMedicines(null);
    setAnchorElAssets(null);
    setAnchorElGrooming(null);
    setAnchorElCheckUp(null);
  };

  return (
    <div>
      <div className="navbar">
        <div className="logoDiv">
          <img
            src="https://www.petsy.online/cdn/shop/files/Petsy_Powered_By_Zigly_2023-08-31_Light_BG_200x80_eeecf7e4-8f86-4f45-8aa3-56005c977f58_200x80.png?v=1693476815"
            alt="Logo"
            width="150px"
          />
        </div>
        <div className="animalList">
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={classes.menuTexts}
              onClick={(e) => handleClick(e, 'animalFoods')}
            >
              Animal Foods
              {!animalFood ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </Button>
            <Menu
              anchorEl={animalFood}
              keepMounted
              open={Boolean(animalFood)}
              onClose={handleClose}
              style={{
                position: "absolute",
                top: "30px",
              }}
            >
              <MenuItem onClick={handleClose}>Dog Food</MenuItem>
              <MenuItem onClick={handleClose}>Cat Food</MenuItem>
              <MenuItem onClick={handleClose}>Fish Food</MenuItem>
              <MenuItem onClick={handleClose}>Bird Food</MenuItem>
              <MenuItem onClick={handleClose}>Small Animal Food</MenuItem>
            </Menu>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={classes.menuTexts}
              onClick={(e) => handleClick(e, 'animals')}
            >
              Animals
              {!anchorElAnimals ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </Button>
            <Menu
              anchorEl={anchorElAnimals}
              keepMounted
              open={Boolean(anchorElAnimals)}
              onClose={handleClose}
              style={{
                position: "absolute",
                top: "30px",
              }}
            >
              <MenuItem onClick={handleClose}>Dog</MenuItem>
              <MenuItem onClick={handleClose}>Cat</MenuItem>
              <MenuItem onClick={handleClose}>Fish</MenuItem>
              <MenuItem onClick={handleClose}>Bird</MenuItem>
              <MenuItem onClick={handleClose}>Small Animal</MenuItem>
            </Menu>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={classes.menuTexts}
              onClick={(e) => handleClick(e, 'medicines')}
            >
              Medicines
              {!anchorElMedicines ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </Button>
            <Menu
              anchorEl={anchorElMedicines}
              keepMounted
              open={Boolean(anchorElMedicines)}
              onClose={handleClose}
              style={{
                position: "absolute",
                top: "30px",
              }}
            >
              <MenuItem onClick={handleClose}>Option 1</MenuItem>
              <MenuItem onClick={handleClose}>Option 2</MenuItem>
              <MenuItem onClick={handleClose}>Option 3</MenuItem>
            </Menu>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={classes.menuTexts}
              onClick={(e) => handleClick(e, 'assets')}
            >
              Assets
              {!anchorElAssets ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </Button>
            <Menu
              anchorEl={anchorElAssets}
              keepMounted
              open={Boolean(anchorElAssets)}
              onClose={handleClose}
              style={{
                position: "absolute",
                top: "30px",
              }}
            >
              <MenuItem onClick={handleClose}>House</MenuItem>
              <MenuItem onClick={handleClose}>Toys</MenuItem>
              <MenuItem onClick={handleClose}>Bathing</MenuItem>
            </Menu>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={classes.menuTexts}
              onClick={(e) => handleClick(e, 'grooming')}
            >
              Grooming
              {!anchorElGrooming ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </Button>
            <Menu
              anchorEl={anchorElGrooming}
              keepMounted
              open={Boolean(anchorElGrooming)}
              onClose={handleClose}
              style={{
                position: "absolute",
                top: "30px",
              }}
            >
              <MenuItem onClick={handleClose}>Hair Cut</MenuItem>
              <MenuItem onClick={handleClose}>Bath</MenuItem>
            </Menu>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={classes.menuTexts}
              onClick={(e) => handleClick(e, 'checkUp')}
            >
              Check Up
              {!anchorElCheckUp ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </Button>
            <Menu
              anchorEl={anchorElCheckUp}
              keepMounted
              open={Boolean(anchorElCheckUp)}
              onClose={handleClose}
              style={{
                position: "absolute",
                top: "30px",
              }}
            >
              <MenuItem onClick={handleClose}>Doctor Consultancy</MenuItem>
            </Menu>
          </div>
        </div>
        <div className="loginDiv">
          <Button className={classes.callBox}>
            <CallOutlinedIcon/>
            <div>Call</div>
          </Button>
          <Button className={classes.loginBox}>
            <AccountCircleOutlinedIcon />
            <div>Login / Sign Up</div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
