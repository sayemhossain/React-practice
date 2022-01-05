import React from "react";
import Button from "./button";

class Clock extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date() };
  // }
  state = {
    date: new Date(),
    locale: "bn-BD",
  };
  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillMount() {
    clearInterval(this.clockTimer);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  handelClick = (locale) => {
    this.setState({
      locale: locale,
    });
  };

  render() {
    const { date, locale } = this.state;
    // let button;
    // if (locale === "bn-BD") {
    //   button = (
    //     <Button change={this.handelClick} locale="en-US">
    //       {" "}
    //       Click Here
    //     </Button>
    //   );
    // } else {
    //   button = (
    //     <Button change={this.handelClick} locale="bn-BD">
    //       Click Here
    //     </Button>
    //   );
    // }
    return (
      <div>
        <h1 className="heading">
          <span className="text">Time: {date.toLocaleTimeString(locale)}</span>
        </h1>

        {locale === "bn-BD" ? (
          <Button change={this.handelClick} locale="en-US" show={false} />
        ) : (
          <Button change={this.handelClick} locale="bn-BD" show={true} />
        )}
      </div>
    );
  }
}

export default Clock;
