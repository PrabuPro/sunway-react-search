import React,{Component} from 'react';
import './Filter.css';

class Filter extends Component {

    render() {
        return(
        <div>
           <div className="card">
                <h6 className="card-title filter-title">Filter Section</h6>
                <hr className="card-divider"/>
                <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Suitable for</h6>
                    <form action="" method="post">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" name="romanticHoliday" checked={this.props.romanticHoliday} value="romanticHoliday" onChange={this.props.handleInputChange} />
                            <label className="custom-control-label" htmlFor="customCheck1">Romantic Holidays</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck2" name="couplesFriends" checked={this.props.couplesFriends} value="couplesFriends" onChange={this.props.handleInputChange} />
                            <label className="custom-control-label" htmlFor="customCheck2">Couple Family</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );      
    }
}

export default Filter;