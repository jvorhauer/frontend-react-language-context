import React from 'react';
import renderer from 'react-test-renderer';
import getContent from './getContent';

test('getContent for Dutch header', () => {
  const res = getContent('nl', 'header.menuItems.aboutUs');
  expect(res).toEqual("Over ons");
});
