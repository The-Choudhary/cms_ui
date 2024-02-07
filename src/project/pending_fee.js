import Header from "../components/header";
import ReactTable from "react-table";  
import AllDbData from "./dbdata";
export default function Pendingfee(){
  console.log(AllDbData.AllStudentData);
  const demo = AllDbData.AllStudentData;
    
    return(
        <>
        <Header/>
        <div className="container">
        {/* headind bar */}
        <div className="heading-bar">
            <h5 className="heading-h5">Today Pending fee</h5>
        </div>
        {/* heading-bar end */}


        <div className="form-head">

        <div className="input-parent">
                <input className="form-control" type="search" name="search" placeholder="Search"/>
                </div>
<div style={{
    overflow: "scroll"}}> 
<table>
  <tr>
    <th></th>
    <th>student id</th>
    <th>Name</th>
    <th>Gender</th>
    <th>Dob</th>
    <th>Phone	</th>
  <th>Relative Name	</th>
    <th>Relative phonr	</th>
    <th>address</th>
    <th> Batch	</th>
    <th> Joining date	</th>
    <th>Course Validity	</th>
    <th>Course Validity	Date</th>
    <th> Total Fee	</th>
    <th>Paid Amount	</th>
    <th>Pending fee 	</th>
    <th>Action	</th>
  </tr>

  {
        demo.map((data) => (
          <tr>
          <td>{data.photo}</td>
          <td>{data.student_id}</td>
          <td>{data.name}</td>
          <td>{data.gender}</td>
          <td>{data.dob}</td>
          <td>{data.phone}</td>
          <td>{data.relative_name}</td>
          <td>{data.relative_phone}</td>
          <td>{data.address}</td>
          <td>{data.batch}</td>
          <td>{data.joining_date}</td>
          <td>{data.course_validity}</td>
          <td>{data.course_validity_date}</td>
          <td>{data.total_fee}</td>
          <td>{data.paid_fee}</td>
          <td>{data.pending_fee}</td>
          <td><button className="add-admission">Add Admission</button></td>
          
        </tr>
        ))}

</table>
</div>
        </div>







  {/* headind bar */}
  <div className="heading-bar">
  <h5 className="heading-h5"> Pending fee</h5>
</div>
{/* heading-bar end */}


<div className="form-head">

<div className="input-parent">
      <input className="form-control" type="search" name="search" placeholder="Search"/>
      </div>
<div>
<table>
<tr>
<th>Name</th>
<th>Father Name	</th>
<th>Phone	</th>
<th> Batch	</th>
<th>Course Validity	</th>
<th> Total Fee	</th>
<th> Due Date	</th>
<th>Paid Amount	</th>
<th> Joining Date	</th>
<th>	Pending Fee	</th>
<th>Action	</th>
</tr>

<tr>
<td>ANUJ KUMAR</td>
<td>VIJAYPAL</td>
<td>7892002099</td>
<td>SSC</td>
<td>2024-07-02</td>
<td>8000</td>
<td>	8000</td>
<td className="pending">5000</td>
<td>2023-07-03</td>
<td><button className="add-fee"><i class="fa fa-pencil fafa-view-query"></i>Add Fee</button></td>
<td ><button className="btn-enq-bg only-flex "><i class="fa fa-eye fafa-view-query"></i>View</button></td>
</tr>

</table>
</div>
</div>

{/* container end */}
</div>


</>



        )}
