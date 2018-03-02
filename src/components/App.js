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
      <div className="container-fluid">
        <h1 className="text-left">
          Random Quote Machine <small>Free Code Camp</small>
        </h1>
        <div className="col-xs-2" />
        <div className="col-xs-8">
          <div className="row">
            <div id="quote-box">
              <div id="text" className="quote">
                {this.props.quote.quoteText}
              </div>
              <div id="author" className="quote">
                --{this.props.quote.quoteAuthor}
              </div>
              <div className="row buttons">
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
                  className="btn btn-lg btn-info"
                  href={`${baseURL}${tweet}`}
                >
                  Tweet Quote
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-2" />
      </div>
    );
  }
}

function mapStateToProps({ quote }) {
  return { quote };
}

export default connect(mapStateToProps, actions)(App);