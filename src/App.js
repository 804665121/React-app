import React from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
import Layout from './pages/Layout'
import CookbooK from './pages/cookbook/Cookbook'
function App() {
  return (
    <div className="App">
      <CookbooK></CookbooK>
      <Layout> </Layout>
    </div>
  );
}

export default App;
