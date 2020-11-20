import { connect } from 'react-redux';
import '../scss/components/auth.scss';
import React,{ Component } from 'react';
import Loader from "react-spinners/BeatLoader";
import { Book } from '../store/actions/actions';

class Subscribe extends Component{
    state = {
        service:"",
        error:null,
        submitted:false
    }

    handlerchange = e => {
        const { id,value } = e.target;
        this.setState({ [id]:value,error:null });
    }

    handlerSubmit = e => {
        e.preventDefault()
        const { service } = this.state;
        if(service === ""){
            this.setState({ error : "Hitamo Iteraniro"})
        }else if(service !== ""){
            if(window.confirm("Ntacyo wahindura")){
                let data = {
                    paruwasi: `${localStorage.getItem('Parrish')}`,
                    service,
                }
                if(localStorage.getItem('owner')!==null){
                    data = {...data, amazina : localStorage.getItem('owner')}
                }
                this.setState({ submitted: true })
                this.props.BookAseat(data)
            }
        }
    }

    componentDidUpdate(){
        const { loading } = this.props.authData;
        const {  Booking } = this.props.bookData;
        if( this.state.submitted && !loading && Booking !== null ){
            this.props.history.push('/final')
        }
    }
    componentDidMount(){
        this.props.dawn()
    }

    render(){
        const { service,error } = this.state;
        const { loading } = this.props.authData;
        const { BookError } = this.props.bookData
        return(
            <div className="auth">
                <section className="bg"></section>
                <form onSubmit={this.handlerSubmit}>
                    <h1 className="brand">                    
                        <i className="fas fa-church"></i>
                    </h1>
                    <div className="parent">
                        <h1>Iteraniro <i style={{fontSize:"large",textShadow:"none"}} className="fas fa-sort-numeric-down"></i> </h1>
                        <div className="input-field">
                            <span>🏡</span>
                            <select id="service" value={service} onChange={this.handlerchange}>
                                <option value="" disabled>Hitamo</option>
                                <option value="1">Iry'ambere</option>
                                <option value="2">Irya kabiri</option>
                            </select>
                        </div>

                        { error !== null && <p id="error"><i className="fas fa-exclamation-triangle"></i> Hitamo Iteraniro</p>}
                        { BookError !== "" && <p id="error">  <i className="fas fa-exclamation-triangle"></i> {BookError} </p>}

                        { BookError !== 'Ntabwo Wakwiyandika Kabiri' ?
                            <button >
                            { loading ? <Loader/> : <> Emeza 👍 </> }
                            </button> :
                            <header onClick={()=> {
                                window.localStorage.clear();
                                window.location.assign('/')
                            }}>
                                Ababanza
                            </header> 
                        }
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authData: state.auth,
    bookData: state.book,
})

const mapDispatchToProps = dispatch => ({
    BookAseat : payload => dispatch(Book(payload)),
    dawn: () => dispatch({type:"clear",undefined})
})

export default connect(mapStateToProps,mapDispatchToProps)(Subscribe);
