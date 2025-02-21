"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  titleVariant,
} from "@/lib/animations";
import { news } from "@/lib/constants";
import { Card, CardContent } from "./ui/card";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import Image from "next/image";

const NewsSection = () => {
  const newsRef = useRef<HTMLElement>(null);

  return (
    <section ref={newsRef} id="exhibitions">
      <div className="py-16 bg-neutral-900">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-5xl lg:text-7xl font-bold uppercase mb-4">
              NEWS
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay informed with the latest news and updates, featuring our
              unique sculptures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            {news.map((n) => (
              <motion.div variants={titleVariant}>
                <Card className="bg-neutral-800 border-none overflow-hidden group p-8 relative">
                  <h1 className="text-xl text-center lg:text-2xl py-2">
                    {n.title}
                  </h1>
                  <p className="py-10">{n.content}</p>
                  <div className="w-full flex items-center gap-4">
                    {n.images.map((img) => (
                      <div className="relative overflow-hidden">
                        <Image
                          className="w-[600px] h-[400px] object-cover rounded-md cursor-pointer transition-transform duration-300 hover:scale-105"
                          width={600}
                          height={600}
                          src={img}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-2 left-4 items-center gap-4 w-full justify-center py-2">
                    <div className="flex items-center gap-2">
                      <CiCalendarDate />
                      <h3>{n.date}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoLocationOutline />
                      <h3>{n.place}</h3>
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
};

export default NewsSection;
