import React from 'react';

interface linesProps {
  center?: boolean;
  color?: 'black' | 'primary';
}
export const TextUnderlines = ({ center, color = 'black' }: linesProps) => {
  const line = ' block h-px my-1';
  const colors = {
    black: 'bg-black',
    primary: 'bg-primaryText'
  };
  const Styles = {
    centerLines: center ? 'grid place-items-center m-0' : '',
    lineOne: `${colors[color]} ${line} w-16`,
    lineTwo: `${colors[color]} ${line} w-8`
  };

  return (
    <>
      {
        <div className={`m-0  ${Styles.centerLines}`}>
          <span className={Styles.lineOne}></span>
          <span className={Styles.lineTwo}></span>
        </div>
      }
    </>
  );
};
