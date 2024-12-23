"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { exhibitions } from "@/lib/constants";

import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";

import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  titleVariant,
} from "@/lib/animations";
import { useInView } from "@/hooks/useInView";
import { useRef } from "react";

export default function ExhibitionsPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasBeenInView = useInView(sectionRef, { threshold: 0.25 }); // Trigger when 25% of the section is visible

  return (
    <section ref={sectionRef} id="exhibitions">
      <div className="py-16 bg-neutral-900">
        <motion.div
          initial="hidden"
          animate={hasBeenInView ? "show" : "hidden"}
          variants={containerVariants}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-5xl lg:text-7xl font-bold uppercase mb-4">
              Exhibitions
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each sculpture is a unique piece, handcrafted from carefully
              selected car parts. Browse through our collection of available
              works.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exhibitions.map((exhibition) => (
              <motion.div variants={titleVariant}>
                <Card className="bg-neutral-800 border-none overflow-hidden group">
                  <h1 className="text-xl text-center lg:text-2xl py-2">
                    {exhibition.title}
                  </h1>
                  <CardContent className="p-0">
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={exhibition.img}
                        alt={exhibition.place}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </CardContent>
                  <div className="flex items-center gap-4 w-full justify-center py-2">
                    <div className="flex items-center gap-2">
                      <IoLocationOutline />
                      <h3>{exhibition.place}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <CiCalendarDate />
                      <h3>{exhibition.date}</h3>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
