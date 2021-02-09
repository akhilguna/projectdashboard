import React from "react";
import idGenerator from "react-id-generator";
import {
    Button,
    TextField
  } from '@material-ui/core';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles({
//     body:{
//       backgroundColor: '#eee'
//     },
//     table: {
//       minWidth: 250,
//       fontSize: '1.2em',
//       backgroundColor:'#ffffff'
//     },
//     subtitle1: {
//       fontSize: 20,
//     },
//     thcolor1: {
//       fontSize: 20,
  
//     },
//     thcolor2: {
//       fontSize: 20,
  
//     },
//   });
export default class Update extends React.Component {
  state = {
    employees: [],
    firstname: "",
    lastname: "",
    id: 0,
    create: true
  };
  componentDidMount() {
    //Intializing sample data
    const emps = [
      { firstname: "slot1", lastname: "available", id: 0 },
      { firstname: "slot2", lastname: "notavailable", id: 0 }
    ];
    this.setState({
      employees: emps.map(e => {
        return {
          firstname: e.firstname,
          lastname: e.lastname,
          id: idGenerator()
        };
      })
    });
  }

  handleChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleCreateEmployee = () => {
    if (this.state.employees) {
      this.setState({
        employees: [
          ...this.state.employees,
          {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            id: idGenerator()
          }
        ]
      });
    } else {
      this.setState({
        employees: [
          {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            id: idGenerator()
          }
        ]
      });
    }
    this.setState({ firstname: "", lastname: "" });
  };

  handleEdit = e => {
    const employee = this.state.employees.find(function(emp) {
      if (emp.id === e.target.id) {
        return emp;
      }
    });
    this.setState({
      firstname: employee.firstname,
      lastname: employee.lastname,
      id: employee.id,
      create: false
    });
  };
  handleDelete = e => {
    this.setState({
      employees: this.state.employees.filter(function(emp) {
        if (emp.id !== e.target.id) return emp;
      })
    });
  };
  handleUpdateEmployee = () => {
    const employee = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      id: this.state.id
    };
    const employeesupdated = this.state.employees.map(emp => {
      if (emp.id === this.state.id) {
        return employee;
      } else return emp;
    });

    this.setState((prevStae, props) => ({
      employees: employeesupdated,
      create: true,
      firstname: "",
      lastname: ""
    }));
  };

  render() {
    const create = this.state.create ? "Save" : "Update";
    const { employees } = this.state;
    // const classes = useStyles();
    const inputIsEmpty =
      this.state.firstname === "" || this.state.lastname === "" ? true : false;
    return (
      <div>
        <TextField
                      type="text"
                      placeholder="Enter Firstname"
                      onChange={this.handleChange}
                      name="firstname"
                      value={this.state.firstname}
                  />
        <TextField
          type="text"
          placeholder="Enter Lastname"
          onChange={this.handleChange}
          name="lastname"
          value={this.state.lastname}
        />
        <Button
                style={{ width: 150 }}
                disabled={inputIsEmpty}
                onClick={
                  this.state.create
                    ? this.handleCreateEmployee
                    : this.handleUpdateEmployee
                }    
                  >
                              {create}
                  </Button>
        <br />
        <table border="1" style={{ width: 400, paddingTop: 5 }}>
          <thead>
            <tr>
              <th>Slot name</th>
              <th>slot status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, i) => {
              return (
                <tr key={i}>
                  <td>{emp.firstname}</td>
                  <td>{emp.lastname}</td>
                  <td>
                    <button onClick={this.handleEdit} id={emp.id}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={this.handleDelete} id={emp.id}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
{/* <TableContainer component={Paper}>
<Table className={classes.table} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell align="center"  className={classes.thcolor1}>Slots Fill</TableCell>
      <TableCell align="center"  className={classes.thcolor2}>Slots status</TableCell>
      <TableCell align="center"  className={classes.thcolor2}>edit</TableCell>
      <TableCell align="center"  className={classes.thcolor2}>Delete</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
  
  {employees.map((emp) => {
      return(
      <TableRow>
        <TableCell align="center">{emp.firstname}</TableCell>
        <TableCell align="center">{emp.lastname}</TableCell>
        <TableCell align="center"><Button onClick={this.handleEdit} id={emp.id}>Edit</Button></TableCell>
        <TableCell align="center"><Button onClick={this.handleDelete} id={emp.id}>Delete</Button></TableCell>
        </TableRow> 
      );
       })}
              
  </TableBody>
</Table>
</TableContainer> */}
      </div>
      
    );
  }
}
