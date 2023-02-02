import { useState } from 'react';
import './Counter.css'

export default function CounterComponent() {
    const [total, setCount] = useState(0);

    function increasement() {
        setCount(total + 1);
    }
    
    function decreasement() {
        setCount(total - 1);
    }

    return(
        <div className="Counter">
            <span className="count">{total}</span>
            <div>
                <button className="counterButton"onClick={decreasement}>-1</button>
                <button className="counterButton"onClick={increasement}>+1</button>
            </div>
            
        </div>
    )
}