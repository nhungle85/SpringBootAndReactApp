//import { useState } from 'react';
import {PropTypes} from 'prop-types'; 

export default function CounterButton({by, onIncrement, onDecrement}) {
    //const [total, setCount] = useState(defaultVal);

    return(
        <div className="Counter">
            <div>
                <button className="counterButton" onClick={() => onDecrement(by)}>-{by}</button>
                <button className="counterButton" onClick={() => onIncrement(by)}>+{by}</button>
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