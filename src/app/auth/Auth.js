import React, { Component } from 'react';
import { SplashScreen } from '@core';
import { connect } from 'react-redux';
import * as userActions from 'app/auth/store/actions';
import { bindActionCreators } from 'redux';
import * as Actions from 'app/store/actions';
import firebaseService from 'app/services/firebaseService';
import jwtService from 'app/services/jwtService';

class Auth extends Component {

    state = {
        waitAuthCheck: true
    }

    componentDidMount() {
        return Promise.all([
            // Comment the lines which you do not use
            this.firebaseCheck(),
            // this.auth0Check(),
            this.jwtCheck()
        ]).then(() => {
            this.setState({ waitAuthCheck: false })
        })
    }

    jwtCheck = () => new Promise(resolve => {

        jwtService.on('onAutoLogin', () => {

            this.props.showMessage({ message: 'Logging in with JWT' });

            /**
             * Sign in and retrieve user data from Api
             */
            jwtService.signInWithToken()
                .then(user => {

                    this.props.setUserData(user);

                    resolve();

                    this.props.showMessage({ message: 'Logged in with JWT' });
                })
                .catch(error => {

                    this.props.showMessage({ message: error });

                    resolve();
                })
        });

        jwtService.on('onAutoLogout', (message) => {

            if (message) {
                this.props.showMessage({ message });
            }

            this.props.logout();

            resolve();
        });

        jwtService.on('onNoAccessToken', () => {

            resolve();
        });

        jwtService.init();

        return Promise.resolve();
    })

    firebaseCheck = () => new Promise(resolve => {

        firebaseService.init(
            success => {
                if (!success) {
                    resolve();
                }
            }
        );

        firebaseService.onAuthStateChanged(authUser => {
            if (authUser) {

                this.props.showMessage({ message: 'Logging in with Firebase' });

                /**
                 * Retrieve user data from Firebase
                 */
                firebaseService.getUserData(authUser.uid).then(user => {

                    this.props.setUserDataFirebase(user, authUser);

                    resolve();

                    this.props.showMessage({ message: 'Logged in with Firebase' });
                }, error => {

                    resolve();
                })
            }
            else {
                resolve();
            }
        });

        return Promise.resolve();
    })

    render() {
        return this.state.waitAuthCheck ? <SplashScreen /> : <React.Fragment children={this.props.children} />;
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: userActions.logoutUser,
        setUserData: userActions.setUserData,
        setUserDataAuth0: userActions.setUserDataAuth0,
        setUserDataFirebase: userActions.setUserDataFirebase,
        showMessage: Actions.showMessage,
        hideMessage: Actions.hideMessage
    },
        dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
