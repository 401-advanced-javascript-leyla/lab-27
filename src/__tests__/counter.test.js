import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter';

describe('<Counter />', ()=>{
  it('should increase the count when button clicked', ()=>{
    let app = mount(<Counter />);
    let button = app.find('.up');
    let originalCount = app.state('count');
    button.simulate('click');
    expect(app.state('count')).toEqual(originalCount+1);
    expect(app.find('span').text()).toEqual((originalCount+1).toString());
  });

  it('should decrease the count when button clicked', ()=>{
    let app = mount(<Counter />);
    let button = app.find('.down');
    let originalCount = app.state('count');
    button.simulate('click');
    expect(app.state('count')).toEqual(originalCount-1);
    let decreased = originalCount-1;
    expect(app.find('span').text()).toEqual(`${decreased}`);
  });

  it('renders with a count in state', () => {
    let app = {
      state: {
        count: 0,
      },
      setState: (data) => app.state = Object.assign({}, state, data),
    };

    const component = renderer.create(
      <Counter app={app} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
  });

  
});