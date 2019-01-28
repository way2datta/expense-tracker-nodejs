import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

describe('<CardTest />', () => {
    it('Should render all basic elements', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('div').exists()).toBeTruthy();
    });
});
