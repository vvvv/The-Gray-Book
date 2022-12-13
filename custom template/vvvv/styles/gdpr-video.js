gdprVideo();

function gdprVideo() {

    /**
     * Based on:
     * DSGVO Video Embed, v1.1.0
     * (c) 2021 Arndt von Lucadou
     * MIT License
     * https://github.com/a-v-l/dsgvo-video-embed
     */
  
    const youtube = `<div id="youtubeBlocker">
    <h1>Embedded YouTube Video</h1>
    <div class="text">When playing the video, you accept the <a href="https://www.youtube.com/privacy" target="_blank">YouTube privacy policy</a>.</div>  
    <div class="buttons">
      <div class="playButton">
      </div>
      <input type="checkbox" name="rememberchoice" value="true" checked="checked"><label for="rememberchoice">Always</label>
    </div>
    <div class="video-link">
      <a href="https://youtu.be/%id%" rel="noopener" target="_blank" title="Open YouTube">Watch on YouTube</a>
    </div>
    </div>`;
  
    const vimeo = `<div id="vimeoBlocker">
    <h1>Embedded Vimeo Video</h1>
    <div class="text">When playing the video, you accept the <a href="https://vimeo.com/privacy" target="_blank">Vimeo privacy policy</a>.</div>  
    <div class="buttons">
      <div class="playButton">
      </div>
      <input type="checkbox" name="rememberchoice" value="true" checked="checked"><label for="rememberchoice">Always</label>
    </div>
    <div class="video-link">
      <a href="https://vimeo.com/%id%" rel="noopener" target="_blank" title="Open vimeo">Watch on Vimeo</a>
    </div>
    </div>`;
  
    var text = {
        youtube: youtube,
        vimeo: vimeo
    };
  
    window.video_iframes = [];
    const videosEnabled = localStorage.getItem('videosEnabled');
  
    if (videosEnabled == "true")
    {
        const frames = document.getElementsByTagName('iframe');
        for (const f of frames)
        {
          if ("data-src" in f.dataset) {
            f.src=f.dataset.src;
            f.removeAttribute('data-src');
          }
        }
        return;
    }
  
    var video_frame, wall, video_platform, video_src, video_id;
    for (var i = 0; i <= window.frames.length - 1; i += 1) {
        video_frame = document.getElementsByTagName('iframe')[0];
        video_src = video_frame.src || video_frame.dataset.src;
        // Only process video iframes [youtube|vimeo]
        if (video_src.match(/youtube|vimeo/) == null) {
            continue;
        }
  
        window.video_iframes.push(video_frame);
        wall = document.createElement('article');
  
        // Prevent iframes from loading remote content
  
        const frame = window.frames[0] || window.frames;
  
        if (!!video_frame.src) {
            if (typeof (frame.stop) === 'undefined') {
                setTimeout(function () {
                  frame.execCommand('Stop');
                }, 1000);
            } else {
                setTimeout(function () {
                  frame.stop();
                }, 1000);
            }
        }
  
        video_platform = video_src.match(/vimeo/) == null ? 'youtube' : 'vimeo';
        video_id = video_src.match(/(embed|video)\/([^?\s]*)/)[2];
        wall.setAttribute('class', 'video-wall embed-responsive-item text-center');
        wall.setAttribute('data-index', i);
  
        wall.innerHTML = text[video_platform].replace(/\%id\%/g, video_id);
        video_frame.parentNode.replaceChild(wall, video_frame);
        document.querySelectorAll('.video-wall .playButton')[i].addEventListener('click', function () {
            if (this.parentNode.querySelector('input[name="rememberchoice"]').checked)
            {
                localStorage.setItem('videosEnabled', 'true');
                playAllVideos();
            }
            else
            {
                playVideo(this.parentNode.parentNode);
            }    
        }, false);
    }
  
    function playVideo(video_frame)
    {
        index = video_frame.dataset.index || 0;
        if (!!window.video_iframes[index].dataset.src) {
          window.video_iframes[index].src = window.video_iframes[index].dataset.src;
          window.video_iframes[index].removeAttribute('data-src');
        }
        window.video_iframes[index].src = window.video_iframes[index].src.replace(/www\.youtube\.com/, 'www.youtube-nocookie.com');
        video_frame.parentNode.replaceChild(window.video_iframes[index], video_frame); 
    }
  
    function playAllVideos()
    {
        document.querySelectorAll('.video-wall .playButton').forEach (el =>{
            playVideo(el.parentNode.parentNode);
        })
    }
  };