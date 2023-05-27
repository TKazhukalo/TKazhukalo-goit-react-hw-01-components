import React from 'react';
import PropTypes from 'prop-types';
import { Percentage, StatLabel, StatList, StatListItem, StatisticsSections, Title } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
   
    return (
        <StatisticsSections>
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map((item, idx) => (
                    <StatListItem key={item.id} id={item.id} index={idx}>
                        <StatLabel>{item.label}</StatLabel>
                        <Percentage>{item.percentage}%</Percentage>
                    </StatListItem>

                ))}
               
            </StatList>
        </StatisticsSections>
    )
    
}
Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};