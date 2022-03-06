import React from 'react';
import ReactDOM from 'react-dom';
import PlopTest from './PlopTest';

it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(
<PlopTest />, div);
ReactDOM.unmountComponentAtNode(div);
});