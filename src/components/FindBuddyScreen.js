import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SearchBar, ListItem, Avatar } from 'react-native-elements';

const buddies = [
  { name: 'Brian Edward', location: 'Palau, Oceania', avatar_url: 'https://via.placeholder.com/150' },
  { name: 'Richard Will', location: 'Palau, Oceania', avatar_url: 'https://via.placeholder.com/150' },
  // Add more dummy data here...
];

const FindBuddyScreen = () => {
  const [search, setSearch] = useState('');

  const filteredBuddies = buddies.filter(buddy =>
    buddy.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
        <StatusBar backgroundColor="#003b73" barStyle="light-content" />
        <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Icon name="arrow-back" size={24} color="white" />
        <Text style={styles.headerText}>Search Buddy</Text>
        <Icon name="filter-list" size={24} color="white" />
      </View>

      {/* Search Bar */}
      <SearchBar
        placeholder="Search Buddy..."
        onChangeText={setSearch}
        value={search}
        round
        lightTheme
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchInputContainer}
      />

      {/* List of Buddies */}
      <FlatList
        data={filteredBuddies}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <Avatar rounded source={{ uri: item.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.location}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#003b73',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    paddingBottom: 16,
  },
  searchInputContainer: {
    backgroundColor: '#e0e0e0',
  },
});

export default FindBuddyScreen;