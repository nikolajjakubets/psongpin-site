import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Content } from '../components/common'
import WorksGrid from '../components/WorksGrid'

import imgStratus from '../images/stratus.png'
import img630 from '../images/630.png'
import imgBg from '../images/bg.png'

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 50px;
  text-align: center;
`

const works = [
  { name: 'Status Gas', img: imgStratus, link: 'http://stratusgas.com/' },
  { name: '6:30 Partners', img: img630, link: 'http://6-30partners.com/' },
  { name: 'Brightgreen', img: imgBg, link: 'https://brightgreen.com/' },
]

const Works = () => (
  <Layout>
    <SEO title="Works" />
    <Content>
      <Heading>Here are some of my published works!</Heading>
      <WorksGrid works={works} />
    </Content>
  </Layout>
)

export default Works