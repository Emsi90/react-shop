import React from 'react';

import './withLoader.scss';

interface HocProps {
  loading: boolean;
}

const withLoader = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & HocProps> => (props: P & HocProps) => {
  return props.loading ? (
    <div className='loader-overlay'>
      <div className='loader-circle-wrap'>
        <div className='loader-circle' />
      </div>
    </div>
  ) : (
    <WrappedComponent {...props} />
  );
};

export default withLoader;
