import React from "react"
import { Strings } from "../../utils/strings";

export default class Empty extends React.Component {
  static defaultProps = {
    children: Strings.empty.default,
  };

  render() {
    return (
      <div className="text-center">
          <h3 className="text-primary margin-top">{this.props.children}</h3>
      </div>
    );
  }
}
