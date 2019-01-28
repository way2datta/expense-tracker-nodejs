import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { Card } from './Card';


describe('<CardTest />', () => {
    it('Should render all basic elements', () => {
        const wrapper = shallow(<Card backgroundColor="bg-mycolor"
            linkUrl="/atom"
        />);
        expect(wrapper.find('Link[to="/atom"]').exists()).toBeTruthy();
    });
});
