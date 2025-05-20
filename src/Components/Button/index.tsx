import React, { ReactNode } from 'react';
import { styles as Styles, defaultButtonStyles } from './Styles';

interface buttonProps {
  children: ReactNode;
  type?: 'button' | 'submit';
  bgColor?: 'yellow' | 'gray';
  shape?: 'default' | 'rounded' | 'normal';
  onClick: () => void;
  styles?: string;
}

export const buttonDefaultStyles =
  'px-4 py-1 mx-1 my-0 font-semibold capitalize text-sm  focus:outline-none';

export const buttonStyles = {
  rounded: ' rounded-full',
  normal: ' rounded',
  yellow: 'bg-yellow-500 hover:bg-yellow-600 text-black',
  gray: 'bg-gray-100 text-black hover:bg-gray-300 '
};

export function Button({
  children,
  bgColor = 'yellow',
  shape = 'normal',
  type = 'button',
  styles = '',
  onClick
}: buttonProps) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={` ${defaultButtonStyles} 
        ${Styles[bgColor]}
         ${shape === 'default' ? '' : Styles[shape]} ${styles}`}>
        {children}
      </button>
    </>
  );
}
