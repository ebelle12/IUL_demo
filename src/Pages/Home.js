import React from "react";
import Hero3D from "../Components/Hero3D";

function Home() {
    const headline = "Take Control of Your Financial Future";

    return (
        <div className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: "#000814" }}>

            {/* Shifting Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 animate-gradientShift opacity-20"></div>

            {/* Interactive Grid (glowing dots) */}
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-4 p-8">
                {[...Array(100)].map((_, idx) => (
                    <div key={idx} className="w-1 h-1 bg-blue-600 rounded-full hover:scale-150 hover:animate-glowGrid transition-transform duration-300"></div>
                ))}
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center hero-parallax px-">

                {/* Headline with letter animation */}
                <h1 className="text-5xl md:text-6xl font-extrabold" style={{ color: "#0353a4" }}>
                    {headline.split("").map((letter, index) => (
                        <span key={index} className="animate-letter inline-block" style={{ animationDelay: `${index * 0.05}s` }}>
                            {letter === " " ? "\u00A0" : letter}
                        </span>
                    ))}
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-blue-200 mt-6 opacity-0 animate-fadeInUp">
                    Explore my MVPs for Agents, Clients, and Biblical Financial Literacy.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-wrap justify-center gap-6">
                    <a href="/agents" className="px-8 py-4 bg-[#0466c8] text-white font-semibold rounded hover:bg-blue-700 transition transform hover:scale-105">
                        For Agents
                    </a>
                    <a href="/clients" className="px-8 py-4 bg-[#0466c8] text-white font-semibold rounded hover:bg-blue-700 transition transform hover:scale-105">
                        For Clients
                    </a>
                    <a href="/financial-literacy" className="px-8 py-4 bg-[#0466c8] text-white font-semibold rounded hover:bg-blue-700 transition transform hover:scale-105">
                        Financial Literacy
                    </a>
                </div>

                {/* Hero Image / 3D placeholder */}
                <div className="mt-16 w-60 h-60 bg-blue-800 rounded-xl opacity-80 hover:scale-105 transform transition duration-500">
                    {/* Replace with 3D model or hero visual */}
                </div>

            </div>
        </div>
    );
}

export default Home;


