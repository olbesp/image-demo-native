import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Images from './components/Images';

export default class App extends React.Component {
  state = {
    query: '',
    images: null,
    error: false,
  }
  
  getData = (query = this.state.query) => {
    if (encodeURIComponent(query.trim())) {
      fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=e28c78675ecea53a063069634e982600a2cbcb19b671d5b7b1f2fa772889d054`)
        .then(response => response.json())
        .then(response => {
          this.setState({
            images: response.results,
            error: false
          });
        })
        .catch(error => {
          this.setState({
            images: null,
            error: true
          });
        });
    }
  }

  componentDidMount() {
    this.getData('dogs');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  inputChangedHandler = text => {
    this.setState({ query: text });
  }

  searchPressedHandler = () => {
    this.getData(this.state.query);
  }

  render() {
    let content = null;
    if (this.state.error) {
      content = <Text style={{color: '#d1d1d1'}}>Something went wrong...</Text>;
    }

    if (this.state.images) {
      content = <Images images={this.state.images} columns={this.state.columns} />;
    }

    return (
      <ScrollView style={styles.container}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Header />
          <SearchInput 
            textChanged={this.inputChangedHandler} 
            searchPressed={this.searchPressedHandler}
            text={this.state.query}
            placeholder="Search Images"
          />
          {content}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d1d1d1',
    paddingVertical: 40,
  },
});
