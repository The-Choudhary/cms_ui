import Header from "../components/header";
import ReactTable from "react-table";  
export default function Help(){
    return(
    <>
    <Header/>
    <div className="container bui">

        <div className="help-box1">
<h4 className="help-h4">Stomer Infotech</h4>
<h4>How can we help you with?</h4>

        </div>

<div className="help-box2">
<h5 className="help-h5">Call & Mail</h5>
<p className="help-p" ><i class="fa fa-phone help-fafa"></i><span>+918740056088</span></p>
<p className="help-p" ><i class="fa fa-car help-fafa"></i><span>stomerinfotech@gmail.com</span></p>
</div>

<div className="help-box2">
<h5 className="help-h5">Other Services </h5>
<p className="help-p"><i class="fa fa-cloud help-fafa help-fafa2"></i><span>Web Development</span></p>

<p className="help-p"><i class="fa fa-dollar help-fafa help-fafa2"></i><span>App Development</span></p>
<p className="help-p"><i class="fa fa-dollar help-fafa help-fafa2"></i><span>Software Development</span></p>
<p className="help-p"><i class="fa fa-dollar help-fafa help-fafa2"></i><span>Online Promotion</span></p>
<p className="help-p"><i class="fa fa-dollar help-fafa help-fafa2"></i><span>Business Analysis</span></p>

</div>

        </div>

    </>
    
    )}