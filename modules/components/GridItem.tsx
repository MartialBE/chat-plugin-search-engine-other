import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { SearchResult } from '../type';
import { useStyles } from './style';

const GridItem = memo<SearchResult>(({ title, url, description }) => {
  const { styles } = useStyles();

  return (
    <a className={styles.link} href={url!} rel="noreferrer" target={'_blank'}>
      <Flexbox distribution={'space-between'} flex={1} gap={12} padding={12}>
        <Flexbox>
          <Flexbox>
            <Flexbox className={styles.title}>{title}</Flexbox>
          </Flexbox>
          <Flexbox className={styles.desc}>{description}</Flexbox>
        </Flexbox>
      </Flexbox>
    </a>
  );
});

export default GridItem;
