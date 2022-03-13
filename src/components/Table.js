import React, {useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {url} from '../utils/statics'
import axios from 'axios'
import {v4} from 'uuid';
const DataTable = () => {

  const [response, setResponse] = useState({
    columns: [],
    rows: [],
  }) 

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
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={[]}
        columns={response.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable