import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import {} from 'react-bootstrap';

import * as actions from '../../store/actions/index';
import {updateObject, checkValidity} from '../../shared/utility';
import {Form} from "react-bootstrap";


class ArticleCreationTemplate extends Component {
    constructor(props) {
        super(props);
        //this.state = updateObject(this.state, {});  // Maybe no need to update any states
    }

    state = {}

    componentDidMount() {

    }

    render() {

        // textarea
        // nodes, and Synonyms
        // Graph
        return (
            <Fragment>
                <span>Test ArticleCreationTemplate</span>
                <Form.Group controlId="articleCreationForm.article_title">
                    <Form.Label>Article Title</Form.Label>
                    <Form.Control type="text" placeholder=""/>
                </Form.Group>

                <Form.Group controlId="articleCreationForm.article_content">
                    <Form.Label>Article Content</Form.Label>
                    <Form.Control as="textarea" rows="3"/>
                </Form.Group>

                <Form.Group controlId="articleCreationForm.article_node">
                    <Form.Label>Node</Form.Label>
                    <Form.Control as="text"/>
                </Form.Group>

            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.error   // TODO remember to set the nested state for reducer
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreationTemplate);