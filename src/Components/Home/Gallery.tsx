import React, { useState } from "react";
import { LayoutGrid } from "../ui/layout-grid";
import { Calendar, Users, Trophy, Zap, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const allCards = [
    {
      id: 1,
      content: (
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2">Tech Tactics</h3>
          <p className="text-sm opacity-80">Strategic coding challenges</p>
          <div className="flex items-center mt-2">
            <Trophy className="w-4 h-4 mr-2" />
            <span className="text-xs">Competition</span>
          </div>
        </div>
      ),
      className: "col-span-1 row-span-1",
      thumbnail: "/src/assets/EventsPage/tech_tactics.jpg",
    },
    {
      id: 2,
      content: (
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2">Blazing Wheel</h3>
          <p className="text-sm opacity-80">High-speed robotics challenge</p>
          <div className="flex items-center mt-2">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-xs">Robotics</span>
          </div>
        </div>
      ),
      className: "col-span-2 row-span-2",
      thumbnail: "/src/assets/EventsPage/blazingWheel.jpg",
    },
    {
      id: 3,
      content: (
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2">Pinnacle</h3>
          <p className="text-sm opacity-80">Ultimate coding showdown</p>
          <div className="flex items-center mt-2">
            <Trophy className="w-4 h-4 mr-2" />
            <span className="text-xs">Flagship</span>
          </div>
        </div>
      ),
      className: "col-span-1 row-span-2",
      thumbnail: "/src/assets/EventsPage/pinnacle.jpg",
    },
    {
      id: 4,
      content: (
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2">Blogathon</h3>
          <p className="text-sm opacity-80">Creative writing challenge</p>
          <div className="flex items-center mt-2">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-xs">Creative</span>
          </div>
        </div>
      ),
      className: "col-span-1 row-span-1",
      thumbnail: "/src/assets/EventsPage/blogathon.jpg",
    },
    {
      id: 5,
      content: (
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2">Music Album</h3>
          <p className="text-sm opacity-80">Musical innovation showcase</p>
          <div className="flex items-center mt-2">
            <Users className="w-4 h-4 mr-2" />
            <span className="text-xs">Cultural</span>
          </div>
        </div>
      ),
      className: "col-span-2 row-span-1",
      thumbnail: "/src/assets/EventsPage/musicAlbum.jpg",
    },
    {
      id: 6,
      content: (
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2">Major Event</h3>
          <p className="text-sm opacity-80">Premier tech showcase</p>
          <div className="flex items-center mt-2">
            <Trophy className="w-4 h-4 mr-2" />
            <span className="text-xs">Major</span>
          </div>
        </div>
      ),
      className: "col-span-1 row-span-1",
      thumbnail: "/src/assets/EventsPage/majorEvent.jpeg",
    },
    {
      id: 7,
      content: (
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2">Minor Event</h3>
          <p className="text-sm opacity-80">Quick tech challenges</p>
          <div className="flex items-center mt-2">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-xs">Quick</span>
          </div>
        </div>
      ),
      className: "col-span-1 row-span-1",
      thumbnail: "/src/assets/EventsPage/minorEvent.png",
    },
    {
      id: 8,
      content: (
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2">Hackathon</h3>
          <p className="text-sm opacity-80">24-hour coding marathon</p>
          <div className="flex items-center mt-2">
            <Trophy className="w-4 h-4 mr-2" />
            <span className="text-xs">Hackathon</span>
          </div>
        </div>
      ),
      className: "col-span-2 row-span-2",
      thumbnail: "/src/assets/EventsPage/tech_tactics.jpg",
    },
  ];

  // Split cards into two pages
  const page1Cards = allCards.slice(0, 4);
  const page2Cards = allCards.slice(4, 8);

  const pages = [page1Cards, page2Cards];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <div className="relative w-full h-screen">
      <div className="text-center pt-16 pb-8">
        <h2 className="text-4xl font-bold text-white mb-4">Event Gallery</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore our exciting events and competitions through this interactive gallery
        </p>
      </div>
      
      <div className="relative w-full h-full">
        <LayoutGrid cards={pages[currentPage]} />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevPage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextPage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Next page"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Page Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentPage === index 
                  ? "bg-white scale-125" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
