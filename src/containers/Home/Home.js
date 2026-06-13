import React, {Component, Fragment} from 'react';

import {Container, Jumbotron} from "reactstrap";

class Home extends Component {

    state = {}

    render() {
        return (
            <Fragment>
                <Jumbotron className = {"text-center"}>
                    <Container>
                        <h1 className={"display-4"}>Graphical Interface of Knowledge Structure</h1>
                        <p className={"lead"}>GIKS is designed to caputre, visually represent, and compare the
                            "knowledge structure" inherent in a text, which can be used to identify individual learner's
                            knowledge gaps and/or misconceptions</p>
                    </Container>
                </Jumbotron>
            </Fragment>
        );
    }
}

export default Home;