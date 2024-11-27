import React, { useEffect, useState, useRef } from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import './assets/styles/global.scss'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from './components/elements/Header'
import About from './components/elements/About'
import Skills from './components/elements/Skills'
import Experience from './components/elements/Experience'
import Projects from './components/elements/Projects'
import Contact from './components/elements/Contact'
import PreLoadIntro from './components/Shape/PreLoadIntro'
import Navbar from './components/Shape/Navbar'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function App() {
  const [activeElement, setActiveElement] = useState('header')
  const appRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const handleDarkLight = () => {
    appRef.current?.classList.toggle('light-mode')
  }

  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.2 })
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.6 })
  const { ref: skillRef, inView: skillInView } = useInView({ threshold: 0.5 })
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.2
  })
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.5
  })
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.6
  })

  useEffect(() => {
    if (headerInView) {
      setActiveElement('header')
    }
    if (aboutInView) {
      setActiveElement('about')
    }
    if (skillInView) {
      setActiveElement('skill')
    }
    if (experienceInView) {
      setActiveElement('experience')
    }
    if (projectsInView) {
      setActiveElement('projects')
    }
    if (contactInView) {
      setActiveElement('contact')
    }
  }, [
    aboutInView,
    contactInView,
    experienceInView,
    headerInView,
    projectsInView,
    skillInView
  ])

  useEffect(() => {
    const preLoad = () => {
      setTimeout(() => {
        setLoading(false)
      }, 4200)
    }
    preLoad()
  }, [])

  useEffect(() => {
    if (!loading) {
      if (cursorRef !== null) {
        const cursorEvnet = (e: any) => {
          cursorRef?.current?.setAttribute(
            'style',
            'top: ' + (e.clientY - 5) + 'px; left: ' + (e.clientX - 5) + 'px;'
          )
        }
        document.addEventListener('mousemove', cursorEvnet)

        document.addEventListener('click', () => {
          cursorRef?.current?.classList.add('expand')

          setTimeout(() => {
            cursorRef?.current?.classList.remove('expand')
          }, 200)
        })

        const cursorSmall = document.querySelectorAll('.cursor_small')
        const onMouseMoveSmall = () => {
          cursorSmall.forEach((item) => {
            item.addEventListener('mousemove', () => {
              return cursorRef?.current?.classList.add('small')
            })
            item.addEventListener('mouseout', () => {
              return cursorRef?.current?.classList.remove('small')
            })
          })
        }
        return onMouseMoveSmall()
      }
    }
  }, [loading])

  return (
    <motion.div ref={appRef} className='App'>
      <DefaultLayout aciveNavbar={activeElement}>
        {loading ? (
          <PreLoadIntro />
        ) : (
          <>
            <div
              className='dark-light cursor_small'
              onClick={() => handleDarkLight()}
            >
              <svg
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='1.5'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' />
              </svg>
            </div>
            <Header targetRef={headerRef} />
            <About activeElement={activeElement} targetRef={aboutRef} />
            <Skills activeElement={activeElement} targetRef={skillRef} />
            <Experience
              activeElement={activeElement}
              targetRef={experienceRef}
            />
            <Projects activeElement={activeElement} targetRef={projectsRef} />
            <Contact activeElement={activeElement} targetRef={contactRef} />
            <div ref={cursorRef} className='cursor'>
              <div></div>
            </div>
            <Navbar activeLink={activeElement} />
          </>
        )}
      </DefaultLayout>
    </motion.div>
  )
}

export default App
