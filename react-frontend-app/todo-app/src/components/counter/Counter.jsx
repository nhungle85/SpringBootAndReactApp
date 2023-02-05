import { useState } from 'react';
import './Counter.css'
import CounterButton from './CounterButton';

export default function Counter() {
    const [total, setCount] = useState(0);

    function increasement(by) {
        setCount(total + by);
    }
    
    function decreasement(by) {
        setCount(total - by);
    }

    function resetTotal() {
        setCount(0);
    }

    return(
        <div className="Counter">
            <span className="count">{total}</span>
            <div>
                <CounterButton by={1} onIncrement={increasement} onDecrement={decreasement}/>
                <CounterButton by={2} onIncrement={increasement} onDecrement={decreasement}/>
                <CounterButton by={3} onIncrement={increasement} onDecrement={decreasement}/>
            </div>
            <button className="resetButton" onClick={resetTotal}>Reset</button>
        </div>
    )
}