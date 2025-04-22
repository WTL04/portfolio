import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import './ProjectCarousel.css';

export default function ProjectCarousel() {
  return (
    <div className="project-section">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        centeredSlides={true}
        centerInsufficientSlides={true}
        initialSlide={2}
        spaceBetween={5}
        slidesPerView={1} // ✅ default (mobile)
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        <SwiperSlide>
          <a
            href="https://github.com/bbrxnd/Heart2Heart"
            target="_blank"
            rel="noopener noreferrer"
            className="project-box"
          >
            <picture>
              <source srcSet="/images/heart2heart.webp" type="image/webp" />
              <img src="/images/heart2heart.png" alt="Heart2Heart" />
            </picture>
            <h4>Heart2Heart</h4>
            <h5>
              <em>NextJS, Tailwind, Fast API</em>
            </h5>
            <p>
              Heart2Heart is an all-in-one fullstack web application to assist those with heart diseases/conditions.
            </p>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://github.com/WTL04/Mind-Controlled"
            target="_blank"
            rel="noopener noreferrer"
            className="project-box"
          >
            <picture>
              <img src="/images/MindControlled_Demo.gif" alt="Mind-Controlled" />
            </picture>
            <h4>Mind=Controlled</h4>
            <h5>
              <em>Python, OpenCV, SpeechRecognition</em>
            </h5>
            <p>
              A hands-free accessibility-based Python application. Tracks user's head movement and voice for a seamless desktop experience.
            </p>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://github.com/SaraVaseem/RoseHack2025"
            target="_blank"
            rel="noopener noreferrer"
            className="project-box"
          >
            <picture>
              <source srcSet="/images/webp/floppy-fish.webp" type="image/webp" />
              <img src="/images/floppy-fish.png" alt="ReaDatPaper" />
            </picture>
            <h4>ReaDatPaper</h4>
            <h5>
              <em>NextJS, Tailwind, Flask</em>
            </h5>
            <p>
              Fullstack application that summarizes and stores research articles in one place.
            </p>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://github.com/WTL04/Unity_SuperTicTacToe"
            target="_blank"
            rel="noopener noreferrer"
            className="project-box"
          >
            <picture>
              <source srcSet="/images/webp/floppy-fish.webp" type="image/webp" />
              <img src="/images/github.png" alt="Super Tic Tac Toe" />
            </picture>
            <h4>Super Tic Tac Toe</h4>
            <h5>
              <em>Unity, C#</em>
            </h5>
            <p>
              Unity 2D game based on the popular game Tic Tac Toe, with a twist. Currently available as an Android APK package.
            </p>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://github.com/WTL04/Maze-game-"
            target="_blank"
            rel="noopener noreferrer"
            className="project-box"
          >
            <picture>
              <source srcSet="/images/webp/floppy-fish.webp" type="image/webp" />
              <img src="/images/github.png" alt="Maze Game" />
            </picture>
            <h4>Maze Game</h4>
            <h5>
              <em>Python, Pygame</em>
            </h5>
            <p>
              Simple Python game based on the popular horror game: "Scary Maze Game".
            </p>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

