import React from 'react';
import { Link } from 'react-router-dom';

export default class CreateExpense extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expenseID: "",
            catExpense: "",
            expense: "",
            amount: "",
            description: ""

        }

        if (this.props.match.params.id != "") {
            this.showData()
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)

        fetch("http://localhost/3.api_expense/crud_expense.php?cmd=insert", {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return window.location.hash = "/read-expense"
        }).catch(err => err)
    }

    showData() {
        const apiUrl = "http://localhost/3.api_expense/crud_expense.php?cmd=readOne";
        let data = {
            expenseID: this.props.match.params.id
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(data)
        }
        fetch(apiUrl, options)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    expenseList: response.rs,
                    expenseID: response.rs[0].expense_id,
                    catExpense: response.rs[0].cate_expense_id,
                    expense: response.rs[0].expense_name,
                    amount: response.rs[0].amount
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    render() {
        return (

            <div>
                <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group row">
                        <input type="hidden" className="form-control" value={this.state.expenseID}
                            onChange={e => this.setState({ expenseID: e.target.value })} />
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="control-label col-md-3">
                            หมวดหมู่ค่าใช้จ่าย</label>
                        <div className="col-md-8">
                            <select className="form-control" name="" value={this.state.catExpense} onChange={e => this.setState({ catExpense: e.target.value })}>
                                <option value="0">เลือกหมวดหมู่</option>
                                <option value="1">รายรับ</option>
                                <option value="2">รายจ่าย</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row ">
                        <label htmlFor="" className="control-label col-md-3">
                            รายการ</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" value={this.state.expense}
                                onChange={e => this.setState({ expense: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="control-label col-md-3">
                            จำนวนเงิน</label>
                        <div className="col-md-8">
                            <input type="number" className="form-control" value={this.state.amount}
                                onChange={e => this.setState({ amount: e.target.value })} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="" className="control-label col-md-3">
                            หมายเหตุ</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" value={this.state.description}
                                onChange={e => this.setState({ description: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group row text-center">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary">
                                <i className="fa fa-fw fa-lg fa-check-circle"></i> บันทึก</button>
                            &nbsp;&nbsp;&nbsp;
                                    <Link to={"/read-expense/"} className="btn btn-secondary">
                                <i className="fa fa-fw fa-lg fa-times-circle"></i>ยกเลิก</Link>
                        </div>
                    </div>
                </form>

            </div>

        )
    }
}