import React from 'react';

const Graph = () => {
  return (
    <div className="hGraph">
      <ul>
        <li>
          <span className="gTerm">a</span>
          <span className="gBar <%= edit_class %>">
            <span>1일b</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Graph;
