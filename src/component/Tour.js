import React,{Component} from 'react';
import './Tour.css';

class Tour extends Component{
    render(){
        return(
            <div>
                <div className="card tour-card mt-4">
                    <div className="card-body d-flex">
                        <img src="../assets/image/a.jpg" className="img-thumbnail"/>
                        <div className="tour-card-content">
                            <div className="card-title tour-card-title">Tour Title</div>
                            <div className="card-text tour-card-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum excepturi repellendus, odit natus cupiditate ab tempore ratione doloremque et laborum perferendis libero ipsam assumenda non.</div>
                            < div className = "button-holder justify-content-between align-items-center" >
                                <h6>10 Days</h6>
                                <button type="button" className="btn btn-primary">View Tour</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card tour-card mt-4">
                    <div className="card-body d-flex">
                        <img src="../assets/image/a.jpg" className="img-thumbnail"/>
                        <div className="tour-card-content">
                            <div className="card-title tour-card-title">Tour Title</div>
                            <div className="card-text tour-card-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum excepturi repellendus, odit natus cupiditate ab tempore ratione doloremque et laborum perferendis libero ipsam assumenda non.</div>
                            <div className="button-holder justify-content-between align-items-center" >
                                <h6>10 Days</h6>
                                <button type="button" className="btn btn-primary">View Tour</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tour;