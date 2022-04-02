import React, {useState} from 'react';
import {connect} from "react-redux";
import {increment, decrement} from "./App";

function Counter(props) {

    const handleIncrement = () => {
        props.increment()
    }

    const handleDecrement = () => {
        props.decrement()
    }
    return (
        <div className="counter">
            <h2>Counter</h2>
            <div>
                <button onClick={handleDecrement}>-</button>
                <span className="count">{props.count}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

const mapDispatchToProps = {
    increment,
    decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);