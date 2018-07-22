import {Component} from 'react'
import '../styles/postcreate.scss'

class Index extends Component{
    render(){
        return(
            <div className="stb-post">
                <div>
                    <textarea className="post-title" placeholder="hi,写下你的标题吧"
                    style={{height:'6rem'}}
                    ></textarea>
                </div>
                <div>
                    <textarea className="post-title" placeholder="hi,写下你的内容吧"
                    style={{height:'16.65rem',marginTop:'.6rem'}}
                    ></textarea>
                </div>

                <div className="prompt">温馨提示：建议文件大小在2M以内的照片</div>

                <div className="post-list">
                <div className="border">
                <div className="mid-height"></div>
                <div className="mid-width"></div>

                </div>
                <input type="file" accept="image/*"/>
                
                    
                </div>
            </div>
        )
    }
}

export default Index