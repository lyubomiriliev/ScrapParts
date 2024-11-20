"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Share2, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Product {
  title: string;
  price: string;
  category: string;
  dimensions: string;
  weight: string;
  materials: string[];
  description: string;
  images: string[];
}

interface ProductDetailsProps {
  product: Product | undefined;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  // Add keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="py-16 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/products">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div
              className="relative h-[500px] cursor-pointer"
              onClick={() => openModal(0)}
            >
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative h-[200px] cursor-pointer"
                  onClick={() => openModal(index + 1)}
                >
                  <Image
                    src={image}
                    alt={`${product.title} - View ${index + 2}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <div className="flex items-center space-x-4 mb-6">
              <Badge variant="secondary">{product.category}</Badge>
              <span className="text-2xl font-bold text-primary">
                {product.price}
              </span>
            </div>

            <Card className="bg-neutral-800 border-none p-6 mb-8">
              <h2 className="font-semibold mb-4">Specifications</h2>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-400">Dimensions</dt>
                  <dd>{product.dimensions}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-400">Weight</dt>
                  <dd>{product.weight}</dd>
                </div>
              </dl>
            </Card>

            <div className="mb-8">
              <h2 className="font-semibold mb-4">Materials Used</h2>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material, index) => (
                  <Badge key={index} variant="outline">
                    {material}
                  </Badge>
                ))}
              </div>
            </div>

            <p className="text-gray-400 mb-8">{product.description}</p>

            <div className="flex space-x-4">
              <Button className="flex-1">Request Purchase</Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
          <div className="relative w-[80%] max-w-4xl h-[70%] bg-neutral-800 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close Modal"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 z-50 bg-gray-700 text-white rounded-full p-3 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous Image"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="relative w-full h-full">
              <Image
                src={product.images[modalImageIndex]}
                alt="Selected Product"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <button
              onClick={nextImage}
              className="absolute right-4 bg-gray-700 text-white rounded-full p-3 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next Image"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
