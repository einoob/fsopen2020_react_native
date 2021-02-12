import { useQuery } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { GET_AUTHORIZATION } from '../graphql/queries';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import SortingPicker from './SortingPicker';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },

  flatList: {
    margin: 5,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, setSortOrder }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  
  return (
    <View style={styles.flatList}>
    <FlatList
      testID='repositoryItem'
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
    //  ListHeaderComponent={<SortingPicker setSortOrder={setSortOrder}/>}
      renderItem={({ item }) => (
          <RepositoryItem props={item}/>
      )}   
    />
    </View>
  );
};

const RepositoryList = () => {
  const [sortOrder, setSortOrder] = useState('');
  const { repositories } = useRepositories(sortOrder);

  return (
    <RepositoryListContainer 
    repositories={repositories}
    setSortOrder={setSortOrder}/>
  );
  
};

export default RepositoryList;
