import React,{ Component } from 'react';
import '../scss/components/auth.scss';

class Parrish extends Component{
    state = {
        service:"",
    }
    handlerchange = e => {
        const { id,value } = e.target;
        this.setState({ [id]:value });
    }
    render(){
        const { service } = this.state;
        return(
            <div className="auth">
                <section className="bg"></section>
                <form onSubmit={(e=>e.preventDefault())}>
                    <h1>
                        <i className="fas fa-church"></i>
                    </h1>
                    <div className="parent">
                        <h1>Iteraniro <i style={{fontSize:"large",textShadow:"none"}} class="fas fa-sort-numeric-down"></i> </h1>
                        <div className="input-field">
                            <span>🏡</span>
                            <select id="service" value={service} onChange={this.handlerchange}>
                                <option value="" disabled>Hitamo</option>
                                <option value="1">Iry'ambere</option>
                                <option value="2">Irya kabiri</option>
                            </select>
                        </div>
                        <button    
                            onClick={()=> this.props.history.push('/final')}>
                            Emeza 👍
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Parrish;
