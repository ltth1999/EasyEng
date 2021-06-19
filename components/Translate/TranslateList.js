import React, {Component} from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  View,
  Button,
  Alert
} from 'react-native';
import Styles from '../../styles/Styles';

const EnglishVietNam = require('../JsonTranslate/english_vietnam.json')
const VietNamEnglish = require('../JsonTranslate/vietnam_english.json')
export default class TranslateList extends Component {
  constructor(props) {
      super(props)
      this.state = {
          input: '',
          output: '',
          from:'English',
          to:'Vietnamese'
      }
  }
  render() {
    return (
      <ScrollView style={Styles.parent}   >  
        <Text style={Styles.textTo} >
          {this.state.from} --- {this.state.to}
        </Text>
        <View style={{flex:1}}>
            <View>
              <TextInput
              placeholder="Enter the word to be translated"
              style={Styles.textInput}
              onChangeText={(e) => this.setState({input: e})}
              onSubmitEditing={(e) => this.showMeaning(e) }
            />  
            </View>
        </View> 
        <View style={Styles.fixToText}>
          <Button 
            title="Việt-Anh"
            color="#fc4c1c"
            onPress={(value) => this.switchLanguage(value)} 
            value={this.state.Vietnam}
          />
          <Button
            title="Anh-Việt"
            color="#fc4c1c"
            onPress={(value) => this.switchLanguage1(value)} 
            value={this.state.France}
          />
        </View>
        <Text  style={Styles.textTo}>{this.state.to}</Text> 
        <Text style={Styles.textOutput}>{ this.state.output } </Text>  
      </ScrollView>
    )
  }
  switchLanguage(Vietnam) {
    this.state.from = 'Vietnamese'
    this.state.to = 'English'
    this.state.Vietnam = false
    this.setState({Vietnam})
  }
  switchLanguage1(France) {
    this.state.from = 'English'
    this.state.to = 'Vietnamese'
    this.state.France = true
    this.setState({France})
  }
  showMeaning(e) {
    const input = this.state.input
    const meaning = input in EnglishVietNam ?
    EnglishVietNam[input] :
        null
    const meaningDe = input in VietNamEnglish ?
    VietNamEnglish[input] :
        null
    if (meaning) {
        this.switchLanguage1(false)
    }
    if (meaningDe) {
        this.switchLanguage(true)
    }
    this.setState({output: meaning || meaningDe || Alert.alert('Hệ thống thông báo','Từ của bạn không tìm thấy')})
  }
}