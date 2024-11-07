/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Label,
} from "recharts";

// Sample data for the area chart
const data = [
  {
    name: "27/10/2024",
    "Membership Plan 2": 3,
  },
  {
    name: "29/10/2024",
    "Membership Plan 2": 2,
  },
  {
    name: "31/10/2024",
    "Membership Plan 2": 3,
  },
  {
    name: "02/11/2024",
    "Membership Plan 2": 3,
  },
  {
    name: "4/11/2024",
    "Membership Plan 2": 4,
  },
  {
    name: "6/11/2024",
    "Membership Plan 2": 3,
  },
  {
    name: "08/11/2024",
    "Membership Plan 2": 2,
  },
];

// Sample data for the table
const getRandomDate = () => {
  const start = new Date("2024-10-27");
  const end = new Date("2024-11-08");
  const randomTime =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const randomDate = new Date(randomTime);

  // Format the date as DD/MM/YYYY
  const day = String(randomDate.getDate()).padStart(2, "0");
  const month = String(randomDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = randomDate.getFullYear();

  return `${day}/${month}/${year}`;
};

const tableData = [
  {
    username: "thanhhoang93",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "baongoc_87",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "honghanh1203",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "linhnguyen.vn",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "duypham_hn",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "nguyentuan_99",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "hongson85",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "kimanh_ha",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  { 
    username: "lebao92", 
    deposit: "+25,000", 
    date: getRandomDate(), 
    plan: "2" 
  }, 
  {
    username: "minhthu2304",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "vanhung_qn",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "haianh1995",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "nguyenduong99",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "lehoang.hcm",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "tramy2802",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "phucnguyen_98",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "tuyettrinh85",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "nguyenkhoi.bh",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "thanhlam_hue",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
  {
    username: "yenphuong_qn",
    deposit: "+25,000",
    date: getRandomDate(),
    plan: "2",
  }, // plan=2
];

const RevenueReport = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of rows per page
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  // Calculate the data for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = tableData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="card-body">
      <div className="card-header pt-0" style={{ marginBottom: 30 }}>
        <h4 className="card-title">Revenue Chart</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 10, bottom: 20 }}
              >
                <Legend verticalAlign="top" height={36} />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name">
                  <Label
                    value="Ngày mua"
                    offset={-10}
                    position="insideBottom"
                  />
                </XAxis>
                <YAxis
                  label={{
                    value: "Số lượng gói mua",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Membership Plan 1"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="Membership Plan 2"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
                <Area
                  type="monotone"
                  dataKey="Membership Plan 3"
                  stackId="1"
                  stroke="#ffc658"
                  fill="#ffc658"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="col-lg-4">
            <div className="card budget-widget">
              <div className="budget-widget-details">
                <h6>Total transactions</h6>
                <ul className="budget-profiles">
                  <li
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h5>Total memberships registered: </h5>
                    <h5 style={{ fontWeight: 700 }}>20</h5>
                  </li>
                  <li
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h5>Total</h5>
                    <h5 style={{ fontWeight: 700 }}>500,000</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 50 }} />
      <div className="card-header pt-0" style={{ marginBottom: 30 }}>
        <h4 className="card-title">Fluctuations</h4>
      </div>
      <div className="table-responsive">
        <table className="table mb-0">
          <thead>
            <tr>
              <th>Username</th>
              <th>Deposit</th>
              <th>Date</th>
              <th>Membership Plan</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.username}</td>
                <td>{entry.deposit}</td>
                <td>{entry.date}</td>
                <td>{entry.plan}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">
                <ul className="pagination mb-4">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      Previous
                    </a>
                  </li>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      key={index + 1}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <a
                        className="page-link"
                        href="#"
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default RevenueReport;
