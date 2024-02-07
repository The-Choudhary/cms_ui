import { useNavigate } from "react-router-dom";
import Header from "../components/header"
export default function Profile() {
    const navigate = useNavigate();

    const logout=() =>{
        localStorage.clear();
        navigate("/login");
    }
    return (
        <>
        <Header/>
        <div className="container ">
        <div className="heading-bar profile-head flex">
            <div className="profile-image">
                <img src="https://icssms.stomer.in/SitePhoto/64f4835a5974caditya food.png"/>
                </div>
            <div className="profile-detail">
            <p>ID :  SS00238293</p>
        <h5 className="profile-h5">Vikas</h5>
            </div>


            </div>


            <div className="form-head flex">
            
  <div className="profile-box1">
    <p className="profile-p">ID</p>
    

    <p className="profile-p">Full Name	</p>
    

    <p className="profile-p">Phone	</p>
    

    <p className="profile-p">Email	</p>
    

    <p className="profile-p"> Address	</p>
    
    </div>
<div className="profile-box2">
<p className="profile-p">  SS8740056081	</p>
<p className="profile-p">Vikas	</p>
<p className="profile-p"> 9053002017 	</p>
<p className="profile-p"> vikasgigorani@gmail.com	</p>
<p className="profile-p">ganganagar	</p>
</div>

            </div>


<button className="profile-edit form-control "><i class="fa fa-pencil fafa-view-query"></i>Edit Profile</button>
  
        <div className="another-option flex"><h3 className="option-titles">Change Password </h3><p className="option-arrow"><i class="fa fa-angle-right"></i></p></div>

        <div className="another-option flex"><h3 className="option-titles">Support  </h3><p className="option-arrow"><i class="fa fa-angle-right"></i></p></div>

        <div className="another-option flex"><h3 onClick={logout} className="option-titles">Logout </h3><p className="option-arrow"><i class="fa fa-angle-right"></i></p></div>
  
        </div>



        </>
    )}
