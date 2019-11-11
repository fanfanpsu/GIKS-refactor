import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ExperimentForm = (props) => {
    return (
        <Form>
            <Form.Group controlId="experiment.title">
                <Form.Label>E</Form.Label>
                <Form.Control type="text" placeholder="Experiment Title" />
            </Form.Group>

            <Form.Group controlId="experiment.shortIntro">
                <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
                {/*TODO this needs to be type number */}
                <Form.Control type="number" placeholder="Number of participants" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default ExperimentForm;
