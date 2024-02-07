import Header from "../components/header";
import ReactTable from "react-table";  
export default function ViewStudents(){
    
    return(
        <>
        <Header/>
        <div className="container">
        {/* headind bar */}
        <div className="heading-bar">
            <h5 className="heading-h5">All Students</h5>
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
    <th>Paid Amount	</th>
    <th> Joining Date	</th>
    <th>	Pending Fee	</th>
    <th>Status	</th>
    <th>	</th>
  </tr>

  <tr>
  <td>ANUJ KUMAR</td>
    <td>VIJAYPAL</td>
    <td>7892002099</td>
    <td>SSC</td>
    <td>2024-07-02</td>
    <td>8000</td>
    <td>	8000</td>
    <td>2023-07-03</td>
    <td className="pending">5000</td>
    <td><button className="add-fee"><i class="fa fa-pencil fafa-view-query"></i>Add Fee</button></td>
    <td ><button className="btn-enq-bg only-flex "><i class="fa fa-eye fafa-view-query"></i>View</button></td>
  </tr>
  <tr> 
    <td>ANUJ KUMAR</td>
    <td>VIJAYPAL</td>
    <td>7892002099</td>
    <td>SSC</td>
    <td>2024-07-02</td>
    <td>8000</td>
    <td>	8000</td>
    <td>2023-07-03</td>
    <td className="pending">0</td>
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
