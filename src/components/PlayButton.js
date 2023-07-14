import './PlayButton.css'

function PlayButton({children,onPlay,onPause}){
    let playing = false; //Don't use this aaporach
    function handleClick(e){
        console.log(e)
        e.stopPropagation()

        
        if(playing)onPause()
        else onPlay();

        playing = !playing;
    }
    return(
        <button type="button" onClick={handleClick} >{children}: {playing?'>':'||'}</button>
    )
}
export default PlayButton;