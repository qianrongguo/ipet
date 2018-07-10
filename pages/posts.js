// import '../styles/posts.sass'
import avatar from '../images/icon/avatar.png'
const avatar2 = 'http://sfmimg.b0.upaiyun.com/prod_00/1b70518c528f199e.jpg'

const cat = [
    'http://sfmimg.b0.upaiyun.com/prod_00/dd3c0d2669b29d39.png!/fw/400',
    'http://sfmimg.b0.upaiyun.com/prod_00/13eb58a6042f910b.png!/fw/400',
    'http://sfmimg.b0.upaiyun.com/prod_00/b38a89c988651908.png!/fw/400',
]

// 这边默认习惯是用Index做组件名，为什么呢，因为文件名已经是posts了，其实这里你也可以叫 Posts
const RenderPosts = () => {
    // return <div><a href="/">58</a></div> // 这里是模板jsx，所以不需要加引号

    // 先不要看下面

    // document.documentElement.style.fontSize='20px'
    return (
        <div className="post-list">
            <div className="post-item">
                <div className="top">
                    <img src={avatar2} />
                    <span>我是郭思特</span>
                </div>
                <div className="content">
                    <div>大家快来给我小赞赞👍</div>
                    来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。
                </div>
                <div className="imglist count1">
                    <div className="icon" style={{backgroundImage: `url(${cat[0]})`}}></div>
                </div>
            </div>

            <div className="post-item">
                <div className="top">
                    <img src={avatar2} />
                    <span>我是郭思特</span>
                </div>
                <div className="content">
                    <div>大家快来给我小赞赞👍</div>
                    来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。
                </div>
                <div className="imglist count2">
                    <div className="icon" style={{backgroundImage: `url(${cat[0]})`}}></div>
                    <div className="icon" style={{backgroundImage: `url(${cat[1]})`}}></div>
                </div>
            </div>
            <div className="post-item">
                <div className="top">
                    <img src={avatar2} />
                    <span>我是郭思特</span>
                </div>
                <div className="content">
                    <div>大家快来给我小赞赞👍</div>
                    来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。
                </div>
                <div className="imglist count3">
                    {
                        cat.map((data,index) => <div key={index} className="icon" style={{backgroundImage: `url(${data})`}}></div>)
                    }
                </div>
            </div>
            <style jsx global>{`
            body{
                margin: 0;
                padding: 0;
            }
            .icon{
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
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
                display:block;
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
            .imglist {
                margin: .6rem 1.25rem;
                width: 16.25rem;
            }
            .imglist img{
                 width:auto;
                 height:auto;
                 max-width:100%;
                 max-height:100%;
            }
            .imglist .icon{
                display: inline-block;
                background-size: cover;
                height: 8rem;
            }
            .count1 .icon{
                width: 16rem;
            }
            .count2 .icon{
                width: 8rem;
            }
            .count3 .icon{
                width: 5rem;
                height: 5rem;
            }

            .post-item .content{
                overflow: hidden;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                display: -webkit-inline-box;
                word-break: break-word;
            }
    `}</style>
        </div>
    )
}

export default RenderPosts





// 什么事组件？？？
// 组件化是react提出来的一个专业术语，就是一个卖点，本质上就是函数，不要被吓到了
// 在传统网站制作，通过js操作dom是如下方法
// ele=document.body 或者 ele=document.getElementById('abc')
// ele.innerHTML='<div>123</div>'  或者 ele.innerText='123'
// ele.innerHTML='<div><a href="/">58</a></div>'

// 渲染帖子列表，声明一个函数 名字叫 renderPosts
// function renderPosts(){
// return '<div><a href="/">58</a></div>'
// }
// 给body直接渲染帖子列表的dom
// ele.innerHTML=renderPosts()