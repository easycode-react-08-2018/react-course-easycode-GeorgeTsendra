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


let renderUsers = arr => {

let usersBlocks = arr.map((user ,index, arr) => {

  return (

    React.createElement(
  "div",
  { "class": "panel panel-info" },
  React.createElement(
    "div",
    { "class": "panel-heading" },
    React.createElement(
      "h3",
      { "class": "panel-title" },
      "USER FULL NAME !"
    )
  ),
  React.createElement(
    "div",
    { "class": "panel-body" },
    React.createElement(
      "div",
      { "class": "row" },
      React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { "class": "col-md-3 col-lg-3 ", align: "center" },
          React.createElement("img", { src: "http://psdexport.com/storage/avatars/default.png", "class": "pull-left" })
        ),
        React.createElement(
          "div",
          { "class": " col-md-9 col-lg-9" },
          React.createElement(
            "table",
            { "class": "table table-user-information" },
            React.createElement(
              "tbody",
              null,
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  null,
                  "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F"
                ),
                React.createElement(
                  "td",
                  null,
                  "24.10.2016"
                )
              ),
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  null,
                  "\u041F\u043E\u043B"
                ),
                React.createElement(
                  "td",
                  null,
                  "MALE"
                )
              ),
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  null,
                  "\u0410\u0434\u0440\u0435\u0441"
                ),
                React.createElement(
                  "td",
                  null,
                  "GOOGLE STREET"
                )
              ),
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  null,
                  "Email"
                ),
                React.createElement(
                  "td",
                  null,
                  React.createElement(
                    "a",
                    { href: "#" },
                    "EMAIL"
                  )
                )
              )
            )
          )
        )
      )
    )
  )
  )

  )
})
return usersBlocks;
}

  ReactDOM.render(<renderUsers arr={users}/>, mountNode )


// try 3
