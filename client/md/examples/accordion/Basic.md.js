const md = `import React from 'react'
import Accordion from '../../components/Accordion'

const titleStyle = { margin: 0, cursor: 'pointer', padding: 15, background: '#fff' }
const contentStyle = { margin: '0 5px', padding: 15, lineHeight: '1.2em', background: 'rgb(250,237,208)' }
const Panel = ({ children, ...rest }) => (
    <Accordion.Panel
        className='lime-card'
        style={titleStyle}
        {...rest}
    >
        <p className='lime-card' style={contentStyle}>
            {children}
        </p>
    </Accordion.Panel>
)

export default class Basic extends React.Component {
    render() {
        return (
            <div style={{}}>
                <Accordion defaultActiveKey='3'>
                    <Panel eventKey='1' title='苏格拉底'>
                        <p>
                            苏格拉底（希腊语：Σωκράτης英语：Socrates）（公元前469年～公元前399年），古希腊著名的思想家、哲学家、教育家、公民陪审员。
                        </p>
                        <p>
                            苏格拉底和他的学生柏拉图，以及柏拉图的学生亚里士多德并称为“古希腊三贤”，被后人广泛地认为是西方哲学的奠基者。
                        </p>
                        <p>
                            身为雅典的公民，据记载苏格拉底最后被雅典法庭以侮辱雅典神、引进新神论和腐蚀雅典青年思想之罪名判处死刑。尽管苏格拉底曾获得逃亡的机会，但他仍选择饮下毒槿汁而死，因为他认为逃亡只会进一步破坏雅典法律的权威。
                        </p>
                    </Panel>
                    <Panel eventKey='2' title='柏拉图'>
                        <p>
                            柏拉图（Plato，Πλάτeων， 公元前427年—公元前347年），古希腊伟大的哲学家，也是全部西方哲学乃至整个西方文化最伟大的哲学家和思想家之一。
                        </p>
                        <p>
                            他和老师苏格拉底，学生亚里士多德并称为希腊三贤。另有其创造或发展的概念包括：柏拉图思想、柏拉图主义、柏拉图式爱情等。柏拉图的主要作品为对话录，其中绝大部分对话都有苏格拉底出场。但学术界普遍认为，其中的苏格拉底形象并不完全是历史上的苏格拉底。
                        </p>
                    </Panel>
                    <Panel eventKey='3' title='亚里士多德'>
                        <p>
                            亚里士多德（Aristotle公元前384～前322），古代先哲，古希腊人，世界古代史上伟大的哲学家、科学家和教育家之一，堪称希腊哲学的集大成者。他是柏拉图的学生，亚历山大的老师。
                        </p>
                        <p>
                            公元前335年，他在雅典办了一所叫吕克昂的学校，被称为逍遥学派。马克思曾称亚里士多德是古希腊哲学家中最博学的人物，恩格斯称他是“古代的黑格尔”。
                        </p>
                        <p>
                            作为一位百科全书式的科学家，他几乎对每个学科都做出了贡献。他的写作涉及伦理学、形而上学、心理学、经济学、神学、政治学、修辞学、自然科学、教育学、诗歌、风俗，以及雅典法律。亚里士多德的著作构建了西方哲学的第一个广泛系统，包含道德、美学、逻辑和科学、政治和玄学。
                        </p>
                    </Panel>
                </Accordion>
            </div>
        )
    }
}`
export default md
