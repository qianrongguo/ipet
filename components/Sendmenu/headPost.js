import { Component } from 'react'
import './headPost.scss'
import Link from 'next/link'

const Index = (props) => (
    <div className="titleBar">
        <div className="box">
            <div className="wrap">
                <Link href="/posts">
                    <a className="btn-cancle icon"></a>
                </Link>
            </div>
            <div className="wrap">
                <i className="post-title icon"></i>
            </div>
            <div className="wrap">
                <Link href="/posts">
                    <a className="btn-post icon"></a>
                </Link>
            </div>

        </div>
        <div className="thinner-border clear"></div>
    </div>
)

export default Index