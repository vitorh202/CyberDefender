'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './AppBar.module.css';
import Image from 'next/image';

const AUDIO_URL = '/music.mp3';

const Appbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAudio(new Audio(AUDIO_URL));
    }
  }, []);

  const togglePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.appBar}>
      {/* Linha superior */}
      <div className={styles.line}>
        <div className={styles.lineGradient}></div>
      </div>

      <div className="flex w-full items-center justify-center px-4 relative">
        {/* Botão hambúrguer só aparece no mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-[#15fc9e] focus:outline-none"
        >
          ☰
        </button>

        {/* Menu */}
        <div
            className={`
              ${styles.navLinks}
              ${isMenuOpen ? 'flex' : 'hidden'}
              flex-col md:flex md:flex-row 
              absolute md:relative top-full items-center
              w-full md:w-auto p-2 md:p-0 
              bg-black md:bg-transparent z-50
              transition-all duration-300 ${isMenuOpen ? 'border border-[#15fc9e] rounded-lg md:border-0' : ''}
            `}
          >
          <Link href="/"><span>Início</span></Link>
          <Link href="/jogar"><span>Jogar</span></Link>
          <Link href="/sobre"><span>Sobre</span></Link>
          <Link href="/aprenda"><span>Aprenda</span></Link>
          <Link href="/creditos"><span>Créditos</span></Link> 

          <button onClick={togglePlayPause} className="md:ml-4">
            {isPlaying ? (
              <Image
                src="/pause.png" 
                alt="Pause"
                width={32}
                height={32}
                className="hover:scale-110 transition-transform"
              />
            ) : (
              <Image
                src="/play.png" 
                alt="Play"
                width={32}
                height={32}
                className="hover:scale-110 transition-transform"
              />
            )}
          </button>
        </div>
      </div>

      {/* Linha inferior */}
      <div className={styles.line}>
        <div className={styles.lineGradient}></div>
      </div>
    </nav>
  );
};

export default Appbar;