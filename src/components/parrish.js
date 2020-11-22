import React,{ Component } from 'react';
import '../scss/components/auth.scss';

class Parrish extends Component{
    state = {
        paruwase:"",
        error:null
    }

    handlerchange = e => {
        const { id,value } = e.target;
        this.setState({ [id]:value,error: null });
    }

    handlerSubmit = e => {
        e.preventDefault()
        const { paruwase } = this.state;
        if(paruwase === ""){
            this.setState({ error : "Hitamo Paruwase" })
        }else{
            localStorage.setItem('Parrish',paruwase.toLowerCase())
            this.props.history.push('/owner')
        }
    }

    render(){
        const { paruwase,error } = this.state;
        return(
            <div className="auth">
                <section className="bg"></section>
                <form onSubmit={this.handlerSubmit}>
                    <h1 className="brand">
                        <i className="fas fa-church"></i>
                    </h1>
                    <div className="parent">
                        <h1>Paruwase ✝</h1>
                        <div className="input-field">
                            <span>⛪</span>
                            <select id="paruwase" value={paruwase} onChange={this.handlerchange}>
                                <option value="" disabled>Hitamo</option>
                                <option value="gikondo">Gikondo</option>
                                <option value="kiyovu">Kiyovu</option>
                                <option value="isano">Isano</option>
                            </select>
                        </div>
                        
                        { error !== null && <p id="error">  <i className="fas fa-exclamation-triangle"></i> Hitamo Paruwase </p>}

                        <button >
                            Komeza ↪
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Parrish;
