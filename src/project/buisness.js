import Header from "../components/header"
export default function Buisness() {
    return (
        <>
        <Header/>
        <div className="container bui">
            <div className="bui-top flex">    
        <div className="bui-box">
            <p className="bui-p">Total Fee</p>
            <h1 className="bui-mrp">%355000</h1>
        </div>
        
        <div className="bui-box">
            
            <p className="bui-p">Pending Fee</p>
            <h1 className="bui-mrp pending">%5000</h1>
        </div>

        <div className="bui-box">
            
            <p className="bui-p">Investment</p>
            <h1 className="bui-mrp">0</h1>
        </div>

        <div className="bui-box">
            
            <p className="bui-p">Profit</p>
            <h1 className="bui-mrp success">%35500000</h1>
        </div>

        <div className="bui-box">
            
            <p className="bui-p">Extra Income</p>
            <h1 className="bui-mrp">0</h1>
        </div>


        </div>

        </div>
        </>
    )}