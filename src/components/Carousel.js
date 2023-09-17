import React, { useState } from 'react'
import styles from './Carousel.module.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Carousel = (props) => {
const [slide, setSlide] = useState(0);
const changeSlide = () => {
    setSlide((curr) => {
        if (curr == props.data.length - 1) {
            return 0;
        } else {
            return curr + 1
        }
    })
}

const prevSlide = () => {
    setSlide((curr) => {
        if (curr == 0) {
            return props.data.length -1;
        } else {
            return curr -1
        }
    })
}
    console.log(props.data)
  return (

    <div className={styles.carousel}>
        <span className={styles.indicators}>
            {props.data.map((_, idx) => {
                return <button key={idx} onClick={() => {
                    setSlide(idx);
                }} className={slide == idx ? styles.indicator : `${styles.indicator} ${styles.indicatorInactive}`}></button>
            })}
        </span>
        <FontAwesomeIcon onClick={prevSlide} icon={faArrowLeft}  className={`${styles.arrow} ${styles.arrowLeft}`} />
        {props.data.map((item, idx)=> {
            return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? styles.slide : `${styles.slideHidden} ${styles.slide}`    } />
        })}
        <FontAwesomeIcon onClick={changeSlide} icon={faArrowRight} className={`${styles.arrow} ${styles.arrowRight}`} />
    </div>
  )
}

export default Carousel