import styled from 'styled-components';
export const Container = styled.div`
   background-color:#a7fd91;
    width: 428px;
    margin: 0 auto;
    border-radius:4px;
    overflow: hidden;
    `
export const Description = styled.div`
  background-color:#96db83;
  padding: 40px;
   box-shadow: 0 0 0 1px green, 0 0 5px #333;
`
export const Avatar = styled.img`
  display:block;
  margin: 0 auto;
  max-width:200px;
  border-radius: 100%;
  box-shadow: 0 0 0 2px green, 0 0 13px #333;
&:hover{
  box-shadow: 0 0 0 2px green, 0 0 13px #3546e2;
}
`
export const UserName = styled.p`
  display:block;
  font-size:24px;
  font-weight: 500;
  text-align: center;
  color: #110e0e;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
&:hover{
      color: #4400fd;
}
`
export const Options = styled.p`
   text-align: center;
   font-size:20px;
   color: #3e423c;
`
export const StatsList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  justify-content:space-around;;
  align-items: center;
  padding-left: 14px;
  padding-right: 14px;
  gap:5px;

`
export const LabelItem = styled.span`
  display:flex;
  font-size:20px;
  color: #3e423c;
  justify-content: center;
  text-align:center;
  margin-bottom:10px;
`
export const Quantity = styled.span`
     font-size:20px;
     text-align:center;
     display:block;
`
export const ListItem=styled.li`
    display: list-item;
    text-align: center;
    border-radius:15px;
    box-shadow: 0 0 0 1px #2e5f20, 0 0 10px #333;
    padding:20px;
    width:100px;
   &:hover{
    box-shadow: 0 0 0 1px #76f752, 0 0 10px #333;
   }
`