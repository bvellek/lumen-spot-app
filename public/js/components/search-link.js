import React from 'react';
import { Link } from 'react-router';

export default function SearchLink(props) {
  return (
    <Link className="sliding-middle-out" to="/location">{props.linkTitle}</Link>
  );
};


SearchLink.propTypes = {
  linkTitle: React.PropTypes.string,
};
