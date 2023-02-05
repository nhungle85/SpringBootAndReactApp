//import { useState } from 'react';
import {PropTypes} from 'prop-types'; 

export default function CounterButton({by, onIncrement, onDecrement}) {
    //const [total, setCount] = useState(defaultVal);

    function increasement() {
        onIncrement(by);
    }
    
    function decreasement() {
        onDecrement(by);
    }

    return(
        <div className="Counter">
            <div>
                <button className="counterButton" onClick={decreasement}>-{by}</button>
                <button className="counterButton" onClick={increasement}>+{by}</button>
            </div>
            
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number,
}

CounterButton.defaultProps = {
    by: 1,
}