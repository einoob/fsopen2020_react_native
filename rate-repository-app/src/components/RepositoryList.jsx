import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { GET_AUTHORIZATION } from '../graphql/queries';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },

  flatList: {
    margin: 5,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const { repositories } = useRepositories();
  
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  
  return (
    <View style={styles.flatList}>
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
          <RepositoryItem props={item}/>
      )}   
    />
    </View>
  );
};

export default RepositoryList;
