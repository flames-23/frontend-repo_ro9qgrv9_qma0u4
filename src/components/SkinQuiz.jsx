import React, { useMemo, useState } from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

const questions = [
  {
    id: 'type',
    label: 'What is your primary skin type?',
    options: [
      { key: 'oily', text: 'Oily' },
      { key: 'dry', text: 'Dry' },
      { key: 'combo', text: 'Combination' },
      { key: 'sensitive', text: 'Sensitive' },
    ],
  },
  {
    id: 'concern',
    label: 'What is your top skin concern?',
    options: [
      { key: 'acne', text: 'Acne & Blemishes' },
      { key: 'dull', text: 'Dullness' },
      { key: 'aging', text: 'Fine lines' },
      { key: 'redness', text: 'Redness' },
    ],
  },
];

const SkinQuiz = () => {
  const [answers, setAnswers] = useState({});
  const completed = Object.keys(answers).length === questions.length;

  const recommendation = useMemo(() => {
    if (!completed) return null;
    const { type, concern } = answers;

    const recs = {
      oily: {
        acne: 'Clarifying Gel Cleanser + Niacinamide Serum',
        dull: 'Oil-Control Cleanser + Vitamin C Serum',
        aging: 'Balancing Cleanser + Peptide Serum',
        redness: 'Soothing Gel Cleanser + Centella Serum',
      },
      dry: {
        acne: 'Cream Cleanser + Azelaic Serum',
        dull: 'Cream Cleanser + Squalane Serum',
        aging: 'Ceramide Cleanser + Peptide Serum',
        redness: 'Cream Cleanser + Oat Barrier Serum',
      },
      combo: {
        acne: 'Gel Cleanser + Salicylic Serum',
        dull: 'Gentle Cleanser + Vitamin C Serum',
        aging: 'Hydrating Cleanser + Peptide Serum',
        redness: 'Gentle Cleanser + Green Tea Serum',
      },
      sensitive: {
        acne: 'Milk Cleanser + Azelaic Serum',
        dull: 'Milk Cleanser + Vitamin B5 Serum',
        aging: 'Milk Cleanser + Peptide Serum',
        redness: 'Milk Cleanser + Centella Serum',
      },
    };

    return recs[type]?.[concern] || 'Balanced Routine Set';
  }, [answers, completed]);

  const select = (id, key) => setAnswers((a) => ({ ...a, [id]: key }));

  return (
    <section id="quiz" className="py-16 md:py-24 bg-gradient-to-b from-white to-violet-50/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-violet-600" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Skin Quiz</h2>
        </div>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Answer two quick questions and get a personalized, minimal routine recommendation.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {questions.map((q) => (
            <div key={q.id} className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
              <p className="font-medium text-gray-900">{q.label}</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {q.options.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => select(q.id, opt.key)}
                    className={`rounded-xl px-4 py-3 text-sm border transition-colors ${
                      answers[q.id] === opt.key
                        ? 'bg-violet-600 text-white border-violet-600'
                        : 'bg-white hover:bg-gray-50 border-gray-200'
                    }`}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button
            disabled={!completed}
            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium shadow-sm ${
              completed ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Get my routine <ChevronRight className="h-4 w-4" />
          </button>

          {completed && (
            <div className="mt-4 p-4 bg-white border border-gray-200 rounded-xl max-w-xl">
              <p className="text-gray-700">
                Recommended: <span className="font-medium text-gray-900">{recommendation}</span>
              </p>
              <p className="mt-1 text-sm text-gray-600">Add these to cart or view details below.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkinQuiz;
