import { connect } from 'react-redux';
import '../scss/components/auth.scss';
import React, { Component } from 'react';
import 'react-phone-number-input/style.css';
import Loader from "react-spinners/BeatLoader";
import { SignIn } from '../store/actions/actions';
import PhoneInput from 'react-phone-number-input';

class Auth extends Component{
    state = {
        phone:'',
        submitted:false,
        error:""
    }

    handlerChange = data => {
        if(data){
            data.length >= 14 ?
            this.setState({ error: 'imibare 9 yuzuye' }):
            this.setState({ phone: data,error:"" })
        }
    }

    handlerSubmit = e => {
        e.preventDefault()
        this.setState({
            submitted:true
        })

        if(this.state.phone.length < 13 ){
            this.setState({ error: 'imibare 9 Ntiruzura' })
        }else{
            this.props.login({ phonenumber: `${this.state.phone}` })
        }
    }

    componentDidUpdate(){
        const { submitted,phone } = this.state;
        const { loading,authError } = this.props.Authdata;
        if(!loading&&submitted&&authError!==""){
            if (`${authError}`.includes('phonenumber is not allowed to be empty')){
                this.setState({ submitted: false })
            }else{
                localStorage.setItem('phoneNumber',`${phone}`);
                this.props.history.push('/signup')
            }
        }
        if(localStorage.getItem("token") !== null){
            this.props.history.push('/parrish')
        }
    }
    componentDidMount(){
        if(localStorage.getItem("token") !== null){
            this.props.history.push('/parrish')
        }
    }

    render(){
        const { phone,error } = this.state;
        const { loading,authError } = this.props.Authdata;
        return(
            <div className="auth">
                <section className="bg"></section>
                <form onSubmit={this.handlerSubmit}>
                    <h1 className="brand">
                        <i className="fas fa-church"></i>
                    </h1>
                    <div className="parent">
                        <h1>Muraho 👋</h1>
                        <div className="tel">
                            <PhoneInput
                                placeholder="78 3456 789"
                                value={phone}
                                onChange={this.handlerChange}
                                defaultCountry="RW"
                                />
                        </div>

                        { authError !== null && authError !== "" && <p id="error">  <i className="fas fa-exclamation-triangle"></i> Enter Your Phone Number </p>}

                        { error !== "" && <p id="error">  <i className="fas fa-exclamation-triangle"></i> {error}</p>}
                        
                        <button>
                            {   !loading ?
                                <>Injira <i className="fas fa-sign-in-alt"></i> </>:
                                <Loader/>
                            }
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Authdata : state.auth,
})

const mapDispathToProp = dispatch => ({
    login : (payload)=> dispatch(SignIn(payload))
})

export default connect(mapStateToProps,mapDispathToProp)(Auth);
