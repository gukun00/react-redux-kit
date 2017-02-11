
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Login from './../Login/Login';
import AppMain from './../App/AppMain';

class App extends Component {
  static propTypes = {
    children: PropTypes.element,
    isAuthenticated: React.PropTypes.bool,
    routing: PropTypes.object
  };

  constructor(props) {
    super(props);
    //this.renderAuthenticatedPage = this.renderAuthenticatedPage.bind(this);

    this.state = {
      collapse: false
    };
  }

  componentDidMount() {
  }

  render() {
    const { isAuthenticated } = this.props;
    console.log("isAuthenticated",isAuthenticated)
    return (
      <div>
        {isAuthenticated?<AppMain/> : <Login/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { routing, auth: { isAuthenticated, user } } = state;
  return {
    isAuthenticated, user,routing
  };
}

export default connect(mapStateToProps)(App);
