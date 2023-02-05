import { useState } from 'react';
import {PropTypes} from 'prop-types'; 
import './Counter.css'

export default function Counter({by, defaultVal}) {
    const [total, setCount] = useState(defaultVal);

    function increasement() {
        setCount(total + by);
    }
    
    function decreasement() {
        setCount(total - by);
    }

    return(
        <div className="Counter">
            <span className="count">{total}</span>
            <div>
                <button className="counterButton"onClick={decreasement}>-{by}</button>
                <button className="counterButton"onClick={increasement}>+{by}</button>
            </div>
            
        </div>
    )
}

Counter.propTypes = {
    by: PropTypes.number,
    defaultVal: PropTypes.number
}

Counter.defaultProps = {
    by: 1,
    defaultVal: 0
}