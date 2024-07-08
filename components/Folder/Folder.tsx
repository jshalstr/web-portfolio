import classes from './Folder.module.css';

interface IProps {
  notchPosition: string;
}

export default function Folder({ notchPosition }: IProps) {
  const notchClass =
    notchPosition === 'left'
      ? classes.folderLeft
      : notchPosition === 'middle'
        ? classes.folderMiddle
        : classes.folderRight;

  return <div className={`${classes.folder} ${notchClass}`}></div>;
}
