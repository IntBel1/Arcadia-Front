import React, { useRef, useEffect } from 'react';
import './HomeSlider.css'

const HomeSlider = () => {
    const videoRefs = [useRef(null), useRef(null), useRef(null)];
    let currentVideoIndex = null;
  
    const handleHover = (index) => {
      if (currentVideoIndex !== null && currentVideoIndex !== index) {
        const prevVideo = videoRefs[currentVideoIndex].current;
        if (prevVideo) {
          prevVideo.pause();
          prevVideo.currentTime = 0;
        }
      }
  
      if (videoRefs[index].current) {
        videoRefs[index].current.play().catch(error => {
          console.error("Video playback failed: ", error);
        });
        currentVideoIndex = index;
      }
    };

    const addHoverEffect = (cardRef, imageClass, videoIndex) => {
        cardRef.current.addEventListener('mouseenter', () => {
          const image = document.querySelector(imageClass);
          if (image) {
            image.classList.add('jingle-animation');
          }
          if (videoRefs[videoIndex]?.current) {
            videoRefs[videoIndex].current.play().catch(error => {
              console.error("Video playback failed: ", error);
            });
            currentVideoIndex = videoIndex;
          }
        });
    
        cardRef.current.addEventListener('mouseleave', () => {
          const image = document.querySelector(imageClass);
          if (image) {
            image.classList.remove('jingle-animation');
          }
          if (videoRefs[videoIndex]?.current) {
            videoRefs[videoIndex].current.pause();
            videoRefs[videoIndex].current.currentTime = 0;
            currentVideoIndex = null;
          }
        });
      };
    
      useEffect(() => {
        addHoverEffect(videoRefs[0], '.imageToe1', 0);
        addHoverEffect(videoRefs[2], '.imageToe2', 2);
        addHoverEffect(videoRefs[1], '.imageToe3', 1);
      }, []);

  return (
    <div className='homeSliderMain'> 
        <h1 className='titleH1'>LEARN MORE ABOUT US</h1>
        <p className='titleP'>Below are some typical species in our zoo:</p>
        <div className='homeSlider'>
        <div className='card1' onMouseEnter={() => handleHover(0)} onMouseLeave={() => {
            if (videoRefs[0].current) {
                videoRefs[0].current.pause();
                videoRefs[0].current.currentTime = 0;
            }
            currentVideoIndex = null;
            }}
        >
            <div className='inside'>
                <video ref={videoRefs[0]} src='Bengal Tiger.mp4' className='vid' loop muted></video>
                <div className='vidContent'>
                    <h1>Bengal Tiger</h1>
                    <p>Care about this giant cat ? Lets take a look about it.</p>
                </div>
            </div>
        </div>
        <div className='card2' onMouseEnter={() => handleHover(2)} onMouseLeave={() => {
            if (videoRefs[2].current) {
                videoRefs[2].current.pause();
                videoRefs[2].current.currentTime = 0;
            }
            currentVideoIndex = null;
            }}
        >
            <div className='inside'>
                <video ref={videoRefs[2]} src='Leopard.mp4' className='vid' loop muted></video>
                <div className='vidContent'>
                    <h1>Leopard</h1>
                    <p>Interting in our zoo family members ? Why dont you look for more ?</p>
                </div>
            </div>
        </div>
        <div className='card3' onMouseEnter={() => handleHover(1)} onMouseLeave={() => {
            if (videoRefs[1].current) {
                videoRefs[1].current.pause();
                videoRefs[1].current.currentTime = 0;
            }
            currentVideoIndex = null;
            }}
        >
            <div className='inside'>
                <video ref={videoRefs[1]} src='Asian Elephant.mp4' className='vid' loop muted></video>
                <div className='vidContent'>
                    <h1>Asian Elephant</h1>
                    <p>Want to know more about our cute elephants friend ?</p>
                </div>
            </div>
        </div>
        </div>
        <a href='/animals' className='titleA'>Find out more animals {'>>>'}</a>
    </div>
  )
}

export default HomeSlider