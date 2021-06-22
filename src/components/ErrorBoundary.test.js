import React from 'react';
import { shallow, mount } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

it('renders without crashing', () => {
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
});

const Something = () => null;

it('should display an ErrorMessage if wrapped component throws', () => {
    const wrapper = mount(
        <ErrorBoundary>
            <Something />
        </ErrorBoundary>
    );

    const error = new Error('test');

    wrapper.find(Something).simulateError(error);
});