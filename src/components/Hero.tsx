import LogoIcon from './Logo';
import EkoPoseA from './EkoPoseA';

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col">
      <svg
        className="absolute inset-0 w-full h-full block"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1728 2592"
        preserveAspectRatio="xMidYMid slice"
      >
        <g id="Layer_3">
          <rect className="fill-c-pink" y=".52" width="1728" height="2591.48" />
          <path
            className="fill-c-green"
            d="M1603.09.52h124.91s0,2591.48,0,2591.48h-145.89s-105.19-650.77-59.16-921.33c46.03-270.56,82.2-625.14,42.83-867.55-39.36-242.41,15.57-508.4,37.32-802.6Z"
          />
          <path
            className="fill-c-yellow"
            d="M458.94,0H11.22s0,2592,0,2592h200.62s88.34-265.56,55.89-535.09c-32.45-269.53-72.13-536.75-44.39-778.24,27.75-241.49,166.68-214.43,168.07-608.38C392.81,276.35,474.27,293.07,458.94,0Z"
          />
          <path
            className="fill-c-beige"
            d="M226.16,0H.5s0,2592,0,2592h66.32s53.53-658.68,32.61-928.21c-20.92-269.53-18.05-357.18-.15-598.67,17.89-241.49,83.25-214.43,84.15-608.38C184.32,62.8,236.04,293.07,226.16,0Z"
          />
        </g>
      </svg>
      <div className="w-full flex flex-col items-center justify-center grow gap-2">
        <h1 className="sr-only text-black">Cafeko</h1>
        <div className="flex items-end justify-center">
          <EkoPoseA
            className="h-16 md:h-32 w-auto -mr-3 relative z-10 overflow-visible"
            blobClassName="fill-c-beige"
            charClassName="fill-c-orange"
          />
          <LogoIcon className="fill-c-orange h-20 md:h-38 w-auto relative z-0" />
        </div>
        <h2 className="text-c-orange z-10 text-lg md:text-2xl">Site under construction...</h2>
        <a
          href="https://www.instagram.com/cafeko.us"
          target="_blank"
          rel="noreferrer"
          className="text-c-orange z-10 text-base md:text-lg flex items-center justify-center gap-2"
        >
          <i className="fa-brands fa-instagram text-c-orange z-10 text-2xl"></i>
          <span className='underline'>Follow us on Instagram</span>
        </a>
      </div>
    </div>
  );
}