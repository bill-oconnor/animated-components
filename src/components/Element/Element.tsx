import React from 'react';
import './Element.scss';

export const Element: React.FunctionComponent<{ children: React.ReactNode }> =
  ({ children }) => {
    return <div className="Element">{children}</div>;
  };
