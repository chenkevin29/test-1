import React from 'react';
import './content.css';

class Content extends React.Component {

    state = {
        userName: "",

    }

    handleNameChage = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    handleSubmit = () => {
        if (this.state.userName == "") {
            alert("kosong1");
            return
        }else{
            alert("nama1 = " + this.state.userName)
            return
        }
    }

    render () {
        

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-right">
                         Name
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            value = {this.state.userName}
                            onChange={this.handleNameChage}                         
                        >
                        </input>
                    </div>
                </div>
                <div className="row align-center">
                    <button
                        onClick={this.handleSubmit}
                    >
                        Save
                    </button>
                </div>

            </div>

        )
    }
}
export default Content
