import React, { Component } from "react";
import Messages from "./components/Messages";
import "./App.css";
import Input from "./components/Input";
import { randomName, randomColor } from "./userInfo";

export default class App extends Component {
  state = {
    messages: [
      {
        text: "This is a test message!",
        member: {
          color: "blue",
          username: "bluemoon",
        },
      },
    ],
    member: {
      username: randomName(),
      color: randomColor(),
    },
  };
  onSendMessage = (message) => {
    const messages = this.state.messages;
    messages.push({
      text: message,
      member: this.state.member,
    });
    this.setState({ messages: messages });
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Mini Messenger</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}
