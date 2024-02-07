
export default function Header(){
    const Close = () =>{
        {document.getElementById('Slidebar').style.width='0px'}
        {document.getElementById('Slidebar').style.padding='0px'}
     }

     const Open = () =>{
        {document.getElementById('Slidebar').style.width='210px'}
        {document.getElementById('Slidebar').style.padding='16px'}
     }

    return(
        <>
        <div className="flex">
        <div>
        <div className="slidebar-top" id="Slidebar">
                <a className="close-button" onClick={Close}><i class="fa fa-close"></i></a>

                <p className="slidebar-img-p">
                    <img className="slidebar-img" src="https://icssms.stomer.in/img/bg-img/7.png" />
                    <p className="slidebar-profile-name">
                        Vikas
                    </p>
                </p>
                <ul className="slidebar-list-top" >
                    <li>
                        <a href="#" className="flex slidebar-list">
                            <p className="fafa"><i class="fa fa-dollar"></i></p>
                            sef sefMy profile
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex slidebar-list">
                            <p className="fafa"><i class="fa fa-adjust"></i></p>
                            Mawady profile
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex slidebar-list">
                            <p className="fafa"><i class="fa fa-times-circle"></i></p>
                            awdy profile
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex slidebar-list">
                            <p className="fafa"><i class="fa fa-truck"></i></p>
                            Mawdy okad
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex slidebar-list">
                            <p className="fafa"><i class="fa fa-truck"></i></p>
                            My profile
                        </a>
                    </li><li>
                        <a href="#" className="flex slidebar-list">
                            <p className="fafa"><i class="fa fa-truck"></i></p>
                            Mawdy okad
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex slidebar-list">
                            <p className="fafa"><i class="fa fa-truck"></i></p>
                            My profile
                        </a>
                    </li><li>
                        <a href="#" className="flex slidebar-list">
                            <p className="fafa"><i class="fa fa-truck"></i></p>
                            Mawdy okad
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex slidebar-list">
                            <p className="fafa"><i class="fa fa-truck"></i></p>
                            My profile
                        </a>
                    </li><li>
                        <a href="#" className="flex slidebar-list">
                            <p className="fafa"><i class="fa fa-truck"></i></p>
                            Mawdy okad
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex slidebar-list">
                            <p className="fafa"><i class="fa fa-truck"></i></p>
                            My profile
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex slidebar-list">
                            <p className="fafa"><i class="fa fa-car"></i></p>
                            My profile
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    <div className="header flex">

<div className="left-logo">
    <a href="/">
<img className="left-img-logo" src="https://icssms.stomer.in/img/core-img/logo-small.png"/>
</a>
</div>

<div className="right-logo flex " >
    <a className="border-logo" href="profile">
    <img  src="https://icssms.stomer.in/img/bg-img/7.png"/>
    </a>

    <div className="border-logo" onClick={Open}>
    <i class="fa fa-bars bars"></i>
    </div>

</div>
    </div>

<div >
    </div>


    </div>
        </>
    )
}