import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useRef, useEffect } from 'react';
import { Avatar, Badge, Banner, Checkbox, Chip, HelperText, TextInput, Divider, SegmentedButtons, RadioButton, IconButton, MD3Colors, List } from 'react-native-paper';
export default function Screen2() {
  const [text, setText] = React.useState('');
  const [value, setValue] = React.useState('');

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
      <Text style={styles.titles1}>Components #1</Text>
    </View>
    <View style={styles.containerss}>
      <RadioButton
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
      />
      <Text style={styles.titles1}>Male</Text>
      <RadioButton
        value="second"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
      <Text style={styles.titles1}>Female</Text>
    </View>
    <View style={styles.containers1}>
      <Text style={styles.titles1}>RadioButton</Text>
    </View>
  </View>
     
      <View style={styles.containers}>
        <View style={styles.containers12}>
          <Text style={styles.titles1}>Components #2</Text>
        </View>
        <View style={styles.containerss}>
          <List.Section>
            <List.Subheader>File Manager</List.Subheader>
            <List.Item title="Download" left={() => <List.Icon icon="folder" />} />
            <List.Item title="Record" left={() => <List.Icon icon="folder" />} />
            <List.Item
              title="Music"
              left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
            />
          </List.Section>
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>List</Text>
        </View>
      </View>
      <View style={styles.containers}>
      <View style={styles.containers12}>
        <Text style={styles.titles1}>Components #3</Text>
      </View>
      <View style={styles.containerss}>
        <IconButton
          icon="camera"
          iconColor={MD3Colors.error50}
          size={40}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon="home"
          iconColor={MD3Colors.error50}
          size={40}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <View style={styles.containers1}>
        <Text style={styles.titles1}>IconButton</Text>
      </View>
    </View>
      <View style={styles.containers}>
        <View style={styles.containers12}>
          <Text style={styles.titles1}>Components #4</Text>
        </View>
        <View style={styles.containerss1}>
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: 'walk',
                label: 'BSIT',
              },
              {
                value: 'train',
                label: 'BSCS',
              },
              { value: 'drive', label: 'BS ELEX' },
            ]}
          />
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>SegmentedButtons</Text>
        </View>
      </View>
      <View style={styles.containers}>
        <View style={styles.containers12}>
          <Text style={styles.titles1}>Components #5</Text>
        </View>
        <View style={styles.containerss1}>
          <Text>Donilyn</Text>
          <Divider />
          <Text>Hazel</Text>
          <Divider />
          <Text>Ann</Text>
          <Divider />
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>Divider</Text>
        </View>
      </View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    margin: 0,
    alignItems: 'center',
    marginBottom: 50,
    flexGrow: 1,
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
    borderBottomWidth: 2,
    
  },



});