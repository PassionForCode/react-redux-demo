import {useDispatch, useSelector} from "react-redux";
import {buyIce} from "../actions/iceActions";


function HooksIceContainer(props) {

    //alternative for mapping state to props - use selector hook
    const numIce = useSelector((state)=> {
        return state.ice.numIce
    })

    // allows to use dispatch method directly in the code (used in button onClick event)
    const dispatch = useDispatch();

    return (
        <div>
            <h2>HooksIceContainer numIce {numIce}</h2>
            <button onClick={() => dispatch(buyIce())}>Buy Hook ICE</button>
        </div>
    );
}

export default HooksIceContainer;