import React from "react";

export default class Screen1 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      onFocus: 0,
      fromFocus: 0,
    };
  }

  componentDidMount() {
    document
      .getElementById(document.getElementById(0) ? this.state.onFocus : "add")
      .focus();
  }

  render() {
    const { buttonClick, delAccounts, accounts } = this.props;

    return (
      <div className="screen1">
        <div className="screen1__item-block">
          {accounts.map(({ title, img, id }) => {
            return (
              <div
                className="screen1__item"
                id={id}
                key={id}
                tabIndex={id}
                onKeyDown={(e) => {
                  if (e.keyCode === 37) {
                    delAccounts(id);
                    accounts.length > 1
                      ? this.setFocus(0)
                      : this.setFocus("add");
                  } else if (e.keyCode === 38 && id > 0) {
                    this.setFocus(id - 1);
                  } else if (e.keyCode === 39) {
                    this.setFocus("add", id);
                  } else if (e.keyCode === 40 && id < accounts.length - 1) {
                    this.setFocus(id + 1);
                  }
                }}
              >
                <img className="screen1__item--image" src={img} alt="hero" />
                <p className="screen1__item--name">{title}</p>
              </div>
            );
          })}
        </div>
        <button
          id="add"
          onClick={buttonClick}
          onKeyDown={(e) =>
            e.keyCode && e.keyCode === 37 && this.setFocus(this.state.fromFocus)
          }
        >
          ADD
        </button>
      </div>
    );
  }
  setFocus = (focus, fromFocus) => {
    fromFocus >= 0 &&
      this.setState({
        fromFocus: fromFocus,
      });
    document.getElementById(focus).focus();
  };
}
