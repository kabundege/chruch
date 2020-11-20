import React,{ Component } from 'react';
import '../scss/components/auth.scss';

class SignUp extends Component{
    state = {
        search:""
    }
    handlerchange = e => {
        const { name,value } = e.target;
        this.setState({ [name]:value });
    }
    render(){
        const { search } = this.state;
        return(
            <div className="auth">
                <section className="bg"></section>
                <form onSubmit={(e=>e.preventDefault())}>
                    <h1 className="brand">                    
                        <i className="fas fa-church"></i>
                    </h1>
                    <div className="parent">
                        <h1>Hitamo 🔎</h1>
                        <div className="input-field">
                            <span>⛪</span>
                            <select id="search" value={search} onChange={this.handlerchange}>
                                <option value="" disabled>Hitamo</option>
                                <option value="karugira">Karugira</option>
                                <option value="kiyovu">Kiyovu</option>
                                <option value="isano">Isano</option>
                            </select>
                        </div>
                        <button >
                            Shakisha
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;
