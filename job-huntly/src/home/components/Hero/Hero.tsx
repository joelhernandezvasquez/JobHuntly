
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper"
import JobSearch from "@/components/JobSearch/JobSearch";
import PopularSearch from "@/components/PopularSearch/PopularSearch";
import { popularSearch } from "@/helper/data/popularSearchData";
import HeroImage from '../../../assets/TrelloUICollage_4x.webp';
import hero from './hero.module.css';

const Hero = () => {
  return (
    <section className={hero.wrapper}>
      <MaxWidthWrapper>
        <div>
          <h1 className={hero.headline}>
            <span>Discover</span>
            <span>more than</span>
            <span className={hero.subheadline}>5000+ Jobs</span>
          </h1>

          <svg className={hero.graph} xmlns="http://www.w3.org/2000/svg" width="344" height="33" viewBox="0 0 344 33" fill="none">
            <path d="M7.33529 16.5071C10.0286 16.5071 12.8502 16.3386 15.5435 16.1702C16.6978 16.1702 17.7238 16.0017 18.8781 16.0017C23.7517 15.6649 28.6253 15.328 33.499 14.9911C39.3986 14.6542 45.17 14.1489 51.0696 13.812C59.4061 13.1383 67.7426 12.633 76.079 11.9592C78.0028 11.7908 79.9266 11.7908 81.8504 11.6223C86.724 11.2854 91.5977 10.9486 96.4713 10.7801C101.345 10.4432 106.219 10.1064 111.092 9.93793C113.016 9.76949 114.94 9.60106 116.864 9.60106C124.559 9.26418 132.382 8.92729 140.077 8.59041C144.823 8.42197 149.568 8.25354 154.442 7.91666C156.366 7.91666 158.161 7.74821 160.085 7.74821C167.524 7.57977 175.09 7.41134 182.529 7.2429C189.968 7.07446 197.278 6.90602 204.717 6.73758C206.641 6.73758 208.565 6.73758 210.617 6.73758C215.49 6.73758 220.236 6.73758 225.109 6.73758C232.676 6.73758 240.115 6.73758 247.682 6.56914C250.119 6.56914 252.555 6.56914 254.992 6.56914C260.122 6.56914 265.253 6.56914 270.383 6.56914C270.767 6.56914 271.28 6.56914 271.665 6.56914C260.122 6.73758 248.451 6.90602 236.909 7.2429C232.035 7.41134 227.29 7.41134 222.416 7.57978C220.364 7.57978 218.184 7.57977 216.132 7.74821C209.078 7.91665 202.152 8.25353 195.098 8.42197C187.018 8.75885 178.938 8.92729 170.858 9.26417C169.447 9.26417 168.165 9.43261 166.754 9.43261C162.393 9.76949 158.161 9.93793 153.8 10.2748C145.079 10.7801 136.358 11.2854 127.637 11.7908C126.354 11.7908 125.072 11.9592 123.789 12.1276C119.557 12.4645 115.196 12.9698 110.964 13.3067C103.269 13.9805 95.7018 14.6542 88.0066 15.328C85.9545 15.4964 83.7742 15.8333 81.7222 16.0017C76.8485 16.5071 71.9749 17.0124 67.1013 17.6861C60.9451 18.3599 54.6607 19.0337 48.5046 19.7074C39.9116 20.7181 31.1904 21.7287 22.5974 22.7393C20.5454 22.9078 18.4933 23.2446 16.313 23.4131C12.5937 23.9184 8.87433 24.4237 5.15498 24.929C4.77023 24.929 4.38547 25.2659 4.38547 25.9397C4.38547 26.445 4.77023 26.9503 5.15498 26.9503C6.56577 26.9503 7.8483 27.1188 9.25909 27.1188C9.13084 27.6241 9.00258 28.1294 9.00258 28.6347C9.00258 30.4876 10.1569 32.1719 11.6959 32.1719C22.3409 31.3297 32.8577 30.3191 43.5027 29.6453C52.7369 29.14 61.9712 28.4663 71.2054 27.9609C81.3374 27.2872 91.5977 26.6134 101.73 26.1081C104.936 25.9397 108.142 25.7712 111.349 25.4344C112.246 25.4344 113.144 25.2659 114.17 25.2659C130.587 24.7606 147.003 24.0868 163.419 23.5815C172.141 23.2446 180.99 22.9078 189.711 22.7393C192.918 22.5709 195.996 22.5709 199.202 22.4025C216.003 22.0656 232.804 21.7287 249.606 21.3918C256.788 21.2234 263.97 21.0549 271.152 20.8865C277.308 20.7181 283.464 20.7181 289.621 20.3812C294.751 20.2127 299.753 19.8759 304.883 19.7074C307.448 19.539 310.013 19.539 312.45 19.3705C318.221 18.8652 323.992 18.3599 329.764 17.8546C329.379 18.5283 329.379 19.539 329.507 20.2127C329.636 21.0549 330.02 21.7287 330.662 22.0656C331.175 22.4024 331.944 22.7393 332.457 22.4025C333.74 21.7287 335.022 21.0549 336.177 20.3812C336.177 20.3812 336.177 20.3812 336.048 20.3812C336.177 20.3812 336.177 20.2127 336.305 20.2127C336.433 20.2127 336.561 20.0443 336.561 20.0443H336.433C337.074 19.7074 337.716 19.3705 338.485 18.8652C339.126 18.5283 339.896 18.023 340.537 17.6861C341.307 17.1808 341.948 16.6755 342.717 16.1702C343.487 15.6649 344 14.3174 344 13.1383C344 12.4645 343.872 11.9592 343.615 11.2855C343.359 10.6117 342.717 9.7695 342.076 9.60106C341.435 9.43262 340.794 9.26417 340.152 9.26417C340.024 9.26417 339.896 9.26417 339.768 9.26417C339.383 9.26417 338.87 9.26417 338.485 9.43261C337.459 9.60105 336.561 9.76949 335.535 9.76949C334.766 9.76949 333.996 9.93793 333.098 9.93793C330.918 10.1064 328.866 10.2748 326.686 10.6117C326.173 10.6117 325.532 10.7801 325.019 10.7801C325.275 10.4432 325.403 10.1064 325.403 9.76949C325.532 9.43262 325.532 9.09574 325.532 8.75886C325.532 8.59042 325.532 8.25354 325.66 8.0851C325.66 7.74822 325.66 7.41134 325.532 7.2429C325.532 7.2429 325.66 7.24291 325.66 7.07447C326.045 6.73759 326.429 6.4007 326.686 5.72694C326.942 5.22163 327.071 4.54787 327.071 3.87411C327.071 3.20036 326.942 2.69504 326.686 2.02128C326.558 1.85284 326.429 1.51596 326.301 1.34752C325.916 0.842202 325.532 0.673763 325.147 0.505324C324.377 0.168445 323.479 0 322.582 0C321.812 0 321.171 0 320.401 0C319.375 0 318.349 0 317.323 0C315.913 0 314.373 0 312.963 0C309.115 0 305.268 0 301.42 0C297.829 0 294.109 0 290.518 0C287.184 0 283.977 0 280.643 0C267.433 0 254.351 0.168447 241.141 0.336887C231.265 0.505326 221.39 0.67376 211.514 0.67376C207.154 0.67376 202.665 0.842195 198.304 1.01063C188.429 1.34751 178.553 1.51595 168.678 1.85283C165.856 1.85283 163.035 2.02128 160.213 2.02128C158.546 2.02128 157.007 2.18972 155.34 2.18972C145.592 2.69504 135.845 3.20036 126.098 3.70568C123.148 3.87412 120.198 4.04255 117.12 4.21099C115.453 4.21099 113.785 4.37943 112.118 4.54787C102.371 5.22163 92.7519 5.89538 83.0047 6.56914C78.0028 6.90602 73.0009 7.24289 67.9991 7.74821C59.4061 8.42197 50.8131 9.09573 42.3484 9.93793C34.9097 10.6117 27.471 11.117 20.0324 11.6223C18.8781 11.7908 17.7238 11.7908 16.4413 11.9592C14.5175 12.1276 12.5937 12.1276 10.6699 12.2961C9.00258 12.4645 7.33529 12.4645 5.53975 12.4645C5.41149 11.9592 4.89848 11.4539 4.51372 11.4539C3.35944 11.6223 2.33342 11.7908 1.17914 11.9592C0.666124 11.9592 0.153111 12.2961 0.0248574 13.1383C-0.103396 13.9805 0.281363 14.8227 0.794376 14.9911C1.30739 15.1596 1.69215 15.328 2.20516 15.4964C2.71817 15.6649 3.10294 15.6649 3.61595 15.6649C4.89848 16.3386 6.05276 16.3386 7.33529 16.5071ZM307.448 10.9486C308.987 10.9486 310.654 10.9486 312.193 10.9486C312.321 11.4539 312.578 11.7908 312.834 12.1276C312.193 12.1276 311.552 12.2961 311.039 12.2961C309.885 12.2961 308.73 12.4645 307.576 12.4645C302.446 12.633 297.444 12.9698 292.314 13.1383C290.005 13.3067 287.697 13.4752 285.388 13.4752C281.797 13.4752 278.078 13.6436 274.487 13.6436C266.15 13.812 257.942 13.9805 249.606 14.1489C233.446 14.4858 217.414 14.8227 201.254 15.1596C189.711 15.328 178.169 15.8333 166.626 16.3386C149.312 17.0124 131.869 17.5177 114.555 18.1915C111.092 18.3599 107.629 18.5283 104.166 18.8652C94.291 19.539 84.4155 20.0443 74.54 20.7181C64.921 21.3918 55.1737 21.8971 45.5547 22.5709C44.657 22.5709 43.7592 22.7393 42.8614 22.7393C45.4265 22.4025 48.1198 22.234 50.6849 21.8971C59.7909 21.0549 68.8968 20.0443 78.0028 19.2021C81.2091 18.8652 84.4155 18.5283 87.4936 18.1915C89.1609 18.023 90.8281 17.8546 92.3672 17.8546C101.858 17.1808 111.349 16.3386 120.839 15.6649C122.635 15.4964 124.559 15.328 126.354 15.1596C129.048 14.9911 131.741 14.8227 134.306 14.8227C144.053 14.3174 153.8 13.812 163.548 13.3067C165.728 13.1383 167.908 13.1383 169.96 12.9698C170.473 12.9698 171.115 12.9698 171.628 12.9698C173.167 12.9698 174.706 12.9698 176.117 12.8014C185.864 12.4645 195.739 12.2961 205.487 11.9592C209.975 11.7908 214.464 11.6223 218.953 11.6223C233.446 11.4539 248.067 11.2854 262.559 11.117C277.821 11.117 292.699 11.117 307.448 10.9486Z" fill="#26A4FF" />
          </svg>

          <p className={hero.hero_lead_text}>
            Great platform for the job seeker that
            searching for new career heights and passionate about startups.
          </p>

          <JobSearch />

          <PopularSearch popularSearch={popularSearch}/>
          <Image
           className={hero.hero_image}
           src={HeroImage}
           width={300}
           height={300}
           alt="job search illustration"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero