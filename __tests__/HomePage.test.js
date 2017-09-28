import 'react-native';
import React from 'react';
import { expect } from 'chai';

import HomePage from '../app/screens/HomePage.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

var mockNavigation = ()=>{};

describe('HomePage', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <HomePage navigation={ mockNavigation }/>
    );
  });

  // it('RememberAll', () => {
  //   const tree = renderer.create(<WelcomeHeader />);
  //   const jsontree = tree.toJSON()
  //   expect(jsontree.children).to.include('RememberAll');
  // });
});

afterAll(() => setTimeout(() => process.exit(), 4000))
