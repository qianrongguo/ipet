import './index.scss'
import Link from 'next/link'

const Index = ({url = '/'}) => (
    <div className="navListBox">
        <Link href="/posts">
            <a>
                <i className={`icon home ${ url === '/posts'?'active':''}`}></i>
                <div className="text">首页</div>
            </a>
        </Link>
        <Link href="/postcreate">
            <a>
                <i className="icon add"></i>
                <div className="text">发帖</div>
            </a>
        </Link>
        <Link href="/my">
            <a>
                <i className={`icon my ${ url === '/my'?'active':''}`}></i>
                <div className="text">我</div>
            </a>
        </Link>
    </div>
)

export default Index