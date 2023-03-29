/*
 * @Author: yiyang yy2418202054@163.com
 * @Date: 2023-03-29 16:52:10
 * @LastEditors: yiyang yy2418202054@163.com
 * @LastEditTime: 2023-03-29 17:18:11
 * @FilePath: \react-test\src\css.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from 'styled-components'

export const Appwarpper = styled.div`
    .section{
        border: 1px solid yellow;
    }
    .title{
        font-size:${props => props.size};
        color:${props => props.color};
    }
    .content{
        background-color:${props => props.color};
        &:hover{
            background-color: blueviolet;
        }
    }
`
