
import React from 'react';
import PropTypes from 'prop-types';

const BottomContainer = (props) => {
  const { children } = props;
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e8e8e8',
        padding: '10px 16px',
        textAlign: 'right',
        left: 0,
        background: '#fff',
        borderRadius: '0 0 4px 4px',
      }}
    >
      { children }
    </div>
  );
};

BottomContainer.propTypes = { children: PropTypes.node.isRequired };

export default BottomContainer;
