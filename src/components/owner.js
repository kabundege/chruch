import React,{ Component } from 'react';
import '../scss/components/auth.scss';
import { motion } from 'framer-motion';

class Owner extends Component{
    state = {
        owner:"umubyeyi",
        amazina:""
    }
    handlerchange = e => {
        const { name,value } = e.target;
        this.setState({ [name]:value });
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
        const { owner,amazina } = this.state;
        return(
            <div className="auth">
                <section className="bg"></section>
                <form onSubmit={(e=>e.preventDefault())}>
                    <h1>
                        <i className="fas fa-church"></i>
                    </h1>
                    <div className="parent">
                        <h1>Uwiyandikisha</h1>
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
                        <button onClick={()=> this.props.history.push('/subscribe')}>
                            Komeza <i className="fas fa-sign-in-alt"></i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Owner;
