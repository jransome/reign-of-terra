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

  it('displays the title', () => {
    const tree = renderer.create(<HomePage navigation={ mockNavigation }/>);
    const jsontree = tree.toJSON()
    expect(jsontree.children[0].children).to.include('reign_of_terra');
  });

  it('has a button with text click_to_start', () => {
    const tree = renderer.create(<HomePage navigation={ mockNavigation }/>);
    const jsontree = tree.toJSON()
    expect(jsontree.children[2].children[0].children[0].children[0]).to.include('click_to_start');
  });
});

afterAll(() => setTimeout(() => process.exit(), 4000))
