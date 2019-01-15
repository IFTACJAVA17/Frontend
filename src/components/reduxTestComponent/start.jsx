import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/index';
import { googleAuthProvider } from '../../config/firebase';
import PropTypes from 'prop-types';

class Start extends Component {

    static contextTypes = {  router: PropTypes.object }

    componentWillUpdate(nextProps) {
        if (nextProps.user) {
          this.context.router.history.push('/loggedin');
        }
      }

    render(){
        return(
        <div>
            Start<br />
            <button onClick={signIn(googleAuthProvider)}>Log in with google</button>
        </div>)
    }
}

const mapStateToProps = ({ user }) => {
    return { user };
} 

export default connect(mapStateToProps, { signIn })(Start);