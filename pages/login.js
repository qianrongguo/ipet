import React, {Component} from 'react'
import avater from '../images/icon/title.png'

const Index = () => (
    <div className="sign">
        <div className="close">
            <i className="icon"></i>
        </div>
        <img src={avater} alt=""/>

        <div className="input-list">
            <div className="input-item">
                <div className="txt message">
                    身份证号
                </div>
                <input type="text" placeholder="电此输入身份证号"/>
            </div>
            <div className="clearboth">

            </div>
            <div className="input-item">
                <div className="txt message">
                    姓名
                </div>
                <input type="text" placeholder='电此输入姓名'/>
            </div>
            <div className="clearboth">

            </div>


        </div>
        <button className="ok">登陆</button>


        <style jsx>
            {`
            img{
                display:block;
               width:100px;
               height:auto;
               margin:130px auto;
               margin-bottom:40px
           }
           .input-list{
               padding:0.75rem;
               display:block;

           }
            .input-item{
               padding:0.35rem;
               height:2.75rem;
               display:block
                }

            .input-item .txt{
                 width: 3rem;
                 margin-right: 1.8rem;
                color: #333;
                font-size: .75rem;

             }


            .input-item div{
                height:2.75rem;
                line-height:2.75rem;
                float:left;

            }

            .input-item input{
                    outline: none;
                    border: 1px solid grey;
                    margin-top: .8rem;
                    margin-left: 2rem;
                    box-shadow:1px 1px 0px 0px #aaa inset;

            }
            .clearboth:before{
                content: "";
                position: absolute!important;
                width: 200%;
                height: 200%;
                border-top: 1px solid #dcdcdc;
                -webkit-transform-origin: 0 0;
                -ms-transform-origin: 0 0;
                transform-origin: 0 0;
                -webkit-transform: scale(.5);
                -ms-transform: scale(.5);
                transform: scale(.5);
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
            }
            }

            .ok{
                display:block;
                height:2.375rem;
                width:15rem;
                border-radius:1.25rem;
                border:1px solid #e1e1e1;
                margin:0 auto;
                margin-top: 2.9rem;
                color:#fcfcfc;
                font-size:.85rem;
                 background: linear-gradient(90deg,#fde052,#febf05);
            }


            `}
        </style>
    </div>
)

export default Index