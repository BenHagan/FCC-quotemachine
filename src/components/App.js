import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchQuote();
  }
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-left">
          Random Quote Machine <small>Free Code Camp</small>
        </h1>
        <div className="col-xs-2" />
        <div className="col-xs-8">
          <div className="row">
            <div className="quote">{this.props.quote.quoteText}</div>
            <div className="quote">--{this.props.quote.quoteAuthor}</div>
          </div>
          <div className="row buttons">
            <button
              onClick={() => {
                this.props.fetchQuote();
              }}
              type="button"
              className="btn btn-lg btn-default"
            >
              Refresh Quote
            </button>
            <button id="tweetQuote" className="btn btn-lg btn-info">
              Tweet Quote
            </button>
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
