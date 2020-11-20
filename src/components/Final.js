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
        const { paruwasi,amazina,service,date } = this.props.Book.Booking;
        return(
            <div className="auth">
                <section className="bg"></section>
                <form onSubmit={(e=>e.preventDefault())}>
                    <h1>
                        <i className="fas fa-church"></i>
                    </h1>
                    <div className="parent">
                        <i style={{fontSize:"40px",margin:"3% 0",color:"green"}} className="far fa-check-circle"></i> 
                        
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
                            <span style={{margin:"0px 5px"}}>Ku cyumweru Tariki {date}/{new Date().getMonth()}/{new Date().getFullYear()}</span>
                        </div>
                        </div>
                        <button className="end" style={{margin:"3% 0"}} onClick={()=>{
                                localStorage.clear();
                                window.location.assign('/')
                             }}>
                            Sohoka <i className="fas fa-sign-in-alt"></i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Book: state.book
})

export default connect(mapStateToProps)(Parrish);
