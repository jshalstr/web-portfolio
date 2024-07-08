import { useEffect, useRef, useState } from 'react';
import classes from './TextWithCursor.module.css';

interface IProps {
  children: JSX.Element;
}

export default function TextWithCursor({ children }: IProps) {
  const [childHeight, setChildHeight] = useState<number | null>(0);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Measure the height of the child element
  useEffect(() => {
    if (cursorRef.current && children && typeof children === 'object') {
      const childNode = cursorRef.current.previousSibling;
      if (childNode instanceof HTMLElement) {
        setChildHeight(childNode.offsetHeight);
      }
    }
  }, [children]);

  return (
    <span className={classes.text}>
      {children}
      <div
        ref={cursorRef}
        className={classes.cursor}
        style={{ height: childHeight !== null ? `${childHeight}px` : undefined }}
      />
    </span>
  );
}
