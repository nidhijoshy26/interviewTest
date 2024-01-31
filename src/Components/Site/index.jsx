import React from "react";
import Images from "../../Assets/Images";
import "./styles.css";


const Site =()=>{


    return (
        <div className="container">
            <div className="nav-bar">
                <div className="col-md-4"><img className="logo" alt="" src={Images.logo.default}/>  logo</div>
                <div className="col-md-8 branding">What's New StoriesBrandInsurance</div>
            </div>
            <div className="img-watch">
                <img className="watch" alt="" src={Images.watch}/>
            </div>
            <div className="categories">
                <h2 className="">Explore the Ovalen Shop</h2>
                <div className="btn">
                    <button type="button" className="more-watches">More Watches</button>
                    <button type="button" className="pre-owned">Pre Owned</button>
                    <button type="button" className="pre-owned">Strapes</button>
                </div>
            </div>
            <div className="catalogue">
                <div className="ctlg-list">
                    <img className="watches" alt="" src={Images.watch}/>
                    <p>Lous Errad</p>
                    <p>$5,450   $6,450 <img className="shop" alt="" src={Images.shop.default}/></p>
                    
                </div>
                <div className="ctlg-list">
                    <img className="watches" alt="" src={Images.watch}/>
                    <p>Lous Errad</p>
                    <p>$5,450   $6,450 <img className="shop" alt="" src={Images.shop.default}/></p>
                </div>
                <div className="ctlg-list">
                    <img className="watches" alt="" src={Images.watch}/>
                    <p>Lous Errad</p>
                    <p>$5,450   $6,450 <img className="shop" alt="" src={Images.shop.default}/></p>
                </div>
                <div className="ctlg-list">
                    <img className="watches" alt="" src={Images.watch}/>
                    <p>Lous Errad</p>
                    <p>$5,450   $6,450 <img className="shop" alt="" src={Images.shop.default}/></p>
                </div>
            </div>
            <div className="new-artc">
                <div className="header">
                    <h1 className="">New Articale</h1>
                </div>
                <div className="btns">
                    <img className="watch1" alt="" src={Images.watch}/>
                    <img className="watch2" alt="" src={Images.watch}/>
                    <img className="watch3" alt="" src={Images.watch}/>
                </div>
                    
            </div>
            <div className="footer">
                <div className="sec main">
                    <h2>OVALEN</h2>
                    <p>Explore our best products to find what you want, there you will definitely find</p>
                    <ul className="sci">
                        <li><a href="#"><img className="" alt="" src={Images.insta.default} /></a></li>
                        <li><a href="#"><img className="" alt="" src={Images.twitter.default} /></a></li>
                    </ul>
                </div>
                <div className="sec aboutus">
                    <h4>About Us</h4>
                    <div>
                        <div>
                            <h3>Product</h3>
                            <a href="#">Modern Watches</a><br />
                            <a href="#">Limited Edition</a><br />
                            <a href="#">Chronograps</a><br />
                            <a href="#">Classic Watches</a>

                        </div>
                        <div>
                            <h3>Location</h3>
                            <p>480220, Moscow <br /> Myasnitskaya 22/2/5, Office 4</p>

                        </div>
                    </div>
                </div>
                <div className="sec aboutus">
                    <h4>FAQ</h4>
                </div>
                <div className="sec aboutus">
                    <h4>Blog</h4>
                </div>
                <div className="sec aboutus">
                    <h4>Contact Us</h4>
                </div>
            </div>
        </div>

    )
}


export default Site;