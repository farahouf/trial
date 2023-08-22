import React from "react"
import "./connectform.css"
import MyImage from './images/fotor_2023-8-21_7_42_36-fotor-2023082174342.png'
import MyImage2 from './images/checkmark 1.png'



const ConnectForm = () => {

    return (
        <div className="general">
            <div className="leftcover">
                <div className="leftborder col-6">
                    <div className="frame1">
                        <img src={MyImage} alt="sqlify"/>
                        <h1>SQLify</h1>
                        <p><img src={MyImage2} alt="sqlify2"/>   Connect to your data, wherever it is <br/> 
                        <img src={MyImage2} alt="sqlify2"/> Provide advanced analytics and Create Reports using AI <br/>
                        <img src={MyImage2} alt="sqlify2"/> Visualize your reports by generating charts easily <br/>
                        </p>
                     
                    </div>
                    
                </div>
                

            </div>
            <div className="rightcover" >
                <h3><b>Login</b></h3>
                <h5>Welcome back!</h5>
                <input type="text" placeholder="Email Address"/>
                <input type="password" placeholder="Password"/>
                <button className="connectbtn">Connect to Database</button>

            </div>
        </div>
    )
}

export default ConnectForm