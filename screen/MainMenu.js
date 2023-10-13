import { View, Text, StyleSheet, ScrollView, Image, Button, TouchableOpacity } from 'react-native'
import * as React from 'react';
import { Video, ResizeMode } from 'expo-av';
export default function MainMenu({ navigation }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
        <Text style={styles.titles1}>React Native</Text>
        <Text style={styles.titles12}>Components</Text>
        
        <View style={styles.row}>
          <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigation.navigate('Page1')}>
            <Image
              source={require('../assets/coding.png')}
              style={{ width: 55, height: 50, zIndex: 1, position: 'absolute', left: 0 , marginLeft: -30, resizeMode: 'stretch'}}
            />
            <Image
              source={require('../assets/play.png')}
              style={{ width: 40, height: 40, zIndex: 1, position: 'absolute', right: 0, marginRight: -25 , resizeMode: 'stretch'}}
            />
            <Text style={styles.text}>Page 1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigation.navigate('Page2')}>
          <Image
          source={require('../assets/coding.png')}
          style={{ width: 55, height: 50, zIndex: 1, position: 'absolute', left: 0 , marginLeft: -30, resizeMode: 'stretch'}}
        />
            <Image
              source={require('../assets/play.png')}
              style={{ width: 40, height: 40, zIndex: 1, position: 'absolute', right: 0, marginRight: -25, resizeMode: 'stretch' }}
            />
            <Text style={styles.text}>Page 2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigation.navigate('Page3')}>
          <Image
              source={require('../assets/coding.png')}
              style={{ width: 55, height: 50, zIndex: 1, position: 'absolute', left: 0 , marginLeft: -30, resizeMode: 'stretch'}}
            />
            <Image
              source={require('../assets/play.png')}
              style={{ width: 40, height: 40, zIndex: 1, position: 'absolute', right: 0, marginRight: -25, resizeMode: 'stretch' }}
            />
            <Text style={styles.text}>Page 3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigation.navigate('Page5')}>
          <Image
          source={require('../assets/coding.png')}
          style={{ width: 55, height: 50, zIndex: 1, position: 'absolute', left: 0 , marginLeft: -30, resizeMode: 'stretch'}}
        />
            <Image
              source={require('../assets/play.png')}
              style={{ width: 40, height: 40, zIndex: 1, position: 'absolute', right: 0, marginRight: -25, resizeMode: 'stretch' }}
            />
            <Text style={styles.text}>Page 4</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
    )
}
const styles = StyleSheet.create({
    container: {
       
      padding: 10,
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#E1D5C9'
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 30
      },
      touchableOpacity: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#212224',
        padding: 25,
        borderRadius: 5,
        width: '100%' ,
       justifyContent: 'center'
      },
      text:{
        color: '#C89351',
        textDecorationLine: 'underline',
        fontSize: 20, 
        fontWeight: 'bold'
      },
      titles1: {
        color: '#C89351',
        fontSize: 50,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
      },
      titles12: {
        color: '#C89351',
        fontSize: 30,
        fontWeight: 'bold',  
        textDecorationLine: 'underline',
      },
      video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
      },
});