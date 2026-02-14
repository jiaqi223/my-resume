import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>404</h1>
    <p>哎呀，页面走丢了</p>
    <Link to="/" style={{ color: '#007bff' }}>回到首页</Link>
  </div>
);

export default NotFound;