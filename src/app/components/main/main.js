import React from 'react'
import NewsLetter from './newsletter'
import UpdateCard from './update_Card'
import ThemeToggler from '../themeToggler'
import MainSection from './main_section'
import NewsLetterUpdates from './newsletter_updates'

export default function Main() {
  return (
    <main className='container h-fit p-8 flex flex-col gap-8 justify-center items-center'>
        <NewsLetter />
        <UpdateCard />
        <MainSection />
        <NewsLetterUpdates />
        <ThemeToggler />
    </main>
  )
}
