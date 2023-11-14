import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

export default function Home() {
  return (
    <Layout>
        <Navbar/>
        <Products />
    </Layout>
  )
}
