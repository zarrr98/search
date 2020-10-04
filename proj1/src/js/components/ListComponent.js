import React from "react";
import { ListGroup, Card } from "react-bootstrap";

export default class ListComponent extends React.Component {
  render() {
    return (
      <ListGroup>
        {this.props.data.map((item, i) => {
          return (
            <ListGroup.Item>
              <Card>
                <Card.Body>
                  <Card.Text>{item}</Card.Text>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}
