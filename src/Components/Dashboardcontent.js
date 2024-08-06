import React from "react";
import "./Dashboard.css";
import {
  FaShoppingCart,
  FaCheckCircle,
  FaTimesCircle,
  FaDollarSign,
} from "react-icons/fa";
import CircularProgressBar from "./Circularprogress";
import { GoGoal } from "react-icons/go";
import ActivityChart from "./ActivityChart";
import { PiHamburgerThin } from "react-icons/pi";
import { MdOutlineFoodBank } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Recentorder from "./Recentorder"

const Dashboard = () => {
  const orders = [
    {
      id: 1,
      customer: "Wade Warren",
      orderNo: "15478250",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      id: 2,
      customer: "Jane Cooper",
      orderNo: "48956786",
      amount: "$395.62",
      status: "Delivered",
    },
    {
      id: 3,
      customer: "Guy Hawkins",
      orderNo: "736958215",
      amount: "$45.88",
      status: "Cancelled",
    },
    {
      id: 4,
      customer: "Kristin Watson",
      orderNo: "22906732",
      amount: "$65.00",
      status: "Pending",
    },
    {
      id: 5,
      customer: "Cody Fisher",
      orderNo: "95715290",
      amount: "$854.60",
      status: "Delivered",
    },
    {
      id: 6,
      customer: "Savannah Nguyen",
      orderNo: "73614593",
      amount: "$128.20",
      status: "Delivered",
    },
  ];

  return (
    <div className="main-content ">
      <h4 className="fw-bold"> Dashboard</h4>
      <div className="row mb-4">
        <div className="col-md-3 p-4 col-lg-2 mb-2">
          <div className="card">
            <div className="card-body">
              <div className="icon-wrapper icon-bg-orders">
                <FaShoppingCart size={24} />
              </div>
              <p className="card-title">Total Orders</p>
              <p className="card-text fw-bold h6">75</p>
              <div className="d-flex justify-content-end">
                <IoMdArrowDropup className="text-success" /> <span>3%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-4 col-lg-2 mb-2">
          <div className="card">
            <div className="card-body">
              <div className="icon-wrapper icon-bg-delivered">
                <FaCheckCircle size={24} />
              </div>
              <p className="card-title">Total Delivered</p>
              <p className="card-text fw-bold h6  ">70</p>
              <div className="d-flex justify-content-end">
                <IoMdArrowDropdown className="text-danger" /> <span>3%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-4 col-lg-2 mb-2">
          <div className="card">
            <div className="card-body">
              <FaTimesCircle size={46} className="mb-2" />
              <p className="card-title mt-2">Total Cancelled</p>
              <p className="card-text fw-bold h6">05</p>
              <div className="d-flex justify-content-end">
                <IoMdArrowDropup className="text-success" /> <span>3%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-4 col-lg-2 mb-2">
          <div className="card">
            <div className="card-body">
              <div className="icon-wrapper icon-bg-cancelled">
                <FaTimesCircle size={24} />
              </div>
              <p className="card-title">Total Revenue</p>
              <p className="card-text fw-bold h6">$12k</p>
              <div className="d-flex justify-content-end">
                <IoMdArrowDropdown className="text-danger" /> <span>3%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 p-4 col-md-4 mb-2">
          <div className="card">
            <div className="row ">
              <div className="col-lg-6">
                <div className="card-body">
                  <p className="card-title mb-4">Net Profit</p>
                  <h2 className="card-text  mt-5 fw-bold ">$6759.25</h2>
                  <div className="d-flex justify-content-start  ">
                    <IoMdArrowDropup className="text-success " />{" "}
                    <span>3%</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-5  justify-content-center">
                <CircularProgressBar value={70} />
                <p className="small mt-2">Net-Profit rate Calculated *</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12 p-4 col-md-8 mb-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Activity</h5>
              <div className="d-flex justify-content-end mb-5">
                <select
                  style={{
                    color: "white",
                    backgroundColor: "gray",
                    borderRadius: "10px",
                    padding: "10px",
                    border: "none",
                    outline: "none",
                  }}
                  name=""
                  id=""
                >
                  <option value="" selected>
                    Weekly
                  </option>
                  <option value="">Daily</option>
                  <option value="">Monthly</option>
                </select>
              </div>
              {/* Add your chart component here */}
              <ActivityChart />
            </div>
          </div>
        </div>
        <div className="col-12 p-4 col-md-4 mb-2">
          <div className="card">
            <div className="row ">
              <div className="col-lg-8">
                <div className="card-body">
                  <ul className="ulclassName">
                    <li className="liitem">
                      <GoGoal size={80} className="text-danger" />
                      &nbsp;&nbsp;&nbsp;Goals
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <IoIosArrowDroprightCircle />
                    </li>
                    <li className="liitem">
                      <PiHamburgerThin size={80} className="text-success" />
                      &nbsp;&nbsp;&nbsp;Popular&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <IoIosArrowDroprightCircle />
                    </li>
                    <li className="liitem">
                      <MdOutlineFoodBank size={80} className="text-primary" />
                      &nbsp;&nbsp;&nbsp;Menus&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <IoIosArrowDroprightCircle />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-center"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12 col-md-6 col-lg-8  mb-2">
          <Recentorder/>
          <div className="card">{/* Recent order */}</div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 mb-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Customer's Feedback</h5>
              <div>
                <h6>
                  <img
                    src="https://img.freepik.com/free-vector/cute-koala-hanging-tree-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-8369.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722729600&semt=sph"
                    alt="img1"
                    className="img-fluid imageprofile"
                  />
                  <strong> Jenny Wilson</strong> <br />
                  <br />{" "}
                  <span className="text-warning fs-4 mt-2">
                    {" "}
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                  </span>{" "}
                  <br />{" "}
                  <p className="small mt-3">
                    The food was excellent as was the service. And also Food is
                    Very delicious one and I like it very much and happy very
                    happy ..
                  </p>
                </h6>
                <hr />
                <h6>
                  <img
                    src="https://www.liveabout.com/thmb/LNq3E_Ix8sTtnO-hUFnqI3mlYKo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/powerpuff_girls-56a00bc45f9b58eba4aea61d.jpg"
                    alt="img1"
                    className="img-fluid imageprofile"
                  />
                  <strong> Dianne Russell</strong> <br />
                  <br />
                  <span className="text-warning fs-4 mt-3">
                    {" "}
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                  </span>{" "}
                  <br />
                  <p className="small mt-3">
                    We enjoyed the Eggs Benedict served on...
                  </p>
                </h6>
                <hr />
                <h6>
                  <img
                    src="https://img.freepik.com/free-vector/cute-koala-hanging-tree-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-8369.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722729600&semt=sph"
                    alt="img1"
                    className="img-fluid imageprofile"
                  />
                  <strong> Devon Lane</strong> <br />
                  <br />{" "}
                  <span className="text-warning fs-4 mt-3">
                    {" "}
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </span>{" "}
                  <br />
                  <p className="small mt-3">No matter where we are...</p>
                </h6>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
