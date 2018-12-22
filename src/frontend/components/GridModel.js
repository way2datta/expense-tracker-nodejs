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
                        (<th key={`th_${index}`}>{header}</th>));
                    return headers;
                })()}
            </tr>
        );
    }

    renderContent() {
        let counter = 0;
        return this.props.datasource.map(((model) => {
            counter += 1;
            return (
                <tr key={`key_${counter}`}>
                    {(
                        () => {
                            const columns = _.map(this.props.attributes, (attribute, index) => {
                                const value = model[attribute];
                                return (
                                    <td key={index}>
                                        {' '}
                                        {value}
                                        {' '}
                                    </td>
                                );
                            });
                            return columns;
                        })()}
                </tr>
            );
        }));
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
    attributes: PropTypes.arrayOf(PropTypes.string),
    headers: PropTypes.arrayOf(PropTypes.string),
    datasource: PropTypes.array
};