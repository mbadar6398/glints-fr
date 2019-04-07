import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
    render() {
        return(
            <main>
                <section className="container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <Form/>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default App;