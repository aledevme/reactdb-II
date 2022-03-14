import React, {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {exampleDictionary} from '../utils/fake'
import url from '../utils/statics'

const BasicTable = () => {
  const getData = async () => {
    // const {data} = await axios.get(`${url}/dictionary`)
    // setResponse({
    //   ...response,
    //   columns : Object.keys(data.data.table[0]).map(el => {
    //     return {
    //       field: el, 
    //     }
    //   }),
    //   rows:data.data.table
    // })
  }
  
  useEffect(() => {
    getData()
  },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              Object.keys((exampleDictionary[0])).map(el =>  <TableCell align="left">{el}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {exampleDictionary.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="left">{row.table_name}</TableCell>
              <TableCell align="left">{row.table_type}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.table_schema}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable