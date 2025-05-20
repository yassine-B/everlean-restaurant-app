import React, { ReactNode } from 'react';
import { titleColors, titleSizes } from '../SharedStyles';

interface titleProps {
  children: ReactNode;
  color?: 'black' | 'white' | 'yellow' | 'primary';
  titleAlignment?: 'left' | 'right' | 'center';
  titleTransform?: 'uppercase' | 'capitalize';
  titleWeight?: 'bold' | 'semibold';
  size?: 'small' | 'medium' | 'large' | 'x_large';
  styles?: string;
}

export function Title({
  children,
  size = 'small',
  color = 'primary',
  titleWeight = 'bold',
  titleTransform = 'capitalize',
  titleAlignment = 'center',
  styles = ''
}: titleProps) {
  return (
    <>
      {
        <h1
          className={`font-title ${titleSizes[size]} ${titleColors[color]} font-${titleWeight} text-${titleAlignment}  ${titleTransform} ${styles} `}>
          {children}
        </h1>
      }
    </>
  );
}
