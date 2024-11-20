"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";

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
            <div className="relative h-[500px]">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="relative h-[200px]">
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
              <span className="text-2xl font-bold text-primary">{product.price}</span>
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
    </div>
  );
}