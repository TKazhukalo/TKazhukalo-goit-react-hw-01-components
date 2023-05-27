import React from 'react';
import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
    return (
        <List>
            {
                friends.map(({ avatar,name,isOnline,id}) => (
                    <FriendListItem
                        key={id}
                        id={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline} />
                )
                )
            }
        </List>
)}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
}