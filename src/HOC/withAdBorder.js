// withAdBorder.js
import React from 'react';

function withAdBorder(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div className="p-1 m-1  text-white border bg-black">
        <WrappedComponent {...props}/>
      </div>
    );
  };
}

export default withAdBorder;
