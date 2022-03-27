import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class KeywordInput extends Component {
  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.Keywords">
          <Form.Label>Enter Keywords</Form.Label>
          <Form.Control as="textarea" rows={2} />
        </Form.Group>
      </Form>
    );
  }
}

export default KeywordInput;