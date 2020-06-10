import React from "react";

import img from "./../assets/images/TrafficDNA.png";

export default class Screen2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      fromFocus: "add",
    };
  }

  componentDidMount() {
    document.getElementById("input").focus();
  }

  render() {
    const { buttonClick, addAccounts } = this.props;

    return (
      <div className="screen2">
        <div className="screen2__content">
          <input
            id="input"
            onKeyDown={(e) =>
              e.keyCode === 40
                ? this.setFocus(this.state.fromFocus)
                : e.keyCode === 13 && this.setFocus("add")
            }
            placeholder="Enter item title"
            className="screen2__input"
            onChange={({ target: { value } }) =>
              this.setState({
                inputText: value,
              })
            }
            value={this.state.inputText}
            type="text"
            autoComplete="none"
          />
          <div className="screen2__buttons-block">
            <button
              id="add"
              onKeyDown={(e) =>
                e.keyCode && e.keyCode === 38
                  ? this.setFocus("input", "add")
                  : e.keyCode === 39
                  ? this.setFocus("cancel")
                  : e.keyCode === 13 && this.state.inputText
                  ? (addAccounts(this.state.inputText, img), this.cleenText())
                  : this.setFocus("input", "add")
              }
            >
              ADD
            </button>
            <button
              id="cancel"
              onClick={buttonClick}
              onKeyDown={(e) =>
                e.keyCode === 38
                  ? this.setFocus("input", "cancel")
                  : e.keyCode === 37 && this.setFocus("add")
              }
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  setFocus = (focus, fromFocus) => {
    fromFocus &&
      this.setState({
        fromFocus: fromFocus,
      });
    document.getElementById(focus).focus();
  };

  cleenText = () => {
    this.setState({
      inputText: "",
    });
  };
}
