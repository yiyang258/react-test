/*
 * @Author: yiyang yy2418202054@163.com
 * @Date: 2023-03-16 17:06:23
 * @LastEditors: yiyang yy2418202054@163.com
 * @LastEditTime: 2023-03-16 18:31:02
 * @FilePath: \react-test\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 编写组件
// import React, { Component } from 'react'


// 编写react代码,通过react渲染出对应的应用程序
 const root = ReactDOM.createRoot(document.querySelector("#root"))
 root.render(<App></App>)