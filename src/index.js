import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome';

const supportsHistory = 'pushState' in window.history;

render(
  <Router forceRefresh={!supportsHistory} >
    <Switch>
      <Route path="/" component={Welcome} />
    </Switch>
  </Router>,
  document.getElementById('anchor')
);
