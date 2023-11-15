import { Avatar } from '@lobehub/ui';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { SearchResult } from '../type';
import { useStyles } from './style';

const ListItem = memo<SearchResult>(({ title, url }) => {
  const { styles } = useStyles();

  return (
    <a className={styles.link} href={url!} rel="noreferrer" target={'_blank'}>
      <Flexbox align={'center'} flex={1} gap={12} horizontal padding={12}>
        <Avatar avatar={title} background={'#000'} size={16} />
        <div>{title}</div>
      </Flexbox>
    </a>
  );
});

export default ListItem;
