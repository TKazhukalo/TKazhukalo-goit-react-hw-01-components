import PropTypes from 'prop-types';
import styled from 'styled-components';
const Container = styled.div`
   background-color:#a7fd91;
    width: 428px;
    margin: 0 auto;
    border-radius:4px;
    overflow: hidden;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
   
`
const Description=styled.div`
  background-color:#96db83;
  padding: 40px;
`
const Avatar=styled.img`
 display:block;
  margin: 0 auto;
 max-width:200px;
  border-radius: 100%;
  box-shadow: 0 0 0 2px green, 0 0 13px #333;
  //border:1px solid #768173;
`
const UserName=styled.p`
  display:block;
  font-size:24px;
  font-weight: 500;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const Options=styled.p`
   text-align: center;
   font-size:20px;
   color: #3e423c;
`
const StatsList=styled.ul`
  list-style-type: none;
 display: flex;
padding: 0;
justify-content:space-around;;
align-items: center;
padding-left: 14px;
padding-right: 14px;
`
const LabelItem=styled.span`
  display:flex;
  font-size:20px;
   color: #3e423c;
//justify-content:space-between;
   text-align:center;
   //margin-right:30px;
   margin-bottom:10px;
`
const Quantity=styled.span`
   font-size:20px;
     text-align:center;
     display:block;
`
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
    <li>
        <LabelItem>Followers </LabelItem>
        <Quantity>{stats.followers}</Quantity>
    </li>
    <li>
        <LabelItem>Views </LabelItem>
        <Quantity>{stats.views}</Quantity>
    </li>
    <li>
        <LabelItem>Likes </LabelItem>
        <Quantity>{stats.likes}</Quantity>
    </li>
    </StatsList>
  </Container>)
}
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats:PropTypes.exact( {
  followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  })
}