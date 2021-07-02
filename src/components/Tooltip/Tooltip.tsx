import React from 'react';
import './Tooltip.scss';

export type TooltipProps = {
  renderContent: () => React.ReactNode;
  children: React.ReactNode;
};

export const Tooltip: React.FunctionComponent<TooltipProps> = (
  props: TooltipProps
) => {
  const { children, renderContent } = props;

  // TODO can this be done in css without state?? I think yes, i can just set the :first stuff
  return (
    <div className="Tooltip">
      <div className="Tooltip__content">{renderContent()}</div>
      <div className="Tooltip__hoverable">{children}</div>
    </div>
  );
};

/** thinking the structure is that the children is the text that you hover to show the thing, and a prop with the text in the tooltip? */
