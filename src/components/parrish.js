import React,{ Component } from 'react';
import '../scss/components/auth.scss';

class Parrish extends Component{
    state = {
        paruwase:"",
    }

    handlerchange = e => {
        const { id,value } = e.target;
        this.setState({ [id]:value });
    }

    render(){
        const { paruwase } = this.state;
        return(
            <div className="auth">
                <section className="bg"></section>
                <form onSubmit={(e=>e.preventDefault())}>
                    <h1>
                        <i className="fas fa-church"></i>
                    </h1>
                    <div className="parent">
                        <h1>Paruwase</h1>
                        <div className="input-field">
                            <span>⛪</span>
                            <select id="paruwase" value={paruwase} onChange={this.handlerchange}>
                                <option value="" disabled>Hitamo</option>
                                <option value="karugira">Karugira</option>
                                <option value="kiyovu">Kiyovu</option>
                                <option value="isano">Isano</option>
                            </select>
                        </div>
                        <button 
                            onClick={()=> this.props.history.push('/owner')}>
                            Komeza <i className="fas fa-sign-in-alt"></i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Parrish;
