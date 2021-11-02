import React from 'react';

function Loading() {
  return (
    <div className="d-flex align-items-center text-secondary display-6 m-4 p-4">
      <strong>Loading...</strong>
      <div className="spinner-border ms-auto" role="status" aria-hidden="true" />
    </div>
  );
}

export default Loading;
