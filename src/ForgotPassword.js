import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import transparentHeaderStyle from '../components/navigation';
import InputField from '../components/form/InputField';
import Notification from '../components/Notification';
import NextArrowButton from '../components/buttons/NextArrowButton';
import NavBarButton from '../components/buttons/NavBarButton';
import Loader from '../components/Loader';
import styles from '../components/styles/ForgotPassword';
import Icon1 from 'react-native-vector-icons/AntDesign';
export default class ForgotPassword extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: 
    <NavBarButton
      handleButtonPress={() => navigation.goBack()}
      location="left"
      icon={<Icon name="angle-left" color='#ffffff' size={30} />}
    />,
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: '#ffffff',
  });

  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      loadingVisible: false,
      validEmail: false,
      emailAddress: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.goToNextStep = this.goToNextStep.bind(this);
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
  }

  handleEmailChange(email) {
    // eslint-disable-next-line
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validEmail } = this.state;

    this.setState({ emailAddress: email });

    if (!validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({ validEmail: true });
      }
    } else if (!emailCheckRegex.test(email)) {
      this.setState({ validEmail: false });
    }
  }
  _onPressBack(){
    const {goBack} = this.props.navigation
      goBack()
  }
  goToNextStep() {
    const { emailAddress } = this.state;
    this.setState({ loadingVisible: true });
    setTimeout(() => {
      if (emailAddress === 'wrong@email.com') {
        this.setState({
          loadingVisible: false,
          formValid: false,
        });
      } else {
        this.setState({
          loadingVisible: false,
          formValid: true,
        });
      }
    }, 2000);
  }

  handleCloseNotification() {
    this.setState({ formValid: true });
  }

  render() {
    const { loadingVisible, formValid, validEmail } = this.state;
    const background = formValid ? '#008388' : '#d93900';
    const showNotification = !formValid;
    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: background }, styles.wrapper]}
        behavior="padding"
      >
        <TouchableOpacity onPress={() => this._onPressBack() }>
          <Icon style={styles.toolbarButton} name="angle-left" size={32}></Icon>
      </TouchableOpacity>
        <View style={styles.scrollViewWrapper}>
        
          <ScrollView style={styles.scrollView}>
            <Text style={styles.forgotPasswordHeading}>
Forgot your password?
            </Text>
            <Text style={styles.forgotPasswordSubheading}>
Enter your email to find your account
            </Text>
            <InputField
              customStyle={{ marginBottom: 30 }}
              textColor='#ffffff'
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor='#ffffff'
              borderBottomColor='#ffffff'
              inputType="email"
              onChangeText={this.handleEmailChange}
              showCheckmark={validEmail}
            />
          </ScrollView>
          <NextArrowButton
            handleNextButton={this.goToNextStep}
            disabled={!validEmail}
          />
        </View>
        <Loader
          modalVisible={loadingVisible}
          animationType="fade"
        />
        <View style={styles.notificationWrapper}>
          <Notification
            showNotification={showNotification}
            handleCloseNotification={this.handleCloseNotification}
            type="Error"
            firstLine="No account exists for the requested"
            secondLine="email address."
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
