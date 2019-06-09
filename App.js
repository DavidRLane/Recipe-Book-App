import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Details from './app/Details.js';
import Calculator from './app/Calculator.js';

const app = StyleSheet.create({
  //Flex Direction by default is Column; Flex Direction works on the outer element to reposition elements
  container: {
    flex: 1,
    flexGrow: 1
  },
  title: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 1,
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'steelblue'
  },
  navbarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 0.25
  },
  mainContent: {
    flex: 8,
  },
  homeContent: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 1
  }
});

//Default Screen; Homescreen
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={app.container}>
        <View style={app.title}>
          <Text style={app.titleText}>Home</Text>
        </View>

        <View style={app.navbar}>
          <View style={app.navbarButton}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Calculator')}>
              <Text style={app.buttonText}>
                Calculator
              </Text>
            </TouchableOpacity>
          </View>
          <View style={app.navbarButton}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
              <Text style={app.buttonText}>
                Details
              </Text>
            </TouchableOpacity>
          </View>
          <View style={app.navbarButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={app.buttonText}>
                Go Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={app.homeContent}>
          <Text style={app.homeText}>
            Welcome to my App
          </Text>
        </View>
      </View>
    );
  }
}

//Calculator Application
class CalculatorScreen extends React.Component {
  render() {
    return (
      <View style={app.container}>
        <View style={app.title}>
          <Text style={app.titleText}>Calculator</Text>
        </View>

        <View style={app.navbar}>
          <View style={app.navbarButton}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={app.buttonText}>
                Home
              </Text>
            </TouchableOpacity>
          </View>
          <View style={app.navbarButton}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
              <Text style={app.buttonText}>
                Details
              </Text>
            </TouchableOpacity>
          </View>
          <View style={app.navbarButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={app.buttonText}>
                Go Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={app.mainContent}>
          <Calculator />
        </View>
      </View>
    );
  }
}

//Misc Screen
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={app.container}>
        <View style={app.title}>
          <Text style={app.titleText}>Details</Text>
        </View>

        <View style={app.navbar}>
          <View style={app.navbarButton}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={app.buttonText}>
                Home
              </Text>
            </TouchableOpacity>
          </View>
          <View style={app.navbarButton}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Calculator')}>
              <Text style={app.buttonText}>
                Calculator
              </Text>
            </TouchableOpacity>
          </View>
          <View style={app.navbarButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={app.buttonText}>
                Go Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={app.mainContent}>
          <Details />
        </View>
      </View>
    );
  }
}

//Declare Each Navigation Route; Initial set to Home
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Calculator: CalculatorScreen
  },
  {
    initialRouteName: "Home"
  }
);

//Main App must be AppContainer
export default createAppContainer(AppNavigator);