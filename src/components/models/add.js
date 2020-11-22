import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/add.scss';

const Add = () => (
        <div className="Add">
            <h4>Created with <span style={{color:'red',fontSize:"30px"}}>❤</span> <Link to="//github.com/kabundege">Christophe Kabundege <span>🔗</span></Link></h4>
        </div>
)
export default Add;