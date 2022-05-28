import React, { useEffect, useState } from "react";
import Data from "./Data";
//import Axios from 'axios'

const Index = () => {
    const [data,setData] = useState(Data);

    const [input,setInput] = useState('')
    const [output,setOutput] = useState('')
    useEffect(() => {
        async function getData(){
            //const res = await Axios.get("")
            //setData(res.data)
        }
        getData()
    }, [])
    useEffect(() =>{

    }, [input])
    // useEffect (() => {
    //     async function getData(){
    //         const res = await Axios.get("")
    //         setData(res.data)
    //     }
    //     getData()
    // }, [])
    const filterResult = (catItem) => {
        const result = Data.filter((curData)=> {
           return curData.type === catItem;
        });
        setData(result);
    }
    return (
        <div>
            {/* -----------------------Header-------------------- */}
            <section className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <a className="navbar-brand" href="#">
                            <img src="https://beedesign.com.vn/wp-content/uploads/2020/08/tao-logo-shop-quan-ao-ny.jpg" width="150px" height="100px" className="d-inline-block align-top" alt="" />
                            
                            </a>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                {/* <button onClick={() => Result("Váy tiểu thư")}>Váy tiểu thư</button> */}
                            </li>
                            <li className="nav-item">
                                {/* <button onClick={() =>Result('Váy công sở')}>Váy công sở</button> */}
                            </li>
                            <form className="d-flex">
                                <input onChange={e=> setInput(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
            {/* --------------------content---------------------- */}
            <h1 className="text-center text info">Let's shop</h1>
            <div className="container-fluid mx-2">
                <div className="row mt-0 mx-2">
                    <div className="col-md-2">
                        <button className="btn-warning w-100 mb-4" onClick={() => filterResult('Váy tiểu thư')}>Váy tiểu thư </button>
                        <button className="btn-warning w-100 mb-4" onClick={() => filterResult('Váy công sở')}>Váy công sở </button>
                        <button className="btn-warning w-100 mb-4" onClick={() =>setData(Data)}> All </button>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            {data.map((values) => {
                                const {id,img,name,price,oldPrice,type} = values;
                                return (
                                    <>
                                        <div className="col-md-4 mb-4" key={id}>
                                            <div className="card">
                                                <img src = {img} className="img" alt="anh" />
                                                <div className="card-body">
                                                    <h5 className="name">{name}</h5>
                                                    <p className="price">Price: {price}</p>
                                                    <p className="text-decoration-line-through">
                                                        {
                                                            oldPrice === undefined || price > oldPrice
                                                            ? (<br />)
                                                            : (oldPrice + "$")
                                                        }
                                                    </p>
                                                    <p className="type">Type: {type}</p>
                                                    <button onClick={() => Buy (name)} className="btn">Add to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <section className="footer">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6">
                        <p><i className="fa-solid fa-location-dot" />101B Lê Hữu Trác, Sơn Trà, Đà Nẵng</p>
                        <p><i className="fa-solid fa-phone" /> 0964261555 </p>
                        <p><i className="fa-solid fa-envelope" /> hanh.doan23@student.passerellesnumeriques.org</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6">
                        <h3>Về chúng tôi</h3>
                        <p>Chuyên cung cấp những mặt hàng nông sản sạch cho quý khách.
                            Mang đến cho chúng ta những bữa ăn tươi ngon, an toàn thực phẩm.
                        </p>
                        <a id="Social" href="#"><img style={{margin: '5px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png" width={30} height={30} alt="Instagram" /></a>
                        <a id="Social" href="#"><img style={{margin: '5px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" width={30} height={30} alt="Facebook" /></a>
                        <a id="Social" href="#"><img style={{margin: '5px'}} src="https://www.hieuhien.vn/wp-content/uploads/2018/12/youtube.png" width={30} height={30} alt="YouTube" /></a>
                    </div>
                </div>
            </section>
        </div>
    )
}
const Buy = (name) => {
    alert("Cảm ơn bạn đã chọn mặt hàng: "+ (name) )
};

export default Index;