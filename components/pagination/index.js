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
    
    const leftJump = currentPage-diff
    let rightJump = currentPage+diff
    rightJump = rightJump<=maxPage?rightJump:maxPage
    let arr = []
    if (maxPage>diff && currentPage<diff) {
        arr = [1,2,3,4,5]
    }
    else if (maxPage === 4) {
        arr = [1,2,3, 4]
    }
    else if (maxPage === 3) {
        arr = [1,2,3]
    }
    else if (maxPage === 2) {
        arr = [1,2]
    }
    else if (maxPage === 2) {
        arr = [1,2]
    }
    else if (currentPage>diff) {
        // '1 ... 4 5 6 7 8 ... 14'
        arr = [
            currentPage-2,
            currentPage-1,
            currentPage,
            currentPage+1,
            currentPage+2,
        ]
    } else if (currentPage + 2 >= maxPage){
        // '1 ...  10 11 12 13 14'
        arr = [
            currentPage-2,
            currentPage-1,
            currentPage,
            currentPage+1,
            currentPage+2,
        ]
    }
    return (
        <ul className="pagination">
            <li className={currentPage === 1 ? 'disable' : ''}><a href="#">&lt;</a></li>
            {
                currentPage>diff && <li><a href="#">1</a></li>
            }
            {
              leftJump>=1 && <li><a href="#" title={leftJump>=1?leftJump:1}>{'...'}</a></li>
            }
            {
                arr.map(data=> (
                    <li 
                        key={data} 
                        className={currentPage === data ? 'current' : ''}
                    >
                        <a href="#">{data}</a>
                    </li>
                ))
            }
            {
               !arr.includes(maxPage) && maxPage>(diff+1) && <li><a href="#" title={rightJump}>{'...'}</a></li>
            }
            {
                !arr.includes(maxPage) && maxPage>diff && <li><a href="#">{maxPage}</a></li>
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
