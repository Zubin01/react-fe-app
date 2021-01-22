import React, {Component} from 'react';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <p>
            <img className="Avatar"
                 src={props.user.avatarUrl}
                 alt={props.user.name}
            />
        </p>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img
                    className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
            <div className="container">
                Extracted data from props   <Avatar user={props.author} />
                Extracted data from props   <Avatar user={props.author.name} />
                Extracted data from props   <Avatar user={props.text} />
                Extracted data from props   <Avatar user={props.date} />
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};


export class Welcome extends Component {
    render() {
        return (
            <div>
                Inside welcome component
                <Comment
                    date={comment.date}
                    text={comment.text}
                    author={comment.author}
                />
            </div>
        );
    }
}
// export default Welcome;
