import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {buyCake} from "../actions/cakeActions";

/* This Component uses the useSelector-Hook to get the state from the redux store */
function HooksCakeContainer(props) {

  // alternative instead of mapping state to props - use selector hook
  // state is injected by enclosing provider
  const numCakes = useSelector((state) => {
    return state.cake.numCakes
  })

  // allows to use dispatch method directly in the code (used in button onClick event)
  const dispatch = useDispatch();

  return (
    <div>
      <h2>HooksCakeContainer numCakes {numCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Hook cakes</button>
    </div>
  );
}

export default HooksCakeContainer;