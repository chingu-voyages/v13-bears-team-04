import React, { useState } from "react";
import "./to_top_button.scss";

class ToTopButton extends React.Component {
  state = { hasScrolled: false };

  componentMounted() {
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
      <React.Fragment>
        {this.state.hasScrolled && (
          <ScrollToTopIconContainer onClick={this.scrollToTop}>
            <div>^</div>
            <button>BACK TO TOP</button>
          </ScrollToTopIconContainer>
        )}
        <div ref={this.reference("scrollingWrapper")}>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  };
}

export default ToTopButton;
