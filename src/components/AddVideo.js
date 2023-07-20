import './AddVideo.css'

function AddVideo({video, setVideos}){

    function handleSumbit(e){
        e.preventDefault();
        setVideos([...video, {
            id : video.length+1,
            title : "Demo Tutorial", 
            channel:"Code With Harry", 
            views:"1.1M",
            time:"1 year ago",
            verified :false
            }])
    }
    function handleChange(e){
        console.log(e.target.name , e.target.value);
        setVideos([...video, {
           [ e.target.name ]: e.target.value
        } 
        ])
        
    }
    return(
        <form>
            <input type="text" name='title' onChange={handleChange} value={video.title} placeholder='title'/>
            <input type="text" name='views' onChange={handleChange} value={video.views} placeholder='views'/>
        <button onClick={handleSumbit}>Add Videos</button>
        </form>
    )
}
export default AddVideo;