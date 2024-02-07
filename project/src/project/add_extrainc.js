import Header from "../components/header";
export default function AddExtraIncome(){
    
    return(
        <>
            <Header />
            <div className="container">
                {/* headind bar */}
                <div className="heading-bar">
                    <h5 className="heading-h5">Add Extra Income</h5>
                </div>
                {/* heading-bar end */}

                {/* form start */}
                <div className="form-head">

                    <form method="post">

                        <div className="input-parent">
                            <div className="form-blank-heading">

                                <p ><span className="form-heading-name">Income Name</span></p>
                            </div>
                            <input className="form-blank" type="text" name="name" />
                        </div>

                        <div className="input-parent">
                            <div className="form-blank-heading">
                                <p ><span className="form-heading-name"> Income </span></p>
                            </div>
                            <input className="form-blank" type="text" name="name" />
                        </div>

                      

                        <div className="input-parent">
                            <div className="form-blank-heading">
                                <p ><span className="form-heading-name">Income Date</span></p>
                            </div>
                            <input className="form-blank" type="date" name="name" />
                        </div>


                        <button className=" form-control query-button">Save All Changes</button>

                    </form>

                    {/* form end */}
                </div>

                {/* container end */}
            </div>
            {/* form end */}
        </>




        )}
