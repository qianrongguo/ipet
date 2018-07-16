import '../styles/my.scss'
import avatar2 from '../images/icon/back.png'

const avatar = 'http://sfmimg.b0.upaiyun.com/prod_00/00ebbfa2f6a72297.jpg'

const My = () => {
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
                <li>
                    <i className="icon activity"></i>
                    <div className="name">退出登录</div>
                </li>
            </ul>


        </div>

    )
}

export default My