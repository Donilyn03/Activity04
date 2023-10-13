import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
      source={require('../assets/icons.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Raymond Bunol</Text>
      <Text style={styles.title}>Front End Developer</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoValue}>Cortes, Bohol</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>raymondbunol@email.com</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.infoValue}>(123) 456-7890</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>About Me</Text>
      <Text style={styles.sectionContent}>
        I am a passionate front end developer with a strong background in mobile
        and web application development. My goal is to contribute to innovative projects.
      </Text>

      <Text style={styles.sectionTitle}>Skills</Text>
      <View style={styles.skillsContainer}>
        <Text style={styles.skill}>React Native</Text>
        <Text style={styles.skill}>JavaScript</Text>
       
        <Text style={styles.skill}>UI/UX Design</Text>
        
      </View>

     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
   
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#76625a'
  },
  title: {
    fontSize: 18,
    color: 'gray',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  infoItem: {
    flex: 1,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#555',
  },
  infoValue: {
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  sectionContent: {
    fontSize: 16,
    color: '#333',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  skill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 6,
    borderRadius: 20,
    backgroundColor: '#3498db',
    color: '#fff',
  },
  experienceItem: {
    marginTop: 10,
  },
  experienceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  experienceDate: {
    color: '#777',
    marginBottom: 5,
  },
  experienceDescription: {
    fontSize: 16,
    color: '#333',
  },
});

export default Profile;
