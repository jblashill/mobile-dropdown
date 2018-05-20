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

    handleChange = val => {
        this.setState({
            value: val
        });
    };

    toggleOpen = e => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        e.stopPropagation();
    };

    componentDidMount() {
        let optionTitleHeight = this.refs.optionsTitle
            ? this.refs.optionsTitle.clientHeight
            : 0;
        let optionWrapperHeight = this.refs.optionWrapper
            ? this.refs.optionWrapper.clientHeight
            : 0;
        let totalHeight = optionTitleHeight + optionWrapperHeight;
        if (totalHeight > window.innerHeight - 60) {
            totalHeight = window.innerHeight - 60;
        }

        this.setState({ optionsHeight: totalHeight });
    }
    render() {
        let selectedReactEl = null;
        const baseClass = this.props.optionalBaseClassName,
            //Class for control
            controlClass = classNames({
                [`${baseClass}__control`]: true
            }),
            //Class for value shown in control
            valueClass = classNames({ [`${baseClass}__value`]: true }),
            //Class for placeholder shown in control
            placeholderClass = classNames({
                [`${baseClass}__placeholder`]: true
            }),
            arrowClass = classNames({ [`${baseClass}__arrow`]: true }),
            //Overlay when options are shown
            overlayClass = classNames({
                [`${baseClass}__overlay`]: true,
                [`${baseClass}__overlay--visible`]: this.state.isOpen
            }),
            //First wrapper to give height to the container.
            optionsWrapperClass2 = classNames({
                [`${baseClass}__option-wrapper2`]: true,
                [`${baseClass}__option-wrapper2--visible`]: this.state.isOpen
            }),
            //Options wrapper to have scrollbar
            optionsWrapperClass1 = classNames({
                [`${baseClass}__option-wrapper1`]: true
            }),
            //Options wrapper having full height;
            optionsWrapperClass = classNames({
                [`${baseClass}__option-wrapper`]: true
            }),
            optionsTitle = classNames({
                [`${baseClass}__title`]: true
            });

        const value = this.state.value || this.props.defaultValue,
            optionElements = React.Children.map(this.props.children, child => {
                if (value && value === child.props.value) {
                    selectedReactEl = child;
                }
                return React.cloneElement(child, {
                    selected: value && value === child.props.value,
                    optionalBaseClass: this.props.optionalBaseClassName,
                    handleChange: this.handleChange.bind(this)
                });
            }),
            optionalDropdownTitle = this.props.optionalDropdownTitle ? (
                <div ref="optionsTitle" className={optionsTitle}>
                    {this.props.optionalDropdownTitle}
                </div>
            ) : null;

        return (
            <div className={baseClass} onClick={this.toggleOpen.bind(this)}>
                <div className={controlClass}>
                    {selectedReactEl ? (
                        <div className={valueClass}>
                            {selectedReactEl.props.children}
                        </div>
                    ) : (
                        <div className={placeholderClass}>
                            {this.props.placeholder || "Select"}
                        </div>
                    )}
                    <div className={arrowClass} />
                </div>
                <div className={overlayClass} />
                <div
                    className={optionsWrapperClass2}
                    style={{ height: this.state.optionsHeight }}
                >
                    {optionalDropdownTitle}
                    <div className={optionsWrapperClass1}>
                        <div
                            ref="optionWrapper"
                            className={optionsWrapperClass}
                        >
                            {optionElements}
                        </div>
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
