import React from 'react';

export default class ReadExpense extends React.Component {
    constructor() {
        super();
        this.state = {
            expense: []
        }
    }

    componentDidMount() {
        fetch("http://localhost/3.api_expense/crud_expense.php?cmd=select")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    expense: result.rs
                })
            })
    }

    render() {
        const { expense } = this.state;
        return (

            <div>
                <div className="row">
                    <div className="btn-group">
                        <a href="#create-expense" className='btn btn-sm btn-primary m-r-1em'>
                            <span className='fa fa-plus'></span>เพิ่มใหม่
                                </a>

                    </div>
                </div>
                <br />

                <div className="row">

                    <div className="col-12 table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>หมวดหมู่ค่าใช้จ่าย</th>
                                    <th>รายการ</th>
                                    <th>จำนวนเงิน</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(expense) && expense.map(object => (
                                    <tr>
                                        <td className='text-center'>
                                            <input type='checkbox' className='checkboxes' />
                                        </td>
                                        <td>{object.cate_expense_name}</td>
                                        <td>{object.expense_name}</td>
                                        <td>{object.amount}</td>
                                        <td>
                                            <div className="btn-group">
                                                <a href="#" className='btn btn-sm btn-primary m-r-1em'>
                                                    <span className='fa fa-pencil-alt'></span>
                                                </a>
                                                <a href="#" className='btn btn-sm btn-danger'>
                                                    <span className='fa fa-trash'></span>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}