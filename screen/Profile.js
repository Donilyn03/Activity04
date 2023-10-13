import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/146/146005.png' }} 
        style={styles.profileImage}
      />
      <Text style={styles.userName}>Donilyn Malanguis</Text>
      <Text style={styles.userBio}>Frontend Developer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1D5C9'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textDecorationLine: 'underline'
  },
  userBio: {
    fontSize: 18,
    color: '#777',
  },
});

export default ProfileScreen;
