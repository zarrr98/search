import React from "react";
import { InputGroup, FormControl, Form, Card } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Strings } from "../../utils/strings";

export default class SearchSegment extends React.Component {
  state = {
    searchedText: "",
  };

  handleChange = (e) => {
    const { values } = this.state;
    this.setState({ searchedText: e });
  };

  filterItems = () => {
    this.props.filterItems(this.state.searchedText);
  };

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            <h4>{Strings.searchSection.title}</h4>
          </Card.Title>
          <Card.Text>
            <React.Fragment>
              <Form.Row className="buttons-container">
                <Form.Group className="margin-right">
                  <Form.Label>{Strings.searchSection.label}</Form.Label>

                  <InputGroup>
                    <Form.Control
                      type={"text"}
                      placeholder={Strings.searchSection.placeholder}
                      onChange={(e) => this.handleChange(e.target.value)}
                      value={this.state.searchedText}
                    />
                    <InputGroup.Append>
                      <InputGroup.Text onClick={this.filterItems}>
                        <span className="margin-left">{Strings.searchSection.button}</span>
                        <FaSearch />
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
              </Form.Row>
            </React.Fragment>
          </Card.Text>
        </Card.Body>
      </Card>
      // </div>
    );
  }
}
