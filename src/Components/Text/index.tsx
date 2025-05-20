import React, { ReactNode } from 'react';
import { textColors, textSizes } from '../SharedStyles';

interface textProps {
  children: ReactNode;
  color?: 'white' | 'black' | 'gray' | 'text_primary';
  size?: 'x_small' | 'small' | 'medium' | 'large';
  textAlignment?: 'left' | 'right' | 'center';
  textTransform?: 'uppercase' | 'capitalize' | 'lowercase';
  styles?: string;
}

export function Text({
  children,
  color = 'text_primary',
  textAlignment = 'center',
  textTransform = 'lowercase',
  size = 'medium',
  styles = ''
}: textProps) {
  return (
    <>
      {
        <p
          className={`font-text ${textSizes[size]} ${textColors[color]}
        text-${textAlignment}  ${textTransform}
        ${styles}`}>
          {children}
        </p>
      }
    </>
  );
}
