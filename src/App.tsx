import { useState } from 'react'
import './App.css'
import { Card } from './components/Card/Card'

function App() {
  const [diaries, _] = useState([
    {
      id: 1, date: '2024-10-14', weather: 'Sunny', visibility: 'Excelent',
      comment: 'Perfect day for flying. Clear skies and smooth air.'
    },
    {
      id: 2, date: '2024-10-14', weather: 'Sunny', visibility: 'Excelent',
      comment: 'Perfect day for flying. Clear skies and smooth air.'
    },
  ])

  return (
    <div>
      <h1>Flight Diary</h1>
      <button>Add Entry</button>
      {diaries.map(({ date, weather, visibility, comment }) => (
        <Card date={date} weather={weather} visibility={visibility} comment={comment} />
      ))}
    </div>
  )
}

export default App
