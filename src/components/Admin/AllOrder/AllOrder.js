import { CircularProgress, LinearProgress, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React, { useEffect, useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Sidebar from "../Sidebar/Sidebar";
import "./AllOrder.css";
const options = [
    { value: 'Pending', label: 'Pending' },
    { value: 'On Going', label: 'On Going' },
    { value: 'Done', label: 'Done' }
]
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: "60%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  spinner: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const AllOrder = () => {
    const [allOrders, setAllOrders] = useState("")
    console.log("allOrders",allOrders);
    const classes = useStyles();
    
  const handleChange = (e,id) => {
    
    fetch(`https://thawing-ravine-07119.herokuapp.com/update/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: e.value })
    })
        .then(res => res.json())
        .then(data => {
            console.log("data",data);
            if (data) {
                alert('Status updated successfully')
            }
        })
         
  };

  useEffect(() => {
    fetch("https://thawing-ravine-07119.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  
  const defaultOption = options[0];
  

    return (
        <>
        <Sidebar/>
        <TableContainer align="center" component={Paper}>
            <Typography align="center" variant="h3" gutterBottom>
                 Manage Orders : {allOrders.length}
            </Typography>
        <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell variant="h3" align="center">Name</TableCell>
            <TableCell align="center">Email ID</TableCell>
            <TableCell align="center">Service</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allOrders.length ? (
            allOrders.map((user) => (
                
              <TableRow key={user._id}>
                <TableCell align="center">{user.displayName}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.orderData.name}</TableCell>
                <TableCell align="center">${user.orderData.price}</TableCell>
                <TableCell align="center">
                <Dropdown options={options} onChange={(e) => { handleChange(e, `${user._id}`) }} value={defaultOption} placeholder="Select an option" />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <div className={classes.spinner}>
              <LinearProgress />
              <CircularProgress />
              <LinearProgress color="secondary" />
            </div>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    );
};

export default AllOrder;