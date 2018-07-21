
import '../styles/flex.scss'

//https://caniuse.com

// flex在父级加入display:flex;
// 添加浏览器前缀：-webkit
// 水平居中：justify-content
// 排列方向  ：flex-direction:row横向排列  row-reverse:翻滚排列   
//纵向排列：columu   align-items水平居中
//flex-wrap:项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。nowrap  （//不换行）


//align-content  : 多行的时候垂直排列
//flex-flow:flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

//子级身上的属性：flex:1各占1分，1值系数
//align-self:用来覆盖负极align-item
//order用来规定子元素顺序，

const Index = () => (
    <div className="box">
        <div className="div">1</div>
        <div className="div">2</div>
        <div className="div">4</div>
        <div className="div">5</div>
        <div className="div">6</div>
        <div className="div">7</div>
        <div className="div item8">8</div>
        
        
    </div>
)

export default Index