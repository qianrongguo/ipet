import '../styles/my.scss'
import avatar2 from '../images/icon/back.png'
import Router from 'next/router'
import MenuBar from '../components/MenuBar'
import Link from 'next/link'

const avatar = 'http://sfmimg.b0.upaiyun.com/prod_00/00ebbfa2f6a72297.jpg'

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
//清除cookie 
function clearCookie(name) {
    setCookie(name, "", -1);
}
const My = (props) => {
    // console.log(getCookie('user'))
    return (
        <div>
            <div className="my">
                <div className="headbox">
                <div className="wave"></div>
                    <div className="avatar icon" style={{ backgroundImage: `url(${avatar})` }}></div>
                    <Link href='/myprofile'>
                        <div className="arrow-box">
                            &nbsp;&gt;
                        </div>
                    </Link>
                    <div className="user-info">
                        <div className="nick">ruizzi</div>
                        <div className="info">ID: ichong003</div>
                    </div>
                </div>
                <div className="thinner-border clear"></div>
                <ul className="link-list">
                    <li
                        onClick={
                            () => {
                                clearCookie('user')
                                Router.push('/role')
                            }
                        }
                    >
                        <i className="icon activity"></i>
                        <div className="name">退出登录</div>
                        <div className="thinner-border clear"></div>
                    </li>
                </ul>
            </div>
            <MenuBar url={'/my'} />
        </div>
    ) 
}

export default My