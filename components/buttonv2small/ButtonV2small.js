import { useEffect, useRef } from 'react';
import Styles from './ButtonV2small.module.css';

function ButtonV2Small({ className, children, ...otherProps }) {
  const ref = useRef();

  useEffect(() => {
    ref.current.style.setProperty('--x', `50%`);
    ref.current.style.setProperty('--y', `50%`);
  }, []);

  const handleMouseMove = (e) => {
    const x = e.clientX - ref.current.getBoundingClientRect().left;
    const y = e.clientY - ref.current.getBoundingClientRect().top;

    ref.current.style.setProperty('--x', `${x}px`);
    ref.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={(e) => handleMouseMove(e)}
      className={`${Styles.rippleButton} ${className}`}
      {...otherProps}
    >
      <span>{children}</span>
    </div>
  );
}

export default ButtonV2Small;