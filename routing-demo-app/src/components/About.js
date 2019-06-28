import React from 'react';

export const About = ({ match }) => {
  return <h1>About {match.params.id}</h1>;
};