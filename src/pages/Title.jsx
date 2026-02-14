import React, { useState, useEffect, Children } from 'react';
import './App.css'; 

export function Title ({num,title,children}) {
  return (
    <div>

    
    <div className="section-card">
    <div className="section-header">
      <span className="section-num">{num}</span>
      <span className="section-title">{title}</span>
    </div>
    <span>{children}</span>
    </div>
    </div>
  );
}
