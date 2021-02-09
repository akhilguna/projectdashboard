import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  body:{
    backgroundColor: '#eee'
  },
  table: {
    minWidth: 250,
    fontSize: '1.2em',
    backgroundColor:'#ffffff'
  },
  subtitle1: {
    fontSize: 20,
  },
  thcolor1: {
    fontSize: 20,

  },
  thcolor2: {
    fontSize: 20,

  },
});

function createData(name, calories, datestart, dateend, protein) {
  return { name, calories, datestart, dateend, protein };
}

const rows = [
  createData('slot1', 1, "06/30/2019","07/30/2019"),
  createData('slot2', 0, "06/30/2019","07/30/2019" ),
  createData('slot3', 1, "06/30/2019","07/30/2019"),
  createData('slot4', 1,"06/30/2019","07/30/2019" ),
  createData('slot5', 0, "06/30/2019","07/30/2019"),
];

export default function BasicTable() {
  const classes = useStyles();
  return (
    <Container fixed>
    <img src="image/vnr.png" className="img-bottom"/> 
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="center"  className={classes.thcolor1}>Slots Fill</TableCell>
            <TableCell align="center"  className={classes.thcolor2}>Slots status</TableCell>
            <TableCell align="center"  className={classes.thcolor2}>Date starting </TableCell>
            <TableCell align="center"  className={classes.thcolor2}>Date ending</TableCell>
            <TableCell align="center"  className={classes.thcolor2}>timings</TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
        
          {rows.map((row) => (
            <TableRow>
              <TableCell compnent="th" align="center" className={classes.subtitle1}>
                {row.name}
              </TableCell>
              <TableCell align="center"><Status isLoggedIn={row.calories} /></TableCell>
              <TableCell align="center">{row.datestart}</TableCell>
              <TableCell align="center">{row.dateend}</TableCell>
              <TableCell align="center"><Diff start={row.datestart} end={row.dateend}/></TableCell>
              </TableRow> 
             ))}
                    
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: "select the status",
//       countries: [
//         { id: "1", country: "Available", class:"green" },
//         { id: "2", country: "Not available",class:"red" },
//         { id: "3", country: "parked", class:"black" }
//       ]
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     alert("Your favorite flavor is: " + this.state.value);
//     event.preventDefault();
//   }

//   handleChange = event => {
//     this.setState({ value: event.target.value });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         {/* <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label> */}
//         <br />
//         <br />
//         <label>
//           {/* Looping through Array */}
//           <select>
//             {this.state.countries.map(item => (
//               <option key={item.id} value={item.country} className={item.class}>
//                 {item.country}
//               </option>
//             ))}
//             {console.log(this.state.countries)}
//           </select>
//         </label>
//           {/* <input type="submit" value="Submit" /> */}
//       </form>
//     );
//   }
// }


function Status(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {    return <UserStatus />;  }  return <UserNotStatus />;}
function UserStatus(props) {
return <p className="green">Available</p>;
}

function UserNotStatus(props) {
return <p className="red">Not available </p>;
}

function Diff(props){
  var date1 = new Date(props.start); 
  var date2 = new Date(props.end); 
  var Difference_In_Time = date2.getTime() - date1.getTime(); 
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  return Difference_In_Days
}