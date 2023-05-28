import styled from 'styled-components';
export const List=styled.ul`
    display:flex;
    flex-direction:column;
    width:300px;
    gap: 10px;
    margin: auto;
    padding:0;
    margin-bottom:20px;
`
export const Item = styled.li`
    display:flex;
    align-items:center;
    box-shadow: 0 0 0 1px #2e5f20, 0 0 10px #333;
    padding: 5px;
 &:hover{
      box-shadow: 0 0 0 1px #76f752, 0 0 10px #333;
 }
`
export const Status=styled.span`
    margin: 0px 14px;
    width:15px;
    height: 15px;
    border-radius:50%;
    background-color:green;
    background-color:${({ isOnline }) => {
    return isOnline ? `green` : `red`;
    }};
`
export const FriendsAvatar=styled.img`
    margin-right:15px;
    width:48px;
`
export const FrientsName=styled.p`
    font-size:24px;
    font-weight:600;
    margin:0;
   
`