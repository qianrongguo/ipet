import './index2.scss'
import React, { Component } from 'react'


class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,  //设置当前页面，默认为第一页
            groupCount: 7,
            startPage: 1
        }
    }
    create() {
        const { currentPage } = this.state;
        const { startPage } = this.state;
        const { groupCount } = this.state;

        const {
            totalPage
        } = this.props.config;
        let pages = [];



        if (totalPage <= 10) {
            pages.push(<li onClick={this.goPrenv.bind(this)} key={0} className={currentPage === 1 ? 'disable' : ''}>上一页</li>)

            for (let i = 1; i <= totalPage; i++) {
                pages.push(<li key={i} onClick={this.go.bind(this, i)} className={currentPage === i ? 'active' : ''}>{i}</li>)
            }

            pages.push(<li key={totalPage + 1} onClick={this.goNext.bind(this)} className={currentPage === totalPage ? 'diable' : ''}>下一页</li>)
        } else {

            pages.push(<li onClick={this.goPrenv.bind(this)} key={0} className={currentPage === 1 ? 'disable' : ''}>上一页</li>)


            for (let i = startPage; i < groupCount + startPage & i <= totalPage; i++) {
                pages.push(<li key={i} onClick={this.go.bind(this, i)} className={currentPage === i ? 'active' : ''}>{i}</li>)
            }

            //页面小于10就不添加省率符号
            if (totalPage - startPage >= 9) {
                pages.push(<li className="ellipsis" key={-1}>...</li>)

                pages.push(<li key={totalPage - 1} onClick={this.go.bind(this, totalPage - 1)} className={currentPage === totalPage - 1 ? 'active' : ''}>{totalPage - 1}</li>)
                pages.push(<li key={totalPage} onClick={this.go.bind(this, totalPage)} className={currentPage === totalPage ? 'active' : ''}>{totalPage}</li>)
            }

            pages.push(<li key={totalPage + 1} onClick={this.goNext.bind(this)} className={currentPage === totalPage ? 'diable' : ''}>下一页</li>)
        }




        return pages;
    }

    goPrenv() {
        let { currentPage } = this.state;
        if (--currentPage == 0) {
            return;
        }
        this.go(currentPage)
    }

    goNext() {
        let { currentPage } = this.state;
        const { totalPage } = this.props.config;
        if (++currentPage > totalPage) {
            return;
        }
        this.go(currentPage)
    }

    go(currentPage) {
        const { groupCount } = this.state;
        const { totalPage } = this.props.config;

        //处理下一页
        if (currentPage % groupCount === 1) {
            this.setState({
                startPage: currentPage
            })
        }

        //处理上一页
        if (currentPage % groupCount === 0) {
            this.setState({
                startPage: currentPage - groupCount + 1
            })
        }

        if (totalPage - currentPage < 2){
            this.setState({
                startPage:totalPage - groupCount
            })
        }


        this.setState({
            currentPage
        })
    }


    render() {
        const Pages = this.create.bind(this)()
        return (
            <div className="main">
                <ul className="page">
                    {Pages}
                </ul>
            </div>
        )
    }
}
export default Index