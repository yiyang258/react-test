/*
 * @Author: yiyang yy2418202054@163.com
 * @Date: 2023-03-28 15:23:02
 * @LastEditors: yiyang yy2418202054@163.com
 * @LastEditTime: 2023-04-04 13:01:27
 * @FilePath: \react-test\src\hoc.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 高阶组件
import React, { PureComponent } from 'react'

export default class hoc extends PureComponent {
  render() {
    return (
      <div>hoc
        <p>数据库数据</p>
      </div>
      
    )
  }
}
