import React, { Component } from "react";
import Publication from "./Publication";
import Controls from "./Controls";
import Counter from "./Counter";

class Reader extends Component {
  state = {
    publications: this.props,
    currentIdex: 0,
    currentPage: 1,
    isActiveButtonNext: false,
    isActiveButtonPrev: true
  };

  handleNextPage = () => {
    if (this.state.currentPage >= 1) {
      this.setState({
        isActiveButtonPrev: false
      });
    }
    if (this.state.currentPage === this.props.publications.length - 1) {
      this.setState({
        isActiveButtonNext: true
      });
    }

    this.setState((prevState, rrr) => {
      if (this.state.currentPage < this.props.publications.length) {
        return {
          currentIdex: prevState.currentIdex + 1,
          currentPage: prevState.currentPage + 1
        };
      }
    });
  };
  handlePrevPage = () => {
    if (this.state.currentPage <= 2) {
      this.setState({
        isActiveButtonPrev: true
      });
    }
    if (this.state.currentPage !== this.props.publications.length - 1) {
      this.setState({
        isActiveButtonNext: false
      });
    }

    this.setState(prevState => {
      if (prevState.currentIdex) {
        return {
          currentIdex: prevState.currentIdex - 1,
          currentPage: prevState.currentPage - 1
        };
      }
    });
  };

  render() {
    const {
      currentIdex,
      currentPage,
      isActiveButtonNext,
      isActiveButtonPrev
    } = this.state;
    const { id, title, text } = this.props.publications[currentIdex];

    return (
      <div className="reader">
        <Controls
          next={this.handleNextPage}
          prev={this.handlePrevPage}
          isActiveButtonNext={isActiveButtonNext}
          isActiveButtonPrev={isActiveButtonPrev}
        />
        <Publication id={id} title={title} text={text} />
        <Counter
          publicationsLength={this.props.publications.length}
          currentPage={currentPage}
        />
      </div>
    );
  }
}
export default Reader;
