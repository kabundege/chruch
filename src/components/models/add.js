import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/add.scss';

const Add = () => (
        <div className="Add">
            <h4>Created With <span style={{color:'red',position:'relative',top:'50%'}}>❤</span> <Link to="//github.com/kabundege" target="_blanck">Christophe K.</Link></h4>
        </div>
)
export default Add;