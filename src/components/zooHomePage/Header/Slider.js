import './Slider.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




const Slider = () => {
    return (
        <div className='container-slide'>
            <div>
                <div >
                <img src='home1.png' alt="" className='home'></img>
                </div>
                <div className='description0'> 
                <div>
                        <h1>See Nature In Its  <span>Wildlife</span></h1>
                        <a href='/animals' className='btn1'>See detail</a>
                    </div>
                </div>
              </div>
        </div>
    )
}

export default Slider

