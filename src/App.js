import React, { Component } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import MainLayout from './layout/MainLayout';
import ResultsList from './components/ResultsList/ResultsList';
import './App.css';

class App extends Component {
  state = {
    query: 'redux',
    data: {
      hits: [{}],
    },
    isLoading: false,
    isError: false,
  };

  constructor() {
    super();
    this.debouncedFetchData = debounce(this.fetchData, 500);
  }

  componentDidMount() {
    this.fetchData();
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value });
    this.debouncedFetchData();
  }

  fetchData = async () => {
    const { query } = this.state;
    this.setState({ isLoading: true });

    try {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${query}`,
      );

      this.setState({ data: result.data });
    } catch (error) {
      this.setState({ isError: true });
    }

    this.setState({ isLoading: false });
  }


  render() {
    const {
      query, data, isLoading, isError,
    } = this.state;
    return (
      <MainLayout>
        <input
          className="query-input"
          type="text"
          name="query"
          value={query}
          onChange={this.handleChange}
        />
        <div className="spacer--small" />
        <ResultsList query={query} hits={data.hits} isLoading={isLoading} isError={isError} />
      </MainLayout>
    );
  }
}

export default App;
