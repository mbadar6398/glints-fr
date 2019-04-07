import React, { Component } from 'react';
import CreateTopic from './CreateTopic';
import Topic from './Topic';

class App extends Component {
    render() {
        return(
            <main>
                <section className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <CreateTopic/>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <Topic/>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default App;