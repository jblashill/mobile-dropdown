// export default props => {
//     if (typeof props.children === "string") {
//         return <div >{props.children}</div>;
//     } else {
//         return props.children;
//     }
// };

import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import classNames from "classnames";

import "./../css/style.scss";

class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    handleChange() {
        this.props.handleChange(this.props.value);
    }
    render() {
        const baseClass = this.props.optionalBaseClassName,
            optionClass = classNames({
                [`${baseClass}__option`]: true
            });

        // if (typeof this.props.children === "string") {
        return (
            <div className={optionClass} onClick={this.handleChange}>
                {this.props.children}
            </div>
        );
        // } else {
        //     return this.props.children;
        // }
    }
}

Option.defaultProps = {
    optionalBaseClassName: "dropdown"
};

Option.propTypes = {
    optionalBaseClassName: PropTypes.string,
    value: PropTypes.string.isRequired
};

export default Option;
