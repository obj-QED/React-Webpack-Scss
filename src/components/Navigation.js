import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Nav'

// Layout
import { Layout } from './Layout'

// PAGE
import Home from '../pages/Home/HomePage'
import NotFound from '../template/404'

export default class Navigation extends React.Component {
  render() {
    return (
      <Router
        render={({ location }) => {
          if (location.pathname !== '/') return <Navbar />
        }}
      >
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    )
  }
}