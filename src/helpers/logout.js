import '../scss/components/logout.scss';
import { connect } from 'react-redux'
import React,{ useState,useEffect } from 'react';
import { motion,AnimatePresence } from 'framer-motion';

const nextVariants = {
    hidden: { 
      y: '-100vw' 
    },
    visible: {
      y: "0vw",
      x:0,
      transition: { type: 'spring', stiffness: 80 }
    },
    exit: {
      x: "-100vh",
      transition: { ease: 'easeInOut',delay:0.5 }
    },
  };

const Logout = () => 
    <AnimatePresence>
                <motion.div className="logout"
                    variants={nextVariants} 
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={()=>{
                        localStorage.clear();
                        window.location.assign('/')
                    }}
                >
                    <div>
                    <i className="fas fa-power-off"></i>
                    </div>
                    <div className="words">
                        <span> Sohoka </span>
                    </div>
                </motion.div>
    </AnimatePresence>

const mapStateToProps = state => ({
    authData : state.auth.userInfo
})

export default connect(mapStateToProps)(Logout);
