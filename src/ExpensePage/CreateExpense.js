import React from 'react';

export default class CreateExpense extends React.Component {

    constructor() {
        super();

        this.state = {
            catExpense: "",
            expense: "",
            amount: "",

        }
    }

    render() {
        return (

            <div>
                <form action="">
                    <div className="from-group row">
                        <label htmlFor="">หมวดหมูค่าใช้จ่าย</label>
                        <select name="" id="" className="form-control col-md-3">
                            <option value="0">เลือกหมวดหมู่ค่าใช้จ่าย</option>
                            <option value="1">รายรับ</option>
                            <option value="2">รายจ่าย</option>
                        </select>

                    </div>
                    <br />

                    <div className="form-group row">
                        <label htmlFor="">รายการ</label>
                        <div className="col-md-6">
                            <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="">จำนวน</label>
                        <div className="col-md-6">
                            <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <a href=""><button className="btn btn-primary">บันทึก</button></a>
                        <a href="#read-expense"><button className="btn btn-danger">ยกเลิก</button></a>
                    </div>

                </form>
            </div>
        )
    }
}