import '../styles/role.scss'
import { Component } from 'react'
import Link from 'next/link'
class Index extends Component {
    state={
        curentRole:0
    }
    roles=[
        '家长',
        '老师',
        '管理员',
    ]
    handleClick(index){
        this.setState({
            curentRole: index
        })
    }
  
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