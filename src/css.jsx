/*
 * @Author: yiyang yy2418202054@163.com
 * @Date: 2023-03-29 16:04:25
 * @LastEditors: yiyang yy2418202054@163.com
 * @LastEditTime: 2023-03-29 17:15:22
 * @FilePath: \react-test\src\css.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * react中编写css方法1:内联样式
 */
import React, { PureComponent } from 'react'
// import appStyle from "./css.module.css"

import { Appwarpper } from './css'
// export class App extends PureComponent {
//     constructor() { 
//         super()
//         this.state = {
//             size: 20
//         }
//     }
//     click(){
//         this.setState({
//             size:this.state.size + 5
//         })
//     }
//     render() {
//         const { size } = this.state
//         return (
//             <div>
//                 <button onClick={e => this.click()}>字体放大</button>
//                <div style={{color:'red',fontSize:`${size}px`}}>css</div> 
//             </div>

//         )
//     }
// }
/**
 * react中编写css方法2: css引入,容易样式冲突
 */
// export class App extends PureComponent {
//     constructor() {
//         super()
//         this.state = {
//             size: 20
//         }
//     }
//     render() {
//         const { size } = this.state
//         return (
//             <div>
//                 <h2 className='title'>标题</h2>
//                 <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugit est commodi voluptatum beatae, ea laudantium vitae, consequuntur suscipit distinctio iure? Quasi deserunt nostrum atque laborum ducimus, harum molestias perspiciatis?</p>
//             </div>

//         )
//     }
// }
/**
 * react中编写css方法3: cssModule,不可以使用-命名的css类名
 */
// export class App extends PureComponent {
//     constructor() {
//         super()
//         this.state = {
//             size: 20
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h2 className={appStyle.title}>标题</h2>
//                 <p className={appStyle.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugit est commodi voluptatum beatae, ea laudantium vitae, consequuntur suscipit distinctio iure? Quasi deserunt nostrum atque laborum ducimus, harum molestias perspiciatis?</p>
//             </div>

//         )
//     }
// }
/**
 * react中编写css方法4: css in js (style-component/emotion)
 */
export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            size: 20,
            color:'yellow'
        }
    }
    render() {
        const {size,color} = this.state
        return (
            <Appwarpper size={size} color={color}>
                <div className='app'>
                    <h2 className='title'>标题</h2>
                    <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugit est commodi voluptatum beatae, ea laudantium vitae, consequuntur suscipit distinctio iure? Quasi deserunt nostrum atque laborum ducimus, harum molestias perspiciatis?</p>
                </div>
            </Appwarpper>
        )
    }
}
export default App