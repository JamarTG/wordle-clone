import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Grid from './components/Grid'
import React from 'react'

const client = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <Grid />
      </QueryClientProvider>

    </>
  )
}

export default App
