/*import{createAppContainer} from "react-navigation";
import{createStackNavigator} from "react-navigation-stack";

import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";
import SwiperComponent from "./SwiperComponent";

const StackNavigator = createStackNavigator({
    SwiperScreen:{
        screen: SwiperComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    LoginScreen:{
        screen: LoginComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    SignUpScreen:{
        screen:  SignUpComponent,
        navigationOptions: {
            headerShown: false
        }
    },
});

export default createAppContainer(StackNavigator);
*/



//const RootStack = createStackNavigator();

/*const RootStack = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SwiperScreen" component={SwiperScreen}/>
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </RootStack.Navigator>
);
*/
//export default RootStack;

import{createAppContainer} from "react-navigation";
import{createStackNavigator} from "react-navigation-stack";

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ForgotPassword from './ForgotPassword';



const StackNavigator = createStackNavigator({
    SplashScreen:{
        screen: SplashScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    SignInScreen:{
        screen: SignInScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    SignUpScreen:{
        screen:  SignUpScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    ForgotPassword:{
        screen:  ForgotPassword,
        navigationOptions: {
            headerShown: false
        }
    },
});

export default createAppContainer(StackNavigator);



