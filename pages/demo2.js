import Pagination from '../components/pagination/index2'
import { Component } from 'react'

class Index extends Component {
    render() {
        return (
            <div>
                <Pagination config={{totalPage:25}}/>
            </div>
        )
    }
}


export default Index