import React,{ Component } from 'react';
import '../scss/components/auth.scss';

class Parrish extends Component{
    state = {
        paruwase:"Karugira",
        amazina:"Kabundege Christophe",
        itorero_ryibanze:"karugira",
        iteraniro:1
    }
    handlerchange = e => {
        const { name,value } = e.target;
        this.setState({ [name]:value });
    }
    render(){
        const { paruwase,amazina,itorero_ryibanze,iteraniro } = this.state;
        return(
            <div className="auth">
                <section className="bg"></section>
                <form onSubmit={(e=>e.preventDefault())}>
                    <h1>
                        <i className="fas fa-church"></i>
                    </h1>
                    <div className="parent">
                        <i style={{fontSize:"40px",margin:"3% 0",color:"green"}} className="far fa-check-circle"></i> 
                        <div className="input-field">
                            <span>👤</span>
                            <span style={{margin:"0px 5px"}}>{amazina}</span>
                        </div>
                        <div className="input-field">
                            <span>👥</span>
                            <span style={{margin:"0px 5px"}}>Itorero Ry'ibanze Rya {itorero_ryibanze}</span>
                        </div>

                        <div className="inputer">
                            <div className="input-field">
                                <span>⛪</span>
                                <span style={{marginLeft:"5px"}}>{paruwase}</span>
                            </div>
                            <div className="input-field">
                                <span>🛐</span>
                                <span style={{marginLeft:"5px"}}>iteraniro {iteraniro}</span>
                            </div>
                        </div>
                        <button style={{margin:"3% 0"}} onClick={()=> this.props.history.push('/')}>
                            Ahabanza <i className="fas fa-sign-in-alt"></i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Parrish;
