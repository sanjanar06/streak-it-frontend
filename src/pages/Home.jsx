import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <div>
      Home
      <Button onClick={() => window.location.href = '/streaks/about'}>Click me</Button>
    </div>
  )
}

export default Home