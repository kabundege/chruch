import React, { useState } from 'react';
import Bible from '../assets/bible.jpg'
import '../scss/components/auth.scss';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Auth = () => {
    const [ greeting,SetGreeting ] = useState('Welcome')
    const [ phone, setPhone ] = useState('')

    return(
        <div className="auth">
            <section></section>
            <form>
                <h1>
                    <i className="fas fa-church"></i>
                </h1>
                <div className="parent">
                    <h1>{greeting}</h1>
                    <div className="tel">
                        <PhoneInput
                            placeholder="78 3456 789"
                            value={phone}
                            onChange={setPhone}
                            defaultCountry="RW"
                            />
                    </div>
                    <button>
                        <i className="fas fa-sign-in-alt"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Auth;