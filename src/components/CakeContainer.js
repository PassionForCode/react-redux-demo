import React from 'react';
import {buyCake} from "../actions/cakeActions";
import {connect} from "react-redux";

function CakeContainer(props) {
    return (
        <div>
            <h2>CakeContainer with connect NoOfCakes {props.numCakes}</h2>

            <button onClick={props.buyCake}>Buy cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);