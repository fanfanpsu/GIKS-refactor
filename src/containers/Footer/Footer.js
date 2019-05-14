import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Navbar} from 'reactstrap';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-address";

class Footer extends Component {
    constructor(props) {
        super(props);
        // this.state = {...};
    }

    state = {}

    componentDidMount() {
    }

    render() {
        return (
            <Fragment>

                <footer className={"pt-4 my-md-5 pt-md-5 border-top"}>
                    <div className="row">
                        <div className={"col-6 col-md"}>
                            <h5>Penn State Logo</h5>
                            <h5>COIL Logo</h5>
                        </div>
                        <div class="col-6 col-md">
                            <p>GIKS is designed to caputre, visually represent, and compare the "knowledge structure"
                                inherent in a text, which can be used to identify individual learner's knowledge gaps
                                and/or misconceptions.</p>
                        </div>
                        <div class="col-6 col-md">
                            <h5>About GIKS</h5>
                            <h5>Our Team</h5>
                            <h5>Contact</h5>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Footer, axios));