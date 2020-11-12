import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplates';
import { Notes } from './Notes';
import { Article } from './Article';
import { Twitter } from './Twitter';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/article" component={Article} />
        <Route path="/twitter" component={Twitter} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
