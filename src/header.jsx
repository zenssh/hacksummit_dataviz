var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      name: '',
      country: '',
      postalCode: '',
      distance: '',
      submitted: false,
      error: false
    }
  },
  render: function(){
    return <div className="input-group">
    {this.renderError()}
    <h4 className={"thanks text-center" + (this.state.submitted ? ' fade' : '')}>
    thanks for joining. our meetup-vis is comming soon.</h4>
      <div className={"cont" + (this.state.submitted ? ' hidden' : '')}>
        <div className="tag">
          name : 
        </div>
        <div className="field">
          <input
          value={this.state.name}
          onChange={this.handleInputStateName}
          type="text"
          className="form-controle" />
        </div>
      </div>
      <div className={"cont" + (this.state.submitted ? ' hidden' : '')}>
        <div className="tag">
          country :
        </div>
        <div className="field">
          <input
          value={this.state.country}
          onChange={this.handleInputStateCountry}
          type="text"
          className="form-controle" />
        </div>
      </div>
      <div className={"cont" + (this.state.submitted ? ' hidden' : '')}>
        <div className="tag">
          postalCode :
        </div>
        <div className="field">
          <input
          value={this.state.postalCode}
          onChange={this.handleInputStateCode}
          type="text"
          className="form-controle" />
        </div>
      </div>
      <div className={"cont" + (this.state.submitted ? ' hidden' : '')}>
        <div className="tag">
          distance willing to travel for a meetup (in km) :
        </div>
        <div className="field">
          <input
          value={this.state.distance}
          onChange={this.handleInputStateDistance}
          type="text"
          className="form-controle input-distance" />  km
        </div>
      </div>
      <div className={"cont" + (this.state.submitted ? ' hidden' : '')}>
        <span className="input-group-btn">
          <button onClick= {this.handleClick}
          className="btn btn-default"
          type="button">
            join the tribe
          </button>
        </span>
      </div>
    </div>
  },
  handleClick: function () {
  // validate input and send it to Firebase
    if (this.state.name==='' || this.state.country==='' ||
      this.state.postalCode==='' || this.state.distance==='' || isNaN(this.state.distance)){
      this.setState({error:true});
    }else {
      this.props.itemsStore.push({
        name: this.state.name,
        country: this.state.country,
        postalCode: this.state.postalCode,
        distance: this.state.distance,
        });
        this.setState({error:false});
        this.setState({submitted: true})
    }
  },
  renderError: function () {
    if(this.state.error){
      return <h4
      className="error text-center">
      oohh.. you missed something. please fill out the form correctly</h4>
    }else {
      return
    }
  },
  handleInputStateName: function (event) {
    this.setState({name: event.target.value});
  },
  handleInputStateCountry: function (event) {
    this.setState({country: event.target.value});
  },
  handleInputStateCode: function (event) {
    this.setState({postalCode: event.target.value});
  },
  handleInputStateDistance: function (event) {
    this.setState({distance: event.target.value});
  }

});
