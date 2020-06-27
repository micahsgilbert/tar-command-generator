import React, {useState} from "react"
import "./App.css"

const App = () => {

  const [operation, setOperation] = useState("")
  const [verbose, setVerbose] = useState("")
  const [compType, setCompType] = useState("")
  const [infile, setInfile] = useState("")
  const [infile2, setInfile2] = useState("")
  const [secondFileType, setSecondFileType] = useState("-")

  const toggleVerbose = () => {
    console.log('fff')
    if (verbose === "v") {
      setVerbose("")
    } else {
      setVerbose("v")
    }
  }

  return (
  <div id="app">
    <div id="text-field-container">
      <span id="text-field">
        tar <span className="operation">{operation}</span><span className="verbose">{verbose}</span><span className="comp-type">{compType}</span><span style={{color: "#d6443a"}}>f </span><span className="infile">{infile}</span> <span className="infile-2">{infile2}</span>
      </span>
    </div>
    <div id="options">
      <div id="operation-select" className="select">
        <h3>Operation</h3>
        <input type="radio" id="create" name="operation" onClick={() => {setOperation("c"); setSecondFileType("Input Files")}}></input>
        <label htmlFor="create">Create</label><br />
        <input type="radio" id="extract" name="operation" onClick={() => {setOperation("x"); setSecondFileType("Output Directory")}}></input>
        <label htmlFor="extract">Extract</label><br />
        <input type="radio" id="append" name="operation" onClick={() => {setOperation("r");setSecondFileType("Input File")}}></input>
        <label htmlFor="append">Append</label><br />
        <input type="radio" id="list" name="operation" onClick={() => {setOperation("t");setSecondFileType("-");setInfile2("")}}></input>
        <label htmlFor="list">List Contents</label><br />
      </div>
      <div id="verbose-select" className="select">
        <h3>Verbose</h3>
        <div id="verbose-checkbox" className={verbose} onClick={toggleVerbose}></div>
      </div>
      <div id="comp-type-select" className="select">
        <h3>Compression Type</h3>
        <input type="radio" id="none" name="compression" onClick={() => setCompType("")}></input>
        <label htmlFor="none">None</label><br />
        <input type="radio" id="gz" name="compression" onClick={() => setCompType("z")}></input>
        <label htmlFor="gz">Gzip (.tar.gz)</label><br />
        <input type="radio" id="bz2" name="compression" onClick={() => setCompType("j")}></input>
        <label htmlFor="bz2">Bzip2 (.tar.bz2)</label><br />
      </div>
      <div id="infile-select" className="select">
        <h3>Tar File</h3>
        <input className="file-input" value={infile} onChange={e => setInfile(e.target.value)}></input>
      </div>
      <div id="outfile-select" className="select">
        <h3>{secondFileType}</h3>
        <input className="file-input" value={infile2} disabled={secondFileType==="-" ? "disabled" : ""} onChange={e => setInfile2(e.target.value)}></input>
      </div>
    </div>
  </div>)
}

export default App