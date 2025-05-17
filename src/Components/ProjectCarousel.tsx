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
              <source srcSet="/portfolio/images/heart2heart.webp" type="image/webp" />
              <img src="/portfolio/images/heart2heart.png" alt="Heart2Heart" />
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
              <img src="/portfolio/images/MindControlled_Demo.gif" alt="Mind-Controlled" />
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
            href="https://github.com/WTL04/Emotion-Recognition-App"
            target="_blank"
            rel="noopener noreferrer"
            className="project-box"
          >
            <picture>
              <source srcSet="/portfolio/images/CNN.webp" type="image/webp" />
              <img src="/images/CNN.png" alt="CNN" />
            </picture>
            <h4>Real-time Emotion Recognition App</h4>
            <h5>
              <em>Python, PyTorch, OpenCV</em>
            </h5>
            <p>
              CNN Model trained on FER2013 Frontal Face Dataset. Test accuracy of 71% currently.
            </p>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://github.com/WTL04/Transformer-Decoder-Model"
            target="_blank"
            rel="noopener noreferrer"
            className="project-box"
          >
            <picture>
              <source srcSet="/portfolio/images/transformer_output.webp" type="image/webp" />
              <img src="/images/transformer_output.png" alt="Transformer Decoder" />
            </picture>
            <h4>Transformer Decoder Model</h4>
            <h5>
              <em>Python, PyTorch, Jupyter Notebook, Google Colab</em>
            </h5>
            <p>
              Character-level GPT-Style decoder-only Transformer model. Implmented Multiheaded Masked Attention from scratch. Trained on Romeo and Juliet as a dataset.
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
              <source srcSet="/portfolio/images/webp/floppy-fish.webp" type="image/webp" />
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

      </Swiper>
    </div >
  );
}

