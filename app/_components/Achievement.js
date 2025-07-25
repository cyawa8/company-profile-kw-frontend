"use client"
import { useRef, useEffect, useState, useContext } from "react";
import Image from "next/image";
import { ModalContext } from "./Modal";
import Button from "./Button";
import H1 from "./H1";


export default function AchievementMarqueeRow({ items, reverse = false, speed = 18 }) {
  const marqueeRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const { openModal, closeModal } = useContext(ModalContext);

  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = paused ? "paused" : "running";
    }
  }, [paused]);


const minDisplay = 16;

let displayItems = [];
if (items.length === 0) {
  displayItems = Array(minDisplay).fill({
    image: "/icon.png",
    description: "Achievement",
  });
} else {
  const repeatCount = Math.max(3, Math.ceil((minDisplay * 2.5) / items.length));
  displayItems = Array(repeatCount).fill(items).flat();
}
  return (
    <div className="overflow-hidden select-none">
      <div
        ref={marqueeRef}
        className={`flex gap-12 items-center ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{
          animationDuration: `${speed}s`,
          whiteSpace: "nowrap"
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
       {displayItems.map((a, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center gap-2 group cursor-pointer transition px-2"
          tabIndex={0}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ minWidth: 110, minHeight: 160 }}
          onClick={() =>
              openModal({
                title: (<H1>{a.title}</H1> || "Achievement"),
                content: (
                  <div className="flex flex-col items-center gap-4">
                    <Image
                      src={`https://api.kiwi.co.id/storage/${a.image}`}
                      alt={a.description || a.title || "achievement"}
                      width={160}
                      height={160}
                      className="object-contain rounded-xl"
                    />
                    <div className="text-gray-700 text-center whitespace-pre-line">{a.description}</div>
                  </div>
                ),
                footer: (
                  <Button
                    onClick={closeModal}
                    className="bg-primary-600 hover:bg-primary-700 text-white"
                  >
                    Tutup
                  </Button>
                ),
              })
            }
        >
          <Image
            src={`https://api.kiwi.co.id/storage/${a.image}`}
            alt={a.description || a.name || "achievement"}
            width={96}
            height={96}
            className="w-24 h-24 object-contain transition group-hover:scale-110 group-hover:drop-shadow-lg group-hover:brightness-110"
          />
        </div>
      ))}

      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
