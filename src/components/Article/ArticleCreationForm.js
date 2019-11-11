import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ExperimentForm = (props) => {
    return (
        <Form>
            <Form.Group controlId="article.title">
                <Form.Control type="text" placeholder="Article Title" />
            </Form.Group>

            <Form.Group controlId="article.shortIntro">
                <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default ExperimentForm;
