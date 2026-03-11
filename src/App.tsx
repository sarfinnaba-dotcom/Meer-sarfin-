import React, { useState, useMemo } from 'react';
import { Search, Volume2, VolumeX, Play, BookOpen, Languages, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { N4_VOCABULARY, VocabularyItem } from './constants';
import { generateSpeech } from './services/geminiService';

interface VocabularyCardProps {
  item: VocabularyItem;
}

const VocabularyCard: React.FC<VocabularyCardProps> = ({ item }) => {
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [audioUrls, setAudioUrls] = useState<Record<string, string>>({});

  const handlePlayAudio = async (text: string, key: string) => {
    if (isPlaying) return;
    
    setIsPlaying(key);
    try {
      let currentAudioUrl = audioUrls[key];
      if (!currentAudioUrl) {
        currentAudioUrl = await generateSpeech(text) || "";
        setAudioUrls(prev => ({ ...prev, [key]: currentAudioUrl || "" }));
      }
      
      if (currentAudioUrl) {
        const audio = new Audio(currentAudioUrl);
        audio.onended = () => setIsPlaying(null);
        audio.play();
      } else {
        setIsPlaying(null);
      }
    } catch (error) {
      console.error("Failed to play audio", error);
      setIsPlaying(null);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition-shadow group relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-1 block">
            {item.category}
          </span>
          <h3 className="text-3xl font-bold text-stone-900 mb-1">{item.word}</h3>
          <p className="text-lg text-emerald-600 font-medium">{item.reading}</p>
          <p className="text-sm text-stone-400 italic">[{item.romaji}]</p>
        </div>
        <button
          onClick={() => handlePlayAudio(item.word, 'main')}
          disabled={isPlaying !== null}
          className={`p-3 rounded-full transition-all ${
            isPlaying === 'main'
              ? 'bg-emerald-100 text-emerald-600 animate-pulse' 
              : 'bg-stone-100 text-stone-600 hover:bg-emerald-500 hover:text-white'
          }`}
        >
          {isPlaying === 'main' ? <Volume2 size={24} /> : <Play size={24} fill="currentColor" />}
        </button>
      </div>

      <div className="space-y-3 pt-4 border-t border-stone-100">
        <div className="flex items-start gap-3">
          <div className="mt-1 text-stone-400">
            <Languages size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-500 uppercase tracking-tighter">English</p>
            <p className="text-stone-800 font-medium">{item.english}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="mt-1 text-stone-400">
            <BookOpen size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-500 uppercase tracking-tighter">Bengali (বাংলা)</p>
            <p className="text-stone-800 font-medium text-lg">{item.bengali}</p>
          </div>
        </div>

        {item.conjugation && (
          <div className="mt-4 pt-4 border-t border-stone-100 bg-stone-50 -mx-6 px-6 pb-4">
            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">
              {item.category === 'Verb' ? 'Verb Conjugations (ক্রিয়া পরিবর্তন)' : 'Form Changes (শব্দ পরিবর্তন)'}
            </p>
            <div className="grid grid-cols-1 gap-3">
              {(item.category === 'Verb' 
                ? [
                    { label: 'Dictionary', value: item.conjugation.dictionary, key: 'dict' },
                    { label: 'Masu Form', value: item.conjugation.masu, key: 'masu' },
                    { label: 'Te Form', value: item.conjugation.te, key: 'te' },
                    { label: 'Nai Form', value: item.conjugation.nai, key: 'nai' }
                  ]
                : [
                    { label: 'Negative', value: item.conjugation.negative, key: 'neg' },
                    { label: 'Past', value: item.conjugation.past, key: 'past' },
                    { label: 'Past Negative', value: item.conjugation.pastNegative, key: 'pastNeg' }
                  ]
              ).filter(form => form.value).map((form) => (
                <div key={form.key} className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-tighter bg-emerald-50 px-1.5 py-0.5 rounded">{form.label}</span>
                    <button 
                      onClick={() => handlePlayAudio(form.value!.word, form.key)}
                      disabled={isPlaying !== null}
                      className={`p-1.5 rounded-full transition-all ${
                        isPlaying === form.key ? 'bg-emerald-100 text-emerald-600' : 'bg-stone-50 text-stone-400 hover:bg-emerald-500 hover:text-white'
                      }`}
                    >
                      <Volume2 size={14} />
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-stone-900">{form.value!.word}</span>
                      <span className="text-xs text-stone-400 font-medium">{form.value!.reading}</span>
                    </div>
                    <div className="mt-1 flex flex-col gap-0.5">
                      <p className="text-xs text-stone-500 italic leading-none">{form.value!.english}</p>
                      <p className="text-xs text-stone-700 font-medium leading-none">{form.value!.bengali}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {item.examples && item.examples.length > 0 && (
          <div className="mt-4 pt-4 border-t border-stone-100">
            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Example Sentences (উদাহরণ বাক্য)</p>
            <div className="space-y-4">
              {item.examples.map((ex, idx) => (
                <div key={idx} className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <div>
                      <p className="text-lg font-bold text-stone-900 leading-tight">{ex.sentence}</p>
                      <p className="text-sm text-emerald-600 font-medium mt-1">{ex.reading}</p>
                    </div>
                    <button 
                      onClick={() => handlePlayAudio(ex.sentence, `ex-${idx}`)}
                      disabled={isPlaying !== null}
                      className={`p-2 rounded-full transition-all flex-shrink-0 ${
                        isPlaying === `ex-${idx}`
                          ? 'bg-emerald-200 text-emerald-700 animate-pulse' 
                          : 'bg-white text-emerald-600 hover:bg-emerald-600 hover:text-white shadow-sm'
                      }`}
                    >
                      <Volume2 size={18} />
                    </button>
                  </div>
                  <div className="space-y-1 mt-3 pt-3 border-t border-emerald-100/50">
                    <p className="text-sm text-stone-600 italic">"{ex.english}"</p>
                    <p className="text-sm text-stone-800 font-medium">"{ex.bengali}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(N4_VOCABULARY.map(item => item.category));
    return Array.from(cats);
  }, []);

  const filteredVocabulary = useMemo(() => {
    return N4_VOCABULARY.filter(item => {
      const matchesSearch = 
        item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.reading.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.bengali.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-stone-900 font-sans selection:bg-emerald-200">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F5F5F0]/80 backdrop-blur-md border-bottom border-stone-200 py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:shadow-md md:p-8">
            {/* Flag-inspired background accents */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#BC002D]/10 to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#006A4E]/20 to-transparent" />
              {/* Subtle circles to mimic flag motifs */}
              <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#BC002D]/5 blur-2xl" />
              <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#006A4E]/10 blur-2xl" />
            </div>
            
            <h1 className="relative text-4xl font-serif font-bold tracking-tight text-stone-900">
              Japanese <span className="italic text-emerald-600">Bangla</span> Master
            </h1>
            <div className="relative mt-3 flex h-1.5 w-48 overflow-hidden rounded-full ring-1 ring-stone-200 shadow-sm">
              <div className="relative h-full w-1/2 bg-white">
                <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BC002D]" />
              </div>
              <div className="relative h-full w-1/2 bg-[#006A4E]">
                <div className="absolute left-[45%] top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F42A41]" />
              </div>
            </div>
          </div>

          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search words, meanings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-80 pl-12 pr-4 py-3 bg-white border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              !selectedCategory 
                ? 'bg-stone-900 text-white shadow-lg' 
                : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat 
                  ? 'bg-emerald-600 text-white shadow-lg' 
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid grouped by Lesson */}
        <div className="space-y-12">
          {(Object.entries(
            filteredVocabulary.reduce((acc, item) => {
              const lesson = item.id.split('-')[0];
              if (!acc[lesson]) acc[lesson] = [];
              acc[lesson].push(item);
              return acc;
            }, {} as Record<string, typeof filteredVocabulary>)
          ) as [string, typeof filteredVocabulary][]).sort(([a], [b]) => Number(a) - Number(b)).map(([lesson, items]) => (
            <div key={lesson} className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-serif font-bold text-stone-800">
                  Lesson <span className="text-emerald-600">{lesson}</span>
                </h2>
                <div className="h-px flex-1 bg-stone-200"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <VocabularyCard key={item.id} item={item} />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {filteredVocabulary.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-300 border-2 border-dashed border-stone-200">
              <VolumeX size={32} />
            </div>
            <h3 className="text-xl font-medium text-stone-600">No vocabulary found</h3>
            <p className="text-stone-400">Try adjusting your search or category filter</p>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 md:px-8 py-12 border-t border-stone-200 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-stone-400 text-sm">
          <p>© 2024 Japanese N4 Vocabulary Master</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-emerald-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
