import React from 'react';
import PropTypes from 'prop-types';
import { FriendsAvatar, FrientsName, Item, Status } from './FriendList.styled';
export const FriendListItem = ({ avatar, name, isOnline, id}) => {
    return (
        <Item key={id} id={id}>
            <Status isOnline={isOnline}></Status>
            <FriendsAvatar src={avatar} alt={name} width="48" />
            <FrientsName>{name}</FrientsName>

        </Item>
    )
}
FriendListItem.propTypes = {
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }
