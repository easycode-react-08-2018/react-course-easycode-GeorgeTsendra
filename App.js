import React, {Component} from 'react';
import MainPage from "./pages/main-page.js"
import AdminPage from "./pages/admin-page.js"
import UserPage from "./pages/user-page.js"
import ShopingCard from "./pages/shoping-card.js"

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      activePage: "mainPage"
    }
}

changeActivePageToAdminPage = () => {
  this.setState({
    activePage: "adminPage"
  })
}

changeActivePageToUserPage = () => {
  this.setState({
    activePage: "userPage"
  })
}

changeActivePageToShopCardPage = () => {
  this.setState({
    activePage: "shopingCard"
  })
}

changeActivePageToMainPage = () => {
  this.setState({
    activePage: "mainPage"
  })
}



  render() {
    const {activePage} = this.state;

    if (activePage == "mainPage") {
      return (
        <MainPage
          changeActivePageToUserPage ={this.changeActivePageToUserPage}
          changeActivePageToAdminPage ={this.changeActivePageToAdminPage}
        />)
    }
    if (activePage == "adminPage") {
      return (
        <AdminPage
        changeActivePageToMainPage = {this.changeActivePageToMainPage}
        changeActivePageToShopCardPage = {this.changeActivePageToShopCardPage}
        />)
    }
    if (activePage == "userPage") {
      return (
        <UserPage
        changeActivePageToMainPage ={this.changeActivePageToMainPage}
        changeActivePageToShopCardPage={this.changeActivePageToShopCardPage}
        />)
    }
    if (activePage == "shopingCard") {
      return (
        <ShopingCard
        changeActivePageToMainPage={this.changeActivePageToMainPage}
      />)
    }

  }
}

export default App;
