import './index.scss'
import React, { Component } from 'react'

const Index = (props) => {
    //
    const {
        diff = 5,
        currentPage = 1, // 当前页码
        totalCount = 0, // 共有多少个商品
        size = 10, // 每页10条数据
    } = props;
    const maxPage = Math.ceil(totalCount / size)
    // page_num = 
    // drc = [this.currentPage - 4, this.currentPage - 3, this.currentPage - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2, this.currentPage + 3, this.currentPage + 4, this.currentPage + 5]
    // Array.apply(null,{length: 5}) // 快速生成数组，可以map
    // maxPage
    const arr = Array.apply(null,{length: maxPage})
    return (
        <ul className="pagination">
            <li className={currentPage === 1 ? 'disable' : ''}><a href="#">&lt;</a></li>
            {
                arr.map((d,i) => (
                    <li 
                        key={i+1} 
                        className={currentPage === (i+1) ? 'current' : ''}
                    >
                        <a href="#">{i+1}</a>
                    </li>
                ))
            }
            {
              maxPage>6 && <li><a href="#" title={currentPage+diff}>{'...'}</a></li>
            }
            {
                maxPage>=6 && <li><a href="#">{maxPage}</a></li>
            }
            <li className={currentPage === maxPage ? 'disable' : ''}><a href="#">&gt;</a></li>
        </ul>
    )

}

// 这里的问题你肉眼看不出错误吗？


export default Index


// class Index extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentPage: 2,
//                 totalCount: 139,
//                 size: 10
//         }
       
//     }

//     render() {
//         let currentPage = this.state.currentPage;
//         let page_num =  Math.ceil(this.state.totalCount / this.state.size);

//         return (
//             <div>
//                 <ul className="pagination">
//                     <li className={currentPage === 1 ? 'disable' : ''}><a href="#">上一页</a></li>
//                     {
//                         [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(d => <li key={d} className={currentPage === d ? 'current' : ''}>
//                             <a href="#">{d}</a></li>)
//                     }
//                     <li className={currentPage === page_num ? 'disable' : ''}><a href="#">下一页</a></li>
//                     <li className='title'></li>
//                 </ul>
//             </div>
//         )
//     }

   
// }


// export default Index;
