import styles from './LoadingIndicator.module.scss';

import React from 'react';
import clsx from 'clsx';
import { Loader } from 'semantic-ui-react';

interface IProps {
  readonly isActive?: boolean;
}

export const LoadingIndicator: React.FC<IProps> = (props) => {
  return (
    <div
      className={clsx({
        [styles.wrapper]: props.isActive,
      })}
    >
      {props.isActive && (
        <div className={styles.loaderContainer}>
          <Loader content="Loading" active={true} inverted={true} size="huge" />
        </div>
      )}
      {props.children}
    </div>
  );
};

LoadingIndicator.defaultProps = {
  isActive: false,
};
