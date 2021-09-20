import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid'
import { server_calls } from '../../api/server';
import { useGetData } from '../../custom-hooks';
import { Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
  } from '@material-ui/core';
import { SmashForm } from '../../components'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 350,
      editable: true,
    },
    {
      field: 'games_appeared_in',
      headerName: 'Games Appeared In',
      
      width: 250,
      editable: true,
    },
    {
      field: 'abilites',
      headerName: 'Abilities',
      
      sortable: false,
      width: 250,

    },
    {
        field: 'weight',
        headerName: 'Weight',
        editable: true,
        width: 150
    }
  ];

  interface gridData{
      data:{
          id?:string;
      }
  }
  
export const DataTable = () => {
    let {smashData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}})

    let handleOpen = () => {
        setOpen(true)
    }
    let handleClose = () => {
        setOpen(false)
    }

    let deleteData = () => {
        server_calls.delete(gridData.data.id!)
    }
    console.log(gridData.data.id)

        return (
            <div style={{ height: 400, width: '100%' }}>
                <h2>Smash Character Inventory</h2>
                <DataGrid rows={smashData} columns={columns} pageSize={5} checkboxSelection />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant='contained' color='secondary' onClick={deleteData}>Delete</Button>

            {/* Dialog Pop up starts here */}
            <Dialog open ={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Update Your Characters</DialogTitle>
                <DialogContent>
                    <DialogContentText>{gridData.data.id}</DialogContentText>
                    <SmashForm id={gridData.data.id!} />   
                </DialogContent>    
                <DialogActions>
                    <Button onClick= {handleClose} color='primary'>Cancel</Button>
                </DialogActions>

            </Dialog>
            </div>
        )
}