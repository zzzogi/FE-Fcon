/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "09/5/2024",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "10/5/2024",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "11/5/2024",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "12/5/2024",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "13/5/2024",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "14/5/2024",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "15/5/2024",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const RevenueReport = () => {
  return (
    <div class="card-body">
      <div class="card-header pt-0" style={{ marginBottom: 30 }}>
        <h4 class="card-title">Biểu đồ doanh thu</h4>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <AreaChart
              width={700}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <AreaChart
                type="monotone"
                dataKey="amt"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </div>
          <div class="col-lg-4">
            <div class="card budget-widget">
              <div class="budget-widget-details">
                <h6>Thông số trong tuần</h6>
                <ul class="budget-profiles">
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h5>Số người dùng đăng ký gói</h5>
                    <h5 style={{ fontWeight: 700 }}>32</h5>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h5>Số người dùng huỷ đăng ký</h5>
                    <h5 style={{ fontWeight: 700 }}>3</h5>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h5>Tổng doanh thu</h5>
                    <h5 style={{ fontWeight: 700 }}>$497,60</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 50 }} />
      <div class="card-header pt-0" style={{ marginBottom: 30 }}>
        <h4 class="card-title">Biến động</h4>
      </div>
      <div class="table-responsive">
        <table class="table mb-0">
          <thead>
            <tr>
              <th>Username</th>
              <th>Deposit</th>
              <th>Date</th>
              <th>Membership Package</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>+19,98$</td>
              <td>12 May 2024</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Mary Moe</td>
              <td>+29,98$</td>
              <td>11 May 2024</td>
              <td>3</td>
            </tr>
            <tr>
              <td>July Dooley</td>
              <td>+29,98$</td>
              <td>11 May 2024</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Monkey Donkey</td>
              <td>+9,98$</td>
              <td>11 May 2024</td>
              <td>1</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <div style={{ paddingBottom: "32px" }}>
                <ul class="pagination mb-4">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">
                      2 <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default RevenueReport;
