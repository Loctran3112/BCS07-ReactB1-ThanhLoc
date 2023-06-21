import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className='container p-0'>
        <div className='row mt-5 justify-content-between align-content-center'>
            <div className='col-lg-6 col-xxl-4 mb-5'>
                <div className='card bg-light border-0 h-100 p-5 text-center'>
                    <div className='feature text-white rounded-3 mb-4 w-25'><i className="fa-solid fa-layer-group fs-1"></i></div>
                    <div className="card-body p-0">
                        <h4 className="card-title fw-bolder">Fresh new layout</h4>
                        <p className="card-text">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-xxl-4 mb-5'>
                <div className='card bg-light border-0 h-100 p-5 text-center'>
                    <div className='feature text-white rounded-3 mb-4 w-25'><i className="fa-solid fa-cloud-arrow-down fs-1"></i></div>
                    <div className="card-body p-0">
                        <h4 className="card-title fw-bolder">Free to download</h4>
                        <p className="card-text">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-xxl-4 mb-5'>
                <div className='card bg-light border-0 h-100 p-5 text-center'>
                <div className='feature text-white rounded-3 mb-4 w-25'><i className="fa-solid fa-address-card fs-1"></i></div>
                    <div className="card-body p-0">
                        <h4 className="card-title fw-bolder">Jumbotron hero header</h4>
                        <p className="card-text">The heroic part of this template is the jumbotron hero header!</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-xxl-4 mb-5'>
                <div className='card bg-light border-0 h-100 p-5 text-center'>
                    <div className='feature text-white rounded-3 mb-4 w-25'><i className="fa-brands fa-blogger-b fs-1"></i></div>
                    <div className="card-body p-0">
                        <h4 className="card-title fw-bolder">Feature boxes</h4>
                        <p className="card-text">We've created some custom feature boxes using Bootstrap icons!</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-xxl-4 mb-5'>
                <div className='card bg-light border-0 h-100 p-5 text-center'>
                    <div className='feature text-white rounded-3 mb-4 w-25'><i className="fa-solid fa-code fs-1"></i></div>
                    <div className="card-body p-0">
                        <h4 className="card-title fw-bolder">Simple clean code</h4>
                        <p className="card-text">We keep our dependencies up to date and squash bugs as they come!</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-xxl-4 mb-5'>
                <div className='card bg-light border-0 h-100 p-5 text-center'>
                    <div className='feature text-white rounded-3 mb-4 w-25'><i className="fa-solid fa-circle-check  fs-1"></i></div>
                    <div className="card-body p-0 ">
                        <h4 className="card-title fw-bolder">A name you trust</h4>
                        <p className="card-text">Start Bootstrap has been the leader in free Bootstrap templates since 2013!!</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
