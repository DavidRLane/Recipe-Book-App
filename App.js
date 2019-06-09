import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//Styles
import app from './app/styles/App.js';

//Components
import Details from './app/components/Details.js';
import Calculator from './app/components/Calculator.js';

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