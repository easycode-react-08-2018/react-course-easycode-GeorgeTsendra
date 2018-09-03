import React, {Component} from 'react';
import staffInShoppingCart from "../shoping-goods-who-has-added-to-chop";


class ShopingCard extends Component {
  render() {
    const {
      changeActivePageToMainPage,

    } = this.props


    let staffFromStaffInShoppingCart = staffInShoppingCart.map((value)=>{
      return (
        <li className="list-group-item">
          <img src="#" alt=""/>
          <a href="#" className="admin-orders__link">
            {value.text}
          </a>
          <h2 className="float-right badge-light">✓</h2>
        </li>
      )
    })
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1>Shopping Cart</h1>
            <ul className="list-group">

                {staffFromStaffInShoppingCart}
            </ul>
          </div>
          <div className="col-4">
            <div>
              User
            </div>
            <button onClick={changeActivePageToMainPage}>User Logout</button>
          </div>
        </div>
        <div className="row">
          <pre>price:</pre>
        </div>
        <div className="row">
          <button className="btn btn-primary">Ship it</button>
        </div>
      </div>
    )
  }
}


export default ShopingCard;
