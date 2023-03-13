import React, {Component} from 'react';
import './Youtube.css';
import ReactPlayer from 'react-player';
const API = 'AIzaSyDF28-EHkxy-IB-96JYFsR3Ras1uSJhF0o'
const channelId = 'UCrYcHTAo4lCo5yPdXosWedQ'
const result = 10
//https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&part=contentDetails&channelId=UCjXfkj5iapKHJrhYfAF9ZGg&key=AIzaSyDF28-EHkxy-IB-96JYFsR3Ras1uSJhF0o

var  finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}`
class Youtube extends Component{

  constructor(props){
    super(props);

    this.state = {
results: []
    };
    this.clicked = this.clicked.bind(this);
  }
  // in usestate -- modifyiable 
  clicked()
  {//console.log("clicked")
  fetch(finalURL)
  .then(response => response.json())
  .then((responseJson) => {
  // console.log(responseJson)
  const results =responseJson.items.map(obj => "https://www.youtube.com/embed/"+ obj.id.videoId  );
  this.setState({results : results});
  console.log(this.state.results)
  })
  .catch(error => {
    console.error(error);
  });

}

    render()
    {
      //console.log(finalURL)
      console.log(this.state.results)

        return (
            
            <div >
                I am from Youtube
                <div>
                <button onClick= {this.clicked} className="youtube_fetch_button">Get Youtube videos</button>
                </div>
                {
                    this.state.results.map((link,i) => {
                        console.log(link);
                
                        // var frame =<div className='Youtube'> <iframe key={i} width="560" height="315" 
                        // src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        // allowFullScreen></iframe></div>
                        // return frame;
                        var frame =<div className='Youtube'> <ReactPlayer url={link} 
                        title="YouTube video player" controls={false} pip ={true} stopOnUnmount={true}/></div>
                        return frame;
                    })
                    
                }
               <iframe width="560" height="315" src="https://www.youtube.com/embed/5ltIwH_JktA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                {this.frame}
            </div>
            
        );
    }
}
export default Youtube;