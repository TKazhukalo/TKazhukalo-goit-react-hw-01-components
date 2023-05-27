import styled from 'styled-components';
import { getRandomColor } from '../Statistics/getRandomColor';
export const StatisticsSections=styled.section`
  background-color:#a7fd91;
  padding-top: 14px;
  padding-left:14px;
  padding-right:14px;
  margin-left: auto;
  margin-right: auto;
`
export const StatList=styled.ul`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  gap:10px;
`
export const StatListItem=styled.li`
  display:flex;
  flex-direction:column;
  background-color:${props=>getRandomColor(props.index)};
  align-items:center;
  width:50px;
  padding: 8px;
`
export const StatLabel=styled.span`
  font-size:20px;
  font-weight:500;
`
export const Percentage=styled.span`
  font-weight:600;
  font-size:24px;
`
export const Title = styled.h2`
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  background-color: #96db83;
  font-size: 20px;
  font-weight: 700;
`;