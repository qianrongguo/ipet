import avatar from '../images/icon/avatar.png'
const avatar2 = 'http://sfmimg.b0.upaiyun.com/prod_00/1b70518c528f199e.jpg'
// import '../styles/posts.sass'
const Index = () => {
    // document.documentElement.style.fontSize='20px'
    return (
        <div className="post-list">
            <div className="post-item">
                <div className="top">
                    <img src={avatar2} alt="abc"/>
                    <span>我是小强</span>
                </div>
                <div className="content">
                    <div>我家猫估计超级恨我😂 😂 😂</div>
                    来我家还没满，不知道拿它怎么办。现在也能欺负。 (￣ω￣(￣ω￣〃)ゝ
                </div>
            </div>
            <div className="post-item">
                <div className="top">
                    <img src={avatar2} alt="abc"/>
                    <span>我是小强</span>
                </div>
                <div className="content">
                    <div>我家猫估计超级恨我😂 😂 😂</div>
                    来我家还没满，不知道拿它怎么办。现在也能欺负。 (￣ω￣(￣ω￣〃)ゝ
                </div>
            </div>

            <style jsx global>{`
            body{
                margin: 0;
                padding: 0;
            }
           `}</style>

            <style jsx>{`
            .post-list{
                background-color: #f5f5f5;
            }
            .post-item{
                padding: .7rem 1.25rem;
                background-color: #fff;
                margin-bottom: 0.5rem;
            }
            .post-item .top{
                height: 2rem;
            }
            .post-item .top img{
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                float: left;
            }
            .post-item .top span{
                margin-left: .75rem;
                font-size: .7rem;
                line-height: 2rem;
                color: #90959a;
                float: left;
            }
    `}</style>
        </div>
    )
}

export default Index