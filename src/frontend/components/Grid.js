import React from 'react';
import PropTypes from 'prop-types';
const _ = require('lodash');

export default class GridModel extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, ['renderHeaders', 'renderContent']);
    }

    renderHeaders() {
        return (
            <tr key="column-header">
                {(() => {
                    const headers = _.map(this.props.headers, (header, index) =>
                        (<th key={`th_${index}`} className={this.getHeaderCssClass(index)}>{header}</th>));

                    const actionHeaders = _.map(this.props.actionHeaders,
                        actionHeader => actionHeader());
                    return headers.concat(actionHeaders);
                })()}
            </tr>
        );
    }

    getHeaderCssClass(index) {
        return this.props.headerCssClasses !== undefined ? this.props.headerCssClasses[index] : '';
    }

    getColumnCssClass(index) {
        return this.props.columnCssClasses !== undefined ? this.props.columnCssClasses[index] : '';
    }

    renderContent() {
        let counter = 0;
        return this.props.datasource.map(((model) => {
            counter += 1;
            return (
                <tr key={`key_${counter}`}>
                    {(
                        () => {
                            const columns = _.map(this.props.attributes, (propertyName, index) => {
                                const value = this.getPropertyValue(model, propertyName);
                                return (
                                    <td key={index} className={this.getColumnCssClass(index)}>
                                        {' '}
                                        {value}
                                        {' '}
                                    </td>
                                );
                            });
                            const actions = _.map(this.props.actions, action => action(model));
                            return columns.concat(actions);
                        })()}
                </tr>
            );
        }));
    }

    getPropertyValue(model, propertyName) {
        if (typeof propertyName === 'function') {
            return propertyName(model);
        }

        if (propertyName.indexOf(".") > -1) {
            const props = propertyName.split(".");
            const parentEntity = props[0];
            const parentPropertyName = props[1];
            return model[parentEntity][parentPropertyName];
        }
        return model[propertyName];
    }

    renderDatasource() {
        return (
            <table className="table">
                <thead className="headers">
                    {this.renderHeaders()}
                </thead>
                <tbody className="content">
                    {this.renderContent()}
                </tbody>
            </table>);
    }

    render() {
        if (this.props.datasource.length) {
            return this.renderDatasource();
        }

        return <h3 className="margin-top-30">No records found</h3>;
    }


}

GridModel.propTypes = {
    attributes: PropTypes.array,
    columnCssClasses: PropTypes.array,
    headers: PropTypes.arrayOf(PropTypes.string),
    datasource: PropTypes.array,
    actionHeaders: PropTypes.array,
    actions: PropTypes.array,
    headerCssClasses: PropTypes.array
};