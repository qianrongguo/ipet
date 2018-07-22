import '../styles/my.scss'
import avatar2 from '../images/icon/back.png'
import Router from 'next/router'

const avatar = 'http://sfmimg.b0.upaiyun.com/prod_00/00ebbfa2f6a72297.jpg'

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
   //获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
     var c = ca[i];
     while (c.charAt(0)==' ') c = c.substring(1);
     if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
//清除cookie 
function clearCookie(name) { 
    setCookie(name, "", -1); 
} 
const My = () => {
    // console.log(getCookie('user'))
    return (
        <div className="my">
            <div className="headbox">
                <div className="avatar icon" style={{backgroundImage: `url(${avatar})`}}></div>
                <div className="arrow-box">
                    <i className="icon"></i>
                </div>
                <div className="user-info">
                    <div className="nick">ruizzi</div>
                    <div className="info">ID: ichong003</div>
                </div>
            </div>

            <ul className="link-list">
                <li
                    onClick={
                        ()=>{
                            clearCookie('user')
                            Router.push('/role')
                        }
                    }
                >
                    <i className="icon activity"></i>
                    <div className="name">退出登录</div>
                </li>
            </ul>


        </div>

    )
}

export default My