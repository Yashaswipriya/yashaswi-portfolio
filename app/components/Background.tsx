"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: 1, x: "12%", y: "18%" },
  { id: 2, x: "28%", y: "32%" },
  { id: 3, x: "52%", y: "16%" },
  { id: 4, x: "72%", y: "30%" },
  { id: 5, x: "86%", y: "18%" },

  { id: 6, x: "18%", y: "58%" },
  { id: 7, x: "42%", y: "50%" },
  { id: 8, x: "66%", y: "62%" },
  { id: 9, x: "82%", y: "48%" },

  { id: 10, x: "26%", y: "82%" },
  { id: 11, x: "56%", y: "78%" },
  { id: 12, x: "78%", y: "88%" },
];

const lines = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],

  [2, 6],
  [6, 7],
  [7, 8],
  [8, 9],

  [7, 11],
  [6, 10],
  [8, 12],
];

export default function Background() {
  return (
    <>
      {/* dotted paper */}

      <div
        className="
          absolute inset-0 -z-20
          opacity-[0.06]
          [background-image:radial-gradient(var(--border)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      {/* network */}

      <svg
        className="absolute inset-0 -z-10 h-full w-full"
        preserveAspectRatio="none"
      >
        {lines.map(([a, b], index) => {
          const start = nodes.find((n) => n.id === a)!;
          const end = nodes.find((n) => n.id === b)!;

          return (
            <motion.line
              key={index}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="var(--border)"
              strokeOpacity={0.15}
              strokeWidth="1.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: index * 0.08,
                duration: 1.5,
              }}
            />
          );
        })}

        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="4"
            fill="var(--accent)"
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              delay: node.id * 0.06,
              duration: 3,
              repeat: Infinity,
            }}
            opacity={0.4}
          />
        ))}
      </svg>
    </>
  );
}