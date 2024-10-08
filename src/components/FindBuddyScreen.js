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
    <View style={styles.container}>
      <SearchBar
        placeholder="Search Buddy..."
        onChangeText={setSearch}
        value={search}
        round
        lightTheme
      />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

export default FindBuddyScreen;
