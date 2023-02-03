import React, {useState} from 'react';
import {buyCake} from "../actions/cakeActions";
import {connect} from "react-redux";

function NewCakeContainer(props) {
    const[number, setNumber] = useState(1);

    return (
        <div>
            <h2>New CakeContainer with connect NoOfCakes {props.numCakes}</h2>
            <label>No of cakes to buy:</label>
            <input type='text' value={number} onChange={(e)=> setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy cake</button>
        </div>
    );
}

// maps the state attributes into properties of the component
const mapStateToProps = (state) => {
    return {
        numCakes: state.cake.numCakes
    }
}

// map dispatch methods with assigned action to property in component
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);