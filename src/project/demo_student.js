import Header from "../components/header";
import ReactTable from "react-table";  
import AllDbData from "./dbdata";
export default function DemoStudents(){
  console.log(AllDbData.DemoData);
  const demo = AllDbData.DemoData;
    return(
        <>
        <Header/>
        <div className="container">
        {/* headind bar */}
        <div className="heading-bar">
            <h5 className="heading-h5">View Demo Students</h5>
        </div>
        {/* heading-bar end */}


        <div className="form-head">

        <div className="input-parent">
                <input className="form-control" type="search" name="search" placeholder="Search"/>
                </div>
<div>
<table>
  <tr>
    <th>Demo id</th>
    <th>Name</th>
    <th>Phone	</th>
    <th> Batch	</th>
    <th>Gender	</th>

    <th>Address	</th>
    <th> Enquiry Date	</th>
    <th>Admission Status	</th>
    <th>Action	</th>
  </tr>
  {
        demo.map((data) => (
          <tr>
          <td>{data.demo_id}</td>
          <td>{data.name}</td>
          <td>{data.phone}</td>
          <td>{data.batch}</td>
          <td>{data.gender}</td>
          <td>{data.address}</td>
          <td>{data.date}</td>
          <td>{data.addmission_status}</td>
          <td><button className="add-admission">Add Admission</button></td>
          
        </tr>
        ))}

</table>
</div>
        </div>

        {/* container end */}
        </div>


        </>




        )}
