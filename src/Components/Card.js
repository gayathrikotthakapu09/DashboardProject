import React from 'react'

const Card = () => {
    
  return (
    <div className='text-white'>
     <div className='container-fluid'>
        <div className="row">
            <div className="col-lg-1 col-12">
                <div className="card bg-secondary">
                    <div>
                    <i class="bi bi-basket-fill bg-primary text-white"></i>
                    </div>
               
                    <div className="card-body">
                        <p className="card-title small">Total Orders</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-2 col-12">
                <div className="card">
                    <div className="card-body">
                        <p className="card-title">Total Delivery</p>
                    </div>
                </div>
            </div>


            <div className="col-lg-2 col-12">
                <div className="card">
                    <div className="card-body">
                        <p className="card-title">Total Cancelled</p>
                    </div>
                </div>
            </div>


            <div className="col-lg-2 col-12">
                <div className="card">
                    <div className="card-body">
                        <p className="card-title">Total Revenue</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-12">
                <div className="card">
                    <div className="card-body">
                        <p className="card-title">Card title</p>
                    </div>
                </div>
            </div>










        </div>

     </div>
    </div>
  )
}

export default Card
