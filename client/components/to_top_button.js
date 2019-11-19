import React from "react";
import "./to_top_button.scss";

class ToTopButton extends React.Component {
  state = {
    intervalId: 0,
    thePosition: false,
  };

  MountComponent() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    window.scrollTo(0, 0);
  }
  onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scollStepInPx);
  };
  scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  };
  renderToTopButton = () => {
    if (this.state.thePosition) {
      return (
        <div className="to_top_button" onClick={this.scrollToTop}>
          Back To Top
        </div>
      );
    }
  };
  render() {
    return <React.Fragment>{this.renderToTopButton()}</React.Fragment>;
  }
}
