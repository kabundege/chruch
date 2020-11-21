import React from 'react';
import '../../scss/components/modal.scss';
import Loader from "react-spinners/HashLoader";

export default ({ type,data,loading,closer }) => {
    console.log(data)
    return !loading ?
        <div className="search">
        <span className="closer" onClick={()=>closer()}>x</span>
        </div> : <div className="loader"> <Loader/>  </div>;
    
}