import React, { useState } from "react";
import "./totopbutton.scss";

class ToTopButton extends React.Component {
  state = { hasScrolled: false };

  componentDidMount() {
    this.scrollingWrapper.addEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    if (this.scrollingWrapper.scrollTop > 200 && !this.state.hasScrolled) {
      this.setState({ hasScrolled: true });
    } else if (
      this.scrollingWrapper.scrollTop < 200 &&
      this.state.hasScrolled
    ) {
      this.setState({ hasScrolled: false });
    }
  };

  scrollToTop = () => {
    this.scrollingWrapper.scrollTop = 0;
  };

  reference = id => ref => {
    this[id] = ref;
  };

  render = () => {
    return (
      <>
        {this.state.hasScrolled && (
          <ScrollToTopIconContainer onClick={this.scrollToTop}>
            <button>BACK TO TOP</button>
          </ScrollToTopIconContainer>
        )}
        <div ref={this.reference("scrollingWrapper")}>
          {this.props.children}
        </div>
      </>
    );
  };
}

export default ToTopButton;
