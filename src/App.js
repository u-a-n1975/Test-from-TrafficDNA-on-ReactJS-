import React from "react";

import "./styles/style.scss";

import Screen1 from "./containers/Screen1.js";
import Screen2 from "./containers/Screen2.js";

import { data } from "./Data/accounts";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      openScreen: true,
      accounts: data.accounts,
    };
  }

  render() {
    return (
      <div className="test">
        {this.state.openScreen ? (
          <Screen1
            buttonClick={this.buttonClick}
            delAccounts={this.delAccounts.bind(this)}
            accounts={this.state.accounts}
          />
        ) : (
          <Screen2
            buttonClick={this.buttonClick}
            addAccounts={this.addAccounts.bind(this)}
          />
        )}
      </div>
    );
  }
  buttonClick = () => {
    this.setState({
      openScreen: !this.state.openScreen,
    });
  };
  addAccounts(text, img) {
    this.setState({
      accounts: [
        ...this.state.accounts,
        {
          title: text,
          img: img,
          id: this.state.accounts.length,
        },
      ],
    });
  }
  delAccounts(id) {
    this.setState({
      accounts: this.state.accounts
        .filter((item) => item.id !== id)
        .map((item, index) => {
          return { id: index, title: item.title, img: item.img };
        }),
    });
  }
}

// arrow lock
document.body.onkeydown = (e) => {
  let code = e.keyCode;
  if (code === 37) {
    return false;
  } else if (code === 38) {
    return false;
  } else if (code === 39) {
    return false;
  } else if (code === 40) {
    return false;
  }
};
