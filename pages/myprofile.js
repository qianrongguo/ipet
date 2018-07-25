import { Component } from 'react'
import '../styles/myprofile.scss'
import Link from 'next/link'



class Index extends Component {
    state = {
        img: ['http://sfmimg.b0.upaiyun.com/prod_00/24a30bf47be7b02e.jpg']
    }


    previewImg(file) { // 本地预览
        const _this = this
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function (e) {
            _this.setState({
                imgs: [
                    ..._this.state.imgs,
                    e.target.result
                ]
            })
        }
    }

    imgChange(event) { // 获取文件图片
        this.previewImg(event.target.files[0])
        // this.setState({
        //     imgFile: event.target.files[0],
        //     renderState: "loading"
        // }, () => {
        //   this.previewImg()
        // })
    }
    render() {
        const { img } = this.state
        return (
            <div className="myprofile">
                <div className="box">
                    <Link href="/my">
                        <a className="icon back"></a>
                    </Link>

                    <i className="icon title"></i>

                </div>
                <div className="thinner-border clear"></div>
                <ul className="link-list">
                    <li className="avatarbox">
                        {
                            img.length < 2 ? (
                                <div className="avatar"
                                    onChange={this.imgChange.bind(this)}
                                    style={{ backgroundImage: `url(${img})` }
                                    }>

                                </div>
                            ) : null
                        }


                        <div className="btn">上传头像  	&nbsp;	&nbsp;&gt;</div>


                        <div className="send">
                            <input type="file"
                                accept="image/png,image/jpg,image/jpeg,image/gif" />
                        </div>
                        

                    </li>
                    <div className="thinner-border clear"></div>
                    <li className="arrow-box">
                        <div className="name">昵称</div>
                        <div className="text">Didifui</div>
                        {/* <div className="thinner-border clear"></div> */}
                    </li>
                    <li className="arrow-box">
                        <div className="name">id</div>
                        <div className="text">ichong003</div>
                        <div className="thinner-border clear"></div>
                    </li>
                    <li><div className="thinner-border clear"></div></li>

                </ul>
            </div>
        )
    }
}

export default Index