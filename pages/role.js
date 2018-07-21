import '../styles/role.scss'
import { Component } from 'react'
import Link from 'next/link'
// 什么都我动手 你一行都写不来
// 引入css或者scss 需要变量保存吗。。。。你仔细看看其他页
class Index extends Component {
    state={
        curentRole:0
    }
    roles=[
        '家长',
        '老师',
        // '管理员',
    ]
    handleClick(index){
        this.setState({
            curentRole: index
        })
    }
    // handleClick=()=>{
    //     this.setState({
    //         curentRole: 1
    //     })
    // }
    render() {
        // const curentRole = this.state.curentRole
        const {curentRole} = this.state
        return (
            <div className="stb-home">
                <div className="role-t">
                    <div className="role-title"></div>
                    <div className="role-sub-title">请选择一种角色登陆</div>
                </div>
                <div className="role-select">
                {
                    this.roles.map((data,index)=>(
                        <button
                            // onClick={
                            //     ()=>{
                            //         alert(1)
                            //     }
                            // }
                            onClick={this.handleClick.bind(this, index)}
                            className={curentRole===index ? 'active' : ''}
                            key={index}
                        >
                            进入{data}角色
                        </button>
                    ))
                }
                </div>
                <Link href={`/login?role=${curentRole}`}><button className="ok">确定</button></Link>
            </div>
        )
    }
}

export default Index