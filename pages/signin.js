// import React,{Component} from 'react'
import signin from '../pages/signin'

const Index = () => (
    <div className="stb-home">
        <div className="role-t">
            <h1>欢迎进入暑托班</h1>
            <div className="role-sub-title">请选择一种角色登陆</div>
        </div>
        <div className="role-select">
            <button className="active">进入家长角色</button>
            <button className="false">进入老师角色</button>
            <button className="false">进入管理员角色</button>
        </div>
        <button className="ok" >确定</button>
        <style global jsx>
            {`
            body{
            text-align:center
            }

            `}

        </style>

        <style jsx>{`
        .role-sub-title{
            color:grey;
            font-size:.8rem

        }
        .role-select button{
            display: block;
            height: 2.375rem;
            width: 15rem;
            border-radius: 1.25rem;
            border: 1px solid #e1e1e1;
            margin: 0 auto;
            margin-top: 1.375rem;
            color: #999;
            font-size: .85rem;
            font-weight：bold
        }
        .role-select .active{
            color:#ffce1a;
            background-color:#313131;
        }
        .ok{

            display:block;
            height:2.375rem;
            width:15rem;
            border-radius:1.25rem;
            border:1px solid #e1e1e1;
            margin:0 auto;
            margin-top: 2.9rem;
            color:#fcfcfc;
            font-size:.85rem;
             background: linear-gradient(90deg,#fde052,#febf05);
        }

        `}

        </style>
    </div>
)

export default Index