import React from 'react';
import '../scss/components/auth.scss';

const NotFound = (props) => 
    (
        <div className="auth">
            <section className="bg"></section>
            <form onSubmit={(e)=> e.preventDefault()}>
                <h1>
                    <i className="fas fa-church"></i>
                </h1>
                <div className="parent">
                    <h1>Take Me Home</h1>
                    <img src="https://img.icons8.com/bubbles/100/000000/telescope.png" alt="telescope"/>
                    <button onClick={()=> props.history.push('/')}>
                        <i className="fas fa-sign-in-alt"></i>
                    </button>
                </div>
            </form>
        </div>
    )
export default NotFound;