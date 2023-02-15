import * as React from 'react';
import { storiesOf } from '@storybook/react';

import WindowInf from './WindowInfiniteScrollComponent';
import PullDownToRefreshInfScroll from './PullDownToRefreshInfScroll';
import InfiniteScrollWithHeight from './InfiniteScrollWithHeight';
import ScrollableTargetInfiniteScroll from './ScrollableTargetInfScroll';
import ScrolleableTop from './ScrolleableTop';

const stories = storiesOf('Components', module);

stories.add('InfiniteScrollTop', () => <ScrolleableTop />, {
  info: { inline: true },
});
