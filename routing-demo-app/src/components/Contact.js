import React from 'react';

export const Contact = ({ history }) => {
  return <>
    <h1>Contact</h1>
    <button type="button" onClick={() => history.push('/')}>Go Home</button>
  </>;
};