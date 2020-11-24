import { connect } from 'react-redux';
import '../scss/components/auth.scss';
import React,{ Component } from 'react';

class Parrish extends Component{
    state = {
        paruwase:"Karugira",
        amazina:"Kabundege Christophe",
        iteraniro:1
    }
    handlerchange = e => {
        const { name,value } = e.target;
        this.setState({ [name]:value });
    }
    render(){
        const { paruwasi,amazina,service,date } = this.props.Book;
        return(
            <div className="auth">
                <section className="bg"></section>
                <form onSubmit={(e=>e.preventDefault())}>
                    <h1 className="brand">
                        <i className="fas fa-church"></i>
                    </h1>
                    <div className="parent">
                        <h1>
                        Uhawe Ikaze 
                        { window.screen.width <= 700 ?
                            <i style={{fontSize:"40px",margin:"15% 0 -5% 10px",color:"green"}} className="far fa-check-circle"></i> :
                            <span style={{margin:"15% 0 -5% 10px",}}>👐</span>
                        }
                        </h1>
                        <div className="inputer">
                        <div className="input-field">
                                <span>⛪</span>
                                <span style={{marginLeft:"5px"}}>{paruwasi}</span>
                            </div>
                            <div className="input-field">
                                <span>🛐</span>
                                <span style={{marginLeft:"5px"}}>iteraniro { service === "1" ? 'ry\'ambere':'rya kabiri'}</span>
                            </div>

                        <div className="input-field">
                            <span>👤</span>
                            <span style={{margin:"0px 5px"}}>{amazina}</span>
                        </div>
                        <div className="input-field">
                            <span>📌</span>
                            <span style={{margin:"0px 5px"}}>Ku cyumweru Tariki <strong>{date}</strong></span>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Book: state.book.Booking
})

export default connect(mapStateToProps)(Parrish);
