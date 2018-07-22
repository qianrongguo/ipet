import { Component } from 'react'
import '../styles/postcreate.scss'
class Index extends Component {
    state = {
        imgs: [
            'http://sfmimg.b0.upaiyun.com/prod_00/dd3c0d2669b29d39.png!/fw/400',
            'http://sfmimg.b0.upaiyun.com/prod_00/13eb58a6042f910b.png!/fw/400',
        ]
    }
    handleRemove(idx) {
        this.setState({
            imgs: this.state.imgs.filter((data, index) => index !== idx)
            // imgs: this.imgs.splice(index)
        })
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
        const { imgs } = this.state
        return (
            <div className="stb-post">
                <div>
                    <textarea className="post-title" placeholder="hi,写下你的标题吧"
                        style={{ height: '6rem' }}
                    ></textarea>
                </div>
                <div>
                    <textarea className="post-title" placeholder="hi,写下你的内容吧"
                        style={{ height: '16.65rem', marginTop: '.6rem' }}
                    ></textarea>
                </div>

                <div className="prompt">温馨提示：建议文件大小在2M以内的照片</div>

                <div className="image-list">
                    {

                        imgs.map((src, index) => (
                            <div
                                key={index}
                                className="border icon"
                                style={{ backgroundImage: `url(${src})` }}
                            >
                                <div
                                    className="remove"
                                    onClick={this.handleRemove.bind(this, index)}
                                >x</div>
                            </div>
                        ))
                    }
                    {
                        imgs.length < 4 ? (
                            <div className="border">
                                <div className="mid-height"></div>
                                <div className="mid-width"></div>
                                <input
                                    type="file"
                                    onChange={this.imgChange.bind(this)}
                                    // accept="image/*"
                                    accept="image/png,image/jpg,image/jpeg,image/gif"
                                />
                            </div>
                        ) : null
                    }
                    <div className="clear"></div>
                </div>

                <button className="btn">发送</button>
            </div>
        )
    }
}

export default Index