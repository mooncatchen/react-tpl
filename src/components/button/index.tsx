import React from 'react';
import { BaseReactProps } from '@/common';

import './button.less';

export interface ButtonProps extends BaseReactProps {
  type?: 'button' | 'submit' | 'reset';
}

export function Button(props: ButtonProps): React.ReactElement {
  const {
    type,
    style,
    children,
    className,
    onClick,
  } = props;

  return (
    <button
      type={type}
      className={`mcc-button ${className}`}
      style={style}
      onClick={onClick}
    >
      { children } 
    </button>
  );
}
