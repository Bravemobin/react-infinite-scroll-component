import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ScrolleableTop from './ScrolleableTop';

const stories = storiesOf('Components', module);

stories.add('InfiniteScrollTop', () => <ScrolleableTop />, {
  info: { inline: true },
});
