'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css';

import Image from 'next/image';
import Link from "next/link";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-[#D75A4A]">30%</span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">Paket Sayur Asem</a>
            </h1>

            <p>Paket komplit sayur asem segar, siap masak dengan rasa asam segar khas rumahan.</p>

            <Link href="/shop-details/21" className="inline-flex font-medium text-white text-custom-sm rounded-md bg-green-dark py-3 px-9 ease-out duration-200 hover:bg-[#1A693A] mt-10">
              Belanja Sekarang!
            </Link>
          </div>

          <div>
            <Image src="/images/hero/sayur_asem_hero_01.png" alt="headphone" width={351} height={358} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-[#D75A4A]">30%</span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">Paket Sayur Sop</a>
            </h1>

            <p>Paket lengkap sayur segar untuk masak sayur sop praktis, sehat, dan hemat waktu.</p>

            <Link href="/shop-details/22" className="inline-flex font-medium text-white text-custom-sm rounded-md bg-green-dark py-3 px-9 ease-out duration-200 hover:bg-[#1A693A] mt-10">
              Belanja Sekarang!
            </Link>
          </div>

          <div>
            <Image src="/images/hero/sayur_sop_hero_01.png" alt="headphone" width={351} height={358} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
