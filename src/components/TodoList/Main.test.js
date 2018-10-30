import React from 'react';

import { shallow } from '../../enzyme';

import TodoList from './Main';

describe('Todo List Test', () => {

  it('renders an empty message', () =>{

    const data = [];
    const wrapper  = shallow(<TodoList items={data} />);

    console.log(wrapper.debug())

    expect(wrapper.find('.empty-message')).toHaveLength(1)
  })

});
