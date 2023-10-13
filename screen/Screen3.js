import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useRef, useEffect } from 'react';
import { Avatar, Badge, Banner, Checkbox, Chip, HelperText, TextInput } from 'react-native-paper';
export default function Screen2() {
  const [text, setText] = React.useState('');

  const onChangeText = text => setText(text);

  const hasErrors = () => {
    return !text.includes('@');
  };
  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.containers}>
    <View style={styles.containers12}>
      <Text style={styles.titles1}>Components #6</Text>
    </View>
    <View style={styles.containerss}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    </View>
    <View style={styles.containers1}>
      
      <Text style={styles.titles1}>Checkbox</Text>
    </View>
  </View>
      <View style={styles.containers}>
        <View style={styles.containers12}>
          <Text style={styles.titles1}>Components #7</Text>
        </View>
        <View style={styles.containerss}>
          <Avatar.Icon size={44} icon="folder" />
          <Avatar.Image size={44} source={require('../assets/coding.png')} />
          <Avatar.Text size={44} label="DM" />
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>Avatar</Text>
        </View>
      </View>
      <View style={styles.containers}>
        <View style={styles.containers12}>
          <Text style={styles.titles1}>Components #8</Text>
        </View>
        <View style={styles.containerss1}>
          <TextInput label="Email" value={text} onChangeText={onChangeText} />
          <HelperText type="error" visible={hasErrors()}>
            Email address is invalid!
          </HelperText>
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>HelperText</Text>
        </View>
      </View>
      <View style={styles.containers}>
        <View style={styles.containers12}>
          <Text style={styles.titles1}>Components #9</Text>
        </View>
        <View style={styles.containerss}>
          <Badge>3</Badge>
          <Badge>4</Badge>
          <Badge>5</Badge>
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>Badge</Text>
        </View>
      </View>
     
      <View style={styles.containers}>
      <View style={styles.containers12}>
      <Text style={styles.titles1}>Components #10</Text>
    </View>
        <View style={styles.containersss}>
          <Chip icon="account" onPress={() => console.log('Pressed')}>Information</Chip>
          <Chip icon="heart" onPress={() => console.log('Pressed')}>Heart</Chip>
          <Chip icon="home" onPress={() => console.log('Pressed')}>Home</Chip>
          <Chip icon="pencil" onPress={() => console.log('Pressed')}>Edit</Chip>
          <Chip icon="send" onPress={() => console.log('Pressed')}>Send</Chip>
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>Chip</Text>
        </View>
      </View>
      

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    margin: 0,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E1D5C9',
  },
  containers: {
    width: '100%',
    margin: 5,
    borderRadius: 10,
    borderColor: '#212224',
    borderWidth: 2,
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'flex-end',

  },
  containers1: {
    borderTopWidth: 2,
    borderColor: '#212224',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#C89351',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  containerss: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
    gap: 10
  },
  containerss1: {

    padding: 10,
    flexDirection: 'culomn',
    gap: 10,
    width: '100%'
  },
  containersss: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 10,
    gap: 10
  },
  titles1: {
    fontWeight: 'bold'
  },
  containers12: {

    borderColor: '#212224',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#C89351',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 2
  },



});