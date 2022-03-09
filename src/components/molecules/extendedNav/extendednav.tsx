import React from "react";
//import UpdateIcon from "@material-ui/icons/Update";
import RocketIcon from '@mui/icons-material/Rocket';
//import "./styles.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
 bread: {
  "&:hover": {
   color: "green"
  }
 }
});

export default function ExtendedNav() {
 const classes = useStyles();
  return (
   <div className={`head ${classes.bread}`}>
    <RocketIcon />
    <h1>Bread Text</h1>
   </div>
  );
 }