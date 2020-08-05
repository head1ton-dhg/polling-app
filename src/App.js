import React, { Component } from 'react';
import './App.css';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';

import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';

import PollList from '../poll/PollList';
import NewPoll from '../poll/NewPoll';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import AppHeader from '../common/AppHeader';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import PrivateRoute from '../common/PrivateRoute';

import { Layout, notification } from 'antd';

const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentUser: null,
        isAuthenticated: false,
        isLoading: false
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
        placement: 'topRight',
        top: 70,
        duration: 3,
    });
  }

  loadCurrentUser() {
      this.setState({
          isLoading: true
      });

      getCurrentUser()
      .then(response => {
          this.setState({
              currentUser: response,
              isAuthenticated: true,
              isLoading: false
          });
      }).catch(error => {
          this.setState({
              isLoading: false
          });
      });
  }
}