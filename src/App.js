import './App.css';
import Video from './components/Video'
function App(){
  let obj = {
    title : "Node Js Tutorial", 
    channel:"Apna College", 
    views:"1.1M",
    time:"1 year ago"
  }
  return(
    <div className='App'>
      <div style={{color:'white'}}>Videos</div>
      <Video title = "React Js Tutorial" channel="CoderDost" views="100k" time="6 Month ago"></Video>
      <Video {...obj}></Video>
      <Video title = "Data Structure and Algorithm" channel="Apna College" views="50k" time="1 month ago" ></Video>
    </div>
  )

}

export default App;
