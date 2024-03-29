import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';

import { dialogflowConfig } from '../env';

const botAvatar = require('../assets/chatbox.png')

const BOT = {
  _id: 2,
  name: 'Mr.Bot',
  avatar: botAvatar
}


class MessagesScreen extends Component {

  state = {
    messages: [{
      _id: 2, text: 'My name is Mr.Bot', createdAt: new Date(),
      user: BOT
    }, {
      _id: 1, text: 'Hi', createdAt: new Date(),
      user: BOT
    }],
    id: 1,
    name: ''
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH,
      dialogflowConfig.project_id,
    );
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].
      text.text[0];

    this.sendBotResponse(text);
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT
    }
    this.setState((previouseState) => ({
      messages: GiftedChat.append(previouseState.
        messages, [msg]),
    }));

  }

  onSend(messages = []) {
    this.setState((previouseState) => ({
      messages: GiftedChat.append(previouseState.
        messages, messages),
    }))
    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message, (result) => this.handleGoogleResponse(result),
      (error) => console.log(error),
    )
  }

  onQuickReply(quickReply) {
    this.setState((previouseState) => ({
      messages: GiftedChat.append(previouseState.
        messages, quickReply),
    }))
    let message = quickReply[0].value;
    Dialogflow_V2.requestQuery(
      message, (result) => this.handleGoogleResponse(result),
      (error) => console.log(error),
    )
  }

  renderBubble = props => {
    return (<Bubble {...props} textStyle ={{rigt: 
    {color: 'white'}}} wrapperStyle={{
      right: {backgroundColor: '#fabc91'},}}/>)
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(message) => this.onSend(message)}
          onQuickReply={(quickReply) => this.onQuickReply
            (quickReply)}
          renderBubble={this.renderBubble}
          user={{ _id: 1 }}
        />
      </View>

    );
  }
}

export default MessagesScreen;