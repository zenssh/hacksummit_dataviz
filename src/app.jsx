var React = require('react');
var ReactDOM = require('react-dom');
var Reactfire = require('reactfire');
var Firebase = require('firebase');
var rooturl = 'https://glowing-torch-2950.firebaseio.com/'
var Header = require('./header');

var App = React.createClass({
  mixins: [Reactfire],
  getInitialState: function () {
    return {
      items: {},
      loaded: false
    }
  },
  componentWillMount: function(){
    this.fb = new Firebase(rooturl + 'items/');
    this.bindAsObject(this.fb, 'items');
    this.fb.on('value', this.handleDataLoaded);
  },
  render: function() {
    return <div className="container">
      <div className="row">
        <div className="col-md-12">
            <h2 className="text-center">
              Let's come together udacious people
            </h2>
        </div>
      </div>
      <Header itemsStore={this.firebaseRefs.items} />

    </div>

  },
  handleDataLoaded: function () {
    this.setState({loaded: true})
  }
});
var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
