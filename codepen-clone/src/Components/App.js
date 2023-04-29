import Editor from './Editor'
import { DataContext } from './DataProvider'
import { useContext } from 'react'
import Result from './Result'


function App() {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext)
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Editor
          value={html}
          onChange={setHtml}
          mode={'xml'}
        />


        <Editor
          value={css}
          onChange={setCss}
          mode={'css'}
        />

        <Editor
          value={js}
          onChange={setJs}
          mode={'javascript'}
        />
      </div>

      <Result />
    </>
  )
}


export default App