// Include React as a dependency
var React = require("react");
// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");
// Include the helpers for making NYT API calls
var helpers = require("../utils/helpers");

// Create the Search component
var Search = React.createClass({
  // Set the initial state variables which allows for maniuplation by child components
  // Result state where data will be held from results
  getInitialState: function() {
    return {
      results: {}
    };
  },

  // Function will be passed down to child components so they can change the "parent"
  // Pass method to query component in order to change the main component to perform new search
  setQuery: function(newQuery, newStart, newEnd) {
    helpers.runQuery(newQuery, newStart, newEnd).then(function(data) {
      this.setState({ results: { docs: data.docs } });
    }.bind(this));
  },

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {
    console.log("Render Results", this.state.results);

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

// Export the module back to the route
module.exports = Search;