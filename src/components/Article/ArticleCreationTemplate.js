import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {Form, FormGroup, Label} from "reactstrap";


class ArticleCreationTemplate extends Component {

    state = {}

    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <Form>
                    <span>Article Creation Template</span>
                    <FormGroup controlId="articleCreationForm.article_title">
                        <Label>Article Title</Label>
                    </FormGroup>

                    <FormGroup controlId="articleCreationForm.article_content">
                        <Label>Article Content</Label>
                    </FormGroup>

                </Form>
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreationTemplate);