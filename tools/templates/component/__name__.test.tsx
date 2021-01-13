/* eslint-env jest */
import '@testing-library/jest-dom';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { __name__ } from './__name__';

describe('__name__', () => {
  afterEach(() => {
    cleanup();
  });

  describe('when called with with no props', () => {
    test('should not null', () => {
      const { getByTestId } = render(
        <TestWrapper>
          <__name__ />
        </TestWrapper>
      );

      expect(getByTestId('__name__')).not.toBeNull();
    });
  });
});
