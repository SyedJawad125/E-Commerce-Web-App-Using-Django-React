import React from 'react'
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Adminpage = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };
  return (
    <div  style={{ marginLeft: '200px' }}>
    <div class="about-section" >
            <h1>Welcom To Admin Page</h1>
            <h4>Admin can Add, Read, Update and Delete the all data in the site</h4>
            <p>This is E-Commerce site which have many products forsale to our valuable clients and fullfill their requirements</p>
            </div>

         <Content>
          <Dashboard>
            <Card>
              <h2>Sales Overview</h2>
              <Bar data={data} />
            </Card>
            <Card>
              <h2>Recent Orders</h2>
              <Table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>001</td>
                    <td>John Doe</td>
                    <td>Shipped</td>
                    <td>$150.00</td>
                  </tr>
                  <tr>
                    <td>002</td>
                    <td>Jane Smith</td>
                    <td>Processing</td>
                    <td>$200.00</td>
                  </tr>
                  <tr>
                    <td>003</td>
                    <td>Jane Smith</td>
                    <td>Processing</td>
                    <td>$250.00</td>
                  </tr>
                  <tr>
                    <td>004</td>
                    <td>Jane Smith</td>
                    <td>Processing</td>
                    <td>$250.00</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Dashboard>
        </Content>
        </div>

  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #4CAF50;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

const UserProfile = styled.div`
  cursor: pointer;
`;

const Main = styled.main`
  display: flex;
  flex: 1;
`;

const Sidebar = styled.nav`
  width: 200px;
  background-color: #f4f4f4;
  padding: 1rem;
`;

const NavItem = styled.div`
  margin: 1rem 0;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f8f8f8;
`;

const Dashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const Card = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: white;
  }

  tr:nth-child(even) {
    background-color: #5A72A0;
  }
    tr:nth-child(odd) {
    background-color: #758694;
  }
`;

const Footer = styled.footer`
  padding: 1rem;
  background-color: #4CAF50;
  color: white;
  text-align: center;
`;
export default Adminpage