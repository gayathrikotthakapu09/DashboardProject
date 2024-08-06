import React from 'react'
import './Recentorder.css'


const Recentorder = () => {
  const orders = [
    {
      id: 1,
      customer: 'Wade Warren',
      img: 'https://www.euroschoolindia.com/wp-content/uploads/2023/08/cartoons-for-kids.jpg',
      orderNo: '15478250',
      amount: '$124.00',
      status: 'Delivered',
      statusClass: 'bg-success',
    },
    {
      id: 2,
      customer: 'Jeno Cooper',
      img: 'https://img.freepik.com/free-vector/cute-student-cartoon-character_1308-133976.jpg',
      orderNo: '45957828',
      amount: '$335.62',
      status: 'Delivered',
      statusClass: 'bg-success',
    },
    {
      id: 3,
      customer: 'Guy Hawkins',
      img: 'https://img.freepik.com/premium-vector/cute-girl-cartoon-character_1639-50352.jpg',
      orderNo: '78958215',
      amount: '$45.88',
      status: 'Cancelled',
      statusClass: 'bg-danger',
    },
    {
      id: 4,
      customer: 'Kristin Watson',
      img: 'https://cn.i.cdn.ti-platform.com/content/2302/pokemon/showpage/za/pokemon_icon_cms.ec3b1bb3.png',
      orderNo: '22896232',
      amount: '$65.00',
      status: 'Pending',
      statusClass: 'bg-warning',
    },
    {
      id: 5,
      customer: 'Cocy Fisher',
      img: 'https://i.pinimg.com/736x/09/24/a7/0924a7ef295741e916c8f42512bbe5bd.jpg',
      orderNo: '95715290',
      amount: '$545.00',
      status: 'Delivered',
      statusClass: 'bg-success',
    },
    {
      id: 6,
      customer: 'Savannah Nguyen',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPzAOB6d0BxKBBN7Kr5fCEwML4vGslJXX2w&s',
      orderNo: '73614563',
      amount: '$128.20',
      status: 'Delivered',
      statusClass: 'bg-success',
    },
  ];
      
  return (
    <div className="card recent-orders-card">
      <div className="card-header">
        <h5 className="card-title">Recent Orders</h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-borderless custom-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Order No.</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={order.img} alt={order.customer} className="rounded-circle me-2" width="40" height="40" />
                      {order.customer}
                    </div>
                  </td>
                  <td>{order.orderNo}</td>
                  <td>{order.amount}</td>
                  <td>
                    <span className={`badge ${order.statusClass}`}>{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Recentorder
