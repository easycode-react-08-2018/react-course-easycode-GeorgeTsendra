import React from "react";
import ReactDOM from "react-dom";

const users = [
  {
    id: 1,
    fullName: 'Иванов Иван',
    avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
    birthdate: '1976-10-10',
    gender: 'мужской',
    address: 'ул. Звенигороская, 47б',
    email: 'ivanov@mail.ru'
  },
  {
    id: 2,
    fullName: 'Петров Петр',
    avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/7.jpg',
    birthdate: '1957-01-14',
    gender: 'мужской',
    address: 'ул.Пушкиская, 13',
    email: 'ivanov@mail.ru'
  },
  {
    id: 3,
    fullName: 'Натальина Наталья',
    avatarUrl: 'https://randomuser.me/api/portraits/thumb/women/7.jpg',
    birthdate: '1990-07-03',
    gender: 'женский',
    address: 'ул. Лермонтова, 59',
    email: 'ivanov@mail.ru'
  }
];



const mountNode = document.getElementById("app");

const usersBlocks = users.map((user ,index, arr) => {

  let tdHeadDate = React.createElement("td", null, "Дата рождения")
  let tdContentDate = React.createElement("td", null, user.birthdate)
  let allDate = []
      allDate.push(tdContentDate)
      allDate.push(tdHeadDate)
let trDate = React.createElement("tr", null, {allDate})


  let tdHeadGender = React.createElement("td", null, "Пол")
  let tdContentGender = React.createElement("td", null, user.gender)
  let allGender = []
      allGender.push(tdHeadGender)
      allGender.push(tdContentGender)
let trGender = React.createElement("tr", null, {allGender})

  let tdHeadAdress = React.createElement("td", null, "Адрес")
  let tdContentAdress = React.createElement("td", null, user.adress)
  let allAdress = []
      allAdress.push(tdHeadAdress)
      allAdress.push(tdContentAdress)
let trAdress = React.createElement("tr", null, {allAdress})

  let tdHeadEmail = React.createElement("td", null, "Email")
  let tdContentEmail = React.createElement("td", null, user.email)
  let allEmail = []
      allEmail.push(tdHeadEmail)
      allEmail.push(tdContentEmail)
let trEmail = React.createElement("tr", null, {allEmail})

let tbody = React.createElement("tbody", null, trEmail)
let table = React.createElement("table", {className: "table table-user-information"}, tbody)
let divFirstBottom = React.createElement("div", {className: "col-md-9 col-lg-9"}, table)

let img = React.createElement("img", {className: "pull-left",src:"http://psdexport.com/storage/avatars/default.png"}, "")

let divFirstTop = React.createElement("div", {className:"col-md-3 col-lg-3",align: "center"}, img)
let divFirst = [];
    divFirst.push(divFirstTop)
    divFirst.push(divFirstBottom)
let justDiv = React.createElement("div", null, {divFirst})
let divRow = React.createElement("div", {className: "row"}, justDiv)
let divPanelBody = React.createElement("div", {className: "panel-body"}, divRow)
let h3Head = React.createElement("h3", {className:"panel-title"}, user.fullName)
let divPanelHead = React.createElement("div", {className:"panel-heading"}, h3Head)
let divPanel = []
    divPanel.push(divPanelHead)
    divPanel.push(divPanelBody)
let panelInfo = React.createElement("div", {className:"panel panel-info"}, {divPanel})

console.log(panelInfo);
return {panelInfo}
})
console.log(usersBlocks);

ReactDOM.render( React.createElement("div", null, usersBlocks), mountNode )
