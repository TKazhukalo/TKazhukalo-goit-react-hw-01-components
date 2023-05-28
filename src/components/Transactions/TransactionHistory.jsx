import React from 'react';
import PropTypes from 'prop-types';
import {  Table, TableBody, TableData, TableHeader } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
    return (<Table>
        <thead>
            <tr>
                <TableHeader>Type</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Currency</TableHeader>
            </tr>
        </thead>

        <TableBody>
            {items.map((item) => (
                <tr key={item.id} id={item.id}>
                    <TableData>{item.type}</TableData>
                    <TableData>{item.amount}</TableData>
                    <TableData>{item.currency}</TableData>
                </tr>
            ))}
            
        </TableBody>
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