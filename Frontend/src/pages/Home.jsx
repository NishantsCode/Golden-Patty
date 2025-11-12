import React from 'react'
import Hero from '../Components/Hero/Hero'
import Title from '../Components/Title/Title'
import About from '../Components/About/About'
import Middle from '../Components/Middle/Middle'
import Menu from '../Components/Menu/Menu'
import Banner from '../Components/Promotion/Promotion'
import Contact from '../Components/Cont/Contact'

const Home = ({ onAddToCart }) => {
  return (
    <>
      <Hero />
      <section style={{ background: 'var(--lighter-bg)' }}>
        <Title 
          title='Why People Love Us' 
          subTitle='Fresh ingredients, made-to-order burgers, and a place where everyone feels welcome'
        />
      </section>
      <section id="about" style={{ background: 'var(--lighter-bg)', padding: '2rem 0' }}>
        <div className="container">
          <About />
        </div>
      </section>
      <Middle />
      <Menu onAddToCart={onAddToCart} />
      <div id="promotions">
        <Banner />
      </div>
      <section id="contact" style={{ background: 'var(--lighter-bg)', padding: '2rem 0' }}>
        <div className="container">
          <Title title='Contact Us'/> 
          <Contact />
        </div>
      </section>
    </>
  )
}

export default Home
