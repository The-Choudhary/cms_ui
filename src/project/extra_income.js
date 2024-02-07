import Header from "../components/header";
import ReactTable from "react-table";  
export default function ExtraIncome(){
    
    return(
        <>
        <Header/>
        <div className="container">
        {/* headind bar */}
        <div className="heading-bar">
            <h5 className="heading-h5">View Extra Income</h5>
        </div>
        {/* heading-bar end */}


        <div className="form-head ">

        <div className="input-parent only-flex">
                <input className="form-control inv-search" type="search" name="search" placeholder="Search"/>
    <p className="add-inv "><a >Add Extra Income</a></p>
                </div>
<div>
<table>
  <tr>
    <th>Income Name</th>
    <th>Income 	</th>
    <th>Income Date	</th>
    <th> Action	</th>
  </tr>


</table>
</div>
        </div>

        {/* container end */}
        </div>


        </>




        )}
