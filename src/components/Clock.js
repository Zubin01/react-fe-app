import React, {Component} from 'react';

export class ClockComponent extends React.Component {
    constructor(props) {
        super(props);
        let year = new Date().getFullYear();
        this.state = {date: new Date(), isToggleOn: true,posts: [],
            comments: []};
        this.handleClick = this.handleClick.bind(this);
        this.addState = this.addState.bind(this);
    }

    addState(){
        let timeArr = this.state.date;
        timeArr.push(this.state.date);
        this.setState({cars: timeArr});
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
            date: new Date(),
        }))
        // this.setState({ timeArr: [...this.state.timeArr] })
        // console.log('timeArr', typeof this.state.timeArr)
        // this.state.timeArr.push()
        // console.log('state.isToggleOn', this.state.isToggleOn)
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // example = () => {
    //     return (
    //         <input
    //             onFocus={(e) => {
    //                 console.log('Focused on input');
    //             }}
    //             placeholder="onFocus is triggered when you click this input."
    //         />
    //     )
    // }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <div className="container">
                    {this.example}
                    <input
                        onFocus={(e) => {
                            console.log('Focused on input');
                        }}
                        placeholder="onFocus is triggered when you click this input."
                    />
                    <input
                        onBlur={(e) => {
                            console.log('Triggered because this input lost focus');
                        }}
                        placeholder="onBlur is triggered when you click this input and then you click outside of it."
                    />
                </div>
            </div>
        );
    }
}
