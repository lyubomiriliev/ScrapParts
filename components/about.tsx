"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Recycle, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  titleVariant,
} from "@/lib/animations";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView"; // Path to your custom hook

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasBeenInView = useInView(sectionRef, { threshold: 0.25 }); // Trigger when 25% of the section is visible

  return (
    <section ref={sectionRef} className="py-16 bg-neutral-900" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={hasBeenInView ? "show" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col h-80 overflow-y-scroll"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-5">
                За артиста
              </h2>
              <p className="text-gray-400 py-4">
                Асен Тодоров е артист със смел почерк, който превръща стари
                авточасти и метални елементи в изкуство с характер, което светът
                не е виждал. Роден през 1977 г. В София, той се занимава с
                рисуване и изкуство от дете, но преди 28 години започва да
                експериментира по-целенасочено, превръщайки хобито си в истинска
                творческа мисия.
              </p>
              <p className="text-gray-400 py-4">
                Определя стила си като „гаражно изкуство“ – неподчинено на
                строги правила, водено от интуицията и усещането за материалите.
                Работата му не следва шаблони, а се движи по естествения ритъм
                на въображението, надхвърляйки всички рамки, което прави всяка
                негова творба уникална и жива.
              </p>
              <p className="text-gray-400 py-4">
                Днес неговите произведения са търсени от ценители по цял свят.
                Всяка негова творба е свидетелство за това, че дори изоставените
                материали могат да бъдат преобразени в нещо необикновено - стига
                да попаднат в ръцете на истински творец, който вижда отвъд
                обикновеното
              </p>
              <p className="text-gray-400 py-4">
                Всяко произведение на Асен Тодоров носи духа на трансформацията.
                Творбите му са повече от скулптури – те са проява на свобода,
                въображение и неподправена енергия, която предизвиква и
                вдъхновява.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={itemVariants}
              className="relative flex lg:hidden h-[600px]"
            >
              <Image
                src="/avatarImage.jpg"
                alt="Artist at work"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Card className="bg-neutral-800 border-none flex flex-col justify-center items-center text-center">
                <CardContent className="pt-6 flex flex-col justify-center items-center">
                  <Wrench className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Craftsmanship</h3>
                  <p className="text-sm text-gray-400">
                    Attention to detail in every piece
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-neutral-800 border-none flex flex-col justify-center items-center text-center">
                <CardContent className="pt-6 flex flex-col justify-center items-center">
                  <Recycle className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Sustainability</h3>
                  <p className="text-sm text-gray-400">
                    Giving new life to discarded materials
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-neutral-800 border-none flex flex-col justify-center items-center text-center">
                <CardContent className="pt-6 flex flex-col justify-center items-center">
                  <Trophy className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Recognition</h3>
                  <p className="text-sm text-gray-400">
                    Award-winning artistic vision
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={hasBeenInView ? "show" : "hidden"}
            variants={titleVariant}
            className="hidden lg:flex relative h-[600px]"
          >
            <Image
              src="/asen.jpg"
              alt="Asen Todorov"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
