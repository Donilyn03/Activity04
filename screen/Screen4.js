import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useRef, useEffect } from 'react';
import { Avatar, Button, Switch, ToggleButton, TouchableRipple, Badge, Banner, Checkbox, Chip, HelperText, TextInput, Divider, Snackbar, SegmentedButtons, RadioButton, IconButton, MD3Colors, List } from 'react-native-paper';
export default function Screen2() {
  const [text, setText] = React.useState('');
  const [value, setValue] = React.useState('');

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

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
      <Text style={styles.titles1}>Components #11</Text>
    </View>
    <View style={styles.containerss1}>
      <TouchableRipple
        onPress={() => console.log('Pressed')}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Text>Press Me</Text>
      </TouchableRipple>
    </View>
    <View style={styles.containers1}>
      <Text style={styles.titles1}>TouchableOpacity</Text>
    </View>
  </View>
  <View style={styles.containers}>
        <View style={styles.containers12}>
          <Text style={styles.titles1}>Components #12</Text>
        </View>
        <View style={styles.containerss1}>
          <TextInput
            label="Name"
            value={text}
            onChangeText={text => setText(text)}
          />
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="Enter Email"
            right={<TextInput.Affix text="/100" />}
          />
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>TextInput</Text>
        </View>
      </View>
      <View style={styles.containers}>
        <View style={styles.containers12}>
          <Text style={styles.titles1}>Components #13</Text>
        </View>
        <View style={styles.containerss1}>
          <Button icon="home" mode="outlined" onPress={onToggleSnackBar}>
            Show Snackbar
          </Button>
        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>Snackbar</Text>
        </View>
      </View>
      
      
      <View style={styles.containers}>
        <View style={styles.containers12}>
          <Text style={styles.titles1}>Components #14</Text>
        </View>
        <View style={styles.containerss}>
          <ToggleButton.Group
            onValueChange={value => setValue(value)}
            value={value}>
            <ToggleButton icon="home" value="left" />
            <ToggleButton icon="heart" value="right" />
            <ToggleButton icon="pencil" value="right" />
          </ToggleButton.Group>

        </View>
        <View style={styles.containers1}>
          <Text style={styles.titles1}>ToggleButton</Text>
        </View>
      </View>
      <View style={styles.containers}>
      <View style={styles.containers12}>
        <Text style={styles.titles1}>Components #15</Text>
      </View>
      <View style={styles.containerss}>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
      <View style={styles.containers1}>
        <Text style={styles.titles1}>Switch</Text>
      </View>
    </View>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {

          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {

    alignItems: 'center',

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
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
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
    borderBottomWidth: 2
  },



});