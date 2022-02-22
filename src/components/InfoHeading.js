import React, { Component } from 'react';

export default class InfoHeading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classWrapper: this.props.classWrapper,
      title: this.props.title,
      badge: this.props.badge,
      descrpt: this.props.descrpt,
    };
  }

  render() {
    return (
      // if no classWrapper is passed, then it will be default
      <div className={`heading column ${this.state.classWrapper ? this.state.classWrapper : ''}`}>
        {this.state.badge && (
          <div className='badge'>
            <span className='text'>{this.state.badge}</span>
          </div>
        )}
        {this.state.title && <div className='title my-6'>{this.state.title}</div>}
        {this.state.descrpt && <div className='description'>{this.state.descrpt}</div>}
      </div>
    )
  }
}