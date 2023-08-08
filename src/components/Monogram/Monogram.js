import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="40"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
       
<path d="M14.36 28.8C11.7467 28.8 9.4 28.16 7.32 26.88C5.26667 25.6 3.65333 23.8667 2.48 21.68C1.33333 19.4667 0.76 17.04 0.76 14.4C0.76 11.8667 1.26667 9.57333 2.28 7.52C3.29333 5.44 4.73333 3.8 6.6 2.6C8.49333 1.4 10.68 0.8 13.16 0.8C15.4533 0.8 17.4267 1.10667 19.08 1.72C20.76 2.30667 21.9867 3.06667 22.76 4C23.1867 4.53333 23.4533 5.24 23.56 6.12C23.6933 7 23.76 8.09333 23.76 9.4H22.96C22.4533 7.05333 21.4933 5.30667 20.08 4.16C18.6667 2.98667 16.76 2.4 14.36 2.4C12.2 2.4 10.4 2.97333 8.96 4.12C7.52 5.24 6.45333 6.70667 5.76 8.52C5.09333 10.3333 4.76 12.2933 4.76 14.4C4.76 18.9067 5.64 22.1733 7.4 24.2C9.16 26.2 11.48 27.2 14.36 27.2C15.72 27.2 16.88 27.08 17.84 26.84C18.8 26.6 19.7067 26.2533 20.56 25.8V18.84C20.56 17.9333 20.7067 17.1467 21 16.48C21.2933 15.8133 21.92 15.2667 22.88 14.84C23.8667 14.3867 25.2933 14.16 27.16 14.16V14.96C25.96 14.96 25.16 15.2667 24.76 15.88C24.36 16.4933 24.16 17.4533 24.16 18.76V26.28C22.72 27.16 21.2133 27.8 19.64 28.2C18.0667 28.6 16.3067 28.8 14.36 28.8Z" fill="white"/>


        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
