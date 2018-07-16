import './index.scss'


const Index=(props)=>{
        const {
                currentPage = 2, // 当前页码
                totalCount = 139, // 共有多少个商品
                size = 10 // 每页10条数据
        } = props

        return (
            <ul className="pagination">
                <li className={currentPage===1?'disable':''}><a href="#">上一页</a></li>
                {/*<li className="first-page"><a href="#">1</a></li>*/}
                {
                        [1,2,3,4,5,6,7,8,9,10].map(d=><li key={d} className={currentPage===d?'current':''}><a href="#">{d}</a></li>)
                }
                <li><a href="#">下一页</a></li>
            </ul>
        )
}
// 这里的问题你肉眼看不出错误吗？


export default Index