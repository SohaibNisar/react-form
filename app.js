import React, { Component } from 'react';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            level: '',
            product: [],
        }
    }

    handleChange = (e) => {
        let value = e.target.value;
        let nam = e.target.name;
        let product = this.state.product;
        let index = product.indexOf(value);
        
        index > -1 ? product.splice(index, 1) : product = [...product, value];
        this.setState({
            [nam]: (nam === 'product' ? product : value),
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert('Name: ' + this.state.name + '\nPhone: ' + this.state.phone + '\nEmail: ' + this.state.email + '\nLevel: ' + this.state.level + '\nProducts: ' + this.state.product);
    }

    render() {
        return (
            <div className='container-fluid px-5 py-3'>
                <form>
                    <div>
                        <div className="form-group mb-2">
                            <label>Name</label>
                            <input type="text" className="form-control" name='name' placeholder="Enter Name" onChange={this.handleChange} />
                        </div>
                        <div className="form-group mb-2">
                            <label>Phone</label>
                            <input type="text" className="form-control" name='phone' placeholder="Enter Phone" onChange={this.handleChange} />
                        </div>
                        <div className="form-group mb-2">
                            <label>Email Address</label>
                            <input type="email" className="form-control" name='email' placeholder="Enter Email" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6' onChange={this.handleChange}>
                            <h5 className='my-2'>SELECT SOFTWARE PRODUCTS:</h5>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name='product' value='Microsoft Office' />
                                <label className="form-check-label">Microsoft Office</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name='product' value='QuickBooks Pro' />
                                <label className="form-check-label">QuickBooks Pro</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name='product' value='Peachtdee Accounting' />
                                <label className="form-check-label">Peachtdee Accounting</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name='product' value='Adobe Photoshop' />
                                <label className="form-check-label">Adobe Photoshop</label>
                            </div>
                        </div>

                        <div className='col-md-6' >
                            <h5 className='my-2'>WHAT IS YOUR CURRENT LEVEL?</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="level" value="Beginner" onChange={this.handleChange} />
                                <label className="form-check-label">Beginner</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="level" value="Intermediate" onChange={this.handleChange} />
                                <label className="form-check-label">Intermediate</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="level" value="Advanced" onChange={this.handleChange} />
                                <label className="form-check-label">Advanced</label>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3" onClick={this.handleSubmit}>Submit</button>
                </form>

                <section className='border-top border-info mt-3 py-3'>
                    <div>
                        <h6>Name: {this.state.name}</h6>
                        <h6>Phone: {this.state.phone}</h6>
                        <h6>Email Address: {this.state.email}</h6>
                    </div>
                    <div>
                        <h5 className='my-4'>YOUR CURRENT LEVEL</h5>
                        <h6>Level: {this.state.level}</h6>
                    </div>
                    <div>
                        <h5 className='my-4'>SOFTWARE PRODUCTS</h5>
                        {this.state.product.map((v, i) => <h6 key={i}>Product {i + 1}: {v}</h6>)}
                    </div>
                </section>
            </div>
        )
    }
}

export default App;