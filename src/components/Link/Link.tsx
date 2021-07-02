import React from 'react';
import './Link.scss';

export type LinkProps = {
  text: string;
  uri: string;
  className?: string;
};

export const Link: React.FunctionComponent<LinkProps> = ({
  text,
  uri,
  className = ''
}) => {
  return (
    <a className={`Link ${className}`} href={uri}>
      {text}
    </a>
  );
};
