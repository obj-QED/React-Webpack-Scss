import React, { Component } from 'react';

class InfoHeading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classWrapper: this.props.classWrapper,
            title: this.props.title,
            badge: this.props.badge,
            descrpt: this.props.descrpt
        }
    }
    // TODO: you can enable any changes or features in the component
    componentDidMount() {
        const { uppercase, slice, replace } = this.props;
        if (uppercase) this.setState({ title: this.state.title.toUpperCase() });
        if (slice)
            this.setState({
                title: this.state.title.slice(slice[0], slice[1])
            });
        if (replace)
            this.setState({
                title: this.state.title.replace(replace[0], replace[1])
            });
    }

    render() {
        return (
            <div className={`heading text-center column ${this.state.classWrapper}`} >
                {this.state.badge &&
                    <div className="badge">
                        <span className="text">
                            {this.state.badge}
                        </span>
                    </div>
                }
                {this.state.title &&
                    <div className="title my-6">
                        {this.state.title}
                    </div>
                }
                {this.state.descrpt &&
                    <div className="description">
                        { this.state.descrpt }
                    </div>
                }
            </div>
        );
    }
}

export default InfoHeading;