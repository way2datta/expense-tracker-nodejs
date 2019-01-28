import React from 'react';
import { shallow, mount } from 'enzyme';
import Grid from './Grid';

describe('<GridTest />', () => {
    it('Should render all basic elements', () => {
        const datasource = [{ name: 'John Doe', age: 33 }];
        const attributes = ['name'];
        const headers = ['Person name'];
        const headerCssClasses = ["grid-heading"];
        const columnCssClasses = ["grid-column"];

        const wrapper = shallow(<Grid
            attributes={attributes}
            datasource={datasource}
            headers={headers}
            headerCssClasses={headerCssClasses}
            columnCssClasses={columnCssClasses}
        />);

        expect(wrapper.find('table').exists()).toBeTruthy();
        expect(wrapper.find('thead').exists()).toBeTruthy();
        expect(wrapper.find('th[className="grid-heading"]').exists()).toBeTruthy();
        expect(wrapper.find('tbody').exists()).toBeTruthy();
        expect(wrapper.find('td[className="grid-column"]').exists()).toBeTruthy();
    });

    it('Should render no records found message when datasource is empty', () => {
        const wrapper = shallow(<Grid
            datasource={[]}
        />);
        expect(wrapper.find('h3').text()).toEqual("No records found");
    });

    it('Should be able to plug and render gridrow button', () => {
        const renderGridActions = () => {
            return <a data-test="inline-grid-button">Show</a>
        }
        const datasource = [{ name: 'John Doe'}];
        const attributes = ['name', renderGridActions];
        const headers = ['Person name'];

        const wrapper = shallow(<Grid
            attributes={attributes}
            datasource={datasource}
            headers={headers}
        />);
        expect(wrapper.find('a[data-test="inline-grid-button"]').exists()).toBeTruthy();
    });

    it('Should be able to click gridrow button', () => {
        const onShow = jest.fn();
        const renderGridActions = () => {
            return <a data-test="inline-grid-button"
                onClick={onShow}>Show</a>
        }
        const datasource = [{ name: 'John Doe'}];
        const attributes = ['name', renderGridActions];
        const wrapper = mount(<Grid
            attributes={attributes}
            datasource={datasource}
        />);
        wrapper.find('[data-test="inline-grid-button"]').simulate('click', { preventDefault: () => {} });
        expect(onShow).toHaveBeenCalled();
    });
});
