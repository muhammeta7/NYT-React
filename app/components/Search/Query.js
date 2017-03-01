// Include React as a dependency
var React = require("react");
// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");
// Include the helpers for making API calls
var helpers = require("../utils/helpers");

var Search = React.createClass({
  // Set initial state which allows us to propagate variables for manipulation by children components
  // Results state is where data will be held from results
  getInitialState: function() {
    return {
      results: {}
    };
  },
  // Function passed down to child components to change parent
  // Pass method to query component to change main component and perform new search
  setQuery: function(newQuery, newStart, newEnd) {
    helpers.runQuery(newQuery, newStart, newEnd).then(function(data) {
      this.setState({ results: {docs: data.docs} });
    }.bind(this));
  },
   // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {
    console.log("Results", this.state.results);
    return (
      <div className="main-container">
        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <Query updateSearch={this.setQuery} />
        {/* Note how we pass in the results into this component */}
        <Results results={this.state.results} />
      </div>
    );
  }
});

// Export module back to route
module.exports = Search;