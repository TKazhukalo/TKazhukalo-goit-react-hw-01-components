import styled from 'styled-components';
export const Table=styled.table`
   width: 428px;
   padding:0px 14px;
   text-align: center;
`
export const TableBody = styled.tbody`
  // border: 1px solid green;
`
export const TableData=styled.td`
   border: 1px solid green;
   border-radius:10px;
   font-size:20px;
   padding:5px;
   &:hover{
      background-color:#96db83;
       box-shadow: 0 0 0 1px green, 0 0 13px #333;
   }
`
export const TableHeader=styled.th`
   font-size:24px;
   font-weight:600;
   padding-bottom:10px;
   &:hover{
      color: #4400fd;
   }
`