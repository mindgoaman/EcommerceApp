import React, {useState} from "react";
import '../res/styles/commonstyle/app_common_style.css';
import '../res/styles/modulestyle/home_page_style.css';

const HomePage = () => {

    return(
        <div className={'home_container'}>
            <h1 id={'home'}>Home</h1>
            <hr/>
            <p>This is home page of this Ecommerce Website.<br/>This Website will be used for selling products online.</p>
            {/* <!-- */}
            <p>Products will be type of<br/>electronics<br/>fooding items</p>
            {/* --> */}
        </div>
    )
}

export default HomePage;