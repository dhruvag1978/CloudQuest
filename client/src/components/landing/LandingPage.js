import React from 'react'
import Features from './Features'

const LandingPage = ({ visible }) => {
    if (visible)
        return (
            <section className="relative my-36">
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
                    <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                                <stop stopColor="#FFF" offset="0%" />
                                <stop stopColor="#EAEAEA" offset="77.402%" />
                                <stop stopColor="#DFDFDF" offset="100%" />
                            </linearGradient>
                        </defs>
                        <g fill="url(#illustration-01)" fillRule="evenodd">
                            <circle cx="1232" cy="128" r="128" />
                            <circle cx="155" cy="443" r="64" />
                        </g>
                    </svg>
                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                        <div className="text-center pb-12 md:pb-16">
                            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" >We Innovate <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Learning Processes</span></h1>
                            <div className="max-w-3xl mx-auto">
                                <p className="text-xl text-gray-600 mb-8" >Start, switch, or advance your career with more than 5,400 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default LandingPage