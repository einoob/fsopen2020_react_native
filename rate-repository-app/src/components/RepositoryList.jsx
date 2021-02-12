import { useQuery } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { FlatList, View, StyleSheet } from 'react-native';
import { useDebounce } from 'use-debounce';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import SortingPicker from './SortingPicker';
import FilterInput from './FilterInput';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },

  flatList: {
    margin: 5,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props;

    return (
      <View>
        <SortingPicker setSortOrder={props.setSortOrder} />
        <FilterInput setFilter={props.setFilter}/>
      </View>
    );
  }
  
  render() {
    const repositoryNodes = this.props.repositories
    ? this.props.repositories.edges.map(edge => edge.node) : [];

  return (
    <View style={styles.flatList}>
    <FlatList
      testID='repositoryItem'
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
      ListHeaderComponent={this.renderHeader}
      renderItem={({ item }) => (
          <RepositoryItem props={item}/>
      )}   
    />
    </View>
  );
  }
};

const RepositoryList = () => {
  const [sortOrder, setSortOrder] = useState('');
  const [filter, setFilter] = useState('');
  const [filterValue] = useDebounce(filter, 500)
  const { repositories } = useRepositories(sortOrder, filterValue);

  return (
    <RepositoryListContainer 
    repositories={repositories}
    setSortOrder={setSortOrder}
    setFilter={setFilter} />
  );
  
};

export default RepositoryList;
