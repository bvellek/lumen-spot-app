import React from 'react';

export default class PageContainer extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
