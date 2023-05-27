import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Container, Description, LabelItem, ListItem, Options, Quantity, StatsList, UserName } from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (<Container>
    <Description>
      <Avatar
      src={avatar}
      alt={username}
    />
      <UserName>{username}</UserName>
      <Options>@{tag}</Options>
      <Options>{location}</Options>
    </Description>

    <StatsList>
      <ListItem>
        <LabelItem>Followers </LabelItem>
        <Quantity>{stats.followers}</Quantity>
      </ListItem>
      <ListItem>
        <LabelItem>Views </LabelItem>
        <Quantity>{stats.views}</Quantity>
      </ListItem>
      <ListItem>
        <LabelItem>Likes </LabelItem>
        <Quantity>{stats.likes}</Quantity>
      </ListItem>
    </StatsList>
  </Container>)
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats:PropTypes.exact( {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}