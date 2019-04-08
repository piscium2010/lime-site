import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import '@piscium2010/lime/lime.css'

const src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554395938337&di=0a5d717409d8c7d981454b931503745f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F277b6ade2be0c587ff4402caf3f3965de3b4d0902a7d9-a89yhE_fw658'

export default class Pure extends React.Component {
    render() {
        return (
            <div className='lime-raised' style={{ width: 400 }}>
                <img src={src} style={{ width: '100%', height: 300, overflow: 'hidden', background: 'rgba(0,0,0,.6)' }} alt="jay zhou" />
                <div style={{ padding: 15 }}>
                    <p style={{ lineHeight: '1.2em', padding: 0 }}>
                        专辑的第一主打《夜曲》，是专辑当中最早完成的作品，由淡淡吉他声及简单节奏做开场，引导人们逐渐走进这个心碎的场景，这首歌曲描述主角为了怀念逝去的恋人，仍然选择用弹奏萧邦夜曲的方式，纪念已死去的爱情，那带着悲伤气味，让人感受到一丝凄美的氛围.
                        </p>
                    <div style={{ fontSize: 12 }}><i className="far fa-heart"></i><span>&nbsp;999+</span></div>
                </div>
            </div>
        )
    }
}