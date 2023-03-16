/*
 * @Author: yiyang yy2418202054@163.com
 * @Date: 2023-03-16 17:22:58
 * @LastEditors: yiyang yy2418202054@163.com
 * @LastEditTime: 2023-03-16 22:19:42
 * @FilePath: \react-test\src\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
// 引入函数式组件
import Apps from "./function"
import Test from './Test'

class App extends React.Component {
    constructor(){
      super()
      this.state = {
          message:'hello react'
      }
    }
    render(){
      const {message} = this.state
      return (
          <div>
              <h2>{message}</h2>
              <Apps></Apps>
              <Test num={message+''+message}></Test>
          </div>
      )
    }
    // 组件渲染 (可以用于发送网络请求)
    componentDidMount(){
      console.log('componentDidMount');
    }
    // 组件更新
    componentDidUpdate(prevProps,prevState,snapshot){
      console.log('componentDidUpdate');
    }
    // 组件卸载
    componentWillUnmount(){
      console.log('componentWillUnmount');
    }
  }
  export default App
  