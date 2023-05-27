import React from 'react';
import PropTypes from 'prop-types';
import { BodyTable, Table } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
    return (<Table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <BodyTable>
            {items.map((item) => (
                <tr key={item.id} id={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}
            
        </BodyTable>
    </Table>
    );
};
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired
}