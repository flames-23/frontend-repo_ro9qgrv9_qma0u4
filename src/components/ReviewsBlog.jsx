import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Nadia',
    text: 'My skin feels calmer and brighter in just two weeks. Simple steps that actually work!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Alya',
    text: 'Love the clean textures and the glow. Checkout was super fast too!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sari',
    text: 'Finally a routine I can stick to. The serum is a must-have!',
    rating: 4,
  },
];

const posts = [
  {
    id: 1,
    title: 'How to Build a Minimalist Skincare Routine',
    image: 'https://images.unsplash.com/photo-1632873469240-eaac8bb24cc5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb3clMjB0byUyMEJ1aWxkJTIwYXxlbnwwfDB8fHwxNzYyNjE2NzAxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Vitamin C vs. Niacinamide: Can You Use Both?',
    image: 'https://images.unsplash.com/photo-1629880326115-59652fadbba6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWaXRhbWluJTIwQyUyMHZzLiUyME5pYWNpbmFtaWRlJTNBfGVufDB8MHx8fDE3NjI2MTY3MDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: '5 Habits for Healthy, Radiant Skin',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop',
  },
];

const ReviewsBlog = () => {
  return (
    <section id="community" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What our customers say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.id} className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm">
              <div className="flex items-center gap-2 text-amber-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="mt-3 text-gray-700">“{r.text}”</p>
              <p className="mt-2 text-sm text-gray-500">— {r.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-2">
            <Quote className="h-5 w-5 text-violet-600" />
            <h3 className="text-xl font-semibold">Skincare tips & articles</h3>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <article key={p.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-gray-900 group-hover:text-violet-700">{p.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">Read more →</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsBlog;
