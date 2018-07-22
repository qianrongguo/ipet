import { Component } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import logo from '../images/icon/title.png'
import '../styles/login.scss'
// 设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
class Index extends Component {
    state = {
        warning: '',
    }
    static async getInitialProps (context) {
        const { role = '0' } = context.query
        return { role }
    }
   
    handleOKClick() {
        const { url, role} = this.props
        const { account, pwd } = this.refs
        const accountValue = account.value.trim()
        const pwdValue = pwd.value.trim()
        if (!accountValue) {
            this.setState({
                warning: (role === '1' ? '账号' : '身份证号') + '不能为空'
            })
            this.doTimeoutFunc(this.resetWarning)
            return
        }

        if (!pwdValue) {
            this.setState({
                warning: (role === '1' ? '密码' : '姓名') + '不能为空'
            })
            this.doTimeoutFunc(this.resetWarning)
            return
        }

        if (accountValue && pwdValue) {
            console.log(accountValue, pwdValue)
            this.setState({
                warning: '正在登录...'
            })
            this.doTimeoutFunc(()=>{
                setCookie('user', JSON.stringify({
                    account: accountValue,
                    pwd: pwdValue
                }))
                this.setState({
                    warning: '登录成功！'
                })
                this.doTimeoutFunc(()=>{
                    Router.push('/posts')
                })
            })
        }
    }
    resetWarning=()=>{
        this.setState({
            warning: ''
        })  
    }
    doTimeoutFunc(callback) {
        const t1 = setTimeout(() => {
            typeof callback === 'function' && callback()
            clearTimeout(t1)
        }, 1000)
    }
    render() {
        console.log('props', this.props)
        const { url, role } = this.props
        // 默认家长登录
        const account = role === '1' ? '账号' : '身份证号'
        const pwd = role === '1' ? '密码' : '姓名'
        return (
            <div className="sign">
                <div className="close">
                    <Link href='/role'><i className="icon" ></i></Link>
                </div>
                <img src={logo} alt="" />

                <div className="input-list">
                    <div className="input-item">
                        <div className="txt message">
                            {account}
                        </div>
                        <input ref="account" type="text" placeholder={`输入${account}`} />
                    </div>
                    <div className="input-item">
                        <div className="txt message">
                            {pwd}
                        </div>
                        <input ref="pwd" type={role === '1' ? 'password' : 'text'} placeholder={`输入${pwd}`} />
                    </div>
                </div>
                <button
                    className="ok"
                    onClick={this.handleOKClick.bind(this)}
                >登录</button>
                <div className="warning" >{this.state.warning}</div>
            </div>
        )
    }
}


export default Index