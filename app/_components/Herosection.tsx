import Image from 'next/image'
import React from 'react'

const Herosection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat">
      <Image
        alt="hero"
        src="/hero.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-white/50 from-white/70 to-white/10 ltr:bg-gradient-to-r rtl:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us get your job done 
            <strong className="block font-extrabold text-rose-700">With ease</strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            This is a powerful and user-friendly tool designed to help you precisely trim your audio files with ease. Whether you're a podcaster looking to remove unwanted segments, a musician perfecting your tracks, or simply someone who needs to edit audio for any purpose, our Audio Trimmer is the perfect solution.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center sm:text-left">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection
