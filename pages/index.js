import Head from "next/head";
import React, { Component } from "react";

import Dropdown from "./../component/Dropdown";
import Option from "./../component/Option";

// export default () => (
//     <div>
//         <Head>
//             <title>My page title</title>
//             <meta
//                 name="viewport"
//                 content="initial-scale=1.0, width=device-width"
//             />
//         </Head>
//         <Dropdown placeholder="Select Value" changeHandler={this.handleDropdownChange}>
//             <Option value="1">Red</Option>
//             <Option value="2">Pink</Option>
//             <Option value="3">Green</Option>
//             <Option value="4">Blue</Option>
//         </Dropdown>
//     </div>
// );

// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import ReactDOM from "react-dom";
// import classNames from "classnames";

// import "./../css/style.scss";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleDropdownChange() {}
    render() {
        return (
            <div>
                <Head>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <title>My page title</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                </Head>
                <Dropdown
                    placeholder="Select Value"
                    changeHandler={this.handleDropdownChange}
                    optionalDropdownTitle="Choose Color"
                >
                    <Option value="1">Red</Option>
                    <Option value="2">Red</Option>
                    <Option value="3">Red</Option>
                    <Option value="4">Red</Option>
                    <Option value="5">Red</Option>
                    <Option value="6">Red</Option>
                    <Option value="7">Red</Option>
                    <Option value="8">Red</Option>
                    <Option value="9">Red</Option>
                    <Option value="10">Pink</Option>
                    <Option value="11">Green</Option>
                    <Option value="12">Blue</Option>
                </Dropdown>
            </div>
        );
    }
}
