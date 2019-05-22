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
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
                    </div>
                </div>
            </div>
        </div>
        );      
    }
}

export default Filter;