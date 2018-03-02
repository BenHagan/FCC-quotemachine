import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import urlencode from 'urlencode';

class App extends Component {
  componentDidMount() {
    this.props.fetchQuote();
  }
  render() {
    let tweet = null;
    const baseURL = 'https://twitter.com/intent/tweet?text=';
    if (this.props.quote.quoteText) {
      tweet = urlencode(
        `${this.props.quote.quoteText} --${this.props.quote.quoteAuthor}`
      );
    }
    return (
      <div className="container w-75">
        <div className="row">
          <div className="col-12">
            <h1>
              Random Quote Machine
              <small className="subhead p-2">Free Code Camp</small>
            </h1>
            <div id="quote-box">
              <div id="text" className="quote">
                {this.props.quote.quoteText}
              </div>
              <div id="author" className="quote">
                --{this.props.quote.quoteAuthor}
              </div>
              <div className="buttons">
                <button
                  onClick={() => {
                    this.props.fetchQuote();
                  }}
                  type="button"
                  className="btn btn-lg btn-default"
                  id="new-quote"
                >
                  Refresh Quote
                </button>
                <a
                  id="tweet-quote"
                  className="btn btn-lg btn-info m-2"
                  href={`${baseURL}${tweet}`}
                >
                  Tweet Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ quote }) {
  return { quote };
}

export default connect(mapStateToProps, actions)(App);
