import React, {useState, useEffect} from 'react'

import '../styles/Carousel.css'

type Props = {}

const images: string[] = [
  './resources/matthew-grad.JPG',
  './resources/matthew-tennis-action-shot.JPG',
  './resources/bw-champs.JPEG',
  './resources/team-photo.JPG',
  './resources/matthew-sushi.JPG',
  './resources/matthew-surfing.jpg',
  './resources/xmas.JPG',
  './resources/grandma.JPG',
  './resources/grandpa.jpg'
]

const imageAltStrings: string[] = [
  'Matthew graduation photo',
  'Matthew action shot',
  'Big West Conference champions',
  '2023-2024 UCI men\'s tennis team',
  'Matthew with sushi platter',
  'Matthew surfing',
  'Family at christmas',
  'Matthew and grandma',
  'Matthew and grandpa'
]

const captions: string[] = [
  'Graduation in June, 2023',
  'Competing at the 2023 Big West Conference Championships',
  'Big West Conference Champions for the first time in 11 years',
  '2023-2024 UCI men\'s tennis team',
  'Eyeing some sushi in Penang, Malaysia',
  'Learning how to surf in Bali, Indonesia',
  'Christmas with the family',
  'Visited Grandma in Singapore',
  'Eating good food with Grandpa'
]

const Carousel = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetTimer();
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    resetTimer();
  };

  const resetTimer = () => {
    setTimer(0);
  };

  // Update the timer every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000);
  
    // Clear the interval when the component is unmounted or on cleanup
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timer >= 3) {
      nextImage();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer])

  return (
    <div className='portfolio--carousel'>
      <img src={images[currentIndex]} alt={imageAltStrings[currentIndex]} className='portfolio--carousel-current-image'></img>
      <h4 className='portfolio--carousel-current-image-caption'>{captions[currentIndex]}</h4>
      <button onClick={prevImage} className='nav-button left'>&lt;</button>
      <button onClick={nextImage} className='nav-button right'>&gt;</button>
    </div>
  )
}

export default Carousel