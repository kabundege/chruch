import React,{ Component } from 'react';
import '../scss/components/auth.scss';

class SignUp extends Component{
    state = {
        amazina:"",
        itorero_ryibanze:""
    }
    handlerchange = e => {
        const { name,value } = e.target;
        this.setState({ [name]:value });
    }
    render(){
        const { amazina,itorero_ryibanze } = this.state;
        return(
            <div className="auth">
                <section className="bg"></section>
                <form onSubmit={(e=>e.preventDefault())}>
                    <h1 className="brand">                    
                        <i className="fas fa-church"></i>
                    </h1>
                    <div className="parent">
                        <h1>Imyirondoro 🖊</h1>
                        <div className="input-field">
                            <span>👤</span>
                            <input 
                                type="text" 
                                value={amazina} 
                                name="amazina" 
                                placeholder="Amazina" 
                                onChange={this.handlerchange}/>
                        </div>
                        <div className="input-field">
                            <span>👥</span>
                            <input
                                type="text" 
                                value={itorero_ryibanze} 
                                name="itorero_ryibanze" 
                                placeholder="Itorero ry'ibanze" 
                                onChange={this.handlerchange}/>
                        </div>
                        <button 
                            onClick={()=> this.props.history.push('/parrish')}>
                            Komeza <i className="fas fa-sign-in-alt"></i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;
