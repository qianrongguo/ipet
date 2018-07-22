import '../styles/share.scss'
import '../styles/findPost.scss'
import avatar from '../images/icon/1.png'

const avatar2 = 'http://sfmimg.b0.upaiyun.com/prod_00/1b70518c528f199e.jpg'

const cat5 = [
    'http://sfmimg.b0.upaiyun.com/prod_00/63b3912f8d21cb0c.jpg!/fw/400',
    'http://sfmimg.b0.upaiyun.com/prod_00/63b3912f8d21cb0c.jpg!/fw/400',
    'http://sfmimg.b0.upaiyun.com/prod_00/63b3912f8d21cb0c.jpg!/fw/400', 'http://sfmimg.b0.upaiyun.com/prod_00/63b3912f8d21cb0c.jpg!/fw/400',
    'http://sfmimg.b0.upaiyun.com/prod_00/63b3912f8d21cb0c.jpg!/fw/400'

]

const Find = () => {
    return (
        <div className="find-top">

            <div className="wrap">
                <div className="top">
                    <img src={avatar2} alt="123"/>
                    <span>我是郭斯特</span>
                </div>
                <p>谁呀呵呵</p>
                <div>
                    <img src={cat5[1]} alt=""/>
                    <img src={cat5[1]} alt=""/>
                </div>
            </div>
            <div className="comment">
                <div className="comment-title">
                    用户评论
                </div>

                <ul className='comment-list'>
                    <li>
                        <img src="http://sfmimg.b0.upaiyun.com/prod_00/00ebbfa2f6a72297.jpg" alt=""/>
                        <div className='create'>5天前</div>
                        <div className='nicktext'>
                            <div className='nick'>ruizzzi</div>
                            <div className='text'>点赞赞</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Find