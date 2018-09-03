import React, {Component} from 'react';
import staff from "../shoping-goods";
import "bootstrap/dist/css/bootstrap.css"

class AdminPage extends Component {
  render() {


    let ShopsGoods = staff.map((value, index, arr)=>{
      return (
        <li className="list-group-item" key={value.id}>
            <img src="#" alt=""/>
            <a href="#" className="admin-orders__link">
              {value.text}
            </a>
            <h2 className="float-right btn-link">✎</h2>
          </li>
      )
    })

    let addStaffToShopingGoods = ()=>{
      let text = document.getElementById("enterNewName").value
      let id = Math.random()*100000000000000000
      let newOnj = {
        id: id,
        text: text,
      }
      staff.push(newOnj)

    }

    const {
      changeActivePageToMainPage,
      changeActivePageToShopCardPage,
    } = this.props

    return (
      <div className="container flex-grow-1">
        <div className="row">
          <div className="col-8">
            <div className="admin-orders">
              <h1>ADMIN PAGE</h1>

              {ShopsGoods}
              <br/>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" className="form-control" id="enterNewName" placeholder="enter new name"/>
                <button className="btn btn-primary" onClick ={addStaffToShopingGoods}>Add</button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div>
              Admin
            </div>
            <button
              onClick = {changeActivePageToMainPage}
            >User Logout</button>
            <button
              onClick = {changeActivePageToShopCardPage}
            >Shop Card</button>
          </div>
        </div>
      </div>

    )
  }
}


export default AdminPage;
