import React, {Component} from 'react';

class Score extends Component{
    constructor (props){
        super (props);
        this.state = {
            semester1: 0, 
            semester2: 0,
            avg: 0,
            result: "",
            classification: "",
        };
        this.handleChange = this.handleChange.bind (this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        let key = event.target.name;
        let val=event.target.value;

        this.setState ({ [key]: val });
        this.setState((state) => ({
            avg: parseFloat((parseFloat(state.semester1) + parseFloat(state.semester2))/2),
        }));
        this.setResult ();
        this.setClassification ();
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert("Ban la hoc sinh" + this.state.classification);
    };

    setResult =() => {
        if (this.state.avg > 4.5) this.setState ({ result: "Được lên lớp" });
        else this.setState ({ result:  "ở lại lớp" });
    };
        
    setClassification = () => {
        if (this.state.avg < 4.5) this.setState ({ classification: " Yếu" });
        else if (this.state.avg < 6.5) this.setState ({ classification: " Trung bình" });
        else if (this.state.avg < 8) this.setState ({ classification: " Khá" });
        else if (this.state.avg < 9) this.setState ({ classification: " Giỏi" });
        else if (this.state.avg < 10) this.setState ({ classification: " Xuất sắc" });
    }
    render () {
        return(
            <div className="container">
                <h3 className="text-center">Kết quả học tập</h3>
                <form onSubmit = {this.handleSubmit} className="was-validated">
                    <div className="form-group">
                        <label htmlFor="semester1">Điểm HK1:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="semester1"
                            name="semester1"
                            max = {10}
                            min = {0}
                            efaultValue = {0}
                            required
                            onChange = {this.handleChange}
                        />
                        <div className = "invalid-feedback">Điểm không hợp lệ</div>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "semester2">Điểm HK2:</label>
                        <input
                            type = "number"
                            className = "form-control"
                            id = "semester2"
                            name = "semester2"
                            max = {10}
                            min = {0}
                            defaultValue = {0}
                            required
                            onChange = {this.handleChange}
                        />
                        <div className = "invalid-feedback">Điểm không hợp lệ</div>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "semester2">Điểm trung bình:</label>
                        <input
                            type = "number"
                            className = "form-control"
                            readonly
                            value = {this.state.avg}
                        />
                    </div>
                    <div className ="form-group">
                        <label htmlFor ="semester2"> Kết quả: </label>
                        <input
                            type = "text"
                            className = "form-control"
                            defaultValue = {0}
                            readonly
                            value ={this.state.result}
                        />
                    </div>
                    
                    <div className ="form-group">
                        <label htmlFor ="semester2">Xếp loại:</label>
                        <input
                            type ="text"
                            className ="form-control"
                            defaultValue ={0}
                            readonly
                            value ={this.state.classification}
                        />
                    </div>

                    <button type="submit" value="Submit" className="btn btn-primary">
                        Xem kết quả
                    </button>
                </form>
            </div>
        );
    }
}
export default Score;