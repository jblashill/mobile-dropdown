import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import classNames from "classnames";

class Option extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = () => {
        this.props.handleChange(this.props.value);
    };
    render() {
        const baseClass = this.props.optionalBaseClassName,
            optionClass = classNames({
                [`${baseClass}__option`]: true,
                [`${baseClass}__option--selected`]: this.props.selected
            });

        return (
            <div className={optionClass} onClick={this.handleChange}>
                {this.props.children}
            </div>
        );
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
