import '../scss/components/auth.scss';
import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Auth = (props) => {
    const [ phone, setPhone ] = useState('')

    return(
        <div className="auth">
            <section className="bg"></section>
            <form onSubmit={(e=>e.preventDefault())}>
                <h1>
                    <i className="fas fa-church"></i>
                </h1>
                <div className="parent">
                    <h1>Muraho 👋</h1>
                    <div className="tel">
                        <PhoneInput
                            placeholder="78 3456 789"
                            value={phone}
                            onChange={setPhone}
                            defaultCountry="RW"
                            />
                    </div>
                    <button onClick={()=> props.history.push('/signup')}>
                        komeza <i className="fas fa-sign-in-alt"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Auth;