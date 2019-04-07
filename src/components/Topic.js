import React, { Component } from 'react';

class Topic extends Component {
    render() {
        return(
            <div className="card">
                <div className="card__header">
                    <h4 className="card__header__title">What is Lorem Ipsum?</h4>
                </div>
                <div className="card__body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <div className="card__footer">
                    <div className="card__footer__text">
                        <p>Vote this topic with pressing thumb up or down button</p>
                    </div>
                    <div className="card__footer__btn-group">
                        <button className="btn btn--success">Po</button>
                        <button className="btn btn--danger">Po</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Topic;