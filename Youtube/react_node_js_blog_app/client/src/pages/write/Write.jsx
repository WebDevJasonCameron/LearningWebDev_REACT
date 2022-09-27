import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img 
        className="writeImg"
        src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
        alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="writeIcon fa-solid fa-plus"></i>
          </label>
          <input 
            type="file" 
            id="fileInput" 
            style={{display:"none"}} />
          <input 
            type="text" 
            placeholder="Title" 
            className="writeInput"
            autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea 
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText">
          </textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
