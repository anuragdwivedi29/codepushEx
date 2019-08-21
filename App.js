/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import codePush from "react-native-code-push";
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
  Alert
} from 'react-native/Libraries/NewAppScreen';
let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };

class App extends React.Component {
  onButtonPress=()=> {

    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    })};
  render(){
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
             <ReloadInstructions/>
             <Text style={{fontSize:20}}>New Text</Text>
             <LearnMoreLinks/>
            </View>

<TouchableOpacity onPress={this.onButtonPress}>
  <Text>Something to do with us</Text>
</TouchableOpacity>
          
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


export default codePush(codePushOptions)(App);
