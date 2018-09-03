import React, {Component} from 'react';
import staff from "../shoping-goods";
import "bootstrap/dist/css/bootstrap.css";
import staffInShoppingCart from "../shoping-goods-who-has-added-to-chop";

class UserPage extends Component {
  render() {

    const {
      changeActivePageToMainPage,
      changeActivePageToShopCardPage
    } = this.props

// let addStaffToShoppingCart = (id)=> {
//   let text = "";
//    let newObj = {
//
//    }
  // console.log(this);
// }

  let ShopsGoods = staff.map((value, index, arr)=>{
    let text = value.text
    let id = value.id
    return (
      <div className="card" key = {value.id} id = {value.id}>
        <div className="card-body">
          <h5 className="card-title">{value.text}</h5>
          <p className="card-text">{value.text}</p>
          <button className="btn btn-primery btn-lg" id={index} onClick={
            e => {
              staffInShoppingCart.push({
                id: id,
                text: text

              })
            }
        } >Buy</button>
          <h3 className="text-success">✓✓✓✓✓</h3>
        </div>
      </div>
    )
  })

    return (
      <div className="container">
        <h1>USER PAGE</h1>
        <div className="row">
          <div className="col-8">
            <div className="row">
            {ShopsGoods}

            </div>
          </div>
          <div className="col-4">
            <div>
              User
            </div>
            <button
              onClick={changeActivePageToMainPage}
            >User Logout</button>
            <button
              onClick={changeActivePageToShopCardPage}
            >Shopping Cart</button>
          </div>
        </div>
      </div>
    )
  }
}



export default UserPage;
