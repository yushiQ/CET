import React,{useEffect} from "react";
import styles from "./index.css";

function Dialogs(props) {
  useEffect(()=>{
    props.setTimer()
  },[])
  
  return (
     <div className={styles.dialogs}><span>{props.title}</span></div>
  );
}

export default Dialogs