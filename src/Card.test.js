import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer'

describe('<Card/>',() =>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card key={2} name="abs" content="Hello" />, div);
    ReactDOM.unmountComponentAtNode(div);
});

  it('renders this UI as expected', () => {
    const tree = renderer.create(<Card key ='a' title="card" content="snapshot"/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
});