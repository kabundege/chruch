import React,{ Component } from 'react';
import { connect } from 'react-redux';
import '../scss/components/auth.scss';
import { motion } from 'framer-motion';

class Owner extends Component{
    state = {
        owner:"umubyeyi",
        amazina:"",
        error:null
    }
    
    handlerchange = e => {
        const { name,value } = e.target;
        this.setState({ [name]:value,error:null });
    }

    handlerSubmit = e =>{
        e.preventDefault();
        const { owner,amazina } = this.state;
        if(owner === 'umwana' && amazina === ""){
            this.setState({ error : "Amazina Y'umwana" })
        }else{
            if(amazina!==""){
                localStorage.setItem('owner',amazina)
            }
            this.props.history.push('/subscribe')
        }
    }

    nextVariants = {
        hidden: { 
          x: '-100vw' 
        },
        visible: {
          x: 0,
          transition: { type: 'spring', stiffness: 120 }
        },
        exit: {
          x: "-100vh",
          transition: { ease: 'easeInOut' }
        }
    }      
    render(){
        const { owner,amazina,error } = this.state;
        return(
            <div className="auth">
                <section className="bg"></section>
                <form onSubmit={this.handlerSubmit}>
                    <h1 className="brand">                    
                        <i className="fas fa-church"></i>
                    </h1>
                    <div className="parent">
                        <h1>Hitamo 📋</h1>
                        <div className="input-field">
                            <input
                                type="radio"
                                name="owner"
                                value="umubyeyi"
                                checked={owner === "umubyeyi" ? true : false} 
                                onChange={this.handlerchange}/> 
                                <span style={{marginLeft:"3px"}}>Umubyeyi 🙍</span>
                        </div>
                        <div className="input-field">
                            <input
                                type="radio"
                                name="owner"
                                value="umwana"
                                checked={owner === "umubyeyi" ? false : true} 
                                onChange={this.handlerchange}/>

                            <span style={{marginLeft:"3px"}}>Umwana 👪</span>
                        </div>
                        { owner === "umwana" && 
                            <>
                            <hr style={{backgroundImage:"white",color:"white",fontWeight:"bold",width:"80%"}}/>
                            <motion.div 
                                variants={this.nextVariants} 
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="input-field"
                            >
                                <span>👤</span>
                                <input 
                                    type="text" 
                                    value={amazina} 
                                    name="amazina" 
                                    placeholder="Amazina y'umwana" 
                                    onChange={this.handlerchange}/>
                            </motion.div>
                            </>
                        }

                        { error !== null && <p id="error">  <i className="fas fa-exclamation-triangle"></i> Enter Your Phone Number </p>}

                        <button >
                            Komeza ↪
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authdata : state.auth,
})

export default connect(mapStateToProps)(Owner);
