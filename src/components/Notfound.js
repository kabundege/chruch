import React from 'react';
import '../scss/components/auth.scss';

const NotFound = (props) => 
    (
        <div className="auth">
            <section className="bg"></section>
            <form onSubmit={(e)=> e.preventDefault()}>
                    <h1 className="brand">                    
                        <i className="fas fa-church"></i>
                    </h1>
                <div className="parent">
                    <h1>Take Me Home </h1>
                    <p style={{fontSize:"50px"}}>⛪</p>
                    <button onClick={()=> props.history.push('/')}>
                        Ahabanza <i className="fas fa-sign-in-alt"></i>
                    </button>
                </div>
            </form>
        </div>
    )
export default NotFound;