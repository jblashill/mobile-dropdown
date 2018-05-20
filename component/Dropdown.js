import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import classNames from "classnames";

import "./../css/style.scss";

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    handleChange(val) {
        this.setState({
            value: value
        });
    }

    toggleOpen(e) {
        this.setState({
            isOpen: !this.state.isOpen
        });
        e.stopPropagation();
    }
    render() {
        const value = this.state.value || this.props.defaultValue;
        const baseClass = this.props.optionalBaseClassName,
            controlClass = classNames({
                [`${baseClass}__control`]: true
            }),
            valueClass = classNames({
                [`${baseClass}__value`]: true
            }),
            arrowClass = classNames({ [`${baseClass}__arrow`]: true }),
            overlayClass = classNames({
                [`${baseClass}__overlay`]: true,
                [`${baseClass}__overlay--visible`]: this.state.isOpen
            }),
            optionsWrapperClass = classNames({
                [`${baseClass}__option-wrapper1`]: true,
                [`${baseClass}__option-wrapper1--visible`]: this.state.isOpen
            }),
            optionsClass = classNames({
                [`${baseClass}__option-wrapper`]: true
            }),
            optionsTitle = classNames({
                [`${baseClass}__title`]: true
            }),
            options = React.Children.map(this.props.children, child => {
                // if (defaultValue && defaultValue === child.props.value) {
                return React.cloneElement(child, {
                    selected: value && value === child.props.value,
                    optionalBaseClass: this.props.optionalBaseClassName,
                    handleChange: this.handleChange
                });
                // }
            }),
            optionalDropdownTitle = this.props.optionalDropdownTitle ? (
                <div className={optionsTitle}>
                    {this.props.optionalDropdownTitle}
                </div>
            ) : null;

        return (
            <div className={baseClass}>
                <div
                    className={controlClass}
                    onClick={this.toggleOpen.bind(this)}
                >
                    <span className={valueClass}>
                        {this.props.placeholder || "Select"}
                    </span>
                    <span className={arrowClass} />
                </div>
                <div
                    className={overlayClass}
                    onClick={this.toggleOpen.bind(this)}
                >
                    <div className={optionsWrapperClass}>
                        {optionalDropdownTitle}
                        <div className={optionsClass}>{options}</div>
                    </div>
                </div>
            </div>
        );
    }
}

Dropdown.defaultProps = {
    optionalBaseClassName: "dropdown",
    optionalPlaceholder: "Seelct"
};

Dropdown.propTypes = {
    // You can declare that a prop is a specific JS type. By default, these
    // are all optional.
    optionalPlaceholder: PropTypes.string,
    optionalBaseClassName: PropTypes.string,
    children: PropTypes.array.isRequired,
    defaultValue: PropTypes.string,
    changeHandler: PropTypes.func.isRequired,
    optionalDropdownTitle: PropTypes.string.isRequired
};

export default Dropdown;
