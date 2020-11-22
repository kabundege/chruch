import '../scss/components/auth.scss';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import React,{ Component } from 'react';
import Modal from './models/SearchResults';
import { GetAllBooks } from '../store/actions/actions';

class Dash extends Component{
    state = {
        search:"",
        type:"",
        showModal:false,
    }
    handlerchange = e => {
        const { id,value } = e.target;
        this.setState({ [id]:value });
    }

    componentDidMount(){
        this.props.getBooks();
    }

    handlerSubmit = e => {
        e.preventDefault()
        this.setState({ showModal : true })
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
        const { search,type,showModal } = this.state;
        const { loading } = this.props.authData;
        return(
            <div className="auth">
                {showModal && <Modal 
                    searchContent={search}
                    type={this.state.type} 
                    loading={loading} 
                    data={this.props.bookData}
                    closer={()=>this.setState({ showModal : false })}
                    />}
                <section className="bg"></section>
                <form onSubmit={this.handlerSubmit}>
                    <h1 className="brand">                    
                        <i className="fas fa-church"></i>
                    </h1>
                    <div className="parent">
                        <h1>Ishakiro 🔎</h1>
                        <div className="input-field">
                            { type === "" && <span>⚡</span>}
                            <select id="type" value={type} onChange={this.handlerchange} required>
                                <option value="" disabled>Hitamo</option>
                                <option value="amazina">👤 Umuntu </option>
                                <option value="paruwasi">⛪ Paruwasi</option>
                                <option value="itorero_ryibanze">👥 Itorero ryibanze </option>
                            </select>
                        </div>
                        { type !== "" && 
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
                                    required
                                    type="text" 
                                    value={search} 
                                    id="search" 
                                    autoFocus={ window.screen.width > 700 ? true : false }
                                    placeholder={"Injiza mo " + type + ", Aha..."}
                                    onChange={this.handlerchange}/>
                            </motion.div>
                            </>
                        }
                        <button >
                            Shakisha
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    bookData : state.book.Booking,
    authData: state.auth,
})

const mapDispatchToProps = dispatch => ({
    getBooks: () => dispatch(GetAllBooks())
})

export default connect(mapStateToProps,mapDispatchToProps)(Dash);
