import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import '@piscium2010/lime/lime.css'
import Ripple from '@piscium2010/lime/Ripple'

const src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554482973127&di=82ab1429d5770226d6fcf571dec95a6a&imgtype=0&src=http%3A%2F%2Fwx2.sinaimg.cn%2Forj360%2F006kblPKgy1fk5l332guzj30dc0dcmy8.jpg'

export default class RippleCard extends React.Component {
    render() {
        return (
            <div style={{ maxWidth: 600 }}>
                <div className='lime-card' style={{ maxWidth: 400 }}>
                    <div style={{ cursor: 'pointer', position: 'relative', height: 300, overflow: 'hidden' }}>
                        <img src={src} style={{ width: '100%' }} alt="phildel" />
                        <Ripple />
                    </div>
                    <div style={{ padding: 15 }}>
                        <p style={{ lineHeight: '1.2em', padding: 0 }}>
                            Phildel是一位来自英国伦敦的创作型歌手。她8岁那年，父母离异，继父禁止音乐出现在他们的家庭。Phildel忍受了10年，最后她留下一张纸条，毅然离家出走，坚定地去追寻她的音乐梦想之路
                            在2008年12月，Phildel加入像Radiohead和goldfrapp这样的的Warner Chappell Music发行公司成为旗下的艺术家。
                        </p>
                        <div style={{ fontSize: 12 }}><i className="far fa-heart"></i><span>&nbsp;999+</span></div>
                    </div>
                </div>
            </div>
        )
    }
}