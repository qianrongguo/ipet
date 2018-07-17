import '../styles/share.scss'
import '../styles/posts.scss'
import {Component} from 'react'
import Link from 'next/link'
import Loading from '../components/Loading'
import fetch from 'isomorphic-fetch'
import avatar from '../images/icon/avatar.png'

const avatar2 = 'http://sfmimg.b0.upaiyun.com/prod_00/1b70518c528f199e.jpg'

const cat = [
    'http://sfmimg.b0.upaiyun.com/prod_00/dd3c0d2669b29d39.png!/fw/400',
    'http://sfmimg.b0.upaiyun.com/prod_00/13eb58a6042f910b.png!/fw/400',
]


// 这边默认习惯是用Index做组件名，为什么呢，因为文件名已经是posts了，其实这里你也可以叫 Posts
// 函数式组件 state less
const Posts = (props) => {
    // 先不要看下面
    // document.documentElement.style.fontSize='20px'
    const {result} = props
    console.log('result', result)
    const {code,data,msg = '暂无数据'} = result
    return code === 0 && data && Array.isArray(data.data) ? (
        <div className="post-list">
            {
                data.data.map(data=>(
                    <Link key={data.id} href={`/post/${data.id}`}>
                     <div className="post-item">
                        <div className="top">
                            <img src={data.headimg} />
                             <span>{data.nickname}</span>
                         </div>
                         <div className="content">
                             <div>{data.title}</div>
                             {data.description}
                         </div>
                         <div className="imglist count2">
                            <div className="icon" style={{backgroundImage: `url(${cat[0]})`}}></div>
                             <div className="icon" style={{backgroundImage: `url(${cat[1]})`}}></div>
                         </div>
                     </div>
                 </Link>
                ))
            }
        </div>
    ) : <div>{msg}</div>
    // (
    //     <div className="post-list">
    //         <div className="post-item">
    //             <div className="top">
    //                 <img src={avatar2}/>
    //                 <span>我是郭思特</span>
    //             </div>
    //             <div className="content">
    //                 <div>大家快来给我小赞赞👍</div>
    //                 来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知-----道拿它怎么办。
    //             </div>
    //             <div className="imglist count1">
    //                 <div className="icon" style={{backgroundImage: `url(${cat[0]})`}}></div>
    //             </div>
    //         </div>
    //         <Link href="/post">
    //             <div className="post-item">
    //                 <div className="top">
    //                     <img src={avatar2}/>
    //                     <span>我是郭思特</span>
    //                 </div>
    //                 <div className="content">
    //                     <div>大家快来给我小赞赞👍</div>
    //                     来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。-------------------
    //                 </div>
    //                 <div className="imglist count2">
    //                     <div className="icon" style={{backgroundImage: `url(${cat[0]})`}}></div>
    //                     <div className="icon" style={{backgroundImage: `url(${cat[1]})`}}></div>
    //                 </div>
    //             </div>
    //         </Link>
    //         <div className="post-item">
    //             <div className="top">
    //                 <img src={avatar2}/>
    //                 <span>我是郭思特</span>
    //             </div>
    //             <div className="content">
    //                 <div>大家快来给我小赞赞👍</div>
    //                 来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。
    //             </div>
    //             <div className="imglist count3">
    //                 {
    //                     cat2.map((data, index) => <div key={index} className="icon"
    //                                                    style={{backgroundImage: `url(${data})`}}></div>)
    //                 }
    //             </div>
    //         </div>
    //
    //         <div className="post-item">
    //             <div className="top">
    //                 <img src={avatar2}/>
    //                 <span>我是郭思特</span>
    //             </div>
    //             <div className="content">
    //                 <div>大家快来给我小赞赞👍</div>
    //                 来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。
    //             </div>
    //             <div className="imglist count3">
    //                 {
    //                     cat3.map((data, index) =>
    //                         <div key={index} className="icon" style={{backgroundImage: `url(${data})`}}></div>)
    //                 }
    //             </div>
    //         </div>
    //
    //         <div className="post-item">
    //             <div className="top">
    //                 <img src={avatar2}/>
    //                 <span>我是郭思特</span>
    //             </div>
    //             <div className="content">
    //                 <div>大家快来给我小赞赞👍</div>
    //                 来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。
    //             </div>
    //             <div className="imglist count3">
    //                 {
    //                     cat2.map((data, index) => <div key={index} className="icon"
    //                                                    style={{backgroundImage: `url(${data})`}}></div>)
    //                 }
    //             </div>
    //             <div className="imglist count3">
    //                 {
    //                     cat3.map((data, index) => <div key={index} className="icon"
    //                                                    style={{backgroundImage: `url(${data})`}}></div>)
    //                 }
    //             </div>
    //         </div>
    //
    //         <div className="post-item">
    //             <div className="top">
    //                 <img src={avatar2}/>
    //                 <span>我是郭思特</span>
    //             </div>
    //             <div className="content">
    //                 <div>大家快来给我小赞赞👍</div>
    //                 来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。
    //             </div>
    //             <div className="imglist count3">
    //                 {
    //                     cat3.map((data, index) => <div key={index} className="icon"
    //                                                    style={{backgroundImage: `url(${data})`}}></div>)
    //                 }
    //             </div>
    //             <div className="imglist count3">
    //                 {
    //                     cat.map((data, index) => <div key={index} className="icon"
    //                                                   style={{backgroundImage: `url(${data})`}}></div>)
    //                 }
    //             </div>
    //         </div>
    //
    //         <div className="post-item">
    //             <div className="top">
    //                 <img src={avatar2}/>
    //                 <span>我是郭思特</span>
    //             </div>
    //             <div className="content">
    //                 <div>大家快来给我小赞赞👍</div>
    //                 来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。来我家还没满月，不知道拿它怎么办。
    //             </div>
    //             <div className="imglist count3">
    //                 {
    //                     cat3.map((data, index) => <div key={index} className="icon"
    //                                                    style={{backgroundImage: `url(${data})`}}></div>)
    //                 }
    //             </div>
    //             <div className="imglist count3">
    //                 {
    //                     cat3.map((data, index) => <div key={index} className="icon"
    //                                                    style={{backgroundImage: `url(${data})`}}></div>)
    //                 }
    //             </div>
    //         </div>
    //
    //
    //     </div>
    // ) : <div>暂无数据</div>
}
// 类组件 need state
class PostsPage extends Component {
    state = {
        isFetching: 0,
        result: {}
    }
    componentWillMount(){
        console.log('该组件加载出来之前')
    }
    componentDidMount(){
        console.log('该组件加载出来之后')
        // ajax request
        this.fetchPosts()

    }
    fetchPosts(){
        console.log('该组件正在请求数据')
        this.setState({
            isFetching: 1
        })
        // es6 fetch (jquery ajax xhr)
        // const url = 'http://stb.weichongming.com/peanut/eatIndex/postSearch?token=6DPLlQQF2x05umg170InRQj9lAPD8hSV2OydxNoNlB1GsAxbo%2Bw4YQJRY8bvqkH0wYvWpVTnElSHcPxI7rZ38j8CA7ynS1AAdUZ8vuEhz1E%3D&limit=10&offset=0&school=null&location=null'
        // fetch(url)
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log('result', result)
        //         this.setState({
        //             isFetching: 2,
        //             result
        //         })
        //     })
        //     .catch(e => console.log("Oops, error", e))
        const result = {"msg":"","data":{"count":7,"data":[{"headimg":"http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/00ebbfa2f6a72297.jpg","imgs":["http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/4c781949cb97c2b3.jpeg","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/ad80a4b4fbd0604b.png","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/597d85e1e6f34400.jpeg","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/eaed5945c9b40c2b.png"],"is_rich":"0","status":"0000","update_dt":1531133389,"description":"谁啊谁哈哈","tour_area":"","rtype":"0000","seller_id":0,"nickname":"ruizzzi","create_dt":1531133389,"content":"","is_like":0,"tour_project":"","comment_count":2,"auto_img":"0","title":"真好","id":462,"tour_cate":"","is_pass":"0","share_count":0,"user_id":2846,"like_count":1},{"headimg":"http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/00ebbfa2f6a72297.jpg","imgs":["http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/2af4a1e49bcf475e.jpg","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/9ef8635576ac86bc.jpg","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/81a958d8a3e5ec0a.jpg","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/906abf0f5390bbdf.jpg"],"is_rich":"0","status":"0000","update_dt":1531023919,"description":"来我家还没满两个月，第一天来的时候那个凶，每次逗它就咬，咬手咬脚。满地咬碎的纸和划破的窗户都是它的杰作。<br><br>现在快半岁了，咬的脾气没改，每天5点多咬醒我，要出去玩，出去玩一趟之后，又回来咬我，拿个喷雾吓它，没喷它，它就一眼不满的看了我，然后又跑出去玩了。 ​​​<br><br>性子太野，不知道拿它怎么办。现在也能欺负玩具了。😂 😂 😂 <br><br>明明看上去很可爱，性格却很狂躁，吃不消了。<br><br>(￣ω￣(￣ω￣〃)ゝ<br><br><br><br>","tour_area":"","rtype":"0000","seller_id":0,"nickname":"ruizzzi","create_dt":1531023919,"content":"","is_like":0,"tour_project":"","comment_count":0,"auto_img":"0","title":"我家猫估计超级恨我😂 😂 😂 ","id":419,"tour_cate":"","is_pass":"0","share_count":0,"user_id":2846,"like_count":0},{"headimg":"http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/00ebbfa2f6a72297.jpg","imgs":["http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/2af4a1e49bcf475e.jpg","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/9ef8635576ac86bc.jpg","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/81a958d8a3e5ec0a.jpg","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/906abf0f5390bbdf.jpg"],"is_rich":"0","status":"0000","update_dt":1531023919,"description":"来我家还没满两个月，第一天来的时候那个凶，每次逗它就咬，咬手咬脚。满地咬碎的纸和划破的窗户都是它的杰作。<br><br>现在快半岁了，咬的脾气没改，每天5点多咬醒我，要出去玩，出去玩一趟之后，又回来咬我，拿个喷雾吓它，没喷它，它就一眼不满的看了我，然后又跑出去玩了。 ​​​<br><br>性子太野，不知道拿它怎么办。现在也能欺负玩具了。😂 😂 😂 <br><br>明明看上去很可爱，性格却很狂躁，吃不消了。<br><br>(￣ω￣(￣ω￣〃)ゝ<br><br><br><br>","tour_area":"","rtype":"0000","seller_id":0,"nickname":"ruizzzi","create_dt":1531023919,"content":"","is_like":0,"tour_project":"","comment_count":1,"auto_img":"0","title":"我家猫估计超级恨我😂 😂 😂 ","id":418,"tour_cate":"","is_pass":"0","share_count":0,"user_id":2846,"like_count":0},{"headimg":"http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/00ebbfa2f6a72297.jpg","imgs":["http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/35908735fa8f2fb6.jpg","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/0d9492d890685dd1.jpg","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/11cd2fa9cf2c0ef3.jpg"],"is_rich":"0","status":"0000","update_dt":1531010070,"description":"养过猫的人对猫怕水这个特性应该非常的熟悉，然而我们从来没有想过为什么猫会怕水。在民间，特别是西方国家认为猫之所以怕水是因为猫是地狱来的使者，水象征着冥河，所以一般的猫对水都很怕，甚至不敢接近。但经过了科学研究之后，猫怕水的原因可能是因为太长时间在缺水地区生活造成的。<br>猫怕水，猫奴们并不陌生。为什么猫咪会怕水呢？在民间，特别是西方国家认为猫之所以怕水是因为猫是地狱来的使者，水象征着冥河，所以一般的猫对水都很怕，甚至不敢接近。<br><br><br>但经过了科学研究之后，猫之所以怕水，这主要与其祖先生活的环境有关系。现在人们养的宠物猫的祖先起源于非洲的野猫和亚洲的沙漠猫。这些猫咪常年生活在沙漠地区，很少能接触到水。正是由于常年受到这种环境的制约和影响，猫咪变成了“旱鸭子”，让猫咪对水产生了恐惧的心理。<br><br><br>尤其是每次给猫主子洗澡，它会变得十分紧张害怕，仿佛如临大敌一样。很多的猫咪都是怕水的，特别是那些从小就没有接触过水的猫咪，它们会更怕水。那么我们有什么办法能让猫咪，战胜对水的恐惧吗？<br><br><br><br>方法<br>想要猫咪不怕水，我们要做的是让它从小接触水、习惯水。在刚开始的时候，可以尝试用一个小盆装上一些水，让猫咪玩耍。为了更好的吸引挑逗猫咪，还可以在盆中放上一些小鱼，注意不要放大鱼，能灵活游动吸引猫咪注意力的小鱼就可以了。<br><br><br>在刚开始的时候，不要尝试将猫咪直接扔进水里，猫咪胆小，这样可能会让猫咪跟更紧张恐惧水。我们要给猫咪足够的时间，让它自己去玩水，去挖掘水的乐趣。<br>此外，在猫咪年幼的时候还要训练它习惯洗澡，让猫咪与水有更多的接触，当猫咪真的习惯水、喜欢水之后，它就不会在害怕水了。","tour_area":"","rtype":"0000","seller_id":0,"nickname":"ruizzzi","create_dt":1531010070,"content":"","is_like":0,"tour_project":"","comment_count":0,"auto_img":"0","title":"猫咪怕水不爱洗澡怎么办？","id":417,"tour_cate":"","is_pass":"0","share_count":0,"user_id":2846,"like_count":1},{"headimg":"http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/00ebbfa2f6a72297.jpg","imgs":["http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/f7f32171bf55e586.jpg","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/d734ccf4689f1a9e.jpg","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/5487f9a7896c39a5.jpg","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/63b3912f8d21cb0c.jpg"],"is_rich":"0","status":"0000","update_dt":1530874787,"description":"^O^","tour_area":"","rtype":"0000","seller_id":0,"nickname":"ruizzzi","create_dt":1530874787,"content":"","is_like":0,"tour_project":"","comment_count":0,"auto_img":"0","title":"剽悍的女生。。。","id":406,"tour_cate":"","is_pass":"0","share_count":0,"user_id":2846,"like_count":1},{"headimg":"http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/ea1c768c25271793.jpg","imgs":["http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/5faa6e730be119a8.jpeg","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/e995dcf310b455d2.jpeg"],"is_rich":"0","status":"0000","update_dt":1530873631,"description":"<br>她<br>卖的一手好萌<br>还会悄悄的暗中观察<br>敲级喜欢😍","tour_area":"","rtype":"0000","seller_id":0,"nickname":"哼屁精","create_dt":1530873631,"content":"","is_like":0,"tour_project":"","comment_count":0,"auto_img":"0","title":"家有肥猫初长成","id":403,"tour_cate":"","is_pass":"0","share_count":0,"user_id":2845,"like_count":0},{"headimg":"http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/1b70518c528f199e.jpg","imgs":["http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/dd3c0d2669b29d39.png","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/13eb58a6042f910b.png","http:\/\/sfmimg.b0.upaiyun.com\/prod_00\/b38a89c988651908.png"],"is_rich":"0","status":"0000","update_dt":1530873214,"description":"他们还在上班 而我在安静的窥探……","tour_area":"","rtype":"0000","seller_id":0,"nickname":"郭斯特","create_dt":1530873214,"content":"","is_like":0,"tour_project":"","comment_count":1,"auto_img":"0","title":"美美哒的我也要小赞赞🙈","id":402,"tour_cate":"","is_pass":"0","share_count":0,"user_id":2844,"like_count":1}]},"code":0}

        setTimeout(() => {
            this.setState({
                isFetching: 2,
                result
            })
        },1000)
    }
    render () {
        console.log('该组件正在渲染')
        // 0 什么都不做
        // 1 正在请求
        // 2 请求完毕（成功或失败）
        const {isFetching, result} = this.state
        return isFetching === 2 ? <Posts result={result} /> : (
            isFetching === 1 ? <Loading /> : null
        )
    }
    componentWillUpdate(){
        console.log('该组件正在更新UI界面')
    }
    componentDidUpdate(){
        console.log('该组件完成更新UI界面')

    }
}

// function countImg() {
//     const elem = document.getElementsByClassName("count5");
//     if ((elem.length)/3 === 0){
//         elem.setAttribute("margin-right: 0rem;")
//     }else {
//
//     }
// }
// countImg()
export default PostsPage


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