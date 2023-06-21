import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
        <section className='mt-5'>
      <div className='container text-center bg-light p-5'>
        <h1 className='fw-bold pt-5 fs-1'>A warm welcome!</h1>
        <p className='fs-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been <br/> removed from the framework. Why create custom CSS when you can use utilities?</p>
        <button className='btn btn-primary mb-5 fs-4'>Call to action</button>
      </div>
        </section>

    )
  }
}
