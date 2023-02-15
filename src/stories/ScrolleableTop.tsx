import React from 'react';
import { render } from 'react-dom';
import InfiniteScroll from '../index';

const style = {
  height: 30,
  border: '1px solid green',
  margin: 6,
  padding: 8,
};

export default class App extends React.Component {
  state = {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  };

  fetchMoreData = () => {
    const array = [-10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10,]
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: [...this.state.items, ...array],
      });
    }, 1500);
  };

  fetchMoreDataAfter = () => {
    const array2 = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15]
    const scrollableDivElement = document.getElementById("scrollableDiv") as HTMLElement
    const previousScrollTop = scrollableDivElement.scrollTop

    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      console.log(Math.round(previousScrollTop))
      this.setState({
        items: [...array2, ...this.state.items],
      });
      const AfterScrollTop = scrollableDivElement.scrollTop

      console.log(Math.round(AfterScrollTop))
      console.log(-Math.abs(previousScrollTop - AfterScrollTop))
      scrollableDivElement.scrollTop = -Math.abs(previousScrollTop - AfterScrollTop)
    }, 1500);
  };

  render() {
    return (
      <div>
        <h1>demo: Infinite Scroll on top</h1>
        <hr />
        <div
          id="scrollableDiv"
          style={{
            height: 300,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column-reverse',
          }}
        >
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            previous={this.fetchMoreDataAfter}
            style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
            top={true}
            bottom={true}
            hasMore={true}
            hasMorePrevious={true}
            loader={<h4>Loading...</h4>}
            downLoader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            {this.state.items.map((item, index) => (
              <div style={style} key={index}>
                div - #{item}
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
