import './App.css';
import PlayButton from './components/PlayButton';
import Video from './components/Video'
import videos from './data/data';
function App() {

  return (
    <div className='App' onClick={()=>console.log('App')}>
      <div style={{ color: 'white' }}>Videos</div>
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
    </div>
  );

}

export default App;
