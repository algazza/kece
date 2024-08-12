import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import NewsTemplate from '../Components/NewsTemplate'
import { DataBerita } from '../data/user'

const IsiNews = () => {
  return (
    <>
        <Header/>
        <NewsTemplate NewsBeritaLengkap={DataBerita.IsiBerita}/>
        <Footer/>
    </>
  )
}

export default IsiNews