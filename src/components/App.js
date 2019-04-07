import React, { Component } from 'react';
import CreateTopic from './CreateTopic';

class App extends Component {
    render() {
        return(
            <main>
                <section className="container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <CreateTopic/>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default App;