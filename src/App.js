import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import PlayButton from './components/PlayButton';
import Video from './components/Video'
import videoDB from './data/data';
function App() {
    const [videos,setVideos] = useState(videoDB)
  return (
    <div className='App' onClick={()=>console.log('App')}>
      <div style={{ color: 'white' }} onClick={()=>
        setVideos([...videos,{
          id : videos.length+1,
          title : "Demo Tutorial", 
          channel:"Code With Harry", 
          views:"1.1M",
          time:"1 year ago",
          verified :false
        }])
      }>
        <button>Add Videos</button>
      </div>
      {
        videos.map(video => <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
           onPlay={() => console.log('Playing...',video.title)} 
           onPause={() => console.log('Paused.', video.title)}
           >
            {video.title}
          </PlayButton>
        </Video>)
      }
      <div style={{ clear: 'both' }}>
        {/* <PlayButton message="Pause-btn" onclick={()=>alert('Pause button was click')}>Pause</PlayButton> */}
      </div>
      <div>
        <Counter></Counter>
      </div>
    </div>
  );

}

export default App;
