import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('renders without crashing', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'King In the North',
            email: 'john@WinterIsHere.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});