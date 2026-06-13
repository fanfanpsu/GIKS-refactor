import React from 'react';
import {connect} from "react-redux";

class Cell extends React.Component {

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
        const cellMarkup = this.props.cell.header ? (
            <th className="Cell Cell-header">
                {this.props.cell.content}
            </th>
        ) : (
            <td className="Cell">
                {this.props.cell.content}
            </td>
        );
        return cellMarkup;
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        cell: state.cellReducer.cell,
    }
};

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);