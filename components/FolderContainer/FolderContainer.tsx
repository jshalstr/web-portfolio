import { Flex } from '@mantine/core';
import Folder from '../Folder/Folder';
import classes from './FolderContainer.module.css';

export default function FolderContainer() {
  return (
    <Flex justify="center" className={classes.folderContainer}>
      <Folder notchPosition="left" />
      <Folder notchPosition="middle" />
      <Folder notchPosition="right" />
    </Flex>
  );
}
