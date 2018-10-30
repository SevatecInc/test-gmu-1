import React from 'react';
import PropTypes from 'prop-types';

function TodoList(props){

  const {items} = props;

  if(!items.length){
    return <span className="empty-message">Nothin To See Here.</span>
  }
}

TodoList.propTypes = {
  items: PropTypes.array,
}

TodoList.defaultProps = {
  items: [],
}

export default TodoList;