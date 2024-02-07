import Header from "../components/header"
export default function AddEnquery() {
    return (
        <>
            <Header />
            <div className="container">
                {/* headind bar */}
                <div className="heading-bar">
                    <h5 className="heading-h5">Add New Enquiry</h5>
                </div>
                {/* heading-bar end */}

                {/* form start */}
                <div className="form-head">

                    <form method="post">

                        <div className="input-parent">
                            <div className="form-blank-heading">

                                <p className=""><i class="fa fa-user fafa-form"></i><span className="form-heading-name">Full Name</span></p>
                            </div>
                            <input className="form-blank" type="text" name="name" />
                        </div>

                        <div className="input-parent">
                            <div className="form-blank-heading">
                                <p className=""><i class="fa fa-user fafa-form"></i><span className="form-heading-name">Father Name</span></p>
                            </div>
                            <input className="form-blank" type="text" name="name" />
                        </div>

                        <div className="input-parent">
                            <div className="form-blank-heading">
                                <p className=""><i class="fa fa-phone fafa-form"></i><span className="form-heading-name">Phone</span></p>
                            </div>
                            <input className="form-blank" type="text" name="name" />
                        </div>

                        <div className="input-parent">
                            <div className="form-blank-heading">
                                <p className=""><i class="fa fa-phone fafa-form"></i><span className="form-heading-name">Father Phone (optional)</span></p>
                            </div>
                            <input className="form-blank" type="text" name="name" />
                        </div>

                        <div className="input-parent">
                            <div className="form-blank-heading">
                                <p className=""><i class="fa fa-home fafa-form"></i><span className="form-heading-name">Batch Name</span></p>
                            </div>
                            <input className="form-blank" type="text" name="name" />
                        </div>

                        <div className="input-parent">
                            <div className="form-blank-heading">
                                <p className=""><i class="fa fa-location-arrow fafa-form"></i><span className="form-heading-name">Address</span></p>
                            </div>
                            <input className="form-blank" type="text" name="name" />
                        </div>

                        <div className="input-parent">
                            <div className="form-blank-heading">
                                <p className=""><i class="fa fa-location-arrow fafa-form"></i><span className="form-heading-name">Enquery date</span></p>
                            </div>
                            <input className="form-blank" type="date" name="name" />
                        </div>

                        <div className="input-parent">
                            <div className="form-blank-heading">
                                <p className=""><i class="fa fa-users fafa-form"></i><span className="form-heading-name">Gender</span></p>
                            </div>
                            <select class="form-control" name="gender" require="">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <button className=" form-control query-button">Save All Changes</button>

                    </form>

                    {/* form end */}
                </div>

                {/* container end */}
            </div>
            {/* form end */}
        </>
    )
}