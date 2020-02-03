import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';

class Layout extends Component {
    state = {

    }

    render () {
        // Note this is a "high order component" example.
        return (
            <Fragment>
                <main className={"container-fluid" }>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
};

export default connect( mapStateToProps )( Layout );