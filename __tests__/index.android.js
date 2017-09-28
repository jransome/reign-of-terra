import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <reign_of_terra />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
