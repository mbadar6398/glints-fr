import React, { Component } from 'react';

class Form extends Component {
    render() {
        return(
            <div className="card">
                <div className="card__header">
                    <h4 className="card__header__title">Create Topic</h4>
                </div>
                <div className="card__body">
                    <textarea maxLength="255" placeholder="Write something..."></textarea>
                </div>
                <div className="card__footer">
                <div className="card__footer__maxchar">
                    <p><span>255</span> Characters left</p>
                </div>
                <div className="card__footer__btn-group">
                    <button className="btn btn--danger">Submit</button>
                </div>
            </div>
            </div>
        )
    }
}

export default Form;