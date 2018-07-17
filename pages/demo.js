// demo就是组件的例子
import Pagination from '../components/pagination'

const Index = () => (
    <div>
        demo 演示：
        分页器组件
        <Pagination
            currentPage={1}
            currentPage={2}
            totalCount={46}
            // totalCount={56}
            totalCount={66}
            // totalCount={96}
            // totalCount={136}
        />
    </div>
)


export default Index