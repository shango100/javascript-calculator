
import React from "react";
import ReactDOM from 'react-dom/client';
import * as PropTypes from "prop-types";
import DrumMachine from "./DrumMachine";

function Eyes(props) {
    return <p>My eyes are {props.color}</p>;
}
Eyes.defaultProps = {color:"blue"}
Eyes.propTypes = {color: PropTypes.string};

class Human extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <p>This is my head </p>
                <Eyes color/>
                <p>This is my head</p>
            </div>
        );
    }
};
export default Human;