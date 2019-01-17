import React from 'react';
import PropTypes from 'prop-types';
const _ = require('lodash');
import ReactPaginate from 'react-paginate';

export default class GridWithPagination extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, ['renderHeaders', 'renderContent','handlePageClick']);
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
        const containsForeignKeyRelationship = propertyName.indexOf(".") > -1;

        if (containsForeignKeyRelationship) {
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

    handlePageClick(data) {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);
        this.setState({ offset: offset }, () => {
            this.props.loadDataSource(selected);
        });
    }

    renderPagination() {
        return (
            <ReactPaginate previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={+this.props.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                disabledClassName="disabled"
            />
        );
    }


    render() {
        if (this.props.datasource.length) {
            return <div>
                {this.renderDatasource()}
                {this.renderPagination()}
            </div>;
        }
        return <h3 className="margin-top-30">No records found</h3>;
    }
}

GridWithPagination.propTypes = {
    attributes: PropTypes.array,
    columnCssClasses: PropTypes.array,
    headers: PropTypes.arrayOf(PropTypes.string),
    datasource: PropTypes.array,
    actionHeaders: PropTypes.array,
    actions: PropTypes.array,
    headerCssClasses: PropTypes.array,
    perPage: PropTypes.number,
    pageCount: PropTypes.number,
    loadDataSource: PropTypes.func
};