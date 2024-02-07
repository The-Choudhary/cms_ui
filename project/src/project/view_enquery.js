import Header from "../components/header";
import { useState } from "react";
import AllDbData from "./dbdata";
import ReactPaginate from 'react-paginate';

export default function ViewEnquery(){

  const edata = AllDbData.EnquiryData.EnquiryDoneData;


  const edata2 = AllDbData.EnquiryData.EnquiryPendingData;

console.log(AllDbData.EnquiryData.EnquiryDoneData,"okk"
  );



    
 
    return(
        <>
        <Header/>
        <div className="container">
        {/* headind bar */}
        <div className="heading-bar">
            <h5 className="heading-h5">pending Enquiry</h5>
        </div>
        {/* heading-bar end */}


        <div className="form-head">

        <div className="input-parent">
                <input className="form-control" type="search" name="search" placeholder="Search"/>
                </div>
<div>
<table>
  <tr>
    <th>Enquery id</th>
    <th>Name</th>
    <th>Phone	</th>
    <th> Batch	</th>
    <th>Gander	</th>
    <th>Address	</th>
    <th> Enquiry Date	</th>
    <th> Demo Status	</th>
    <th>Admission Status	</th>
    <th>Status	</th>
    <th>	</th>
  </tr>

  {
        edata.map((edata) => (
          <tr>
          <td>{edata.enquiry_id}</td>
          <td>{edata.name}</td>
          <td>{edata.phone}</td>
          <td>{edata.batch}</td>
          <td>{edata.gender}</td>
          <td>{edata.address}</td>
          <td>{edata.date}</td>
          <td>{edata.demo_status}</td>
          <td>{edata.admission_status}</td>
          <td><button className="add-admission">Add Admission</button></td>
          <td></td>
        </tr>
        ))}
 
  <tr> 
    <td>ANUJ KUMAR</td>
    <td>VIJAYPAL</td>
    <td>7892002099</td>
    <td>7690860029 </td>
    <td>SSC</td>
    <td>male</td>
    <td>2023-06-25</td>
    <td>83LNP, SRI GANGANAGAR, RAJSTHAN</td>
    <td>Done</td>
    <td>Done</td>
    <td><button className="btn-enq-bg only-flex "><i class="fa fa-eye fafa-view-query"></i>View</button></td>
    <td className="only-flex"><button className="btn-enq-bg only-flex"><i class="fa fa-pencil fafa-view-query"></i> Edit</button>
    <button className="btn-enq-bg">Message</button>

    </td>
  </tr>
</table>

</div>
        </div>

        {/* container end */}
        </div>


        <div className="container">
        {/* headind bar */}
        <div className="heading-bar">
            <h5 className="heading-h5">Done Enquiry</h5>
        </div>
        {/* heading-bar end */}


        <div className="form-head">

        <div className="input-parent">
                <input className="form-control" type="search" name="search" placeholder="Search"/>
                </div>
<div>
<table>
  <tr>
    <th>Enquery id</th>
    <th>Name</th>
    <th>Phone	</th>
    <th> Batch	</th>
    <th>Gander	</th>
    <th>Address	</th>
    <th> Enquiry Date	</th>
    <th> Demo Status	</th>
    <th>Admission Status	</th>
    <th>Status	</th>
  </tr>

  {
        edata2.map((data) => (
          <tr>
          <td>{data.enquiry_id}</td>
          <td>{data.name}</td>
          <td>{data.phone}</td>
          <td>{data.batch}</td>
          <td>{data.gender}</td>
          <td>{data.address}</td>
          <td>{data.date}</td>
          <td>{data.demo_status}</td>
          <td>{data.admission_status}</td>
          <td><button className="add-admission">Add Admission</button></td>
          
        </tr>
        ))}
 
  <tr> 
    <td>ANUJ KUMAR</td>
    <td>VIJAYPAL</td>
    <td>7892002099</td>
    <td>7690860029 </td>
    <td>SSC</td>
    <td>male</td>
    <td>2023-06-25</td>
    <td>83LNP, SRI GANGANAGAR, RAJSTHAN</td>
    <td>Done</td>
    <td>Done</td>
    <td><button className="btn-enq-bg only-flex "><i class="fa fa-eye fafa-view-query"></i>View</button></td>
    <td className="only-flex"><button className="btn-enq-bg only-flex"><i class="fa fa-pencil fafa-view-query"></i> Edit</button>
    <button className="btn-enq-bg">Message</button>

    </td>
  </tr>
</table>

</div>
        </div>

        {/* container end */}
        </div>
        </>




        )}
