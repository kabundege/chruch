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
                        <button onClick={()=> this.props.history.push('/')}>
                            Ahabanza ↩
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Parrish;
