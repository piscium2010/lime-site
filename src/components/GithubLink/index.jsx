import React from 'react';

export default class GithubLink extends React.Component {
    render() {
        return (
            <a href='https://github.com/piscium2010/lime' target='_blank'>
                <i className="fab fa-github" style={{ fontSize: 30, lineHeight: '50px' }}></i>
            </a>
        )
    }
}