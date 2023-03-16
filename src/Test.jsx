/*
 * @Author: yiyang yy2418202054@163.com
 * @Date: 2023-03-16 22:06:10
 * @LastEditors: yiyang yy2418202054@163.com
 * @LastEditTime: 2023-03-16 22:28:29
 * @FilePath: \react-test\src\test.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import  propTypes  from 'prop-types';
class Test extends Component {
  constructor(props){
    console.log('传递的参数',props);
    super(props)
  }
  render() {
    const {num} = this.props
    return (
      <div className='test'>test
        <div>{num}</div>
      </div>
    )
  }
}
// 参数类型限定,是否必传
Test.propTypes = {
    num: propTypes.string.isRequired
}
// 默认值
Test.defaultProps = {
    num:'测试数据'
}

export default Test