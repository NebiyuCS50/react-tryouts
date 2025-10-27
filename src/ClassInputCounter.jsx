import React, { Component } from "react";

export default class ClassInputCounter extends Component {
  render() {
    const { count } = this.props;
    return <div>Number of Todo's = {count}</div>;
  }
}
