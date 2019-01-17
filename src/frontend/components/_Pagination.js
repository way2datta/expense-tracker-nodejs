import React from 'react';
import PropTypes from 'prop-types';
const _ = require('lodash');
import ReactPaginate from 'react-paginate';

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
        _.bindAll(this, ['handlePageClick']);
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
        if (this.props.containsRecords) {
            return <div>
                {this.renderPagination()}
            </div>;
        }
        return <div />;
    }
}

Pagination.propTypes = {
    containsRecords: PropTypes.bool,
    perPage: PropTypes.number,
    pageCount: PropTypes.number,
    loadDataSource: PropTypes.func
};