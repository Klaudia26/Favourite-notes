import React from 'react';
import STYLE from './Button.style';

// eslint-disable-next-line react/prop-types
const Button = ({ children, secondary }) => (
  <STYLE.Button secondary={secondary}>{children}</STYLE.Button>
);

export default Button;
