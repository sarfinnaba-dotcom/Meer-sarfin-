export interface ConjugatedForm {
  word: string;
  reading: string;
  english: string;
  bengali: string;
  audioUrl?: string;
}

export interface Example {
  sentence: string;
  reading: string;
  english: string;
  bengali: string;
  audioUrl?: string;
}

export interface VocabularyItem {
  id: string;
  word: string;
  reading: string;
  romaji: string;
  english: string;
  bengali: string;
  category: "Verb" | "Noun" | "Adjective" | "Adverb" | "Particle" | "Expression" | "Food" | "Travel" | "Greetings" | "Time" | "Place" | "People" | "Objects" | "Nature" | "Health" | "Work" | "Education" | "Entertainment" | "Miscellaneous" | "Animals";
  conjugation?: {
    // For Verbs
    dictionary?: ConjugatedForm;
    masu?: ConjugatedForm;
    te?: ConjugatedForm;
    nai?: ConjugatedForm;
    // For Adjectives/Nouns
    negative?: ConjugatedForm;
    past?: ConjugatedForm;
    pastNegative?: ConjugatedForm;
  };
  examples?: Example[];
  audioUrl?: string;
}

export const N4_VOCABULARY: VocabularyItem[] = [
  // Lesson 26
  {
    id: "26-1",
    word: "見ます",
    reading: "みます",
    romaji: "mimasu",
    english: "to see, to check",
    bengali: "দেখা, চেক করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "見る", reading: "みる", english: "to see", bengali: "দেখা" },
      masu: { word: "見ます", reading: "みます", english: "see (polite)", bengali: "দেখি (সম্মানসূচক)" },
      te: { word: "見て", reading: "みて", english: "seeing / please see", bengali: "দেখে / দয়া করে দেখুন" },
      nai: { word: "見ない", reading: "みない", english: "not see", bengali: "দেখি না" }
    },
    examples: [
      {
        sentence: "テレビを見ます。",
        reading: "テレビをみます。",
        english: "I watch TV.",
        bengali: "আমি টিভি দেখি।"
      }
    ]
  },
  {
    id: "26-2",
    word: "探します",
    reading: "さがします",
    romaji: "sagashimasu",
    english: "to look for, to search",
    bengali: "খোঁজা, অনুসন্ধান করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "探す", reading: "さがす", english: "to search", bengali: "খোঁজা" },
      masu: { word: "探します", reading: "さがします", english: "search (polite)", bengali: "খুঁজি" },
      te: { word: "探して", reading: "さがして", english: "searching / please search", bengali: "খুঁজে / দয়া করে খুঁজুন" },
      nai: { word: "探さない", reading: "さがさない", english: "not search", bengali: "খুঁজি না" }
    },
    examples: [
      {
        sentence: "かばんを探しています。",
        reading: "かばんをさがしています。",
        english: "I am looking for my bag.",
        bengali: "আমি আমার ব্যাগ খুঁজছি।"
      }
    ]
  },
  {
    id: "26-3",
    word: "遅れます",
    reading: "おくれます",
    romaji: "okuremasu",
    english: "to be late",
    bengali: "দেরি করা (সময়)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "遅れる", reading: "おくれる", english: "to be late", bengali: "দেরি হওয়া" },
      masu: { word: "遅れます", reading: "おくれます", english: "be late (polite)", bengali: "দেরি করি" },
      te: { word: "遅れて", reading: "おくれて", english: "being late", bengali: "দেরি করে" },
      nai: { word: "遅れない", reading: "おくれない", english: "not be late", bengali: "দেরি করি না" }
    },
    examples: [
      {
        sentence: "時間に遅れました。",
        reading: "じかんにおくれました。",
        english: "I was late for the time.",
        bengali: "আমি সময়মতো পৌঁছাতে দেরি করেছি।"
      }
    ]
  },
  {
    id: "26-4",
    word: "間に合います",
    reading: "まにあいます",
    romaji: "maniaimasu",
    english: "to be in time",
    bengali: "সময়মতো পৌঁছানো",
    category: "Verb",
    conjugation: {
      dictionary: { word: "間に合う", reading: "まにあう", english: "to be in time", bengali: "সময়মতো হওয়া" },
      masu: { word: "間に合います", reading: "まにあいます", english: "be in time (polite)", bengali: "সময়মতো পৌঁছাই" },
      te: { word: "間に合って", reading: "まにあって", english: "being in time", bengali: "সময়মতো পৌঁছে" },
      nai: { word: "間に合わない", reading: "まにあわない", english: "not be in time", bengali: "সময়মতো পৌঁছাই না" }
    },
    examples: [
      {
        sentence: "電車に間に合いました。",
        reading: "でんしゃにまにあいました。",
        english: "I was in time for the train.",
        bengali: "আমি ট্রেনটি ধরার জন্য সঠিক সময়ে পৌঁছেছিলাম।"
      }
    ]
  },
  {
    id: "26-5",
    word: "やります",
    reading: "やります",
    romaji: "yarimasu",
    english: "to do",
    bengali: "করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "やる", reading: "やる", english: "to do", bengali: "করা" },
      masu: { word: "やります", reading: "やります", english: "do (polite)", bengali: "করি" },
      te: { word: "やって", reading: "やって", english: "doing / please do", bengali: "করে / দয়া করে করুন" },
      nai: { word: "やらない", reading: "やらない", english: "not do", bengali: "করি না" }
    },
    examples: [
      {
        sentence: "宿題をやります。",
        reading: "しゅくだいをやります。",
        english: "I will do my homework.",
        bengali: "আমি আমার বাড়ির কাজ করব।"
      }
    ]
  },
  {
    id: "26-6",
    word: "拾います",
    reading: "ひろいます",
    romaji: "hiroimasu",
    english: "to pick up",
    bengali: "কুড়িয়ে নেওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "拾う", reading: "ひろう", english: "to pick up", bengali: "তুলে নেওয়া" },
      masu: { word: "拾います", reading: "ひろいます", english: "pick up (polite)", bengali: "তুলে নিই" },
      te: { word: "拾って", reading: "ひろって", english: "picking up", bengali: "তুলে নিয়ে" },
      nai: { word: "拾わない", reading: "ひろわない", english: "not pick up", bengali: "তুলে নিই না" }
    },
    examples: [
      {
        sentence: "ごみを拾います。",
        reading: "ごみをひろいます。",
        english: "I pick up the trash.",
        bengali: "আমি ময়লা তুলে নিই।"
      }
    ]
  },
  {
    id: "26-7",
    word: "連絡します",
    reading: "れんらくします",
    romaji: "renrakushimasu",
    english: "to contact",
    bengali: "যোগাযোগ করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "連絡する", reading: "れんらくする", english: "to contact", bengali: "যোগাযোগ করা" },
      masu: { word: "連絡します", reading: "れんらくします", english: "contact (polite)", bengali: "যোগাযোগ করি" },
      te: { word: "連絡して", reading: "れんらくして", english: "contacting", bengali: "যোগাযোগ করে" },
      nai: { word: "連絡しない", reading: "れんらくしない", english: "not contact", bengali: "যোগাযোগ করি না" }
    }
  },
  {
    id: "26-8",
    word: "気分がいい",
    reading: "きぶんがいい",
    romaji: "kibun ga ii",
    english: "feel well",
    bengali: "ভালো অনুভব করা",
    category: "Expression",
    examples: []
  },
  {
    id: "26-9",
    word: "気分が悪い",
    reading: "きぶんがわるい",
    romaji: "kibun ga warui",
    english: "feel ill",
    bengali: "খারাপ অনুভব করা",
    category: "Expression",
    examples: []
  },
  {
    id: "26-10",
    word: "運動会",
    reading: "うんどうかい",
    romaji: "undoukai",
    english: "sports day",
    bengali: "ক্রীড়া দিবস",
    category: "Noun",
    examples: []
  },
  {
    id: "26-11",
    word: "盆踊り",
    reading: "ぼんおどり",
    romaji: "bon-odori",
    english: "Bon festival dance",
    bengali: "বন উৎসবের নাচ",
    category: "Noun",
    examples: []
  },
  {
    id: "26-12",
    word: "フリーマーケット",
    reading: "フリーマーケット",
    romaji: "furii maaketto",
    english: "flea market",
    bengali: "ফ্লি মার্কেট / সস্তা বাজার",
    category: "Noun",
    examples: []
  },
  {
    id: "26-13",
    word: "場所",
    reading: "ばしょ",
    romaji: "basho",
    english: "place",
    bengali: "জায়গা / স্থান",
    category: "Noun",
    examples: []
  },
  {
    id: "26-14",
    word: "ボランティア",
    reading: "ボランティア",
    romaji: "borantia",
    english: "volunteer",
    bengali: "স্বেচ্ছাসেবক",
    category: "Noun",
    examples: []
  },
  {
    id: "26-15",
    word: "財布",
    reading: "さいふ",
    romaji: "saifu",
    english: "wallet",
    bengali: "মানিব্যাগ",
    category: "Noun",
    examples: []
  },
  {
    id: "26-16",
    word: "ごみ",
    reading: "ごみ",
    romaji: "gomi",
    english: "trash, garbage",
    bengali: "ময়লা / আবর্জনা",
    category: "Noun",
    examples: []
  },
  {
    id: "26-17",
    word: "国会議事堂",
    reading: "こっかいぎじどう",
    romaji: "kokkaigijidou",
    english: "Diet Building",
    bengali: "সংসদ ভবন",
    category: "Noun",
    examples: []
  },
  {
    id: "26-18",
    word: "平日",
    reading: "へいじつ",
    romaji: "heijitsu",
    english: "weekday",
    bengali: "সপ্তাহের দিন / কার্যদিবস",
    category: "Noun",
    examples: []
  },
  {
    id: "26-19",
    word: "今度",
    reading: "こんど",
    romaji: "kondo",
    english: "next time, another time",
    bengali: "পরের বার / অন্য সময়",
    category: "Noun",
    examples: []
  },
  {
    id: "26-20",
    word: "ずいぶん",
    reading: "ずいぶん",
    romaji: "zuibun",
    english: "very, extremely",
    bengali: "খুব / প্রচুর",
    category: "Adverb",
    examples: []
  },
  {
    id: "26-21",
    word: "直接",
    reading: "ちょくせつ",
    romaji: "chokusetsu",
    english: "directly",
    bengali: "সরাসরি",
    category: "Adverb",
    examples: []
  },
  {
    id: "26-22",
    word: "いつでも",
    reading: "いつでも",
    romaji: "itsu demo",
    english: "anytime",
    bengali: "যেকোনো সময়",
    category: "Adverb",
    examples: []
  },
  {
    id: "26-23",
    word: "どこでも",
    reading: "どこでも",
    romaji: "doko demo",
    english: "anywhere",
    bengali: "যেকোনো জায়গায়",
    category: "Adverb",
    examples: []
  },
  {
    id: "26-24",
    word: "だれでも",
    reading: "だれでも",
    romaji: "dare demo",
    english: "anybody",
    bengali: "যেকেউ",
    category: "Adverb",
    examples: []
  },
  {
    id: "26-25",
    word: "なんでも",
    reading: "なんでも",
    romaji: "nan demo",
    english: "anything",
    bengali: "যেকোনো কিছু",
    category: "Adverb",
    examples: []
  },
  {
    id: "26-26",
    word: "片付きます",
    reading: "かたづきます",
    romaji: "katazukimasu",
    english: "be put in order",
    bengali: "গোছানো / সাজানো",
    category: "Verb",
    conjugation: {
      dictionary: { word: "片付く", reading: "かたづく", english: "to be put in order", bengali: "গোছানো" },
      masu: { word: "片付きます", reading: "かたづきます", english: "be put in order (polite)", bengali: "গোছানো হয়" },
      te: { word: "片付いて", reading: "かたづいて", english: "being put in order", bengali: "গুছিয়ে" },
      nai: { word: "片付かない", reading: "かたづかない", english: "not be put in order", bengali: "গোছানো হয় না" }
    }
  },
  {
    id: "26-27",
    word: "出します",
    reading: "だします",
    romaji: "dashimasu",
    english: "to put out",
    bengali: "বের করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "出す", reading: "だす", english: "to put out", bengali: "বের করা" },
      masu: { word: "出します", reading: "だします", english: "put out (polite)", bengali: "বের করি" },
      te: { word: "出して", reading: "だして", english: "putting out", bengali: "বের করে" },
      nai: { word: "出さない", reading: "ださない", english: "not put out", bengali: "বের করি না" }
    }
  },
  {
    id: "26-28",
    word: "置き場",
    reading: "おきば",
    romaji: "okiba",
    english: "place where something is put",
    bengali: "জিনিসপত্র রাখার জায়গা",
    category: "Noun",
    examples: []
  },
  {
    id: "26-29",
    word: "燃えるごみ",
    reading: "もえるごみ",
    romaji: "moeru gomi",
    english: "burnable garbage",
    bengali: "পোড়ানো যায় এমন ময়লা",
    category: "Noun",
    examples: []
  },
  {
    id: "26-30",
    word: "横",
    reading: "よこ",
    romaji: "yoko",
    english: "side",
    bengali: "পাশ / সাইড",
    category: "Noun",
    examples: []
  },
  {
    id: "26-31",
    word: "瓶",
    reading: "びん",
    romaji: "bin",
    english: "bottle",
    bengali: "বোতল",
    category: "Noun",
    examples: []
  },
  {
    id: "26-32",
    word: "缶",
    reading: "かん",
    romaji: "kan",
    english: "can",
    bengali: "ক্যান",
    category: "Noun",
    examples: []
  },
  {
    id: "26-33",
    word: "ガス",
    reading: "ガス",
    romaji: "gasu",
    english: "gas",
    bengali: "গ্যাস",
    category: "Noun",
    examples: []
  },
  {
    id: "26-34",
    word: "宇宙",
    reading: "うちゅう",
    romaji: "uchuu",
    english: "universe, space",
    bengali: "মহাকাশ",
    category: "Noun",
    examples: []
  },
  {
    id: "26-35",
    word: "宇宙船",
    reading: "うちゅうせん",
    romaji: "uchuusen",
    english: "spaceship",
    bengali: "মহাকাশযান",
    category: "Noun",
    examples: []
  },
  {
    id: "26-36",
    word: "怖い",
    reading: "こわい",
    romaji: "kowai",
    english: "scary, afraid",
    bengali: "ভয় পাওয়া",
    category: "Adjective",
    conjugation: {
      negative: { word: "怖くない", reading: "こわくない", english: "not scary", bengali: "ভয়ংকর নয়" },
      past: { word: "怖かった", reading: "こわかった", english: "was scary", bengali: "ভয়ংকর ছিল" },
      pastNegative: { word: "怖くなかった", reading: "こわくなかった", english: "was not scary", bengali: "ভয়ংকর ছিল না" }
    }
  },
  {
    id: "26-37",
    word: "違います",
    reading: "ちがいます",
    romaji: "chigaimasu",
    english: "to be different",
    bengali: "ভিন্ন হওয়া / অন্যরকম",
    category: "Verb",
    conjugation: {
      dictionary: { word: "違う", reading: "ちがう", english: "to be different", bengali: "ভিন্ন হওয়া" },
      masu: { word: "違います", reading: "ちがいます", english: "be different (polite)", bengali: "ভিন্ন হয়" },
      te: { word: "違って", reading: "ちがって", english: "being different", bengali: "ভিন্ন হয়ে" },
      nai: { word: "違わない", reading: "ちがわない", english: "not be different", bengali: "ভিন্ন হয় না" }
    }
  },
  {
    id: "26-38",
    word: "宇宙飛行士",
    reading: "うちゅうひこうし",
    romaji: "uchuuhikoushi",
    english: "astronaut",
    bengali: "নভোচারী",
    category: "Noun",
    examples: []
  },
  {
    id: "26-39",
    word: "参加します",
    reading: "さんかします",
    romaji: "sankashimasu",
    english: "to participate",
    bengali: "অংশগ্রহণ করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "参加する", reading: "さんかする", english: "to participate", bengali: "অংশগ্রহণ করা" },
      masu: { word: "参加します", reading: "さんかします", english: "participate (polite)", bengali: "অংশগ্রহণ করি" },
      te: { word: "参加して", reading: "さんかして", english: "participating", bengali: "অংশগ্রহণ করে" },
      nai: { word: "参加しない", reading: "さんかしない", english: "not participate", bengali: "অংশগ্রহণ করি না" }
    }
  },
  {
    id: "26-40",
    word: "申し込みます",
    reading: "もうしこみます",
    romaji: "moushikomimasu",
    english: "to apply for",
    bengali: "আবেদন করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "申し込む", reading: "もうしこむ", english: "to apply for", bengali: "আবেদন করা" },
      masu: { word: "申し込みます", reading: "もうしこみます", english: "apply for (polite)", bengali: "আবেদন করি" },
      te: { word: "申し込んで", reading: "もうしこんで", english: "applying for", bengali: "আবেদন করে" },
      nai: { word: "申し込まない", reading: "もうしこまない", english: "not apply for", bengali: "আবেদন করি না" }
    }
  },
  {
    id: "26-41",
    word: "都合がいい",
    reading: "つごうがいい",
    romaji: "tsugou ga ii",
    english: "convenient (time)",
    bengali: "সুবিধাজনক সময়",
    category: "Adjective",
    conjugation: {
      negative: { word: "都合がよくない", reading: "つごうがよくない", english: "not convenient", bengali: "সুবিধাজনক নয়" },
      past: { word: "都合がよかった", reading: "つごうがよかった", english: "was convenient", bengali: "সুবিধাজনক ছিল" },
      pastNegative: { word: "都合がよくなかった", reading: "つごうがよくなかった", english: "was not convenient", bengali: "সুবিধাজনক ছিল না" }
    }
  },
  {
    id: "26-42",
    word: "都合が悪い",
    reading: "つごうがわるい",
    romaji: "tsugou ga warui",
    english: "inconvenient (time)",
    bengali: "অসুবিধাজনক সময়",
    category: "Adjective",
    conjugation: {
      negative: { word: "都合がよくない", reading: "つごうがよくない", english: "not inconvenient", bengali: "অসুবিধাজনক নয়" },
      past: { word: "都合がわるかった", reading: "つごうがわるかった", english: "was inconvenient", bengali: "অসুবিধাজনক ছিল" },
      pastNegative: { word: "都合がわるくなかった", reading: "つごうがわるくなかった", english: "was not inconvenient", bengali: "অসুবিধাজনক ছিল না" }
    }
  },
  {
    id: "26-43",
    word: "新聞社",
    reading: "しんぶんしゃ",
    romaji: "shinbunsha",
    english: "newspaper company",
    bengali: "সংবাদপত্র কোম্পানি",
    category: "Noun",
    examples: []
  },
  {
    id: "26-44",
    word: "柔道",
    reading: "じゅうどう",
    romaji: "juudou",
    english: "judo",
    bengali: "জুডো",
    category: "Noun",
    examples: []
  },
  {
    id: "26-45",
    word: "子供の日",
    reading: "こどものひ",
    romaji: "kodomo no hi",
    english: "Children's Day",
    bengali: "শিশু দিবস",
    category: "Noun",
    examples: []
  },
  {
    id: "26-46",
    word: "お湯",
    reading: "おゆ",
    romaji: "oyu",
    english: "hot water",
    bengali: "গরম পানি",
    category: "Noun",
    examples: []
  },
  {
    id: "26-47",
    word: "電子メール",
    reading: "でんしメール",
    romaji: "denshi meeru",
    english: "e-mail",
    bengali: "ইলেকট্রনিক মেইল / ই-মেইল",
    category: "Noun",
    examples: []
  },
  {
    id: "26-48",
    word: "別の",
    reading: "べつの",
    romaji: "betsu no",
    english: "another, different",
    bengali: "আলাদা / অন্য",
    category: "Adjective",
    examples: []
  },

  // Lesson 27
  {
    id: "27-1",
    word: "飼います",
    reading: "かいます",
    romaji: "kaimasu",
    english: "to keep (a pet)",
    bengali: "পালন করা (পোষা প্রাণী)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "飼う", reading: "かう", english: "to keep", bengali: "পোষা" },
      masu: { word: "飼います", reading: "かいます", english: "keep (polite)", bengali: "পুষি" },
      te: { word: "飼って", reading: "かって", english: "keeping", bengali: "পুষে" },
      nai: { word: "飼わない", reading: "かわない", english: "not keep", bengali: "পুষি না" }
    }
  },
  {
    id: "27-2",
    word: "走ります",
    reading: "はしります",
    romaji: "hashirimasu",
    english: "to run, to drive",
    bengali: "দৌড়ানো / ড্রাইভ করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "走る", reading: "はしる", english: "to run", bengali: "দৌড়ানো" },
      masu: { word: "走ります", reading: "はしります", english: "run (polite)", bengali: "দৌড়াই" },
      te: { word: "走って", reading: "はしって", english: "running", bengali: "দৌড়ে" },
      nai: { word: "走らない", reading: "はしらない", english: "not run", bengali: "দৌড়াই না" }
    }
  },
  {
    id: "27-3",
    word: "見えます",
    reading: "みえます",
    romaji: "miemasu",
    english: "can be seen",
    bengali: "দেখতে পারা",
    category: "Verb",
    examples: []
  },
  {
    id: "27-4",
    word: "聞こえます",
    reading: "きこえます",
    romaji: "kikoemasu",
    english: "can be heard",
    bengali: "শুনতে পারা",
    category: "Verb",
    examples: []
  },
  {
    id: "27-5",
    word: "できます",
    reading: "できます",
    romaji: "dekimasu",
    english: "be made, be completed",
    bengali: "তৈরি হওয়া / সমাপ্ত হওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "できる", reading: "できる", english: "to be able to", bengali: "পারা" },
      masu: { word: "できます", reading: "できます", english: "can (polite)", bengali: "পারি" },
      te: { word: "できて", reading: "できて", english: "being able to", bengali: "পেরে" },
      nai: { word: "できない", reading: "できない", english: "cannot", bengali: "পারি না" }
    }
  },
  {
    id: "27-6",
    word: "開きます",
    reading: "ひらきます",
    romaji: "hirakimasu",
    english: "to open, to hold",
    bengali: "খোলা / চালু করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "開く", reading: "ひらく", english: "to open", bengali: "খোলা" },
      masu: { word: "開きます", reading: "ひらきます", english: "open (polite)", bengali: "খুলি" },
      te: { word: "開いて", reading: "ひらいて", english: "opening", bengali: "খুলে" },
      nai: { word: "開かない", reading: "ひらかない", english: "not open", bengali: "খুলি না" }
    }
  },
  {
    id: "27-7",
    word: "心配",
    reading: "しんぱい",
    romaji: "shinpai",
    english: "worry, concern",
    bengali: "দুশ্চিন্তা / উদ্বিগ্ন",
    category: "Noun",
    examples: []
  },
  {
    id: "27-8",
    word: "ペット",
    reading: "ペット",
    romaji: "petto",
    english: "pet",
    bengali: "পোষা প্রাণী",
    category: "Noun",
    examples: []
  },
  {
    id: "27-9",
    word: "鳥",
    reading: "とり",
    romaji: "tori",
    english: "bird",
    bengali: "পাখি",
    category: "Noun",
    examples: []
  },
  {
    id: "27-10",
    word: "声",
    reading: "こえ",
    romaji: "koe",
    english: "voice",
    bengali: "কণ্ঠস্বর",
    category: "Noun",
    examples: []
  },
  {
    id: "27-11",
    word: "波",
    reading: "なみ",
    romaji: "nami",
    english: "wave",
    bengali: "ঢেউ",
    category: "Noun",
    examples: []
  },
  {
    id: "27-12",
    word: "花火",
    reading: "はなび",
    romaji: "hanabi",
    english: "fireworks",
    bengali: "আতশবাজি",
    category: "Noun",
    examples: []
  },
  {
    id: "27-13",
    word: "道具",
    reading: "どうぐ",
    romaji: "dougu",
    english: "tool, instrument",
    bengali: "সরঞ্জাম / যন্ত্রপাতি",
    category: "Noun",
    examples: []
  },
  {
    id: "27-14",
    word: "クリーニング",
    reading: "クリーニング",
    romaji: "kuriiningu",
    english: "cleaning, laundry",
    bengali: "পরিষ্কার করা / লন্ড্রি",
    category: "Noun",
    examples: []
  },
  {
    id: "27-15",
    word: "家",
    reading: "いえ",
    romaji: "ie",
    english: "house",
    bengali: "বাড়ি",
    category: "Noun",
    examples: []
  },
  {
    id: "27-16",
    word: "マンション",
    reading: "マンション",
    romaji: "manshon",
    english: "mansion, apartment",
    bengali: "ফ্ল্যাট / বাসাবাড়ি",
    category: "Noun",
    examples: []
  },
  {
    id: "27-17",
    word: "キッチン",
    reading: "キッチン",
    romaji: "kitchin",
    english: "kitchen",
    bengali: "রান্নাঘর",
    category: "Noun",
    examples: []
  },
  {
    id: "27-18",
    word: "はっきり",
    reading: "はっきり",
    romaji: "hakkiri",
    english: "clearly",
    bengali: "পরিষ্কারভাবে / স্পষ্টভাবে",
    category: "Adverb",
    examples: []
  },
  {
    id: "27-19",
    word: "休みを取ります",
    reading: "やすみをとります",
    romaji: "yasumi o torimasu",
    english: "to take a holiday",
    bengali: "ছুটি নেওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "休みを取る", reading: "やすみをとる", english: "to take a holiday", bengali: "ছুটি নেওয়া" },
      masu: { word: "休みを取ります", reading: "やすみをとります", english: "take a holiday (polite)", bengali: "ছুটি নিই" },
      te: { word: "休みを取って", reading: "やすみをとって", english: "taking a holiday", bengali: "ছুটি নিয়ে" },
      nai: { word: "休みを取らない", reading: "やすみをとらない", english: "not take a holiday", bengali: "ছুটি নিই না" }
    }
  },
  {
    id: "27-20",
    word: "漫画",
    reading: "まんが",
    romaji: "manga",
    english: "cartoon, comic",
    bengali: "কার্টুন / কমিকস",
    category: "Noun",
    examples: []
  },
  {
    id: "27-21",
    word: "ロボット",
    reading: "ロボット",
    romaji: "robotto",
    english: "robot",
    bengali: "রোবট",
    category: "Noun",
    examples: []
  },
  {
    id: "27-22",
    word: "家具",
    reading: "かぐ",
    romaji: "kagu",
    english: "furniture",
    bengali: "আসবাবপত্র",
    category: "Noun",
    examples: []
  },
  {
    id: "27-23",
    word: "本棚",
    reading: "ほんだな",
    romaji: "hondana",
    english: "bookshelf",
    bengali: "বইয়ের তাক",
    category: "Noun",
    examples: []
  },
  {
    id: "27-24",
    word: "いつか",
    reading: "いつか",
    romaji: "itsuka",
    english: "someday",
    bengali: "একদিন",
    category: "Adverb",
    examples: []
  },
  {
    id: "27-25",
    word: "建てます",
    reading: "たてます",
    romaji: "tatemasu",
    english: "to build",
    bengali: "নির্মাণ করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "建てる", reading: "たてる", english: "to build", bengali: "নির্মাণ করা" },
      masu: { word: "建てます", reading: "たてます", english: "build (polite)", bengali: "নির্মাণ করি" },
      te: { word: "建てて", reading: "たてて", english: "building", bengali: "নির্মাণ করে" },
      nai: { word: "建てない", reading: "たてない", english: "not build", bengali: "নির্মাণ করি না" }
    }
  },
  {
    id: "27-26",
    word: "素晴らしい",
    reading: "すばらしい",
    romaji: "subarashii",
    english: "wonderful",
    bengali: "চমৎকার",
    category: "Adjective",
    conjugation: {
      negative: { word: "素晴らしくない", reading: "すばらしくない", english: "not wonderful", bengali: "চমৎকার নয়" },
      past: { word: "素晴らしかった", reading: "すばらしかった", english: "was wonderful", bengali: "চমৎকার ছিল" },
      pastNegative: { word: "素晴らしくなかった", reading: "すばらしくなかった", english: "was not wonderful", bengali: "চমৎকার ছিল না" }
    }
  },
  {
    id: "27-27",
    word: "子供たち",
    reading: "こどもたち",
    romaji: "kodomotachi",
    english: "children",
    bengali: "বাচ্চারা",
    category: "Noun",
    examples: []
  },
  {
    id: "27-28",
    word: "大好き",
    reading: "だいすき",
    romaji: "daisuki",
    english: "love, like very much",
    bengali: "খুব পছন্দ করা",
    category: "Adjective",
    conjugation: {
      negative: { word: "大好きじゃない", reading: "だいすきじゃない", english: "not love", bengali: "খুব পছন্দ করি না" },
      past: { word: "大好きだった", reading: "だいすきだった", english: "loved", bengali: "খুব পছন্দ করতাম" },
      pastNegative: { word: "大好きじゃなかった", reading: "だいすきじゃなかった", english: "did not love", bengali: "খুব পছন্দ করতাম না" }
    }
  },
  {
    id: "27-29",
    word: "主人公",
    reading: "しゅじんこう",
    romaji: "shujinkou",
    english: "hero, heroine",
    bengali: "নায়ক/নায়িকা",
    category: "Noun",
    examples: []
  },
  {
    id: "27-30",
    word: "形",
    reading: "かたち",
    romaji: "katachi",
    english: "shape",
    bengali: "আকার / আকৃতি",
    category: "Noun",
    examples: []
  },
  {
    id: "27-31",
    word: "不思議",
    reading: "ふしぎ",
    romaji: "fushigi",
    english: "mysterious, strange",
    bengali: "রহস্যময় / অদ্ভুত",
    category: "Adjective",
    conjugation: {
      negative: { word: "不思議じゃない", reading: "ふしぎじゃない", english: "not mysterious", bengali: "অদ্ভুত নয়" },
      past: { word: "不思議だった", reading: "ふしぎだった", english: "was mysterious", bengali: "অদ্ভুত ছিল" },
      pastNegative: { word: "不思議じゃなかった", reading: "ふしぎじゃなかった", english: "was not mysterious", bengali: "অদ্ভুত ছিল না" }
    }
  },
  {
    id: "27-32",
    word: "ポケット",
    reading: "ポケット",
    romaji: "poketto",
    english: "pocket",
    bengali: "পকেট",
    category: "Noun",
    examples: []
  },
  {
    id: "27-33",
    word: "例えば",
    reading: "たとえば",
    romaji: "tatoeba",
    english: "for example",
    bengali: "উদাহরণস্বরূপ",
    category: "Adverb",
    examples: []
  },
  {
    id: "27-34",
    word: "付けます",
    reading: "つけます",
    romaji: "tsukemasu",
    english: "to attach",
    bengali: "সংযুক্ত করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "付ける", reading: "つける", english: "to attach", bengali: "সংযুক্ত করা" },
      masu: { word: "付けます", reading: "つけます", english: "attach (polite)", bengali: "সংযুক্ত করি" },
      te: { word: "付けて", reading: "つけて", english: "attaching", bengali: "সংযুক্ত করে" },
      nai: { word: "付けない", reading: "つけない", english: "not attach", bengali: "সংযুক্ত করি না" }
    }
  },
  {
    id: "27-35",
    word: "自由に",
    reading: "じゆうに",
    romaji: "jiyuu ni",
    english: "freely",
    bengali: "স্বাধীনভাবে",
    category: "Adverb",
    examples: []
  },
  {
    id: "27-36",
    word: "空",
    reading: "そら",
    romaji: "sora",
    english: "sky",
    bengali: "আকাশ",
    category: "Noun",
    examples: []
  },
  {
    id: "27-37",
    word: "飛びます",
    reading: "とびます",
    romaji: "tobimasu",
    english: "to fly",
    bengali: "ওড়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "飛ぶ", reading: "とぶ", english: "to fly", bengali: "ওড়া" },
      masu: { word: "飛びます", reading: "とびます", english: "fly (polite)", bengali: "উড়ি" },
      te: { word: "飛んで", reading: "とんで", english: "flying", bengali: "উড়ে" },
      nai: { word: "飛ばない", reading: "とばない", english: "not fly", bengali: "উড়ি না" }
    }
  },
  {
    id: "27-38",
    word: "昔",
    reading: "むかし",
    romaji: "mukashi",
    english: "old times",
    bengali: "প্রাচীনকাল",
    category: "Noun",
    examples: []
  },
  {
    id: "27-39",
    word: "自分",
    reading: "じぶん",
    romaji: "jibun",
    english: "oneself",
    bengali: "নিজের",
    category: "Noun",
    examples: []
  },
  {
    id: "27-40",
    word: "将来",
    reading: "しょうらい",
    romaji: "shourai",
    english: "future",
    bengali: "ভবিষ্যৎ",
    category: "Noun",
    examples: []
  },
  {
    id: "27-41",
    word: "景色",
    reading: "けしき",
    romaji: "keshiki",
    english: "scenery",
    bengali: "দৃশ্য",
    category: "Noun",
    examples: []
  },
  {
    id: "27-42",
    word: "昼間",
    reading: "ひるま",
    romaji: "hiruma",
    english: "daytime",
    bengali: "দিনের বেলা",
    category: "Noun",
    examples: []
  },
  {
    id: "27-43",
    word: "ほとんど",
    reading: "ほとんど",
    romaji: "hotondo",
    english: "almost all",
    bengali: "প্রায় সব",
    category: "Adverb",
    examples: []
  },

  // Lesson 28
  {
    id: "28-1",
    word: "売れます",
    reading: "うれます",
    romaji: "uremasu",
    english: "to sell, to be sold",
    bengali: "বিক্রি হওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "売れる", reading: "うれる", english: "to sell", bengali: "বিক্রি হওয়া" },
      masu: { word: "売れます", reading: "うれます", english: "sell (polite)", bengali: "বিক্রি হয়" },
      te: { word: "売れて", reading: "うれて", english: "selling", bengali: "বিক্রি হয়ে" },
      nai: { word: "売れない", reading: "うれない", english: "not sell", bengali: "বিক্রি হয় না" }
    }
  },
  {
    id: "28-2",
    word: "踊ります",
    reading: "おどります",
    romaji: "odorimasu",
    english: "to dance",
    bengali: "নাচা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "踊る", reading: "おどる", english: "to dance", bengali: "নাচা" },
      masu: { word: "踊ります", reading: "おどります", english: "dance (polite)", bengali: "নাচি" },
      te: { word: "踊って", reading: "おどって", english: "dancing", bengali: "নেচে" },
      nai: { word: "踊らない", reading: "おどらない", english: "not dance", bengali: "নাচি না" }
    }
  },
  {
    id: "28-3",
    word: "噛みます",
    reading: "かみます",
    romaji: "kamimasu",
    english: "to chew, to bite",
    bengali: "চিবানো / কামড়ানো",
    category: "Verb",
    conjugation: {
      dictionary: { word: "噛む", reading: "かむ", english: "to chew", bengali: "চিবানো" },
      masu: { word: "噛みます", reading: "かみます", english: "chew (polite)", bengali: "চিবাই" },
      te: { word: "噛んで", reading: "かんで", english: "chewing", bengali: "চিবিয়ে" },
      nai: { word: "噛まない", reading: "かまない", english: "not chew", bengali: "চিবাই না" }
    }
  },
  {
    id: "28-4",
    word: "選びます",
    reading: "えらびます",
    romaji: "erabimasu",
    english: "to choose",
    bengali: "বেছে নেওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "選ぶ", reading: "えらぶ", english: "to choose", bengali: "বেছে নেওয়া" },
      masu: { word: "選びます", reading: "えらびます", english: "choose (polite)", bengali: "বেছে নিই" },
      te: { word: "選んで", reading: "えらんで", english: "choosing", bengali: "বেছে নিয়ে" },
      nai: { word: "選ばない", reading: "えらばない", english: "not choose", bengali: "বেছে নিই না" }
    }
  },
  {
    id: "28-5",
    word: "通います",
    reading: "かよいます",
    romaji: "kayoimasu",
    english: "to commute",
    bengali: "যাতায়াত করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "通う", reading: "かよう", english: "to commute", bengali: "যাতায়াত করা" },
      masu: { word: "通います", reading: "かよいます", english: "commute (polite)", bengali: "যাতায়াত করি" },
      te: { word: "通って", reading: "かよって", english: "commuting", bengali: "যাতায়াত করে" },
      nai: { word: "通わない", reading: "かよわない", english: "not commute", bengali: "যাতায়াত করি না" }
    }
  },
  {
    id: "28-6",
    word: "メモします",
    reading: "メモします",
    romaji: "memo shimasu",
    english: "to take notes",
    bengali: "নোট করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "メモする", reading: "メモする", english: "to take notes", bengali: "নোট করা" },
      masu: { word: "メモします", reading: "メモします", english: "take notes (polite)", bengali: "নোট করি" },
      te: { word: "メモして", reading: "メモして", english: "taking notes", bengali: "নোট করে" },
      nai: { word: "メモしない", reading: "メモしない", english: "not take notes", bengali: "নোট করি না" }
    }
  },
  {
    id: "28-7",
    word: "真面目",
    reading: "まじめ",
    romaji: "majime",
    english: "serious, earnest",
    bengali: "গম্ভীর / আন্তরিক",
    category: "Adjective",
    conjugation: {
      negative: { word: "真面目じゃない", reading: "まじめじゃない", english: "not serious", bengali: "গম্ভীর নয়" },
      past: { word: "真面目だった", reading: "まじめだった", english: "was serious", bengali: "গম্ভীর ছিল" },
      pastNegative: { word: "真面目じゃなかった", reading: "まじめじゃなかった", english: "was not serious", bengali: "গম্ভীর ছিল না" }
    }
  },
  {
    id: "28-8",
    word: "熱心",
    reading: "ねっしん",
    romaji: "nesshin",
    english: "enthusiastic",
    bengali: "উৎসাহী",
    category: "Adjective",
    conjugation: {
      negative: { word: "熱心じゃない", reading: "ねっしんじゃない", english: "not enthusiastic", bengali: "উৎসাহী নয়" },
      past: { word: "熱心だった", reading: "ねっしんだった", english: "was enthusiastic", bengali: "উৎসাহী ছিল" },
      pastNegative: { word: "熱心じゃなかった", reading: "ねっしんじゃなかった", english: "was not enthusiastic", bengali: "উৎসাহী ছিল না" }
    }
  },
  {
    id: "28-9",
    word: "偉い",
    reading: "えらい",
    romaji: "erai",
    english: "great, admirable",
    bengali: "মহান / প্রশংসনীয়",
    category: "Adjective",
    conjugation: {
      negative: { word: "偉くない", reading: "えらくない", english: "not great", bengali: "মহান নয়" },
      past: { word: "偉かった", reading: "えらかった", english: "was great", bengali: "মহান ছিল" },
      pastNegative: { word: "偉くなかった", reading: "えらくなかった", english: "was not great", bengali: "মহান ছিল না" }
    }
  },
  {
    id: "28-10",
    word: "ちょうどいい",
    reading: "ちょうどいい",
    romaji: "choudo ii",
    english: "just right",
    bengali: "ঠিকঠাক",
    category: "Adjective",
    examples: []
  },
  {
    id: "28-11",
    word: "景色",
    reading: "けしき",
    romaji: "keshiki",
    english: "scenery",
    bengali: "দৃশ্য",
    category: "Noun",
    examples: []
  },
  {
    id: "28-12",
    word: "美容院",
    reading: "びよういん",
    romaji: "biyouin",
    english: "beauty salon",
    bengali: "বিউটি পার্লার",
    category: "Noun",
    examples: []
  },
  {
    id: "28-13",
    word: "台所",
    reading: "だいどころ",
    romaji: "daidokoro",
    english: "kitchen",
    bengali: "রান্নাঘর",
    category: "Noun",
    examples: []
  },
  {
    id: "28-14",
    word: "経験",
    reading: "けいけん",
    romaji: "keiken",
    english: "experience",
    bengali: "অভিজ্ঞতা",
    category: "Noun",
    examples: []
  },
  {
    id: "28-15",
    word: "力",
    reading: "ちから",
    romaji: "chikara",
    english: "power, strength",
    bengali: "শক্তি",
    category: "Noun",
    examples: []
  },
  {
    id: "28-16",
    word: "人気",
    reading: "にんき",
    romaji: "ninki",
    english: "popularity",
    bengali: "জনপ্রিয়তা",
    category: "Noun",
    examples: []
  },
  {
    id: "28-17",
    word: "形",
    reading: "かたち",
    romaji: "katachi",
    english: "shape",
    bengali: "আকার",
    category: "Noun",
    examples: []
  },
  {
    id: "28-18",
    word: "色",
    reading: "いろ",
    romaji: "iro",
    english: "color",
    bengali: "রঙ",
    category: "Noun",
    examples: []
  },
  {
    id: "28-19",
    word: "味",
    reading: "あじ",
    romaji: "aji",
    english: "taste",
    bengali: "স্বাদ",
    category: "Noun",
    examples: []
  },
  {
    id: "28-20",
    word: "ガム",
    reading: "ガム",
    romaji: "gamu",
    english: "chewing gum",
    bengali: "চুইংগাম",
    category: "Noun",
    examples: []
  },
  {
    id: "28-21",
    word: "品物",
    reading: "しなもの",
    romaji: "shinamono",
    english: "goods, article",
    bengali: "জিনিসপত্র",
    category: "Noun",
    examples: []
  },
  {
    id: "28-22",
    word: "値段",
    reading: "ねだん",
    romaji: "nedan",
    english: "price",
    bengali: "দাম",
    category: "Noun",
    examples: []
  },
  {
    id: "28-23",
    word: "給料",
    reading: "きゅうりょう",
    romaji: "kyuuryou",
    english: "salary",
    bengali: "বেতন",
    category: "Noun",
    examples: []
  },
  {
    id: "28-24",
    word: "ボーナス",
    reading: "ボーナス",
    romaji: "boonasu",
    english: "bonus",
    bengali: "বোনাস",
    category: "Noun",
    examples: []
  },
  {
    id: "28-25",
    word: "番組",
    reading: "ばんぐみ",
    romaji: "bangumi",
    english: "program",
    bengali: "অনুষ্ঠান",
    category: "Noun",
    examples: []
  },
  {
    id: "28-26",
    word: "ドラマ",
    reading: "ドラマ",
    romaji: "dorama",
    english: "drama",
    bengali: "নাটক",
    category: "Noun",
    examples: []
  },
  {
    id: "28-27",
    word: "歌手",
    reading: "かしゅ",
    romaji: "kashu",
    english: "singer",
    bengali: "গায়ক",
    category: "Noun",
    examples: []
  },
  {
    id: "28-28",
    word: "小説",
    reading: "しょうせつ",
    romaji: "shousetsu",
    english: "novel",
    bengali: "উপন্যাস",
    category: "Noun",
    examples: []
  },
  {
    id: "28-29",
    word: "小説家",
    reading: "しょうせつか",
    romaji: "shousetsuka",
    english: "novelist",
    bengali: "ঔপন্যাসিক",
    category: "Noun",
    examples: []
  },
  {
    id: "28-30",
    word: "息子",
    reading: "むすこ",
    romaji: "musuko",
    english: "son",
    bengali: "ছেলে",
    category: "Noun",
    examples: []
  },
  {
    id: "28-31",
    word: "娘",
    reading: "むすめ",
    romaji: "musume",
    english: "daughter",
    bengali: "মেয়ে",
    category: "Noun",
    examples: []
  },
  {
    id: "28-32",
    word: "しばらく",
    reading: "しばらく",
    romaji: "shibaraku",
    english: "for a while",
    bengali: "কিছুক্ষণ",
    category: "Adverb",
    examples: []
  },
  {
    id: "28-33",
    word: "たいてい",
    reading: "たいてい",
    romaji: "taitei",
    english: "usually",
    bengali: "সাধারণত",
    category: "Adverb",
    examples: []
  },
  {
    id: "28-34",
    word: "それに",
    reading: "それに",
    romaji: "sore ni",
    english: "moreover, besides",
    bengali: "তাছাড়া",
    category: "Expression",
    examples: []
  },
  {
    id: "28-35",
    word: "それで",
    reading: "それで",
    romaji: "sore de",
    english: "therefore, so",
    bengali: "তাই / সেই কারণে",
    category: "Expression",
    examples: []
  },
  {
    id: "28-36",
    word: "お知らせ",
    reading: "おしらせ",
    romaji: "oshirase",
    english: "notice, announcement",
    bengali: "নোটিশ / ঘোষণা",
    category: "Noun",
    examples: []
  },
  {
    id: "28-37",
    word: "日にち",
    reading: "ひにち",
    romaji: "hinichi",
    english: "date",
    bengali: "তারিখ",
    category: "Noun",
    examples: []
  },
  {
    id: "28-38",
    word: "土曜日",
    reading: "どようび",
    romaji: "doyoubi",
    english: "Saturday",
    bengali: "শনিবার",
    category: "Noun",
    examples: []
  },
  {
    id: "28-39",
    word: "体育館",
    reading: "たいいくかん",
    romaji: "taiikukan",
    english: "gymnasium",
    bengali: "জিমনেসিয়াম",
    category: "Noun",
    examples: []
  },
  {
    id: "28-40",
    word: "無料",
    reading: "むりょう",
    romaji: "muryou",
    english: "free of charge",
    bengali: "বিনামূল্যে",
    category: "Noun",
    examples: []
  },

  // Lesson 29
  {
    id: "29-1",
    word: "開きます",
    reading: "あきます",
    romaji: "akimasu",
    english: "to open (door)",
    bengali: "খোলা (দরজা)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "開く", reading: "あく", english: "to open", bengali: "খোলা" },
      masu: { word: "開きます", reading: "あきます", english: "open (polite)", bengali: "খুলে" },
      te: { word: "開いて", reading: "あいて", english: "opening", bengali: "খুলে" },
      nai: { word: "開かない", reading: "あかない", english: "not open", bengali: "খুলে না" }
    }
  },
  {
    id: "29-2",
    word: "閉まります",
    reading: "しまります",
    romaji: "shimarimasu",
    english: "to close (door)",
    bengali: "বন্ধ হওয়া (দরজা)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "閉まる", reading: "しまる", english: "to close", bengali: "বন্ধ হওয়া" },
      masu: { word: "閉まります", reading: "しまります", english: "close (polite)", bengali: "বন্ধ হয়" },
      te: { word: "閉まって", reading: "しまって", english: "closing", bengali: "বন্ধ হয়ে" },
      nai: { word: "閉まらない", reading: "しまらない", english: "not close", bengali: "বন্ধ হয় না" }
    }
  },
  {
    id: "29-3",
    word: "つきます",
    reading: "つきます",
    romaji: "tsukimasu",
    english: "to come on (light)",
    bengali: "জ্বলা (বাতি)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "つく", reading: "つく", english: "to come on", bengali: "জ্বলা" },
      masu: { word: "つきます", reading: "つきます", english: "come on (polite)", bengali: "জ্বলে" },
      te: { word: "ついて", reading: "ついて", english: "coming on", bengali: "জ্বলে" },
      nai: { word: "つかない", reading: "つかない", english: "not come on", bengali: "জ্বলে না" }
    }
  },
  {
    id: "29-4",
    word: "消えます",
    reading: "きえます",
    romaji: "kiemasu",
    english: "to go off (light)",
    bengali: "নিভে যাওয়া (বাতি)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "消える", reading: "きえる", english: "to go off", bengali: "নিভে যাওয়া" },
      masu: { word: "消えます", reading: "きえます", english: "go off (polite)", bengali: "নিভে যায়" },
      te: { word: "消えて", reading: "きえて", english: "going off", bengali: "নিভে গিয়ে" },
      nai: { word: "消えない", reading: "きえない", english: "not go off", bengali: "নিভে যায় না" }
    }
  },
  {
    id: "29-5",
    word: "壊れます",
    reading: "こわれます",
    romaji: "kowaremasu",
    english: "to break (chair)",
    bengali: "ভেঙে যাওয়া (চেয়ার)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "壊れる", reading: "こわれる", english: "to break", bengali: "ভেঙে যাওয়া" },
      masu: { word: "壊れます", reading: "こわれます", english: "break (polite)", bengali: "ভেঙে যায়" },
      te: { word: "壊れて", reading: "こわれて", english: "breaking", bengali: "ভেঙে গিয়ে" },
      nai: { word: "壊れない", reading: "こわれない", english: "not break", bengali: "ভেঙে যায় না" }
    }
  },
  {
    id: "29-6",
    word: "割れます",
    reading: "われます",
    romaji: "waremasu",
    english: "to smash (glass)",
    bengali: "ফেটে যাওয়া (গ্লাস)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "割れる", reading: "われる", english: "to smash", bengali: "ফেটে যাওয়া" },
      masu: { word: "割れます", reading: "われます", english: "smash (polite)", bengali: "ফেটে যায়" },
      te: { word: "割れて", reading: "われて", english: "smashing", bengali: "ফেটে গিয়ে" },
      nai: { word: "割れない", reading: "われない", english: "not smash", bengali: "ফেটে যায় না" }
    }
  },
  {
    id: "29-7",
    word: "折れます",
    reading: "おれます",
    romaji: "oremasu",
    english: "to break, to snap (tree)",
    bengali: "ভেঙে যাওয়া (গাছ)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "折れる", reading: "おれる", english: "to break", bengali: "ভেঙে যাওয়া" },
      masu: { word: "折れます", reading: "おれます", english: "break (polite)", bengali: "ভেঙে যায়" },
      te: { word: "折れて", reading: "おれて", english: "breaking", bengali: "ভেঙে গিয়ে" },
      nai: { word: "折れない", reading: "おれない", english: "not break", bengali: "ভেঙে যায় না" }
    }
  },
  {
    id: "29-8",
    word: "破れます",
    reading: "やぶれます",
    romaji: "yaburemasu",
    english: "to tear (paper)",
    bengali: "ছিঁড়ে যাওয়া (কাগজ)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "破れる", reading: "やぶれる", english: "to tear", bengali: "ছিঁড়ে যাওয়া" },
      masu: { word: "破れます", reading: "やぶれます", english: "tear (polite)", bengali: "ছিঁড়ে যায়" },
      te: { word: "破れて", reading: "やぶれて", english: "tearing", bengali: "ছিঁড়ে গিয়ে" },
      nai: { word: "破れない", reading: "やぶれない", english: "not tear", bengali: "ছিঁড়ে যায় না" }
    }
  },
  {
    id: "29-9",
    word: "汚れます",
    reading: "よごれます",
    romaji: "yogoremasu",
    english: "to get dirty (clothes)",
    bengali: "নোংরা হওয়া (কাপড়)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "汚れる", reading: "よごれる", english: "to get dirty", bengali: "নোংরা হওয়া" },
      masu: { word: "汚れます", reading: "よごれます", english: "get dirty (polite)", bengali: "নোংরা হয়" },
      te: { word: "汚れて", reading: "よごれて", english: "getting dirty", bengali: "নোংরা হয়ে" },
      nai: { word: "汚れない", reading: "よごれない", english: "not get dirty", bengali: "নোংরা হয় না" }
    }
  },
  {
    id: "29-10",
    word: "付きます",
    reading: "つきます",
    romaji: "tsukimasu",
    english: "to be attached (pocket)",
    bengali: "সংযুক্ত হওয়া (পকেট)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "付く", reading: "つく", english: "to be attached", bengali: "সংযুক্ত হওয়া" },
      masu: { word: "付きます", reading: "つきます", english: "be attached (polite)", bengali: "সংযুক্ত হয়" },
      te: { word: "付いて", reading: "ついて", english: "being attached", bengali: "সংযুক্ত হয়ে" },
      nai: { word: "付かない", reading: "つかない", english: "not be attached", bengali: "সংযুক্ত হয় না" }
    }
  },
  {
    id: "29-11",
    word: "外れます",
    reading: "はずれます",
    romaji: "hazuremasu",
    english: "to be undone (button)",
    bengali: "খুলে যাওয়া (বোতাম)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "外れる", reading: "はずれる", english: "to be undone", bengali: "খুলে যাওয়া" },
      masu: { word: "外れます", reading: "はずれます", english: "be undone (polite)", bengali: "খুলে যায়" },
      te: { word: "外れて", reading: "はずれて", english: "being undone", bengali: "খুলে গিয়ে" },
      nai: { word: "外れない", reading: "はずれない", english: "not be undone", bengali: "খুলে যায় না" }
    }
  },
  {
    id: "29-12",
    word: "止まります",
    reading: "とまります",
    romaji: "tomarimasu",
    english: "to stop (car)",
    bengali: "থামা (গাড়ি)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "止まる", reading: "とまる", english: "to stop", bengali: "থামা" },
      masu: { word: "止まります", reading: "とまります", english: "stop (polite)", bengali: "থামে" },
      te: { word: "止まって", reading: "とまって", english: "stopping", bengali: "থেমে" },
      nai: { word: "止まらない", reading: "とまらない", english: "not stop", bengali: "থামে না" }
    }
  },
  {
    id: "29-13",
    word: "まちがえます",
    reading: "まちがえます",
    romaji: "machigaemasu",
    english: "to make a mistake",
    bengali: "ভুল করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "まちがえる", reading: "まちがえる", english: "to make a mistake", bengali: "ভুল করা" },
      masu: { word: "まちがえます", reading: "まちがえます", english: "make a mistake (polite)", bengali: "ভুল করি" },
      te: { word: "まちがえて", reading: "まちがえて", english: "making a mistake", bengali: "ভুল করে" },
      nai: { word: "まちがえない", reading: "まちがえない", english: "not make a mistake", bengali: "ভুল করি না" }
    }
  },
  {
    id: "29-14",
    word: "落とします",
    reading: "おとします",
    romaji: "otoshimasu",
    english: "to drop, to lose",
    bengali: "ফেলে দেওয়া / হারানো",
    category: "Verb",
    conjugation: {
      dictionary: { word: "落とす", reading: "おとす", english: "to drop", bengali: "ফেলে দেওয়া" },
      masu: { word: "落とします", reading: "おとします", english: "drop (polite)", bengali: "ফেলে দিই" },
      te: { word: "落として", reading: "おとして", english: "dropping", bengali: "ফেলে দিয়ে" },
      nai: { word: "落とさない", reading: "おとさない", english: "not drop", bengali: "ফেলে দিই না" }
    }
  },
  {
    id: "29-15",
    word: "掛かります",
    reading: "かかります",
    romaji: "kakarimasu",
    english: "to be locked (key)",
    bengali: "তালা লাগানো (চাবি)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "掛かる", reading: "かかる", english: "to be locked", bengali: "তালা লাগানো" },
      masu: { word: "掛かります", reading: "かかります", english: "be locked (polite)", bengali: "তালা লাগে" },
      te: { word: "掛かって", reading: "かかって", english: "being locked", bengali: "তালা লেগে" },
      nai: { word: "掛からない", reading: "かからない", english: "not be locked", bengali: "তালা লাগে না" }
    }
  },
  {
    id: "29-16",
    word: "ふきます",
    reading: "ふきます",
    romaji: "fukimasu",
    english: "to wipe",
    bengali: "মোছা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "ふく", reading: "ふく", english: "to wipe", bengali: "মোছা" },
      masu: { word: "ふきます", reading: "ふきます", english: "wipe (polite)", bengali: "মুছি" },
      te: { word: "ふいて", reading: "ふいて", english: "wiping", bengali: "মুছে" },
      nai: { word: "ふかない", reading: "ふかない", english: "not wipe", bengali: "মুছি না" }
    }
  },
  {
    id: "29-17",
    word: "取り替えます",
    reading: "とりかえます",
    romaji: "torikaemasu",
    english: "to change, to replace",
    bengali: "পরিবর্তন করা / বদলানো",
    category: "Verb",
    conjugation: {
      dictionary: { word: "取り替える", reading: "とりかえる", english: "to replace", bengali: "বদলানো" },
      masu: { word: "取り替えます", reading: "とりかえます", english: "replace (polite)", bengali: "বদলাই" },
      te: { word: "取り替えて", reading: "とりかえて", english: "replacing", bengali: "বদলে" },
      nai: { word: "取り替えない", reading: "とりかえない", english: "not replace", bengali: "বদলাই না" }
    }
  },
  {
    id: "29-18",
    word: "片付けます",
    reading: "かたづけます",
    romaji: "katazukemasu",
    english: "to tidy up",
    bengali: "গুছিয়ে রাখা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "片付ける", reading: "かたづける", english: "to tidy up", bengali: "গুছিয়ে রাখা" },
      masu: { word: "片付けます", reading: "かたづけます", english: "tidy up (polite)", bengali: "গুছিয়ে রাখি" },
      te: { word: "片付けて", reading: "かたづけて", english: "tidying up", bengali: "গুছিয়ে রেখে" },
      nai: { word: "片付けない", reading: "かたづけない", english: "not tidy up", bengali: "গুছিয়ে রাখি না" }
    }
  },
  {
    id: "29-19",
    word: "お皿",
    reading: "おさら",
    romaji: "osara",
    english: "plate, dish",
    bengali: "থালা / প্লেট",
    category: "Noun",
    examples: []
  },
  {
    id: "29-20",
    word: "お茶碗",
    reading: "おちゃわん",
    romaji: "ochawan",
    english: "rice bowl",
    bengali: "ভাতের বাটি",
    category: "Noun",
    examples: []
  },
  {
    id: "29-21",
    word: "コップ",
    reading: "コップ",
    romaji: "koppu",
    english: "cup, glass",
    bengali: "কাপ / গ্লাস",
    category: "Noun",
    examples: []
  },
  {
    id: "29-22",
    word: "ガラス",
    reading: "ガラス",
    romaji: "garasu",
    english: "glass",
    bengali: "কাঁচ",
    category: "Noun",
    examples: []
  },
  {
    id: "29-23",
    word: "袋",
    reading: "ふくろ",
    romaji: "fukuro",
    english: "bag",
    bengali: "ব্যাগ / থলে",
    category: "Noun",
    examples: []
  },
  {
    id: "29-24",
    word: "書類",
    reading: "しょるい",
    romaji: "shorui",
    english: "document, paper",
    bengali: "দলিল / নথিপত্র",
    category: "Noun",
    examples: []
  },
  {
    id: "29-25",
    word: "枝",
    reading: "えだ",
    romaji: "eda",
    english: "branch, twig",
    bengali: "শাখা / ডাল",
    category: "Noun",
    examples: []
  },
  {
    id: "29-26",
    word: "駅員",
    reading: "えきいん",
    romaji: "ekiin",
    english: "station employee",
    bengali: "স্টেশন কর্মী",
    category: "Noun",
    examples: []
  },
  {
    id: "29-27",
    word: "交番",
    reading: "こうばん",
    romaji: "kouban",
    english: "police box",
    bengali: "পুলিশ বক্স",
    category: "Noun",
    examples: []
  },
  {
    id: "29-28",
    word: "スピーチ",
    reading: "スピーチ",
    romaji: "supiichi",
    english: "speech",
    bengali: "বক্তৃতা",
    category: "Noun",
    examples: []
  },
  {
    id: "29-29",
    word: "返事",
    reading: "へんじ",
    romaji: "henji",
    english: "reply, answer",
    bengali: "উত্তর",
    category: "Noun",
    examples: []
  },
  {
    id: "29-30",
    word: "お先にどうぞ",
    reading: "おさきにどうぞ",
    romaji: "osaki ni douzo",
    english: "after you, go ahead",
    bengali: "আগে আপনি যান",
    category: "Expression",
    examples: []
  },
  {
    id: "29-31",
    word: "今の電車",
    reading: "いまのでんしゃ",
    romaji: "ima no densha",
    english: "the train which just left",
    bengali: "এইমাত্র ছেড়ে যাওয়া ট্রেন",
    category: "Noun",
    examples: []
  },
  {
    id: "29-32",
    word: "忘れ物",
    reading: "わすれもの",
    romaji: "wasuremono",
    english: "lost property",
    bengali: "ভুলে ফেলে আসা জিনিস",
    category: "Noun",
    examples: []
  },
  {
    id: "29-33",
    word: "このくらい",
    reading: "このくらい",
    romaji: "kono kurai",
    english: "about this size",
    bengali: "এই পরিমাণ / এই সাইজ",
    category: "Adverb",
    examples: []
  },
  {
    id: "29-34",
    word: "側",
    reading: "がわ",
    romaji: "gawa",
    english: "side",
    bengali: "পাশ",
    category: "Noun",
    examples: []
  },
  {
    id: "29-35",
    word: "ポケット",
    reading: "ポケット",
    romaji: "poketto",
    english: "pocket",
    bengali: "পকেট",
    category: "Noun",
    examples: []
  },
  {
    id: "29-36",
    word: "辺",
    reading: "へん",
    romaji: "hen",
    english: "around, neighborhood",
    bengali: "আশেপাশে",
    category: "Noun",
    examples: []
  },
  {
    id: "29-37",
    word: "覚えていません",
    reading: "おぼえていません",
    romaji: "oboete imasen",
    english: "I don't remember",
    bengali: "আমার মনে নেই",
    category: "Expression",
    examples: []
  },
  {
    id: "29-38",
    word: "網棚",
    reading: "あみだな",
    romaji: "amidana",
    english: "luggage rack",
    bengali: "মালামাল রাখার তাক",
    category: "Noun",
    examples: []
  },
  {
    id: "29-39",
    word: "確か",
    reading: "たしか",
    romaji: "tashika",
    english: "I'm sure, if I remember correctly",
    bengali: "সম্ভবত / যদি ঠিক মনে থাকে",
    category: "Adverb",
    examples: []
  },
  {
    id: "29-40",
    word: "地震",
    reading: "じしん",
    romaji: "jishin",
    english: "earthquake",
    bengali: "ভূমিকম্প",
    category: "Noun",
    examples: []
  },
  {
    id: "29-41",
    word: "壁",
    reading: "かべ",
    romaji: "kabe",
    english: "wall",
    bengali: "দেয়াল",
    category: "Noun",
    examples: []
  },
  {
    id: "29-42",
    word: "針",
    reading: "はり",
    romaji: "hari",
    english: "needle, hand (of a clock)",
    bengali: "কাঁটা (ঘড়ির)",
    category: "Noun",
    examples: []
  },
  {
    id: "29-43",
    word: "指します",
    reading: "さします",
    romaji: "sashimasu",
    english: "to point to",
    bengali: "নির্দেশ করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "指す", reading: "さす", english: "to point to", bengali: "নির্দেশ করা" },
      masu: { word: "指します", reading: "さします", english: "point to (polite)", bengali: "নির্দেশ করি" },
      te: { word: "指して", reading: "さして", english: "pointing to", bengali: "নির্দেশ করে" },
      nai: { word: "指さない", reading: "ささない", english: "not point to", bengali: "নির্দেশ করি না" }
    }
  },
  {
    id: "29-44",
    word: "駅前",
    reading: "えきまえ",
    romaji: "ekimae",
    english: "in front of the station",
    bengali: "স্টেশনের সামনে",
    category: "Noun",
    examples: []
  },
  {
    id: "29-45",
    word: "倒れます",
    reading: "たおれます",
    romaji: "taoremasu",
    english: "to fall down",
    bengali: "পড়ে যাওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "倒れる", reading: "たおれる", english: "to fall down", bengali: "পড়ে যাওয়া" },
      masu: { word: "倒れます", reading: "たおれます", english: "fall down (polite)", bengali: "পড়ে যায়" },
      te: { word: "倒れて", reading: "たおれて", english: "falling down", bengali: "পড়ে গিয়ে" },
      nai: { word: "倒れない", reading: "たおれない", english: "not fall down", bengali: "পড়ে যায় না" }
    }
  },
  {
    id: "29-46",
    word: "西",
    reading: "にし",
    romaji: "nishi",
    english: "west",
    bengali: "পশ্চিম",
    category: "Noun",
    examples: []
  },
  {
    id: "29-47",
    word: "方",
    reading: "ほう",
    romaji: "hou",
    english: "direction",
    bengali: "দিক",
    category: "Noun",
    examples: []
  },
  {
    id: "29-48",
    word: "燃えます",
    reading: "もえます",
    romaji: "moemasu",
    english: "to burn",
    bengali: "পোড়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "燃える", reading: "もえる", english: "to burn", bengali: "পোড়া" },
      masu: { word: "燃えます", reading: "もえます", english: "burn (polite)", bengali: "পোড়ে" },
      te: { word: "燃えて", reading: "もえて", english: "burning", bengali: "পুড়ে" },
      nai: { word: "燃えない", reading: "もえない", english: "not burn", bengali: "পোড়ে না" }
    }
  },
  {
    id: "29-49",
    word: "込みます",
    reading: "こみます",
    romaji: "komimasu",
    english: "to be crowded",
    bengali: "ভিড় হওয়া / জনাকীর্ণ",
    category: "Verb",
    conjugation: {
      dictionary: { word: "込む", reading: "こむ", english: "to be crowded", bengali: "ভিড় হওয়া" },
      masu: { word: "込みます", reading: "こみます", english: "be crowded (polite)", bengali: "ভিড় হয়" },
      te: { word: "込んで", reading: "こんで", english: "being crowded", bengali: "ভিড় হয়ে" },
      nai: { word: "込まない", reading: "こまない", english: "not be crowded", bengali: "ভিড় হয় না" }
    }
  },
  {
    id: "29-50",
    word: "空きます",
    reading: "すきます",
    romaji: "sukimasu",
    english: "to be empty, to be less crowded",
    bengali: "ফাঁকা হওয়া / ভিড় কমা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "空く", reading: "すく", english: "to be empty", bengali: "ফাঁকা হওয়া" },
      masu: { word: "空きます", reading: "すきます", english: "be empty (polite)", bengali: "ফাঁকা হয়" },
      te: { word: "空いて", reading: "すいて", english: "being empty", bengali: "ফাঁকা হয়ে" },
      nai: { word: "空かない", reading: "すかない", english: "not be empty", bengali: "ফাঁকা হয় না" }
    }
  },
  {
    id: "29-51",
    word: "ひどい",
    reading: "ひどい",
    romaji: "hidoi",
    english: "terrible, severe",
    bengali: "ভয়ানক / তীব্র",
    category: "Adjective",
    conjugation: {
      negative: { word: "ひどくない", reading: "ひどくない", english: "not terrible", bengali: "ভয়ানক নয়" },
      past: { word: "ひどかった", reading: "ひどかった", english: "was terrible", bengali: "ভয়ানক ছিল" },
      pastNegative: { word: "ひどくなかった", reading: "ひどくなかった", english: "was not terrible", bengali: "ভয়ানক ছিল না" }
    }
  },
  {
    id: "29-52",
    word: "手袋",
    reading: "てぶくろ",
    romaji: "tebukuro",
    english: "gloves",
    bengali: "হাতমোজা / গ্লাভস",
    category: "Noun",
    examples: []
  },
  {
    id: "29-53",
    word: "死にます",
    reading: "しにます",
    romaji: "shinimasu",
    english: "to die",
    bengali: "মারা যাওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "死ぬ", reading: "しぬ", english: "to die", bengali: "মারা যাওয়া" },
      masu: { word: "死にます", reading: "しにます", english: "die (polite)", bengali: "মারা যাই" },
      te: { word: "死んで", reading: "しんで", english: "dying", bengali: "মারা গিয়ে" },
      nai: { word: "死なない", reading: "しなない", english: "not die", bengali: "মারা যাই না" }
    }
  },

  // Lesson 30
  {
    id: "30-1",
    word: "貼ります",
    reading: "はります",
    romaji: "harimasu",
    english: "to put up, to post, to paste",
    bengali: "লাগানো / সাঁটানো",
    category: "Verb",
    conjugation: {
      dictionary: { word: "貼る", reading: "はる", english: "to paste", bengali: "লাগানো" },
      masu: { word: "貼ります", reading: "はります", english: "paste (polite)", bengali: "লাগাই" },
      te: { word: "貼って", reading: "はって", english: "pasting", bengali: "লাগিয়ে" },
      nai: { word: "貼らない", reading: "はらない", english: "not paste", bengali: "লাগাই না" }
    }
  },
  {
    id: "30-2",
    word: "掛けます",
    reading: "かけます",
    romaji: "kakemasu",
    english: "to hang",
    bengali: "ঝোলানো",
    category: "Verb",
    conjugation: {
      dictionary: { word: "掛ける", reading: "かける", english: "to hang", bengali: "ঝোলানো" },
      masu: { word: "掛けます", reading: "かけます", english: "hang (polite)", bengali: "ঝুলাই" },
      te: { word: "掛けて", reading: "かけて", english: "hanging", bengali: "ঝুলিয়ে" },
      nai: { word: "掛けない", reading: "かけない", english: "not hang", bengali: "ঝুলাই না" }
    }
  },
  {
    id: "30-3",
    word: "飾ります",
    reading: "かざります",
    romaji: "kazarimasu",
    english: "to decorate, to display",
    bengali: "সাজানো / প্রদর্শন করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "飾る", reading: "かざる", english: "to decorate", bengali: "সাজানো" },
      masu: { word: "飾ります", reading: "かざります", english: "decorate (polite)", bengali: "সাজাই" },
      te: { word: "飾って", reading: "かざって", english: "decorating", bengali: "সাজিয়ে" },
      nai: { word: "飾らない", reading: "かざらない", english: "not decorate", bengali: "সাজাই না" }
    }
  },
  {
    id: "30-4",
    word: "並べます",
    reading: "ならべます",
    romaji: "narabemasu",
    english: "to line up, to set up",
    bengali: "সারিবদ্ধ করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "並べる", reading: "ならべる", english: "to line up", bengali: "সাজানো" },
      masu: { word: "並べます", reading: "ならべます", english: "line up (polite)", bengali: "সাজাই" },
      te: { word: "並べて", reading: "ならべて", english: "lining up", bengali: "সাজিয়ে" },
      nai: { word: "並べない", reading: "ならべない", english: "not line up", bengali: "সাজাই না" }
    }
  },
  {
    id: "30-5",
    word: "植えます",
    reading: "うえます",
    romaji: "uemasu",
    english: "to plant",
    bengali: "রোপণ করা / লাগানো (গাছ)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "植える", reading: "うえる", english: "to plant", bengali: "রোপণ করা" },
      masu: { word: "植えます", reading: "うえます", english: "plant (polite)", bengali: "রোপণ করি" },
      te: { word: "植えて", reading: "うえて", english: "planting", bengali: "রোপণ করে" },
      nai: { word: "植えない", reading: "うえない", english: "not plant", bengali: "রোপণ করি না" }
    }
  },
  {
    id: "30-6",
    word: "まとめます",
    reading: "まとめます",
    romaji: "matomemasu",
    english: "to put together, to summarize",
    bengali: "একত্রিত করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "まとめる", reading: "まとめる", english: "to put together", bengali: "একত্রিত করা" },
      masu: { word: "まとめます", reading: "まとめます", english: "put together (polite)", bengali: "একত্রিত করি" },
      te: { word: "まとめて", reading: "まとめて", english: "putting together", bengali: "একত্রিত করে" },
      nai: { word: "まとめない", reading: "まとめない", english: "not put together", bengali: "একত্রিত করি না" }
    }
  },
  {
    id: "30-7",
    word: "戻します",
    reading: "もどします",
    romaji: "modoshimasu",
    english: "to return, to put back",
    bengali: "ফেরত দেওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "戻す", reading: "もどす", english: "to put back", bengali: "ফেরত দেওয়া" },
      masu: { word: "戻します", reading: "もどします", english: "put back (polite)", bengali: "ফেরত দিই" },
      te: { word: "戻して", reading: "もどして", english: "putting back", bengali: "ফেরত দিয়ে" },
      nai: { word: "戻さない", reading: "もどさない", english: "not put back", bengali: "ফেরত দিই না" }
    }
  },
  {
    id: "30-8",
    word: "しまいます",
    reading: "しまいます",
    romaji: "shimaimasu",
    english: "to put away",
    bengali: "গুছিয়ে রাখা / দূরে রাখা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "しまう", reading: "しまう", english: "to put away", bengali: "গুছিয়ে রাখা" },
      masu: { word: "しまいます", reading: "しまいます", english: "put away (polite)", bengali: "গুছিয়ে রাখি" },
      te: { word: "しまって", reading: "しまって", english: "putting away", bengali: "গুছিয়ে রেখে" },
      nai: { word: "しまわない", reading: "しまわない", english: "not put away", bengali: "গুছিয়ে রাখি না" }
    }
  },
  {
    id: "30-9",
    word: "決めます",
    reading: "きめます",
    romaji: "kimemasu",
    english: "to decide",
    bengali: "সিদ্ধান্ত নেওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "決める", reading: "きめる", english: "to decide", bengali: "সিদ্ধান্ত নেওয়া" },
      masu: { word: "決めます", reading: "きめます", english: "decide (polite)", bengali: "সিদ্ধান্ত নিই" },
      te: { word: "決めて", reading: "きめて", english: "deciding", bengali: "সিদ্ধান্ত নিয়ে" },
      nai: { word: "決めない", reading: "きめない", english: "not decide", bengali: "সিদ্ধান্ত নিই না" }
    }
  },
  {
    id: "30-10",
    word: "予習します",
    reading: "よしゅうします",
    romaji: "yoshuushimasu",
    english: "to prepare one's lesson",
    bengali: "পূর্বপ্রস্তুতি নেওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "予習する", reading: "よしゅうする", english: "to prepare lesson", bengali: "পূর্বপ্রস্তুতি নেওয়া" },
      masu: { word: "予習します", reading: "よしゅうします", english: "prepare lesson (polite)", bengali: "পূর্বপ্রস্তুতি নিই" },
      te: { word: "予習して", reading: "よしゅうして", english: "preparing lesson", bengali: "পূর্বপ্রস্তুতি নিয়ে" },
      nai: { word: "予習しない", reading: "よしゅうしない", english: "not prepare lesson", bengali: "পূর্বপ্রস্তুতি নিই না" }
    }
  },
  {
    id: "30-11",
    word: "復習します",
    reading: "ふくしゅうします",
    romaji: "fukushuushimasu",
    english: "to review one's lesson",
    bengali: "পুনরালোচনা / রিভিশন দেওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "復習する", reading: "ふくしゅうする", english: "to review lesson", bengali: "রিভিশন দেওয়া" },
      masu: { word: "復習します", reading: "ふくしゅうします", english: "review lesson (polite)", bengali: "রিভিশন দিই" },
      te: { word: "復習して", reading: "ふくしゅうして", english: "reviewing lesson", bengali: "রিভিশন দিয়ে" },
      nai: { word: "復習しない", reading: "ふくしゅうしない", english: "not review lesson", bengali: "রিভিশন দিই না" }
    }
  },
  {
    id: "30-12",
    word: "そのままにします",
    reading: "そのままにします",
    romaji: "sono mama ni shimasu",
    english: "to leave things as they are",
    bengali: "যেমন আছে তেমন রাখা",
    category: "Verb"
  },
  {
    id: "30-13",
    word: "授業",
    reading: "じゅぎょう",
    romaji: "jugyou",
    english: "class",
    bengali: "ক্লাস / শ্রেণি",
    category: "Education"
  },
  {
    id: "30-14",
    word: "講義",
    reading: "こうぎ",
    romaji: "kougi",
    english: "lecture",
    bengali: "লেকচার / বক্তৃতা",
    category: "Education"
  },
  {
    id: "30-15",
    word: "予定",
    reading: "よてい",
    romaji: "yotei",
    english: "plan, schedule",
    bengali: "পরিকল্পনা",
    category: "Miscellaneous"
  },
  {
    id: "30-16",
    word: "カレンダー",
    reading: "カレンダー",
    romaji: "karendaa",
    english: "calendar",
    bengali: "ক্যালেন্ডার",
    category: "Objects"
  },
  {
    id: "30-17",
    word: "ごみ箱",
    reading: "ごみばこ",
    romaji: "gomibako",
    english: "trash can",
    bengali: "ময়লার ঝুড়ি",
    category: "Objects"
  },
  {
    id: "30-18",
    word: "人形",
    reading: "にんぎょう",
    romaji: "ningyou",
    english: "doll",
    bengali: "পুতুল",
    category: "Objects"
  },
  {
    id: "30-19",
    word: "花瓶",
    reading: "かびん",
    romaji: "kabin",
    english: "vase",
    bengali: "ফুলদানি",
    category: "Objects"
  },
  {
    id: "30-20",
    word: "鏡",
    reading: "かがみ",
    romaji: "kagami",
    english: "mirror",
    bengali: "আয়না",
    category: "Objects"
  },
  {
    id: "30-21",
    word: "引き出し",
    reading: "ひきだし",
    romaji: "hikidashi",
    english: "drawer",
    bengali: "ড্রয়ার",
    category: "Objects"
  },
  {
    id: "30-22",
    word: "玄関",
    reading: "げんかん",
    romaji: "genkan",
    english: "entrance hall",
    bengali: "প্রবেশপথ",
    category: "Place"
  },
  {
    id: "30-23",
    word: "廊下",
    reading: "ろうか",
    romaji: "rouka",
    english: "corridor, hallway",
    bengali: "করিডোর",
    category: "Place"
  },
  {
    id: "30-24",
    word: "池",
    reading: "いけ",
    romaji: "ike",
    english: "pond",
    bengali: "পুকুর",
    category: "Nature"
  },
  {
    id: "30-25",
    word: "周り",
    reading: "まわり",
    romaji: "mawari",
    english: "surroundings, neighborhood",
    bengali: "চারপাশ",
    category: "Place"
  },
  {
    id: "30-26",
    word: "真ん中",
    reading: "まんなか",
    romaji: "mannaka",
    english: "center",
    bengali: "কেন্দ্রবিন্দু",
    category: "Place"
  },
  {
    id: "30-27",
    word: "隅",
    reading: "すみ",
    romaji: "sumi",
    english: "corner",
    bengali: "কোণা",
    category: "Place"
  },
  {
    id: "30-28",
    word: "まだ",
    reading: "まだ",
    romaji: "mada",
    english: "still",
    bengali: "এখনও",
    category: "Adverb"
  },
  {
    id: "30-29",
    word: "リュック",
    reading: "リュック",
    romaji: "ryukku",
    english: "backpack",
    bengali: "ব্যাকপ্যাক / পিঠের ব্যাগ",
    category: "Objects"
  },
  {
    id: "30-30",
    word: "非常袋",
    reading: "ひじょうぶくろ",
    romaji: "hijoubukuro",
    english: "emergency kit",
    bengali: "জরুরি ব্যাগ",
    category: "Objects"
  },
  {
    id: "30-31",
    word: "非常時",
    reading: "ひじょうじ",
    romaji: "hijouji",
    english: "emergency",
    bengali: "জরুরি সময়",
    category: "Time"
  },
  {
    id: "30-32",
    word: "生活します",
    reading: "せいかつします",
    romaji: "seikatsushimasu",
    english: "to live, to lead a life",
    bengali: "জীবনযাপন করা",
    category: "Verb"
  },
  {
    id: "30-33",
    word: "懐中電灯",
    reading: "かいちゅうでんとう",
    romaji: "kaichuudentou",
    english: "flashlight",
    bengali: "টর্চলাইট",
    category: "Objects"
  },
  {
    id: "30-34",
    word: "丸い",
    reading: "まるい",
    romaji: "marui",
    english: "round, circular",
    bengali: "গোল / বৃত্তাকার",
    category: "Adjective",
    conjugation: {
      negative: { word: "丸くない", reading: "まるくない", english: "not round", bengali: "গোল নয়" },
      past: { word: "丸かった", reading: "まるかった", english: "was round", bengali: "গোল ছিল" },
      pastNegative: { word: "丸くなかった", reading: "まるくなかった", english: "was not round", bengali: "গোল ছিল না" }
    }
  },
  {
    id: "30-35",
    word: "嬉しい",
    reading: "うれしい",
    romaji: "ureshii",
    english: "happy, glad",
    bengali: "আনন্দিত / খুশি",
    category: "Adjective",
    conjugation: {
      negative: { word: "嬉しくない", reading: "うれしくない", english: "not happy", bengali: "খুশি নয়" },
      past: { word: "嬉しかった", reading: "うれしかった", english: "was happy", bengali: "খুশি ছিল" },
      pastNegative: { word: "嬉しくなかった", reading: "うれしくなかった", english: "was not happy", bengali: "খুশি ছিল না" }
    }
  },
  {
    id: "30-36",
    word: "嫌",
    reading: "いや",
    romaji: "iya",
    english: "hateful, disagreeable",
    bengali: "অপছন্দ / বিরক্তিকর",
    category: "Adjective",
    conjugation: {
      negative: { word: "嫌じゃない", reading: "いやじゃない", english: "not hateful", bengali: "অপছন্দ নয়" },
      past: { word: "嫌だった", reading: "いやだった", english: "was hateful", bengali: "অপছন্দ ছিল" },
      pastNegative: { word: "嫌じゃなかった", reading: "いやじゃなかった", english: "was not hateful", bengali: "অপছন্দ ছিল না" }
    }
  },
  {
    id: "30-37",
    word: "目が覚めます",
    reading: "めがさめます",
    romaji: "me ga samemasu",
    english: "to wake up",
    bengali: "জেগে ওঠা",
    category: "Verb"
  },
  {
    id: "30-38",
    word: "知らせます",
    reading: "しらせます",
    romaji: "shirasemasu",
    english: "to inform",
    bengali: "জানানো",
    category: "Verb"
  },
  {
    id: "30-39",
    word: "相談します",
    reading: "そうだんします",
    romaji: "soudanshimasu",
    english: "to consult, to discuss",
    bengali: "আলোচনা করা",
    category: "Verb"
  },
  {
    id: "30-40",
    word: "ご苦労さま",
    reading: "ごくろうさま",
    romaji: "gokurousama",
    english: "Thank you for your hard work",
    bengali: "পরিশ্রমের জন্য ধন্যবাদ",
    category: "Greetings"
  },
  {
    id: "30-41",
    word: "希望",
    reading: "きぼう",
    romaji: "kibou",
    english: "hope, request",
    bengali: "আশা / অনুরোধ",
    category: "Miscellaneous"
  },

  // Lesson 31
  {
    id: "31-1",
    word: "続けます",
    reading: "つづけます",
    romaji: "tsuzukemasu",
    english: "to continue",
    bengali: "চালিয়ে যাওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "続ける", reading: "つづける", english: "to continue", bengali: "চালিয়ে যাওয়া" },
      masu: { word: "続けます", reading: "つづけます", english: "continue (polite)", bengali: "চালিয়ে যাই" },
      te: { word: "続けて", reading: "つづけて", english: "continuing", bengali: "চালিয়ে গিয়ে" },
      nai: { word: "続けない", reading: "つづけない", english: "not continue", bengali: "চালিয়ে যাই না" }
    }
  },
  {
    id: "31-2",
    word: "見つけます",
    reading: "みつけます",
    romaji: "mitsukemasu",
    english: "to find",
    bengali: "খুঁজে পাওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "見つける", reading: "みつける", english: "to find", bengali: "খুঁজে পাওয়া" },
      masu: { word: "見つけます", reading: "みつけます", english: "find (polite)", bengali: "খুঁজে পাই" },
      te: { word: "見つけて", reading: "みつけて", english: "finding", bengali: "খুঁজে পেয়ে" },
      nai: { word: "見つけない", reading: "みつけない", english: "not find", bengali: "খুঁজে পাই না" }
    }
  },
  {
    id: "31-3",
    word: "取ります",
    reading: "とります",
    romaji: "torimasu",
    english: "to take (a holiday)",
    bengali: "নেওয়া (ছুটি)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "取る", reading: "とる", english: "to take", bengali: "নেওয়া" },
      masu: { word: "取ります", reading: "とります", english: "take (polite)", bengali: "নিই" },
      te: { word: "取って", reading: "とって", english: "taking", bengali: "নিয়ে" },
      nai: { word: "取らない", reading: "とらない", english: "not take", bengali: "নিই না" }
    }
  },
  {
    id: "31-4",
    word: "受けます",
    reading: "うけます",
    romaji: "ukemasu",
    english: "to take (an exam)",
    bengali: "দেওয়া (পরীক্ষা)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "受ける", reading: "うける", english: "to take exam", bengali: "পরীক্ষা দেওয়া" },
      masu: { word: "受けます", reading: "うけます", english: "take exam (polite)", bengali: "পরীক্ষা দিই" },
      te: { word: "受けて", reading: "うけて", english: "taking exam", bengali: "পরীক্ষা দিয়ে" },
      nai: { word: "受けない", reading: "うけない", english: "not take exam", bengali: "পরীক্ষা দিই না" }
    }
  },
  {
    id: "31-5",
    word: "申し込みます",
    reading: "もうしこみます",
    romaji: "moushikomimasu",
    english: "to apply for",
    bengali: "আবেদন করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "申し込む", reading: "もうしこむ", english: "to apply", bengali: "আবেদন করা" },
      masu: { word: "申し込みます", reading: "もうしこみます", english: "apply (polite)", bengali: "আবেদন করি" },
      te: { word: "申し込んで", reading: "もうしこんで", english: "applying", bengali: "আবেদন করে" },
      nai: { word: "申し込まない", reading: "もうしこまない", english: "not apply", bengali: "আবেদন করি না" }
    }
  },
  {
    id: "31-6",
    word: "休憩します",
    reading: "きゅうけいします",
    romaji: "kyuukeishimasu",
    english: "to take a break",
    bengali: "বিরতি নেওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "休憩する", reading: "きゅうけいする", english: "to take break", bengali: "বিরতি নেওয়া" },
      masu: { word: "休憩します", reading: "きゅうけいします", english: "take break (polite)", bengali: "বিরতি নিই" },
      te: { word: "休憩して", reading: "きゅうけいして", english: "taking break", bengali: "বিরতি নিয়ে" },
      nai: { word: "休憩しない", reading: "きゅうけいしない", english: "not take break", bengali: "বিরতি নিই না" }
    }
  },
  {
    id: "31-7",
    word: "連休",
    reading: "れんきゅう",
    romaji: "renkyuu",
    english: "consecutive holidays",
    bengali: "টানা ছুটি",
    category: "Time"
  },
  {
    id: "31-8",
    word: "作文",
    reading: "さくぶん",
    romaji: "sakubun",
    english: "essay, composition",
    bengali: "রচনা",
    category: "Education"
  },
  {
    id: "31-9",
    word: "発表",
    reading: "はっぴょう",
    romaji: "happyou",
    english: "announcement, presentation",
    bengali: "ঘোষণা / উপস্থাপনা",
    category: "Education"
  },
  {
    id: "31-10",
    word: "展覧会",
    reading: "てんらんかい",
    romaji: "tenrankai",
    english: "exhibition",
    bengali: "প্রদর্শনী",
    category: "Entertainment"
  },
  {
    id: "31-11",
    word: "結婚式",
    reading: "けっこんしき",
    romaji: "kekkonshiki",
    english: "wedding ceremony",
    bengali: "বিয়ের অনুষ্ঠান",
    category: "Entertainment"
  },
  {
    id: "31-12",
    word: "葬式",
    reading: "そうしき",
    romaji: "soushiki",
    english: "funeral",
    bengali: "অন্ত্যেষ্টিক্রিয়া",
    category: "Miscellaneous"
  },
  {
    id: "31-13",
    word: "式",
    reading: "しき",
    romaji: "shiki",
    english: "ceremony",
    bengali: "অনুষ্ঠান",
    category: "Miscellaneous"
  },
  {
    id: "31-14",
    word: "本社",
    reading: "ほんしゃ",
    romaji: "honsha",
    english: "head office",
    bengali: "প্রধান কার্যালয়",
    category: "Place"
  },
  {
    id: "31-15",
    word: "支店",
    reading: "してん",
    romaji: "shiten",
    english: "branch office",
    bengali: "শাখা কার্যালয়",
    category: "Place"
  },
  {
    id: "31-16",
    word: "教会",
    reading: "きょうかい",
    romaji: "kyoukai",
    english: "church",
    bengali: "গির্জা",
    category: "Place"
  },
  {
    id: "31-17",
    word: "大学院",
    reading: "だいがくいん",
    romaji: "daigakuin",
    english: "graduate school",
    bengali: "গ্র্যাজুয়েট স্কুল",
    category: "Education"
  },
  {
    id: "31-18",
    word: "動物園",
    reading: "どうぶつえん",
    romaji: "doubutsuen",
    english: "zoo",
    bengali: "চিড়িয়াখানা",
    category: "Place"
  },
  {
    id: "31-19",
    word: "温泉",
    reading: "おんせん",
    romaji: "onsen",
    english: "hot spring",
    bengali: "গরম পানির ঝরনা",
    category: "Place"
  },
  {
    id: "31-20",
    word: "帰り",
    reading: "かえり",
    romaji: "kaeri",
    english: "return, coming back",
    bengali: "ফেরা",
    category: "Miscellaneous"
  },
  {
    id: "31-21",
    word: "お子さん",
    reading: "おこさん",
    romaji: "okosan",
    english: "(someone else's) child",
    bengali: "অন্য কারো সন্তান",
    category: "People"
  },
  {
    id: "31-22",
    word: "〜の方",
    reading: "〜のほう",
    romaji: "~ no hou",
    english: "direction of ~",
    bengali: "-এর দিক",
    category: "Place"
  },
  {
    id: "31-23",
    word: "ずっと",
    reading: "ずっと",
    romaji: "zutto",
    english: "all the time, much more",
    bengali: "সারাক্ষণ / অনেকক্ষণ",
    category: "Adverb"
  },
  {
    id: "31-24",
    word: "残ります",
    reading: "のこります",
    romaji: "nokorimasu",
    english: "to remain, to be left",
    bengali: "অবশিষ্ট থাকা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "残る", reading: "のこる", english: "to remain", bengali: "অবশিষ্ট থাকা" },
      masu: { word: "残ります", reading: "のこります", english: "remain (polite)", bengali: "অবশিষ্ট থাকে" },
      te: { word: "残って", reading: "のこって", english: "remaining", bengali: "অবশিষ্ট থেকে" },
      nai: { word: "残らない", reading: "のこらない", english: "not remain", bengali: "অবশিষ্ট থাকে না" }
    }
  },
  {
    id: "31-25",
    word: "入学試験",
    reading: "にゅうがくしけん",
    romaji: "nyuugakushiken",
    english: "entrance exam",
    bengali: "ভর্তি পরীক্ষা",
    category: "Education"
  },
  {
    id: "31-26",
    word: "月に",
    reading: "つきに",
    romaji: "tsuki ni",
    english: "per month",
    bengali: "মাসে",
    category: "Time"
  },
  {
    id: "31-27",
    word: "村",
    reading: "むら",
    romaji: "mura",
    english: "village",
    bengali: "গ্রাম",
    category: "Place"
  },
  {
    id: "31-28",
    word: "卒業します",
    reading: "そつぎょうします",
    romaji: "sotsugyoushimasu",
    english: "to graduate",
    bengali: "স্নাতক হওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "卒業する", reading: "そつぎょうする", english: "to graduate", bengali: "স্নাতক হওয়া" },
      masu: { word: "卒業します", reading: "そつぎょうします", english: "graduate (polite)", bengali: "স্নাতক হই" },
      te: { word: "卒業して", reading: "そつぎょうして", english: "graduating", bengali: "স্নাতক হয়ে" },
      nai: { word: "卒業しない", reading: "そつぎょうしない", english: "not graduate", bengali: "স্নাতক হই না" }
    }
  },
  {
    id: "31-29",
    word: "映画館",
    reading: "えいがかん",
    romaji: "eigakan",
    english: "movie theater",
    bengali: "সিনেমা হল",
    category: "Place"
  },
  {
    id: "31-30",
    word: "嫌",
    reading: "いや",
    romaji: "iya",
    english: "hateful, disagreeable",
    bengali: "অপছন্দ / বিরক্তিকর",
    category: "Adjective"
  },
  {
    id: "31-31",
    word: "空",
    reading: "そら",
    romaji: "sora",
    english: "sky",
    bengali: "আকাশ",
    category: "Nature"
  },
  {
    id: "31-32",
    word: "閉じます",
    reading: "とじます",
    romaji: "tojimasu",
    english: "to close (eyes, book)",
    bengali: "বন্ধ করা (চোখ, বই)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "閉じる", reading: "とじる", english: "to close", bengali: "বন্ধ করা" },
      masu: { word: "閉じます", reading: "とじます", english: "close (polite)", bengali: "বন্ধ করি" },
      te: { word: "閉じて", reading: "とじて", english: "closing", bengali: "বন্ধ করে" },
      nai: { word: "閉じない", reading: "とじない", english: "not close", bengali: "বন্ধ করি না" }
    }
  },
  {
    id: "31-33",
    word: "都会",
    reading: "とかい",
    romaji: "tokai",
    english: "city",
    bengali: "শহর",
    category: "Place"
  },
  {
    id: "31-34",
    word: "子供たち",
    reading: "こどもたち",
    romaji: "kodomotachi",
    english: "children",
    bengali: "শিশুরা",
    category: "People"
  },
  {
    id: "31-35",
    word: "自由に",
    reading: "じゆうに",
    romaji: "jiyuu ni",
    english: "freely",
    bengali: "মুক্তভাবে",
    category: "Adverb"
  },

  // Lesson 32
  {
    id: "32-1",
    word: "運動します",
    reading: "うんどうします",
    romaji: "undoushimasu",
    english: "to exercise",
    bengali: "ব্যায়াম করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "運動する", reading: "うんどうする", english: "to exercise", bengali: "ব্যায়াম করা" },
      masu: { word: "運動します", reading: "うんどうします", english: "exercise (polite)", bengali: "ব্যায়াম করি" },
      te: { word: "運動して", reading: "うんどうして", english: "exercising", bengali: "ব্যায়াম করে" },
      nai: { word: "運動しない", reading: "うんどうしない", english: "not exercise", bengali: "ব্যায়াম করি না" }
    }
  },
  {
    id: "32-2",
    word: "成功します",
    reading: "せいこうします",
    romaji: "seikoushimasu",
    english: "to succeed",
    bengali: "সফল হওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "成功する", reading: "せいこうする", english: "to succeed", bengali: "সফল হওয়া" },
      masu: { word: "成功します", reading: "せいこうします", english: "succeed (polite)", bengali: "সফল হই" },
      te: { word: "成功して", reading: "せいこうして", english: "succeeding", bengali: "সফল হয়ে" },
      nai: { word: "成功しない", reading: "せいこうしない", english: "not succeed", bengali: "সফল হই না" }
    }
  },
  {
    id: "32-3",
    word: "失敗します",
    reading: "しっぱいします",
    romaji: "shippaishimasu",
    english: "to fail (an exam)",
    bengali: "ব্যর্থ হওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "失敗する", reading: "しっぱいする", english: "to fail", bengali: "ব্যর্থ হওয়া" },
      masu: { word: "失敗します", reading: "しっぱいします", english: "fail (polite)", bengali: "ব্যর্থ হই" },
      te: { word: "失敗して", reading: "しっぱいして", english: "failing", bengali: "ব্যর্থ হয়ে" },
      nai: { word: "失敗しない", reading: "しっぱいしない", english: "not fail", bengali: "ব্যর্থ হই না" }
    }
  },
  {
    id: "32-4",
    word: "合格します",
    reading: "ごうかくします",
    romaji: "goukakushimasu",
    english: "to pass (an exam)",
    bengali: "উত্তীর্ণ হওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "合格する", reading: "ごうかくする", english: "to pass", bengali: "উত্তীর্ণ হওয়া" },
      masu: { word: "合格します", reading: "ごうかくします", english: "pass (polite)", bengali: "উত্তীর্ণ হই" },
      te: { word: "合格して", reading: "ごうかくして", english: "passing", bengali: "উত্তীর্ণ হয়ে" },
      nai: { word: "合格しない", reading: "ごうかくしない", english: "not pass", bengali: "উত্তীর্ণ হই না" }
    }
  },
  {
    id: "32-5",
    word: "戻ります",
    reading: "もどります",
    romaji: "modorimasu",
    english: "to return, to come back",
    bengali: "ফিরে আসা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "戻る", reading: "もどる", english: "to return", bengali: "ফিরে আসা" },
      masu: { word: "戻ります", reading: "もどります", english: "return (polite)", bengali: "ফিরে আসি" },
      te: { word: "戻って", reading: "もどって", english: "returning", bengali: "ফিরে এসে" },
      nai: { word: "戻らない", reading: "もどらない", english: "not return", bengali: "ফিরে আসি না" }
    }
  },
  {
    id: "32-6",
    word: "止みます",
    reading: "やみます",
    romaji: "yamimasu",
    english: "to stop (rain)",
    bengali: "থামা (বৃষ্টি)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "止む", reading: "やむ", english: "to stop", bengali: "থামা" },
      masu: { word: "止みます", reading: "やみます", english: "stop (polite)", bengali: "থামে" },
      te: { word: "止んで", reading: "やんで", english: "stopping", bengali: "থেমে" },
      nai: { word: "止まない", reading: "やまない", english: "not stop", bengali: "থামে না" }
    }
  },
  {
    id: "32-7",
    word: "晴れます",
    reading: "はれます",
    romaji: "haremasu",
    english: "to clear up",
    bengali: "পরিষ্কার হওয়া (আকাশ)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "晴れる", reading: "はれる", english: "to clear up", bengali: "পরিষ্কার হওয়া" },
      masu: { word: "晴れます", reading: "はれます", english: "clear up (polite)", bengali: "পরিষ্কার হয়" },
      te: { word: "晴れて", reading: "はれて", english: "clearing up", bengali: "পরিষ্কার হয়ে" },
      nai: { word: "晴れない", reading: "はれない", english: "not clear up", bengali: "পরিষ্কার হয় না" }
    }
  },
  {
    id: "32-8",
    word: "曇ります",
    reading: "くもります",
    romaji: "kumorimasu",
    english: "to get cloudy",
    bengali: "মেঘলা হওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "曇る", reading: "くもる", english: "to get cloudy", bengali: "মেঘলা হওয়া" },
      masu: { word: "曇ります", reading: "くもります", english: "get cloudy (polite)", bengali: "মেঘলা হয়" },
      te: { word: "曇って", reading: "くもって", english: "getting cloudy", bengali: "মেঘলা হয়ে" },
      nai: { word: "曇らない", reading: "くもらない", english: "not get cloudy", bengali: "মেঘলা হয় না" }
    }
  },
  {
    id: "32-9",
    word: "吹きます",
    reading: "ふきます",
    romaji: "fukimasu",
    english: "to blow (wind)",
    bengali: "প্রবাহিত হওয়া (বাতাস)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "吹く", reading: "ふく", english: "to blow", bengali: "প্রবাহিত হওয়া" },
      masu: { word: "吹きます", reading: "ふきます", english: "blow (polite)", bengali: "প্রবাহিত হয়" },
      te: { word: "吹いて", reading: "ふいて", english: "blowing", bengali: "প্রবাহিত হয়ে" },
      nai: { word: "吹かない", reading: "ふかない", english: "not blow", bengali: "প্রবাহিত হয় না" }
    }
  },
  {
    id: "32-10",
    word: "治ります",
    reading: "なおります",
    romaji: "naorimasu",
    english: "to recover from (sickness), to be fixed",
    bengali: "সেরে ওঠা / মেরামত হওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "治る", reading: "なおる", english: "to recover", bengali: "সেরে ওঠা" },
      masu: { word: "治ります", reading: "なおります", english: "recover (polite)", bengali: "সেরে উঠি" },
      te: { word: "治って", reading: "なおって", english: "recovering", bengali: "সেরে উঠে" },
      nai: { word: "治らない", reading: "なおらない", english: "not recover", bengali: "সেরে উঠি না" }
    }
  },
  {
    id: "32-11",
    word: "続きます",
    reading: "つづきます",
    romaji: "tsuzukimasu",
    english: "to continue",
    bengali: "চলতে থাকা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "続く", reading: "つづく", english: "to continue", bengali: "চলতে থাকা" },
      masu: { word: "続きます", reading: "つづきます", english: "continue (polite)", bengali: "চলতে থাকে" },
      te: { word: "続いて", reading: "つづいて", english: "continuing", bengali: "চলতে থেকে" },
      nai: { word: "続かない", reading: "つづかない", english: "not continue", bengali: "চলতে থাকে না" }
    }
  },
  {
    id: "32-12",
    word: "冷やします",
    reading: "ひやします",
    romaji: "hiyashimasu",
    english: "to cool",
    bengali: "ঠান্ডা করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "冷やす", reading: "ひやす", english: "to cool", bengali: "ঠান্ডা করা" },
      masu: { word: "冷やします", reading: "ひやします", english: "cool (polite)", bengali: "ঠান্ডা করি" },
      te: { word: "冷やして", reading: "ひやして", english: "cooling", bengali: "ঠান্ডা করে" },
      nai: { word: "冷やさない", reading: "ひやさない", english: "not cool", bengali: "ঠান্ডা করি না" }
    }
  },
  {
    id: "32-13",
    word: "心配",
    reading: "しんぱい",
    romaji: "shinpai",
    english: "worry, concern",
    bengali: "দুশ্চিন্তা",
    category: "Miscellaneous"
  },
  {
    id: "32-14",
    word: "十分",
    reading: "じゅうぶん",
    romaji: "juubun",
    english: "enough, sufficient",
    bengali: "যথেষ্ট",
    category: "Adverb"
  },
  {
    id: "32-15",
    word: "おかしい",
    reading: "おかしい",
    romaji: "okashii",
    english: "strange, funny",
    bengali: "অদ্ভুত / হাস্যকর",
    category: "Adjective",
    conjugation: {
      negative: { word: "おかしくない", reading: "おかしくない", english: "not strange", bengali: "অদ্ভুত নয়" },
      past: { word: "おかしかった", reading: "おかしかった", english: "was strange", bengali: "অদ্ভুত ছিল" },
      pastNegative: { word: "おかしくなかった", reading: "おかしくなかった", english: "was not strange", bengali: "অদ্ভুত ছিল না" }
    }
  },
  {
    id: "32-16",
    word: "うるさい",
    reading: "うるさい",
    romaji: "urusai",
    english: "noisy, annoying",
    bengali: "কোলাহলপূর্ণ / বিরক্তিকর",
    category: "Adjective",
    conjugation: {
      negative: { word: "うるさくない", reading: "うるさくない", english: "not noisy", bengali: "কোলাহলপূর্ণ নয়" },
      past: { word: "うるさかった", reading: "うるさかった", english: "was noisy", bengali: "কোলাহলপূর্ণ ছিল" },
      pastNegative: { word: "うるさくなかった", reading: "うるさくなかった", english: "was not noisy", bengali: "কোলাহলপূর্ণ ছিল না" }
    }
  },
  {
    id: "32-17",
    word: "火傷",
    reading: "やけど",
    romaji: "yakedo",
    english: "burn",
    bengali: "পুড়ে যাওয়া",
    category: "Health"
  },
  {
    id: "32-18",
    word: "怪我",
    reading: "けが",
    romaji: "kega",
    english: "injury",
    bengali: "আঘাত",
    category: "Health"
  },
  {
    id: "32-19",
    word: "咳",
    reading: "せき",
    romaji: "seki",
    english: "cough",
    bengali: "কাশি",
    category: "Health"
  },
  {
    id: "32-20",
    word: "インフルエンザ",
    reading: "インフルエンザ",
    romaji: "infuruenza",
    english: "influenza",
    bengali: "ইনফ্লুয়েঞ্জা",
    category: "Health"
  },
  {
    id: "32-21",
    word: "太陽",
    reading: "たいよう",
    romaji: "taiyou",
    english: "sun",
    bengali: "সূর্য",
    category: "Nature"
  },
  {
    id: "32-22",
    word: "星",
    reading: "ほし",
    romaji: "hoshi",
    english: "star",
    bengali: "তারা",
    category: "Nature"
  },
  {
    id: "32-23",
    word: "月",
    reading: "つき",
    romaji: "tsuki",
    english: "moon",
    bengali: "চাঁদ",
    category: "Nature"
  },
  {
    id: "32-24",
    word: "風",
    reading: "かぜ",
    romaji: "kaze",
    english: "wind",
    bengali: "বাতাস",
    category: "Nature"
  },
  {
    id: "32-25",
    word: "北",
    reading: "きた",
    romaji: "kita",
    english: "north",
    bengali: "উত্তর",
    category: "Place"
  },
  {
    id: "32-26",
    word: "南",
    reading: "みなみ",
    romaji: "minami",
    english: "south",
    bengali: "দক্ষিণ",
    category: "Place"
  },
  {
    id: "32-27",
    word: "西",
    reading: "にし",
    romaji: "nishi",
    english: "west",
    bengali: "পশ্চিম",
    category: "Place"
  },
  {
    id: "32-28",
    word: "東",
    reading: "ひがし",
    romaji: "higashi",
    english: "east",
    bengali: "পূর্ব",
    category: "Place"
  },
  {
    id: "32-29",
    word: "水道",
    reading: "すいどう",
    romaji: "suidou",
    english: "water supply, tap water",
    bengali: "পানি সরবরাহ",
    category: "Miscellaneous"
  },
  {
    id: "32-30",
    word: "エンジン",
    reading: "エンジン",
    romaji: "enjin",
    english: "engine",
    bengali: "ইঞ্জিন",
    category: "Objects"
  },
  {
    id: "32-31",
    word: "チーム",
    reading: "チーム",
    romaji: "chiimu",
    english: "team",
    bengali: "দল",
    category: "People"
  },
  {
    id: "32-32",
    word: "今夜",
    reading: "こんや",
    romaji: "konya",
    english: "tonight",
    bengali: "আজ রাত",
    category: "Time"
  },
  {
    id: "32-33",
    word: "夕方",
    reading: "ゆうがた",
    romaji: "yuugata",
    english: "late afternoon, evening",
    bengali: "সন্ধ্যা",
    category: "Time"
  },
  {
    id: "32-34",
    word: "前",
    reading: "まえ",
    romaji: "mae",
    english: "before",
    bengali: "আগে",
    category: "Time"
  },
  {
    id: "32-35",
    word: "遅く",
    reading: "おそく",
    romaji: "osoku",
    english: "late",
    bengali: "দেরিতে",
    category: "Adverb"
  },
  {
    id: "32-36",
    word: "こんなに",
    reading: "こんなに",
    romaji: "konna ni",
    english: "like this",
    bengali: "এইভাবে",
    category: "Adverb"
  },
  {
    id: "32-37",
    word: "そんなに",
    reading: "そんなに",
    romaji: "sonna ni",
    english: "like that",
    bengali: "ওইভাবে",
    category: "Adverb"
  },
  {
    id: "32-38",
    word: "あんなに",
    reading: "あんなに",
    romaji: "anna ni",
    english: "like that (over there)",
    bengali: "সেইভাবে",
    category: "Adverb"
  },
  {
    id: "32-39",
    word: "もしかしたら",
    reading: "もしかしたら",
    romaji: "moshikashitara",
    english: "possibly, perhaps",
    bengali: "সম্ভবত",
    category: "Adverb"
  },
  {
    id: "32-40",
    word: "それは いけませんね",
    reading: "それは いけませんね",
    romaji: "sore wa ikemasen ne",
    english: "That's too bad",
    bengali: "সেটা তো খারাপ হলো",
    category: "Greetings"
  },
  {
    id: "32-41",
    word: "オリンピック",
    reading: "オリンピック",
    romaji: "orinpikku",
    english: "Olympic Games",
    bengali: "অলিম্পিক",
    category: "Entertainment"
  },
  {
    id: "32-42",
    word: "元気",
    reading: "げんき",
    romaji: "genki",
    english: "healthy, energetic",
    bengali: "সুস্থ",
    category: "Health"
  },
  {
    id: "32-43",
    word: "胃",
    reading: "い",
    romaji: "i",
    english: "stomach",
    bengali: "পাকস্থলী",
    category: "Health"
  },
  {
    id: "32-44",
    word: "ストレス",
    reading: "ストレス",
    romaji: "sutoresu",
    english: "stress",
    bengali: "মানসিক চাপ",
    category: "Health"
  },
  {
    id: "32-45",
    word: "星占い",
    reading: "ほしうらない",
    romaji: "hoshiuranai",
    english: "horoscope",
    bengali: "রাশিফল",
    category: "Entertainment"
  },
  {
    id: "32-46",
    word: "牡羊座",
    reading: "おひつじざ",
    romaji: "ohitsujiza",
    english: "Aries",
    bengali: "মেষ রাশি",
    category: "Entertainment"
  },
  {
    id: "32-47",
    word: "宝くじ",
    reading: "たからくじ",
    romaji: "takarakuji",
    english: "lottery",
    bengali: "লটারি",
    category: "Entertainment"
  },
  {
    id: "32-48",
    word: "当たります",
    reading: "あたります",
    romaji: "atarimasu",
    english: "to win (lottery)",
    bengali: "জেতা (লটারি)",
    category: "Verb"
  },
  {
    id: "32-49",
    word: "健康",
    reading: "けんこう",
    romaji: "kenkou",
    english: "health",
    bengali: "স্বাস্থ্য",
    category: "Health"
  },
  {
    id: "32-50",
    word: "恋愛",
    reading: "れんあい",
    romaji: "ren'ai",
    english: "love",
    bengali: "ভালোবাসা",
    category: "Miscellaneous"
  },
  {
    id: "32-51",
    word: "恋人",
    reading: "こいびと",
    romaji: "koibito",
    english: "lover, sweetheart",
    bengali: "প্রেমিক / প্রেমিকা",
    category: "People"
  },
  {
    id: "32-52",
    word: "お金",
    reading: "おかね",
    romaji: "okane",
    english: "money",
    bengali: "টাকা",
    category: "Miscellaneous"
  },

  // Lesson 33
  {
    id: "33-1",
    word: "逃げます",
    reading: "にげます",
    romaji: "nigemasu",
    english: "to run away, to escape",
    bengali: "পালানো",
    category: "Verb",
    conjugation: {
      dictionary: { word: "逃げる", reading: "にげる", english: "to escape", bengali: "পালানো" },
      masu: { word: "逃げます", reading: "にげます", english: "escape (polite)", bengali: "পালাই" },
      te: { word: "逃げて", reading: "にげて", english: "escaping", bengali: "পালিয়ে" },
      nai: { word: "逃げない", reading: "にげない", english: "not escape", bengali: "পালাই না" }
    }
  },
  {
    id: "33-2",
    word: "騒ぎます",
    reading: "さわぎます",
    romaji: "sawagimasu",
    english: "to make a noise",
    bengali: "গোলমাল করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "騒ぐ", reading: "さわぐ", english: "to make noise", bengali: "গোলমাল করা" },
      masu: { word: "騒ぎます", reading: "さわぎます", english: "make noise (polite)", bengali: "গোলমাল করি" },
      te: { word: "騒いで", reading: "さわいで", english: "making noise", bengali: "গোলমাল করে" },
      nai: { word: "騒がない", reading: "さわがない", english: "not make noise", bengali: "গোলমাল করি না" }
    }
  },
  {
    id: "33-3",
    word: "あきらめます",
    reading: "あきらめます",
    romaji: "akiramemasu",
    english: "to give up",
    bengali: "হাল ছেড়ে দেওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "あきらめる", reading: "あきらめる", english: "to give up", bengali: "হাল ছেড়ে দেওয়া" },
      masu: { word: "あきらめます", reading: "あきらめます", english: "give up (polite)", bengali: "হাল ছেড়ে দিই" },
      te: { word: "あきらめて", reading: "あきらめて", english: "giving up", bengali: "হাল ছেড়ে দিয়ে" },
      nai: { word: "あきらめない", reading: "あきらめない", english: "not give up", bengali: "হাল ছেড়ে দিই না" }
    }
  },
  {
    id: "33-4",
    word: "投げます",
    reading: "なげます",
    romaji: "nagemasu",
    english: "to throw",
    bengali: "নিক্ষেপ করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "投げる", reading: "なげる", english: "to throw", bengali: "নিক্ষেপ করা" },
      masu: { word: "投げます", reading: "なげます", english: "throw (polite)", bengali: "নিক্ষেপ করি" },
      te: { word: "投げて", reading: "なげて", english: "throwing", bengali: "নিক্ষেপ করে" },
      nai: { word: "投げない", reading: "なげない", english: "not throw", bengali: "নিক্ষেপ করি না" }
    }
  },
  {
    id: "33-5",
    word: "守ります",
    reading: "まもります",
    romaji: "mamorimasu",
    english: "to keep, to follow, to obey",
    bengali: "রক্ষা করা / মেনে চলা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "守る", reading: "まもる", english: "to keep", bengali: "মেনে চলা" },
      masu: { word: "守ります", reading: "まもります", english: "keep (polite)", bengali: "মেনে চলি" },
      te: { word: "守って", reading: "まもって", english: "keeping", bengali: "মেনে চলে" },
      nai: { word: "守らない", reading: "まもらない", english: "not keep", bengali: "মেনে চলি না" }
    }
  },
  {
    id: "33-6",
    word: "式が 始まります",
    reading: "しきが はじまります",
    romaji: "shiki ga hajimarimasu",
    english: "ceremony begins",
    bengali: "অনুষ্ঠান শুরু হওয়া",
    category: "Verb"
  },
  {
    id: "33-7",
    word: "出席します",
    reading: "しゅっせきします",
    romaji: "shussekishimasu",
    english: "to attend",
    bengali: "উপস্থিত হওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "出席する", reading: "しゅっせきする", english: "to attend", bengali: "উপস্থিত হওয়া" },
      masu: { word: "出席します", reading: "しゅっせきします", english: "attend (polite)", bengali: "উপস্থিত হই" },
      te: { word: "出席して", reading: "しゅっせきして", english: "attending", bengali: "উপস্থিত হয়ে" },
      nai: { word: "出席しない", reading: "しゅっせきしない", english: "not attend", bengali: "উপস্থিত হই না" }
    }
  },
  {
    id: "33-8",
    word: "伝えます",
    reading: "つたえます",
    romaji: "tsutaemasu",
    english: "to convey, to report",
    bengali: "জানানো / বার্তা দেওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "伝える", reading: "つたえる", english: "to convey", bengali: "জানানো" },
      masu: { word: "伝えます", reading: "つたえます", english: "convey (polite)", bengali: "জানাই" },
      te: { word: "伝えて", reading: "つたえて", english: "conveying", bengali: "জানিয়ে" },
      nai: { word: "伝えない", reading: "つたえない", english: "not convey", bengali: "জানাই না" }
    }
  },
  {
    id: "33-9",
    word: "注意します",
    reading: "ちゅういします",
    romaji: "chuuyishimasu",
    english: "to be careful, to pay attention",
    bengali: "সতর্ক হওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "注意する", reading: "ちゅういする", english: "to be careful", bengali: "সতর্ক হওয়া" },
      masu: { word: "注意します", reading: "ちゅういします", english: "be careful (polite)", bengali: "সতর্ক হই" },
      te: { word: "注意して", reading: "ちゅういして", english: "being careful", bengali: "সতর্ক হয়ে" },
      nai: { word: "注意しない", reading: "ちゅういしない", english: "not be careful", bengali: "সতর্ক হই না" }
    }
  },
  {
    id: "33-10",
    word: "外します",
    reading: "はずします",
    romaji: "hazushimasu",
    english: "to remove, to take off",
    bengali: "সরিয়ে নেওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "外す", reading: "はずす", english: "to remove", bengali: "সরিয়ে নেওয়া" },
      masu: { word: "外します", reading: "はずします", english: "remove (polite)", bengali: "সরিয়ে নিই" },
      te: { word: "外して", reading: "はずして", english: "removing", bengali: "সরিয়ে নিয়ে" },
      nai: { word: "外さない", reading: "はずさない", english: "not remove", bengali: "সরিয়ে নিই না" }
    }
  },
  {
    id: "33-11",
    word: "戻ります",
    reading: "もどります",
    romaji: "modorimasu",
    english: "to return, to come back",
    bengali: "ফিরে আসা",
    category: "Verb"
  },
  {
    id: "33-12",
    word: "あります",
    reading: "あります",
    romaji: "arimasu",
    english: "to be, to exist",
    bengali: "থাকা / হওয়া",
    category: "Verb"
  },
  {
    id: "33-13",
    word: "だめ",
    reading: "だめ",
    romaji: "dame",
    english: "no good, impossible",
    bengali: "খারাপ / অসম্ভব",
    category: "Adjective"
  },
  {
    id: "33-14",
    word: "同じ",
    reading: "おなじ",
    romaji: "onaji",
    english: "same",
    bengali: "একই",
    category: "Adjective"
  },
  {
    id: "33-15",
    word: "警察",
    reading: "けいさつ",
    romaji: "keisatsu",
    english: "police",
    bengali: "পুলিশ",
    category: "People"
  },
  {
    id: "33-16",
    word: "席",
    reading: "せき",
    romaji: "seki",
    english: "seat",
    bengali: "আসন",
    category: "Place"
  },
  {
    id: "33-17",
    word: "マーク",
    reading: "マーク",
    romaji: "maaku",
    english: "mark, symbol",
    bengali: "চিহ্ন",
    category: "Objects"
  },
  {
    id: "33-18",
    word: "ボール",
    reading: "ボール",
    romaji: "booru",
    english: "ball",
    bengali: "বল",
    category: "Objects"
  },
  {
    id: "33-19",
    word: "締め切り",
    reading: "しめきり",
    romaji: "shimekiri",
    english: "deadline",
    bengali: "সময়সীমা",
    category: "Time"
  },
  {
    id: "33-20",
    word: "規則",
    reading: "きそく",
    romaji: "kisoku",
    english: "rule, regulation",
    bengali: "নিয়ম",
    category: "Miscellaneous"
  },
  {
    id: "33-21",
    word: "危険",
    reading: "きけん",
    romaji: "kiken",
    english: "danger",
    bengali: "বিপদ",
    category: "Miscellaneous"
  },
  {
    id: "33-22",
    word: "使用禁止",
    reading: "しようきんし",
    romaji: "shiyoukinshi",
    english: "prohibition of use",
    bengali: "ব্যবহার নিষেধ",
    category: "Miscellaneous"
  },
  {
    id: "33-23",
    word: "立入禁止",
    reading: "たちいりきんし",
    romaji: "tachiirikinshi",
    english: "no entry",
    bengali: "প্রবেশ নিষেধ",
    category: "Miscellaneous"
  },
  {
    id: "33-24",
    word: "徐行",
    reading: "じょこう",
    romaji: "jokou",
    english: "slow down",
    bengali: "ধীরে চলা",
    category: "Miscellaneous"
  },
  {
    id: "33-25",
    word: "入口",
    reading: "いりぐち",
    romaji: "iriguchi",
    english: "entrance",
    bengali: "প্রবেশপথ",
    category: "Place"
  },
  {
    id: "33-26",
    word: "出口",
    reading: "でぐち",
    romaji: "deguchi",
    english: "exit",
    bengali: "বহির্গমন পথ",
    category: "Place"
  },
  {
    id: "33-27",
    word: "非常口",
    reading: "ひじょうぐち",
    romaji: "hijouguchi",
    english: "emergency exit",
    bengali: "জরুরি বহির্গমন পথ",
    category: "Place"
  },
  {
    id: "33-28",
    word: "無料",
    reading: "むりょう",
    romaji: "muryou",
    english: "free of charge",
    bengali: "বিনামূল্যে",
    category: "Miscellaneous"
  },
  {
    id: "33-29",
    word: "割引",
    reading: "わりびき",
    romaji: "waribiki",
    english: "discount",
    bengali: "ছাড়",
    category: "Miscellaneous"
  },
  {
    id: "33-30",
    word: "飲み放題",
    reading: "のみほうだい",
    romaji: "nomihoudai",
    english: "all-you-can-drink",
    bengali: "আনলিমিটেড পানীয়",
    category: "Entertainment"
  },
  {
    id: "33-31",
    word: "使用中",
    reading: "しようちゅう",
    romaji: "shiyouchuu",
    english: "in use",
    bengali: "ব্যবহার করা হচ্ছে",
    category: "Miscellaneous"
  },
  {
    id: "33-32",
    word: "募集中",
    reading: "ぼしゅうちゅう",
    romaji: "boshuuchuu",
    english: "now recruiting",
    bengali: "লোক নিয়োগ চলছে",
    category: "Work"
  },
  {
    id: "33-33",
    word: "〜中",
    reading: "〜ちゅう",
    romaji: "~ chuu",
    english: "in the middle of ~",
    bengali: "-চলছে",
    category: "Miscellaneous"
  },
  {
    id: "33-34",
    word: "どういう",
    reading: "どういう",
    romaji: "dou iu",
    english: "what kind of",
    bengali: "কেমন",
    category: "Miscellaneous"
  },
  {
    id: "33-35",
    word: "いくら [〜ても]",
    reading: "いくら [〜ても]",
    romaji: "ikura [~ temo]",
    english: "no matter how much",
    bengali: "যত [〜ই হোক না কেন]",
    category: "Adverb"
  },
  {
    id: "33-36",
    word: "もう",
    reading: "もう",
    romaji: "mou",
    english: "already, no more",
    bengali: "আর",
    category: "Adverb"
  },
  {
    id: "33-37",
    word: "あと",
    reading: "あと",
    romaji: "ato",
    english: "left, remaining",
    bengali: "বাকি",
    category: "Adverb"
  },
  {
    id: "33-38",
    word: "〜ほど",
    reading: "〜ほど",
    romaji: "~ hodo",
    english: "about ~",
    bengali: "প্রায়",
    category: "Adverb"
  },
  {
    id: "33-39",
    word: "駐車違反",
    reading: "ちゅうしゃいはん",
    romaji: "chuusha'ihan",
    english: "parking violation",
    bengali: "অবৈধ পার্কিং",
    category: "Miscellaneous"
  },
  {
    id: "33-40",
    word: "罰金",
    reading: "ばっきん",
    romaji: "bakkin",
    english: "fine, penalty",
    bengali: "জরিমানা",
    category: "Miscellaneous"
  },
  {
    id: "33-41",
    word: "起きます",
    reading: "おきます",
    romaji: "okimasu",
    english: "to happen, to occur",
    bengali: "ঘটা",
    category: "Verb"
  },
  {
    id: "33-42",
    word: "助け合います",
    reading: "たすけあいます",
    romaji: "tasukeaimasu",
    english: "to help each other",
    bengali: "একে অপরকে সাহায্য করা",
    category: "Verb"
  },
  {
    id: "33-43",
    word: "もともと",
    reading: "もともと",
    romaji: "motomoto",
    english: "originally",
    bengali: "মূলত",
    category: "Adverb"
  },
  {
    id: "33-44",
    word: "悲しい",
    reading: "かなしい",
    romaji: "kanashii",
    english: "sad",
    bengali: "দুঃখিত",
    category: "Adjective"
  },
  {
    id: "33-45",
    word: "もっと",
    reading: "もっと",
    romaji: "motto",
    english: "more",
    bengali: "আরও",
    category: "Adverb"
  },
  {
    id: "33-46",
    word: "挨拶",
    reading: "あいさつ",
    romaji: "aisatsu",
    english: "greeting",
    bengali: "অভিবাদন",
    category: "Greetings"
  },
  {
    id: "33-47",
    word: "相手",
    reading: "あいて",
    romaji: "aite",
    english: "partner, opponent",
    bengali: "অন্য পক্ষ",
    category: "People"
  },
  {
    id: "33-48",
    word: "気持ち",
    reading: "きもち",
    romaji: "kimochi",
    english: "feeling",
    bengali: "অনুভূতি",
    category: "Miscellaneous"
  },

  // Lesson 34
  {
    id: "34-1",
    word: "磨きます",
    reading: "みがきます",
    romaji: "migakimasu",
    english: "to brush (teeth), to polish",
    bengali: "মাজা / পরিষ্কার করা (দাঁত)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "磨く", reading: "みがく", english: "to brush", bengali: "মাজা" },
      masu: { word: "磨きます", reading: "みがきます", english: "brush (polite)", bengali: "মাজি" },
      te: { word: "磨いて", reading: "みがいて", english: "brushing", bengali: "মেজে" },
      nai: { word: "磨かない", reading: "みがかない", english: "not brush", bengali: "মাজি না" }
    }
  },
  {
    id: "34-2",
    word: "組み立てます",
    reading: "くみたてます",
    romaji: "kumitatemasu",
    english: "to assemble",
    bengali: "একত্রিত করা / জোড়া লাগানো",
    category: "Verb",
    conjugation: {
      dictionary: { word: "組み立てる", reading: "くみたてる", english: "to assemble", bengali: "জোড়া লাগানো" },
      masu: { word: "組み立てます", reading: "くみたてます", english: "assemble (polite)", bengali: "জোড়া লাগাই" },
      te: { word: "組み立てて", reading: "くみたてて", english: "assembling", bengali: "জোড়া লাগিয়ে" },
      nai: { word: "組み立てない", reading: "くみたてない", english: "not assemble", bengali: "জোড়া লাগাই না" }
    }
  },
  {
    id: "34-3",
    word: "折ります",
    reading: "おります",
    romaji: "orimasu",
    english: "to fold, to break",
    bengali: "ভাঁজ করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "折る", reading: "おる", english: "to fold", bengali: "ভাঁজ করা" },
      masu: { word: "おります", reading: "おります", english: "fold (polite)", bengali: "ভাঁজ করি" },
      te: { word: "折って", reading: "おって", english: "folding", bengali: "ভাঁজ করে" },
      nai: { word: "折らない", reading: "おらない", english: "not fold", bengali: "ভাঁজ করি না" }
    }
  },
  {
    id: "34-4",
    word: "気がつきます",
    reading: "きがつきます",
    romaji: "ki ga tsukimasu",
    english: "to notice",
    bengali: "খেয়াল করা",
    category: "Verb"
  },
  {
    id: "34-5",
    word: "つけます",
    reading: "つけます",
    romaji: "tsukemasu",
    english: "to put on (sauce)",
    bengali: "লাগানো (সস)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "つける", reading: "つける", english: "to put on", bengali: "লাগানো" },
      masu: { word: "つけます", reading: "つけます", english: "put on (polite)", bengali: "লাগাই" },
      te: { word: "つけて", reading: "つけて", english: "putting on", bengali: "লাগিয়ে" },
      nai: { word: "つけない", reading: "つけない", english: "not put on", bengali: "লাগাই না" }
    }
  },
  {
    id: "34-6",
    word: "見つかります",
    reading: "みつかります",
    romaji: "mitsukarimasu",
    english: "to be found",
    bengali: "খুঁজে পাওয়া",
    category: "Verb"
  },
  {
    id: "34-7",
    word: "質問します",
    reading: "しつもんします",
    romaji: "shitsumonshimasu",
    english: "to ask a question",
    bengali: "প্রশ্ন করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "質問する", reading: "しつもんする", english: "to ask question", bengali: "প্রশ্ন করা" },
      masu: { word: "質問します", reading: "しつもんします", english: "ask question (polite)", bengali: "প্রশ্ন করি" },
      te: { word: "質問して", reading: "しつもんして", english: "asking question", bengali: "প্রশ্ন করে" },
      nai: { word: "質問しない", reading: "しつもんしない", english: "not ask question", bengali: "প্রশ্ন করি না" }
    }
  },
  {
    id: "34-8",
    word: "指します",
    reading: "さします",
    romaji: "sashimasu",
    english: "to put up (an umbrella)",
    bengali: "ছাতা ধরা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "指す", reading: "さす", english: "to put up umbrella", bengali: "ছাতা ধরা" },
      masu: { word: "指します", reading: "さします", english: "put up umbrella (polite)", bengali: "ছাতা ধরি" },
      te: { word: "指して", reading: "さして", english: "putting up umbrella", bengali: "ছাতা ধরে" },
      nai: { word: "指さない", reading: "ささない", english: "not put up umbrella", bengali: "ছাতা ধরি না" }
    }
  },
  {
    id: "34-9",
    word: "スポーツクラブ",
    reading: "スポーツクラブ",
    romaji: "supootsu kurabu",
    english: "sports club",
    bengali: "স্পোর্টস ক্লাব",
    category: "Entertainment"
  },
  {
    id: "34-10",
    word: "お城",
    reading: "おしろ",
    romaji: "oshiro",
    english: "castle",
    bengali: "দুর্গ",
    category: "Place"
  },
  {
    id: "34-11",
    word: "説明書",
    reading: "せつめいしょ",
    romaji: "setsumeisho",
    english: "instruction manual",
    bengali: "নির্দেশিকা",
    category: "Objects"
  },
  {
    id: "34-12",
    word: "図",
    reading: "ず",
    romaji: "zu",
    english: "figure, diagram",
    bengali: "নকশা / চিত্র",
    category: "Objects"
  },
  {
    id: "34-13",
    word: "線",
    reading: "せん",
    romaji: "sen",
    english: "line",
    bengali: "রেখা",
    category: "Objects"
  },
  {
    id: "34-14",
    word: "矢印",
    reading: "やじるし",
    romaji: "yajirushi",
    english: "arrow (sign)",
    bengali: "তীর চিহ্ন",
    category: "Objects"
  },
  {
    id: "34-15",
    word: "紺",
    reading: "こん",
    romaji: "kon",
    english: "dark blue, navy blue",
    bengali: "গাঢ় নীল",
    category: "Miscellaneous"
  },
  {
    id: "34-16",
    word: "黄色",
    reading: "きいろ",
    romaji: "kiiro",
    english: "yellow",
    bengali: "হলুদ",
    category: "Miscellaneous"
  },
  {
    id: "34-17",
    word: "赤",
    reading: "あか",
    romaji: "aka",
    english: "red",
    bengali: "লাল",
    category: "Miscellaneous"
  },
  {
    id: "34-18",
    word: "白",
    reading: "しろ",
    romaji: "shiro",
    english: "white",
    bengali: "সাদা",
    category: "Miscellaneous"
  },
  {
    id: "34-19",
    word: "黒",
    reading: "くろ",
    romaji: "kuro",
    english: "black",
    bengali: "কালো",
    category: "Miscellaneous"
  },
  {
    id: "34-20",
    word: "醤油",
    reading: "しょうゆ",
    romaji: "shouyu",
    english: "soy sauce",
    bengali: "সয়া সস",
    category: "Food"
  },
  {
    id: "34-21",
    word: "ソース",
    reading: "ソース",
    romaji: "soosu",
    english: "sauce",
    bengali: "সস",
    category: "Food"
  },
  {
    id: "34-22",
    word: "〜か〜",
    reading: "〜か〜",
    romaji: "~ ka ~",
    english: "~ or ~",
    bengali: "-অথবা-",
    category: "Miscellaneous"
  },
  {
    id: "34-23",
    word: "夕べ",
    reading: "ゆうべ",
    romaji: "yuube",
    english: "last night",
    bengali: "গতরাত",
    category: "Time"
  },
  {
    id: "34-24",
    word: "さっき",
    reading: "さっき",
    romaji: "sakki",
    english: "a short while ago",
    bengali: "কিছুক্ষণ আগে",
    category: "Time"
  },
  {
    id: "34-25",
    word: "茶道",
    reading: "さどう",
    romaji: "sadou",
    english: "tea ceremony",
    bengali: "চা উৎসব",
    category: "Entertainment"
  },
  {
    id: "34-26",
    word: "お茶を たてます",
    reading: "おちゃを たてます",
    romaji: "ocha o tatemasu",
    english: "to make tea",
    bengali: "চা তৈরি করা",
    category: "Verb"
  },
  {
    id: "34-27",
    word: "先に",
    reading: "さきに",
    romaji: "saki ni",
    english: "ahead, first",
    bengali: "আগে",
    category: "Adverb"
  },
  {
    id: "34-28",
    word: "載せます",
    reading: "のせます",
    romaji: "nosemasu",
    english: "to put on, to load",
    bengali: "রাখা / উপরে দেওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "載せる", reading: "のせる", english: "to put on", bengali: "রাখা" },
      masu: { word: "載せます", reading: "のせます", english: "put on (polite)", bengali: "রাখি" },
      te: { word: "載せて", reading: "のせて", english: "putting on", bengali: "রেখে" },
      nai: { word: "載せない", reading: "のせない", english: "not put on", bengali: "রাখি না" }
    }
  },
  {
    id: "34-29",
    word: "これで いいですか",
    reading: "これで いいですか",
    romaji: "kore de ii desu ka",
    english: "Is this okay?",
    bengali: "এটা কি ঠিক আছে?",
    category: "Greetings"
  },
  {
    id: "34-30",
    word: "いかがですか",
    reading: "いかがですか",
    romaji: "ikaga desu ka",
    english: "How is it?",
    bengali: "কেমন হয়?",
    category: "Greetings"
  },
  {
    id: "34-31",
    word: "苦い",
    reading: "にがい",
    romaji: "nigai",
    english: "bitter",
    bengali: "তেতো",
    category: "Adjective",
    conjugation: {
      negative: { word: "苦くない", reading: "にがくない", english: "not bitter", bengali: "তেতো নয়" },
      past: { word: "苦かった", reading: "にがかった", english: "was bitter", bengali: "তেতো ছিল" },
      pastNegative: { word: "苦くなかった", reading: "にがくなかった", english: "was not bitter", bengali: "তেতো ছিল না" }
    }
  },
  {
    id: "34-32",
    word: "親子どんぶり",
    reading: "おやこどんぶり",
    romaji: "oyakodonburi",
    english: "chicken and egg bowl",
    bengali: "চিকেন ও ডিমের বাটি",
    category: "Food"
  },
  {
    id: "34-33",
    word: "材料",
    reading: "ざいりょう",
    romaji: "zairyou",
    english: "material, ingredient",
    bengali: "উপকরণ",
    category: "Food"
  },
  {
    id: "34-34",
    word: "〜分",
    reading: "〜ぶん",
    romaji: "~ bun",
    english: "portion for ~",
    bengali: "-অংশ / -পরিমাণ",
    category: "Miscellaneous"
  },
  {
    id: "34-35",
    word: "〜グラム",
    reading: "〜グラム",
    romaji: "~ guramu",
    english: "~ gram",
    bengali: "-গ্রাম",
    category: "Miscellaneous"
  },
  {
    id: "34-36",
    word: "〜個",
    reading: "〜こ",
    romaji: "~ ko",
    english: "(counter for small objects)",
    bengali: "-টি (ছোট বস্তু)",
    category: "Miscellaneous"
  },
  {
    id: "34-37",
    word: "玉ねぎ",
    reading: "たまねぎ",
    romaji: "tamanegi",
    english: "onion",
    bengali: "পেঁয়াজ",
    category: "Food"
  },
  {
    id: "34-38",
    word: "四分の一",
    reading: "よんぶんのいち",
    romaji: "yonbun no ichi",
    english: "one fourth",
    bengali: "চার ভাগের এক ভাগ",
    category: "Miscellaneous"
  },
  {
    id: "34-39",
    word: "調味料",
    reading: "ちょうみりょう",
    romaji: "choumiryou",
    english: "seasoning, condiment",
    bengali: "মশলা",
    category: "Food"
  },
  {
    id: "34-40",
    word: "鍋",
    reading: "なべ",
    romaji: "nabe",
    english: "pot, pan",
    bengali: "কড়াই / পাতিল",
    category: "Objects"
  },
  {
    id: "34-41",
    word: "火",
    reading: "ひ",
    romaji: "hi",
    english: "fire",
    bengali: "আগুন",
    category: "Nature"
  },
  {
    id: "34-42",
    word: "火に かけます",
    reading: "ひに かけます",
    romaji: "hi ni kakemasu",
    english: "to put on the fire",
    bengali: "আগুনে দেওয়া",
    category: "Verb"
  },
  {
    id: "34-43",
    word: "煮ます",
    reading: "にます",
    romaji: "nimasu",
    english: "to boil, to cook",
    bengali: "সেদ্ধ করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "煮る", reading: "にる", english: "to boil", bengali: "সেদ্ধ করা" },
      masu: { word: "煮ます", reading: "にます", english: "boil (polite)", bengali: "সেদ্ধ করি" },
      te: { word: "煮て", reading: "にて", english: "boiling", bengali: "সেদ্ধ করে" },
      nai: { word: "煮ない", reading: "にない", english: "not boil", bengali: "সেদ্ধ করি না" }
    }
  },
  {
    id: "34-44",
    word: "煮えます",
    reading: "にえます",
    romaji: "niemasu",
    english: "to be cooked, to be boiled",
    bengali: "সেদ্ধ হওয়া",
    category: "Verb"
  },
  {
    id: "34-45",
    word: "どんぶり",
    reading: "どんぶり",
    romaji: "donburi",
    english: "ceramic bowl",
    bengali: "বড় বাটি",
    category: "Objects"
  },

  // Lesson 35
  {
    id: "35-1",
    word: "咲きます",
    reading: "さきます",
    romaji: "sakimasu",
    english: "to bloom",
    bengali: "ফোটা (ফুল)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "咲く", reading: "さく", english: "to bloom", bengali: "ফোটা" },
      masu: { word: "咲きます", reading: "さきます", english: "bloom (polite)", bengali: "ফোটে" },
      te: { word: "咲いて", reading: "さいて", english: "blooming", bengali: "ফুটে" },
      nai: { word: "咲かない", reading: "さかない", english: "not bloom", bengali: "ফোটে না" }
    }
  },
  {
    id: "35-2",
    word: "変わります",
    reading: "かわります",
    romaji: "kawarimasu",
    english: "to change (color)",
    bengali: "পরিবর্তন হওয়া (রঙ)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "変わる", reading: "かわる", english: "to change", bengali: "পরিবর্তন হওয়া" },
      masu: { word: "変わります", reading: "かわります", english: "change (polite)", bengali: "পরিবর্তন হয়" },
      te: { word: "変わって", reading: "かわって", english: "changing", bengali: "পরিবর্তন হয়ে" },
      nai: { word: "変わらない", reading: "かわらない", english: "not change", bengali: "পরিবর্তন হয় না" }
    }
  },
  {
    id: "35-3",
    word: "困ります",
    reading: "こまります",
    romaji: "komarimasu",
    english: "to be in trouble, to have a problem",
    bengali: "সমস্যায় পড়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "困る", reading: "こまる", english: "to be in trouble", bengali: "সমস্যায় পড়া" },
      masu: { word: "困ります", reading: "こまります", english: "be in trouble (polite)", bengali: "সমস্যায় পড়ি" },
      te: { word: "困って", reading: "こまって", english: "being in trouble", bengali: "সমস্যায় পড়ে" },
      nai: { word: "困らない", reading: "こまらない", english: "not be in trouble", bengali: "সমস্যায় পড়ি না" }
    }
  },
  {
    id: "35-4",
    word: "付けます",
    reading: "つけます",
    romaji: "tsukemasu",
    english: "to draw (a line), to mark",
    bengali: "দাগ দেওয়া / চিহ্ন দেওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "付ける", reading: "つける", english: "to mark", bengali: "দাগ দেওয়া" },
      masu: { word: "付けます", reading: "つけます", english: "mark (polite)", bengali: "দাগ দিই" },
      te: { word: "付けて", reading: "つけて", english: "marking", bengali: "দাগ দিয়ে" },
      nai: { word: "付けない", reading: "つけない", english: "not mark", bengali: "দাগ দিই না" }
    }
  },
  {
    id: "35-5",
    word: "治ります",
    reading: "なおります",
    romaji: "naorimasu",
    english: "to recover from (sickness), to be fixed",
    bengali: "সেরে ওঠা / মেরামত হওয়া",
    category: "Verb"
  },
  {
    id: "35-6",
    word: "クリックします",
    reading: "クリックします",
    romaji: "kurikkushimasu",
    english: "to click",
    bengali: "ক্লিক করা",
    category: "Verb"
  },
  {
    id: "35-7",
    word: "入力します",
    reading: "にゅうりょくします",
    romaji: "nyuuryokushimasu",
    english: "to input",
    bengali: "ইনপুট দেওয়া",
    category: "Verb"
  },
  {
    id: "35-8",
    word: "正しい",
    reading: "ただしい",
    romaji: "tadashii",
    english: "correct, right",
    bengali: "সঠিক",
    category: "Adjective",
    conjugation: {
      negative: { word: "正しくない", reading: "ただしくない", english: "not correct", bengali: "সঠিক নয়" },
      past: { word: "正しかった", reading: "ただしかった", english: "was correct", bengali: "সঠিক ছিল" },
      pastNegative: { word: "正しくなかった", reading: "ただしくなかった", english: "was not correct", bengali: "সঠিক ছিল না" }
    }
  },
  {
    id: "35-9",
    word: "向こう",
    reading: "むこう",
    romaji: "mukou",
    english: "over there, the other side",
    bengali: "ওপাশে",
    category: "Place"
  },
  {
    id: "35-10",
    word: "島",
    reading: "しま",
    romaji: "shima",
    english: "island",
    bengali: "দ্বীপ",
    category: "Place"
  },
  {
    id: "35-11",
    word: "港",
    reading: "みなと",
    romaji: "minato",
    english: "port, harbor",
    bengali: "বন্দর",
    category: "Place"
  },
  {
    id: "35-12",
    word: "近所",
    reading: "きんじょ",
    romaji: "kinjo",
    english: "neighborhood",
    bengali: "প্রতিবেশী",
    category: "People"
  },
  {
    id: "35-13",
    word: "屋上",
    reading: "おくじょう",
    romaji: "okujou",
    english: "rooftop",
    bengali: "ছাদ",
    category: "Place"
  },
  {
    id: "35-14",
    word: "海外",
    reading: "かいがい",
    romaji: "kaigai",
    english: "overseas",
    bengali: "বিদেশ",
    category: "Place"
  },
  {
    id: "35-15",
    word: "山登り",
    reading: "やまのぼり",
    romaji: "yamanobori",
    english: "mountain climbing",
    bengali: "পাহাড় চড়া",
    category: "Entertainment"
  },
  {
    id: "35-16",
    word: "ハイキング",
    reading: "ハイキング",
    romaji: "haikingu",
    english: "hiking",
    bengali: "হাইকিং",
    category: "Entertainment"
  },
  {
    id: "35-17",
    word: "機会",
    reading: "きかい",
    romaji: "kikai",
    english: "opportunity, chance",
    bengali: "সুযোগ",
    category: "Miscellaneous"
  },
  {
    id: "35-18",
    word: "許可",
    reading: "きょか",
    romaji: "kyoka",
    english: "permission",
    bengali: "অনুমতি",
    category: "Miscellaneous"
  },
  {
    id: "35-19",
    word: "丸",
    reading: "まる",
    romaji: "maru",
    english: "circle, correct",
    bengali: "বৃত্ত / সঠিক",
    category: "Miscellaneous"
  },
  {
    id: "35-20",
    word: "操作",
    reading: "そうさ",
    romaji: "sousa",
    english: "operation",
    bengali: "পরিচালনা",
    category: "Miscellaneous"
  },
  {
    id: "35-21",
    word: "方法",
    reading: "ほうほう",
    romaji: "houhou",
    english: "method",
    bengali: "পদ্ধতি",
    category: "Miscellaneous"
  },
  {
    id: "35-22",
    word: "設備",
    reading: "せつび",
    romaji: "setsubi",
    english: "equipment, facilities",
    bengali: "সুবিধা / সরঞ্জাম",
    category: "Miscellaneous"
  },
  {
    id: "35-23",
    word: "カーテン",
    reading: "カーテン",
    romaji: "kaaten",
    english: "curtain",
    bengali: "পর্দা",
    category: "Objects"
  },
  {
    id: "35-24",
    word: "紐",
    reading: "ひも",
    romaji: "himo",
    english: "string, cord",
    bengali: "দড়ি",
    category: "Objects"
  },
  {
    id: "35-25",
    word: "蓋",
    reading: "ふた",
    romaji: "futa",
    english: "lid, cover",
    bengali: "ঢাকনা",
    category: "Objects"
  },
  {
    id: "35-26",
    word: "葉",
    reading: "は",
    romaji: "ha",
    english: "leaf",
    bengali: "পাতা",
    category: "Nature"
  },
  {
    id: "35-27",
    word: "曲",
    reading: "きょく",
    romaji: "kyoku",
    english: "piece of music, song",
    bengali: "গান / সুর",
    category: "Entertainment"
  },
  {
    id: "35-28",
    word: "楽しみ",
    reading: "たのしみ",
    romaji: "tanoshimi",
    english: "pleasure, enjoyment",
    bengali: "আনন্দ",
    category: "Miscellaneous"
  },
  {
    id: "35-29",
    word: "もっと",
    reading: "もっと",
    romaji: "motto",
    english: "more",
    bengali: "আরও",
    category: "Adverb"
  },
  {
    id: "35-30",
    word: "はじめに",
    reading: "はじめに",
    romaji: "hajime ni",
    english: "first of all",
    bengali: "শুরুতে",
    category: "Adverb"
  },
  {
    id: "35-31",
    word: "これで おわります",
    reading: "これで おわります",
    romaji: "kore de owarimasu",
    english: "That is all",
    bengali: "এখানেই শেষ",
    category: "Greetings"
  },
  {
    id: "35-32",
    word: "箱根",
    reading: "はこね",
    romaji: "hakone",
    english: "Hakone (place name)",
    bengali: "হাকোনে (জায়গা)",
    category: "Place"
  },
  {
    id: "35-33",
    word: "日光",
    reading: "にっこう",
    romaji: "nikkou",
    english: "Nikko (place name)",
    bengali: "নিক্কো (জায়গা)",
    category: "Place"
  },
  {
    id: "35-34",
    word: "アフリカ",
    reading: "アフリカ",
    romaji: "afurika",
    english: "Africa",
    bengali: "আফ্রিকা",
    category: "Place"
  },
  {
    id: "35-35",
    word: "それなら",
    reading: "それなら",
    romaji: "sorenara",
    english: "if that's the case",
    bengali: "যদি তাই হয়",
    category: "Miscellaneous"
  },
  {
    id: "35-36",
    word: "夜行バス",
    reading: "やこうバス",
    romaji: "yakou basu",
    english: "night bus",
    bengali: "নাইট বাস",
    category: "Travel"
  },
  {
    id: "35-37",
    word: "旅行社",
    reading: "りょこうしゃ",
    romaji: "ryokousha",
    english: "travel agency",
    bengali: "ট্রাভেল এজেন্সি",
    category: "Travel"
  },
  {
    id: "35-38",
    word: "詳しい",
    reading: "くわしい",
    romaji: "kuwashii",
    english: "detailed, knowledgeable",
    bengali: "বিস্তারিত",
    category: "Adjective"
  },
  {
    id: "35-39",
    word: "スキー場",
    reading: "スキーじょう",
    romaji: "sukii jou",
    english: "ski resort",
    bengali: "স্কি রিসোর্ট",
    category: "Place"
  },
  {
    id: "35-40",
    word: "朱",
    reading: "しゅ",
    romaji: "shu",
    english: "vermilion, red",
    bengali: "লাল রঙ",
    category: "Miscellaneous"
  },
  {
    id: "35-41",
    word: "ことわざ",
    reading: "ことわざ",
    romaji: "kotowaza",
    english: "proverb",
    bengali: "প্রবাদ",
    category: "Miscellaneous"
  },
  {
    id: "35-42",
    word: "仲よくします",
    reading: "なかよくします",
    romaji: "nakayokushimasu",
    english: "to get along with",
    bengali: "সুসম্পর্ক রাখা",
    category: "Verb"
  },
  {
    id: "35-43",
    word: "必要",
    reading: "ひつよう",
    romaji: "hitsuyou",
    english: "necessary",
    bengali: "প্রয়োজনীয়",
    category: "Adjective"
  },

  // Lesson 36
  {
    id: "36-1",
    word: "合います",
    reading: "あいます",
    romaji: "aimasu",
    english: "to meet (with an accident)",
    bengali: "দেখা হওয়া (দুর্ঘটনা)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "合う", reading: "あう", english: "to meet", bengali: "দেখা হওয়া" },
      masu: { word: "合います", reading: "あいます", english: "meet (polite)", bengali: "দেখা হয়" },
      te: { word: "合って", reading: "あって", english: "meeting", bengali: "দেখা হয়ে" },
      nai: { word: "合わない", reading: "あわない", english: "not meet", bengali: "দেখা হয় না" }
    }
  },
  {
    id: "36-2",
    word: "貯金します",
    reading: "ちょきんします",
    romaji: "chokinshimasu",
    english: "to save money",
    bengali: "সঞ্চয় করা",
    category: "Verb"
  },
  {
    id: "36-3",
    word: "過ぎます",
    reading: "すぎます",
    romaji: "sugimasu",
    english: "to pass (time), to exceed",
    bengali: "পার হওয়া (সময়)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "過ぎる", reading: "すぎる", english: "to pass", bengali: "পার হওয়া" },
      masu: { word: "過ぎます", reading: "すぎます", english: "pass (polite)", bengali: "পার হয়" },
      te: { word: "過ぎて", reading: "すぎて", english: "passing", bengali: "পার হয়ে" },
      nai: { word: "過ぎない", reading: "すぎない", english: "not pass", bengali: "পার হয় না" }
    }
  },
  {
    id: "36-4",
    word: "慣れます",
    reading: "なれます",
    romaji: "naremasu",
    english: "to get used to",
    bengali: "অভ্যস্ত হওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "慣れる", reading: "なれる", english: "to get used to", bengali: "অভ্যস্ত হওয়া" },
      masu: { word: "慣れます", reading: "なれます", english: "get used to (polite)", bengali: "অভ্যস্ত হই" },
      te: { word: "慣れて", reading: "なれて", english: "getting used to", bengali: "অভ্যস্ত হয়ে" },
      nai: { word: "慣れない", reading: "なれない", english: "not get used to", bengali: "অভ্যস্ত হই না" }
    }
  },
  {
    id: "36-5",
    word: "腐ります",
    reading: "くさります",
    romaji: "kusarimasu",
    english: "to rot, to go bad",
    bengali: "পচে যাওয়া (খাবার)",
    category: "Verb"
  },
  {
    id: "36-6",
    word: "剣道",
    reading: "けんどう",
    romaji: "kendou",
    english: "Kendo (Japanese fencing)",
    bengali: "কেন্ডো",
    category: "Entertainment"
  },
  {
    id: "36-7",
    word: "柔道",
    reading: "じゅうどう",
    romaji: "juudou",
    english: "Judo",
    bengali: "জুডো",
    category: "Entertainment"
  },
  {
    id: "36-8",
    word: "ラッシュ",
    reading: "ラッシュ",
    romaji: "rasshu",
    english: "rush hour",
    bengali: "ভিড়",
    category: "Miscellaneous"
  },
  {
    id: "36-9",
    word: "宇宙",
    reading: "うちゅう",
    romaji: "uchuu",
    english: "space, universe",
    bengali: "মহাকাশ",
    category: "Place"
  },
  {
    id: "36-10",
    word: "曲",
    reading: "きょく",
    romaji: "kyoku",
    english: "piece of music, song",
    bengali: "গান",
    category: "Entertainment"
  },
  {
    id: "36-11",
    word: "毎週",
    reading: "まいしゅう",
    romaji: "maishuu",
    english: "every week",
    bengali: "প্রতি সপ্তাহ",
    category: "Time"
  },
  {
    id: "36-12",
    word: "毎月",
    reading: "まいつき",
    romaji: "maitsuki",
    english: "every month",
    bengali: "প্রতি মাস",
    category: "Time"
  },
  {
    id: "36-13",
    word: "毎年",
    reading: "まいねん",
    romaji: "mainen",
    english: "every year",
    bengali: "প্রতি বছর",
    category: "Time"
  },
  {
    id: "36-14",
    word: "やっと",
    reading: "やっと",
    romaji: "yatto",
    english: "at last, finally",
    bengali: "অবশেষে",
    category: "Adverb"
  },
  {
    id: "36-15",
    word: "かなり",
    reading: "かなり",
    romaji: "kanari",
    english: "fairly, considerably",
    bengali: "বেশ / যথেষ্ট",
    category: "Adverb"
  },
  {
    id: "36-16",
    word: "必ず",
    reading: "かならず",
    romaji: "kanarazu",
    english: "without fail, by all means",
    bengali: "অবশ্যই",
    category: "Adverb"
  },
  {
    id: "36-17",
    word: "絶対に",
    reading: "ぜったいに",
    romaji: "zettai ni",
    english: "absolutely, definitely",
    bengali: "নিশ্চিতভাবে",
    category: "Adverb"
  },
  {
    id: "36-18",
    word: "上手に",
    reading: "じょうずに",
    romaji: "jouzu ni",
    english: "skillfully",
    bengali: "দক্ষভাবে",
    category: "Adverb"
  },
  {
    id: "36-19",
    word: "できるだけ",
    reading: "できるだけ",
    romaji: "dekiru dake",
    english: "as much as possible",
    bengali: "যতটা সম্ভব",
    category: "Adverb"
  },
  {
    id: "36-20",
    word: "ほとんど",
    reading: "ほとんど",
    romaji: "hotondo",
    english: "almost all, mostly",
    bengali: "প্রায় সব",
    category: "Adverb"
  },
  {
    id: "36-21",
    word: "ショパン",
    reading: "ショパン",
    romaji: "shopan",
    english: "Chopin",
    bengali: "শোপ্যাঁ",
    category: "Miscellaneous"
  },
  {
    id: "36-22",
    word: "お客様",
    reading: "おきゃくさま",
    romaji: "okyaku-sama",
    english: "customer, guest (polite)",
    bengali: "অতিথি (সম্মানসূচক)",
    category: "People"
  },
  {
    id: "36-23",
    word: "特別な",
    reading: "とくべつな",
    romaji: "tokubetsu na",
    english: "special",
    bengali: "বিশেষ",
    category: "Adjective"
  },
  {
    id: "36-24",
    word: "していらっしゃいます",
    reading: "していらっしゃいます",
    romaji: "shite irasshaimasu",
    english: "be doing (honorific)",
    bengali: "করছেন (সম্মানসূচক)",
    category: "Verb"
  },
  {
    id: "36-25",
    word: "水泳",
    reading: "すいえい",
    romaji: "suiei",
    english: "swimming",
    bengali: "সাঁতার",
    category: "Entertainment"
  },
  {
    id: "36-26",
    word: "違います",
    reading: "ちがいます",
    romaji: "chigaimasu",
    english: "to be different",
    bengali: "ভিন্ন হওয়া",
    category: "Verb"
  },
  {
    id: "36-27",
    word: "使っていらっしゃるんですね",
    reading: "つかっていらっしゃるんですね",
    romaji: "tsukatte irassharun desu ne",
    english: "You are using, aren't you? (honorific)",
    bengali: "ব্যবহার করছেন তাই না?",
    category: "Greetings"
  },
  {
    id: "36-28",
    word: "タンゴ",
    reading: "タンゴ",
    romaji: "tango",
    english: "tango",
    bengali: "ট্যাঙ্গো",
    category: "Entertainment"
  },
  {
    id: "36-29",
    word: "チャレンジします",
    reading: "チャレンジします",
    romaji: "charenjishimasu",
    english: "to challenge",
    bengali: "চ্যালেঞ্জ করা",
    category: "Verb"
  },
  {
    id: "36-30",
    word: "気持ち",
    reading: "きもち",
    romaji: "kimochi",
    english: "feeling, mood",
    bengali: "অনুভূতি",
    category: "Miscellaneous"
  },
  {
    id: "36-31",
    word: "乗り物",
    reading: "のりもの",
    romaji: "norimono",
    english: "vehicle, means of transport",
    bengali: "যানবাহন",
    category: "Travel"
  },
  {
    id: "36-32",
    word: "歴史",
    reading: "れきし",
    romaji: "rekishi",
    english: "history",
    bengali: "ইতিহাস",
    category: "Miscellaneous"
  },
  {
    id: "36-33",
    word: "ー世紀",
    reading: "ーせいき",
    romaji: "-seiki",
    english: "-th century",
    bengali: "- শতাব্দী",
    category: "Miscellaneous"
  },
  {
    id: "36-34",
    word: "遠く",
    reading: "とおく",
    romaji: "tooku",
    english: "far, distant place",
    bengali: "দূরে",
    category: "Place"
  },
  {
    id: "36-35",
    word: "汽車",
    reading: "きしゃ",
    romaji: "kisha",
    english: "steam train",
    bengali: "ট্রেন",
    category: "Travel"
  },
  {
    id: "36-36",
    word: "汽船",
    reading: "きせん",
    romaji: "kisen",
    english: "steamship",
    bengali: "স্টিমার",
    category: "Travel"
  },
  {
    id: "36-37",
    word: "大勢の",
    reading: "おおぜいの",
    romaji: "oozei no",
    english: "many (people)",
    bengali: "অনেক (মানুষ)",
    category: "People"
  },
  {
    id: "36-38",
    word: "運びます",
    reading: "はこびます",
    romaji: "hakobimasu",
    english: "to carry, to transport",
    bengali: "বহন করা",
    category: "Verb"
  },
  {
    id: "36-39",
    word: "飛びます",
    reading: "とびます",
    romaji: "tobimasu",
    english: "to fly",
    bengali: "ওড়া",
    category: "Verb"
  },
  {
    id: "36-40",
    word: "安全な",
    reading: "あんぜんな",
    romaji: "anzen na",
    english: "safe",
    bengali: "নিরাপদ",
    category: "Adjective"
  },
  {
    id: "36-41",
    word: "宇宙飛行士",
    reading: "うちゅうひこうし",
    romaji: "uchuuhikoushi",
    english: "astronaut",
    bengali: "মহাকাশচারী",
    category: "People"
  },

  // Lesson 37
  {
    id: "37-1",
    word: "褒めます",
    reading: "ほめます",
    romaji: "homemasu",
    english: "to praise",
    bengali: "প্রশংসা করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "褒める", reading: "ほめる", english: "to praise", bengali: "প্রশংসা করা" },
      masu: { word: "褒めます", reading: "ほめます", english: "praise (polite)", bengali: "প্রশংসা করি" },
      te: { word: "褒めて", reading: "ほめて", english: "praising", bengali: "প্রশংসা করে" },
      nai: { word: "褒めない", reading: "ほめない", english: "not praise", bengali: "প্রশংসা করি না" }
    }
  },
  {
    id: "37-2",
    word: "叱ります",
    reading: "しかります",
    romaji: "shikarimasu",
    english: "to scold",
    bengali: "বকা দেওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "叱る", reading: "しかる", english: "to scold", bengali: "বকা দেওয়া" },
      masu: { word: "叱ります", reading: "しかります", english: "scold (polite)", bengali: "বকা দিই" },
      te: { word: "叱って", reading: "しかって", english: "scolding", bengali: "বকা দিয়ে" },
      nai: { word: "叱らない", reading: "しからない", english: "not scold", bengali: "বকা দিই না" }
    }
  },
  {
    id: "37-3",
    word: "誘います",
    reading: "さそいます",
    romaji: "sasoimasu",
    english: "to invite, to ask someone out",
    bengali: "আমন্ত্রণ জানানো",
    category: "Verb",
    conjugation: {
      dictionary: { word: "誘う", reading: "さそう", english: "to invite", bengali: "আমন্ত্রণ জানানো" },
      masu: { word: "誘います", reading: "さそいます", english: "invite (polite)", bengali: "আমন্ত্রণ জানাই" },
      te: { word: "誘って", reading: "さそって", english: "inviting", bengali: "আমন্ত্রণ জানিয়ে" },
      nai: { word: "誘わない", reading: "さそわない", english: "not invite", bengali: "আমন্ত্রণ জানাই না" }
    }
  },
  {
    id: "37-4",
    word: "起こします",
    reading: "おこします",
    romaji: "okoshimasu",
    english: "to wake someone up",
    bengali: "জাগিয়ে তোলা",
    category: "Verb"
  },
  {
    id: "37-5",
    word: "招待します",
    reading: "しょうたいします",
    romaji: "shoutaishimasu",
    english: "to invite",
    bengali: "আমন্ত্রণ জানানো",
    category: "Verb"
  },
  {
    id: "37-6",
    word: "頼みます",
    reading: "たのみます",
    romaji: "tanomimasu",
    english: "to ask, to request",
    bengali: "অনুরোধ করা",
    category: "Verb"
  },
  {
    id: "37-7",
    word: "注意します",
    reading: "ちゅういします",
    romaji: "chuuyishimasu",
    english: "to warn, to advise",
    bengali: "সতর্ক করা",
    category: "Verb"
  },
  {
    id: "37-8",
    word: "とります",
    reading: "とります",
    romaji: "torimasu",
    english: "to steal, to rob",
    bengali: "চুরি করা",
    category: "Verb"
  },
  {
    id: "37-9",
    word: "踏みます",
    reading: "ふみます",
    romaji: "fumimasu",
    english: "to step on",
    bengali: "পাড়া দেওয়া",
    category: "Verb"
  },
  {
    id: "37-10",
    word: "壊します",
    reading: "こわします",
    romaji: "kowashimasu",
    english: "to break, to destroy",
    bengali: "ভেঙে ফেলা",
    category: "Verb"
  },
  {
    id: "37-11",
    word: "汚します",
    reading: "よごします",
    romaji: "yogoshimasu",
    english: "to make dirty",
    bengali: "নোংরা করা",
    category: "Verb"
  },
  {
    id: "37-12",
    word: "行います",
    reading: "おこないます",
    romaji: "okonaimasu",
    english: "to hold, to carry out",
    bengali: "আয়োজন করা",
    category: "Verb"
  },
  {
    id: "37-13",
    word: "輸出します",
    reading: "ゆしゅつします",
    romaji: "yushutsushimasu",
    english: "to export",
    bengali: "রপ্তানি করা",
    category: "Verb"
  },
  {
    id: "37-14",
    word: "輸入します",
    reading: "ゆにゅうします",
    romaji: "yunyuushimasu",
    english: "to import",
    bengali: "আমদানি করা",
    category: "Verb"
  },
  {
    id: "37-15",
    word: "翻訳します",
    reading: "ほんやくします",
    romaji: "honyakushimasu",
    english: "to translate",
    bengali: "অনুবাদ করা",
    category: "Verb"
  },
  {
    id: "37-16",
    word: "発明します",
    reading: "はつめいします",
    romaji: "hatsumeishimasu",
    english: "to invent",
    bengali: "আবিষ্কার করা",
    category: "Verb"
  },
  {
    id: "37-17",
    word: "発見します",
    reading: "はっけんします",
    romaji: "hakkenshimasu",
    english: "to discover",
    bengali: "খুঁজে বের করা",
    category: "Verb"
  },
  {
    id: "37-18",
    word: "設計します",
    reading: "せっけいします",
    romaji: "sekkeishimasu",
    english: "to design",
    bengali: "নকশা করা",
    category: "Verb"
  },
  {
    id: "37-19",
    word: "米",
    reading: "こめ",
    romaji: "kome",
    english: "rice",
    bengali: "চাল",
    category: "Food"
  },
  {
    id: "37-20",
    word: "麦",
    reading: "むぎ",
    romaji: "mugi",
    english: "barley, wheat",
    bengali: "গম / বার্লি",
    category: "Food"
  },
  {
    id: "37-21",
    word: "石油",
    reading: "せきゆ",
    romaji: "sekiyu",
    english: "oil, petroleum",
    bengali: "তেল / পেট্রোলিয়াম",
    category: "Miscellaneous"
  },
  {
    id: "37-22",
    word: "原料",
    reading: "げんりょう",
    romaji: "genryou",
    english: "raw material",
    bengali: "কাঁচামাল",
    category: "Miscellaneous"
  },
  {
    id: "37-23",
    word: "インスタントラーメン",
    reading: "インスタントラーメン",
    romaji: "insutanto raamen",
    english: "instant noodles",
    bengali: "ইনস্ট্যান্ট নুডলস",
    category: "Food"
  },
  {
    id: "37-24",
    word: "デート",
    reading: "デート",
    romaji: "deeto",
    english: "date",
    bengali: "ডেট",
    category: "Entertainment"
  },
  {
    id: "37-25",
    word: "泥棒",
    reading: "どろぼう",
    romaji: "dorobou",
    english: "thief",
    bengali: "চোর",
    category: "People"
  },
  {
    id: "37-26",
    word: "警官",
    reading: "けいかん",
    romaji: "keikan",
    english: "policeman",
    bengali: "পুলিশ",
    category: "People"
  },
  {
    id: "37-27",
    word: "世界中",
    reading: "せかいじゅう",
    romaji: "sekaijuu",
    english: "all over the world",
    bengali: "সারা বিশ্ব",
    category: "Place"
  },
  {
    id: "37-28",
    word: "ー中",
    reading: "ーじゅう",
    romaji: "-juu",
    english: "all over -, through -",
    bengali: "সারা -",
    category: "Miscellaneous"
  },
  {
    id: "37-29",
    word: "ー世紀",
    reading: "ーせいき",
    romaji: "-seiki",
    english: "-th century",
    bengali: "- শতাব্দী",
    category: "Miscellaneous"
  },
  {
    id: "37-30",
    word: "何語",
    reading: "なにご",
    romaji: "nanigo",
    english: "what language",
    bengali: "কোন ভাষা",
    category: "Miscellaneous"
  },
  {
    id: "37-31",
    word: "誰か",
    reading: "だれか",
    romaji: "dareka",
    english: "someone",
    bengali: "কেউ",
    category: "People"
  },
  {
    id: "37-32",
    word: "よかったですね",
    reading: "よかったですね",
    romaji: "yokatta desu ne",
    english: "That's good",
    bengali: "ভালো হয়েছে",
    category: "Greetings"
  },
  {
    id: "37-33",
    word: "オリンピック",
    reading: "オリンピック",
    romaji: "orinpikku",
    english: "Olympic Games",
    bengali: "অলিম্পিক",
    category: "Entertainment"
  },
  {
    id: "37-34",
    word: "ワールドカップ",
    reading: "ワールドカップ",
    romaji: "waarudo kappu",
    english: "World Cup",
    bengali: "বিশ্বকাপ",
    category: "Entertainment"
  },
  {
    id: "37-35",
    word: "東大寺",
    reading: "とうだいじ",
    romaji: "toudaiji",
    english: "Todaiji Temple",
    bengali: "তোদাইজি মন্দির",
    category: "Place"
  },
  {
    id: "37-36",
    word: "大仏",
    reading: "だいぶつ",
    romaji: "daibutsu",
    english: "Great Buddha",
    bengali: "বড় বুদ্ধ মূর্তি",
    category: "Miscellaneous"
  },
  {
    id: "37-37",
    word: "江戸時代",
    reading: "えどじだい",
    romaji: "edo jidai",
    english: "Edo period",
    bengali: "এদো যুগ",
    category: "Miscellaneous"
  },
  {
    id: "37-38",
    word: "ポルトガル",
    reading: "ポルトガル",
    romaji: "porutogaru",
    english: "Portugal",
    bengali: "পর্তুগাল",
    category: "Place"
  },
  {
    id: "37-39",
    word: "サウジアラビア",
    reading: "サウジアラビア",
    romaji: "saujiarabia",
    english: "Saudi Arabia",
    bengali: "সৌদি আরব",
    category: "Place"
  },
  {
    id: "37-40",
    word: "ロシア",
    reading: "ロシア",
    romaji: "roshia",
    english: "Russia",
    bengali: "রাশিয়া",
    category: "Place"
  },
  {
    id: "37-41",
    word: "皆様",
    reading: "みなさま",
    romaji: "minasama",
    english: "everyone (polite)",
    bengali: "সবাই (সম্মানসূচক)",
    category: "People"
  },
  {
    id: "37-42",
    word: "美しい",
    reading: "うつくしい",
    romaji: "utsukushii",
    english: "beautiful",
    bengali: "সুন্দর",
    category: "Adjective"
  },
  {
    id: "37-43",
    word: "豪華な",
    reading: "ごうかな",
    romaji: "gouka na",
    english: "luxurious, gorgeous",
    bengali: "বিলাসবহুল",
    category: "Adjective"
  },
  {
    id: "37-44",
    word: "彫刻",
    reading: "ちょうこく",
    romaji: "choukoku",
    english: "sculpture, carving",
    bengali: "খোদাই করা",
    category: "Miscellaneous"
  },
  {
    id: "37-45",
    word: "眠ります",
    reading: "ねむります",
    romaji: "nemurimasu",
    english: "to sleep",
    bengali: "ঘুমানো",
    category: "Verb"
  },
  {
    id: "37-46",
    word: "彫ります",
    reading: "ほります",
    romaji: "horimasu",
    english: "to engrave, to carve",
    bengali: "খোদাই করা",
    category: "Verb"
  },
  {
    id: "37-47",
    word: "仲間",
    reading: "なかま",
    romaji: "nakama",
    english: "colleague, friend",
    bengali: "সঙ্গী",
    category: "People"
  },
  {
    id: "37-48",
    word: "しかし",
    reading: "しかし",
    romaji: "shikashi",
    english: "but, however",
    bengali: "কিন্তু",
    category: "Miscellaneous"
  },

  // Lesson 38
  {
    id: "38-1",
    word: "続けます",
    reading: "つづけます",
    romaji: "tsuzukemasu",
    english: "to continue",
    bengali: "চালিয়ে যাওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "続ける", reading: "つづける", english: "to continue", bengali: "চালিয়ে যাওয়া" },
      masu: { word: "続けます", reading: "つづけます", english: "continue (polite)", bengali: "চালিয়ে যাই" },
      te: { word: "続けて", reading: "つづけて", english: "continuing", bengali: "চালিয়ে গিয়ে" },
      nai: { word: "続けない", reading: "つづけない", english: "not continue", bengali: "চালিয়ে যাই না" }
    }
  },
  {
    id: "38-2",
    word: "見つけます",
    reading: "みつけます",
    romaji: "mitsukemasu",
    english: "to find",
    bengali: "খুঁজে পাওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "見つける", reading: "みつける", english: "to find", bengali: "খুঁজে পাওয়া" },
      masu: { word: "見つけます", reading: "みつけます", english: "find (polite)", bengali: "খুঁজে পাই" },
      te: { word: "見つけて", reading: "みつけて", english: "finding", bengali: "খুঁজে পেয়ে" },
      nai: { word: "見つけない", reading: "みつけない", english: "not find", bengali: "খুঁজে পাই না" }
    }
  },
  {
    id: "38-3",
    word: "取ります",
    reading: "とります",
    romaji: "torimasu",
    english: "to take (a holiday)",
    bengali: "নেওয়া (ছুটি)",
    category: "Verb"
  },
  {
    id: "38-4",
    word: "受けます",
    reading: "うけます",
    romaji: "ukemasu",
    english: "to take (an examination)",
    bengali: "দেওয়া (পরীক্ষা)",
    category: "Verb"
  },
  {
    id: "38-5",
    word: "申し込みます",
    reading: "もうしこみます",
    romaji: "moushikomimasu",
    english: "to apply for",
    bengali: "আবেদন করা",
    category: "Verb"
  },
  {
    id: "38-6",
    word: "休憩します",
    reading: "きゅうけいします",
    romaji: "kyuukeishimasu",
    english: "to take a break",
    bengali: "বিরতি নেওয়া",
    category: "Verb"
  },
  {
    id: "38-7",
    word: "練習します",
    reading: "れんしゅうします",
    romaji: "renshuushimasu",
    english: "to practice",
    bengali: "অনুশীলন করা",
    category: "Verb"
  },
  {
    id: "38-8",
    word: "発表します",
    reading: "はっぴょうします",
    romaji: "happyaoshimasu",
    english: "to announce, to present",
    bengali: "প্রকাশ করা / ঘোষণা করা",
    category: "Verb"
  },
  {
    id: "38-9",
    word: "展覧会",
    reading: "てんらんかい",
    romaji: "tenrankai",
    english: "exhibition",
    bengali: "প্রদর্শনী",
    category: "Entertainment"
  },
  {
    id: "38-10",
    word: "結婚式",
    reading: "けっこんしき",
    romaji: "kekkonshiki",
    english: "wedding ceremony",
    bengali: "বিয়ের অনুষ্ঠান",
    category: "Entertainment"
  },
  {
    id: "38-11",
    word: "葬式",
    reading: "そうしき",
    romaji: "soushiki",
    english: "funeral",
    bengali: "অন্ত্যেষ্টিক্রিয়া",
    category: "Entertainment"
  },
  {
    id: "38-12",
    word: "式",
    reading: "しき",
    romaji: "shiki",
    english: "ceremony",
    bengali: "অনুষ্ঠান",
    category: "Entertainment"
  },
  {
    id: "38-13",
    word: "本社",
    reading: "ほんしゃ",
    romaji: "honsha",
    english: "head office",
    bengali: "প্রধান কার্যালয়",
    category: "Place"
  },
  {
    id: "38-14",
    word: "支店",
    reading: "してん",
    romaji: "shiten",
    english: "branch office",
    bengali: "শাখা কার্যালয়",
    category: "Place"
  },
  {
    id: "38-15",
    word: "教会",
    reading: "きょうかい",
    romaji: "kyoukai",
    english: "church",
    bengali: "গির্জা",
    category: "Place"
  },
  {
    id: "38-16",
    word: "大学院",
    reading: "だいがくいん",
    romaji: "daigakuin",
    english: "graduate school",
    bengali: "গ্র্যাজুয়েট স্কুল",
    category: "Place"
  },
  {
    id: "38-17",
    word: "動物園",
    reading: "どうぶつえん",
    romaji: "doubutsuen",
    english: "zoo",
    bengali: "চিড়িয়াখানা",
    category: "Place"
  },
  {
    id: "38-18",
    word: "温泉",
    reading: "おんせん",
    romaji: "onsen",
    english: "hot spring",
    bengali: "উষ্ণ প্রস্রবণ",
    category: "Place"
  },
  {
    id: "38-19",
    word: "帰り",
    reading: "かえり",
    romaji: "kaeri",
    english: "return, coming back",
    bengali: "ফেরা",
    category: "Miscellaneous"
  },
  {
    id: "38-20",
    word: "お子さん",
    reading: "おこさん",
    romaji: "okosan",
    english: "(someone else's) child",
    bengali: "সন্তান (অন্যের)",
    category: "People"
  },
  {
    id: "38-21",
    word: "ーの方",
    reading: "ーのほう",
    romaji: "-no hou",
    english: "direction of -",
    bengali: "- এর দিক",
    category: "Miscellaneous"
  },
  {
    id: "38-22",
    word: "ずっと",
    reading: "ずっと",
    romaji: "zutto",
    english: "all the time, much more",
    bengali: "সারাক্ষণ / অনেক",
    category: "Adverb"
  },
  {
    id: "38-23",
    word: "残ります",
    reading: "のこります",
    romaji: "nokorimasu",
    english: "to remain, to be left",
    bengali: "অবশিষ্ট থাকা",
    category: "Verb"
  },
  {
    id: "38-24",
    word: "入学試験",
    reading: "にゅうがくしけん",
    romaji: "nyuugaku shiken",
    english: "entrance examination",
    bengali: "ভর্তি পরীক্ষা",
    category: "Miscellaneous"
  },
  {
    id: "38-25",
    word: "月に",
    reading: "つきに",
    romaji: "tsuki ni",
    english: "per month",
    bengali: "মাসে",
    category: "Time"
  },
  {
    id: "38-26",
    word: "村",
    reading: "むら",
    romaji: "mura",
    english: "village",
    bengali: "গ্রাম",
    category: "Place"
  },
  {
    id: "38-27",
    word: "卒業します",
    reading: "そつぎょうします",
    romaji: "sotsugyaoshimasu",
    english: "to graduate",
    bengali: "স্নাতক হওয়া",
    category: "Verb"
  },
  {
    id: "38-28",
    word: "映画館",
    reading: "えいがかん",
    romaji: "eigakan",
    english: "movie theater",
    bengali: "সিনেমা হল",
    category: "Place"
  },
  {
    id: "38-29",
    word: "嫌な",
    reading: "いやな",
    romaji: "iya na",
    english: "hateful, disagreeable",
    bengali: "অপছন্দনীয়",
    category: "Adjective"
  },
  {
    id: "38-30",
    word: "空",
    reading: "そら",
    romaji: "sora",
    english: "sky",
    bengali: "আকাশ",
    category: "Nature"
  },
  {
    id: "38-31",
    word: "閉じます",
    reading: "とじます",
    romaji: "tojimasu",
    english: "to close (eyes, book)",
    bengali: "বন্ধ করা (চোখ)",
    category: "Verb"
  },
  {
    id: "38-32",
    word: "都会",
    reading: "とかい",
    romaji: "tokai",
    english: "city",
    bengali: "শহর",
    category: "Place"
  },
  {
    id: "38-33",
    word: "子供たち",
    reading: "こどもたち",
    romaji: "kodomotachi",
    english: "children",
    bengali: "শিশুরা",
    category: "People"
  },
  {
    id: "38-34",
    word: "自由に",
    reading: "じゆうに",
    romaji: "jiyuu ni",
    english: "freely",
    bengali: "স্বাধীনভাবে",
    category: "Adverb"
  },

  // Lesson 39
  {
    id: "39-1",
    word: "答えます",
    reading: "こたえます",
    romaji: "kotaemasu",
    english: "to answer",
    bengali: "উত্তর দেওয়া",
    category: "Verb",
    conjugation: {
      dictionary: { word: "答える", reading: "こたえる", english: "to answer", bengali: "উত্তর দেওয়া" },
      masu: { word: "答えます", reading: "こたえます", english: "answer (polite)", bengali: "উত্তর দিই" },
      te: { word: "答えて", reading: "こたえて", english: "answering", bengali: "উত্তর দিয়ে" },
      nai: { word: "答えない", reading: "こたえない", english: "not answer", bengali: "উত্তর দিই না" }
    }
  },
  {
    id: "39-2",
    word: "倒れます",
    reading: "たおれます",
    romaji: "taoremasu",
    english: "to fall down, to collapse",
    bengali: "পড়ে যাওয়া (বিল্ডিং)",
    category: "Verb"
  },
  {
    id: "39-3",
    word: "通ります",
    reading: "とおります",
    romaji: "toorimasu",
    english: "to pass (along a street)",
    bengali: "যাওয়া / পার হওয়া (রাস্তা)",
    category: "Verb"
  },
  {
    id: "39-4",
    word: "死にます",
    reading: "しにます",
    romaji: "shinimasu",
    english: "to die",
    bengali: "মারা যাওয়া",
    category: "Verb"
  },
  {
    id: "39-5",
    word: "びっくりします",
    reading: "びっくりします",
    romaji: "bikkurishimasu",
    english: "to be surprised",
    bengali: "অবাক হওয়া",
    category: "Verb"
  },
  {
    id: "39-6",
    word: "がっかりします",
    reading: "がっかりします",
    romaji: "gakkarishimasu",
    english: "to be disappointed",
    bengali: "হতাশ হওয়া",
    category: "Verb"
  },
  {
    id: "39-7",
    word: "安心します",
    reading: "あんしんします",
    romaji: "anshinshimasu",
    english: "to be relieved",
    bengali: "আশ্বস্ত হওয়া",
    category: "Verb"
  },
  {
    id: "39-8",
    word: "喧嘩します",
    reading: "けんかします",
    romaji: "kenkashimasu",
    english: "to quarrel, to fight",
    bengali: "ঝগড়া করা",
    category: "Verb"
  },
  {
    id: "39-9",
    word: "離婚します",
    reading: "りこんします",
    romaji: "rikonshimasu",
    english: "to get divorced",
    bengali: "বিবাহবিচ্ছেদ করা",
    category: "Verb"
  },
  {
    id: "39-10",
    word: "太ります",
    reading: "ふとります",
    romaji: "futorimasu",
    english: "to get fat, to gain weight",
    bengali: "মোটা হওয়া",
    category: "Verb"
  },
  {
    id: "39-11",
    word: "痩せます",
    reading: "やせます",
    romaji: "yasemasu",
    english: "to get slim, to lose weight",
    bengali: "রোগা হওয়া",
    category: "Verb"
  },
  {
    id: "39-12",
    word: "複雑な",
    reading: "ふくざつな",
    romaji: "fukuzatsu na",
    english: "complex, complicated",
    bengali: "জটিল",
    category: "Adjective"
  },
  {
    id: "39-13",
    word: "邪魔な",
    reading: "じゃまな",
    romaji: "jama na",
    english: "obstructive, in the way",
    bengali: "বিরক্তিকর / বাধা",
    category: "Adjective"
  },
  {
    id: "39-14",
    word: "硬い",
    reading: "かたい",
    romaji: "katai",
    english: "hard, tough, solid",
    bengali: "শক্ত",
    category: "Adjective"
  },
  {
    id: "39-15",
    word: "柔らかい",
    reading: "やわらかい",
    romaji: "yawarakai",
    english: "soft, tender",
    bengali: "নরম",
    category: "Adjective"
  },
  {
    id: "39-16",
    word: "汚い",
    reading: "きたない",
    romaji: "kitanai",
    english: "dirty",
    bengali: "নোংরা",
    category: "Adjective"
  },
  {
    id: "39-17",
    word: "嬉しい",
    reading: "うれしい",
    romaji: "ureshii",
    english: "glad, happy",
    bengali: "খুশি",
    category: "Adjective"
  },
  {
    id: "39-18",
    word: "悲しい",
    reading: "かなしい",
    romaji: "kanashii",
    english: "sad",
    bengali: "দুঃখিত",
    category: "Adjective"
  },
  {
    id: "39-19",
    word: "恥ずかしい",
    reading: "はずかしい",
    romaji: "hazukashii",
    english: "embarrassed, ashamed",
    bengali: "লজ্জিত",
    category: "Adjective"
  },
  {
    id: "39-20",
    word: "首相",
    reading: "しゅしょう",
    romaji: "shushou",
    english: "prime minister",
    bengali: "প্রধানমন্ত্রী",
    category: "People"
  },
  {
    id: "39-21",
    word: "地震",
    reading: "じしん",
    romaji: "jishin",
    english: "earthquake",
    bengali: "ভূমিকম্প",
    category: "Nature"
  },
  {
    id: "39-22",
    word: "津波",
    reading: "つなみ",
    romaji: "tsunami",
    english: "tsunami",
    bengali: "সুনামি",
    category: "Nature"
  },
  {
    id: "39-23",
    word: "台風",
    reading: "たいふう",
    romaji: "taifuu",
    english: "typhoon",
    bengali: "টাইফুন",
    category: "Nature"
  },
  {
    id: "39-24",
    word: "火事",
    reading: "かじ",
    romaji: "kaji",
    english: "fire",
    bengali: "আগুন",
    category: "Nature"
  },
  {
    id: "39-25",
    word: "事故",
    reading: "じこ",
    romaji: "jiko",
    english: "accident",
    bengali: "দুর্ঘটনা",
    category: "Miscellaneous"
  },
  {
    id: "39-26",
    word: "お見合い",
    reading: "おみあい",
    romaji: "omiai",
    english: "marriage interview",
    bengali: "বিয়ের জন্য দেখা করা",
    category: "Entertainment"
  },
  {
    id: "39-27",
    word: "操作",
    reading: "そうさ",
    romaji: "sousa",
    english: "operation",
    bengali: "পরিচালনা",
    category: "Miscellaneous"
  },
  {
    id: "39-28",
    word: "会場",
    reading: "かいじょう",
    romaji: "kaijou",
    english: "venue, event site",
    bengali: "অনুষ্ঠানস্থল",
    category: "Place"
  },
  {
    id: "39-29",
    word: "ー代",
    reading: "ーだい",
    romaji: "-dai",
    english: "charge, fee, fare",
    bengali: "- ফি / খরচ",
    category: "Miscellaneous"
  },
  {
    id: "39-30",
    word: "ー屋",
    reading: "ーや",
    romaji: "-ya",
    english: "- shop, - store",
    bengali: "- দোকানদার",
    category: "People"
  },
  {
    id: "39-31",
    word: "フロント",
    reading: "フロント",
    romaji: "furonto",
    english: "front desk, reception",
    bengali: "ফ্রন্ট ডেস্ক",
    category: "Place"
  },
  {
    id: "39-32",
    word: "ー号室",
    reading: "ーごうしつ",
    romaji: "-goushitsu",
    english: "room number -",
    bengali: "- নম্বর রুম",
    category: "Place"
  },
  {
    id: "39-33",
    word: "タオル",
    reading: "タオル",
    romaji: "taoru",
    english: "towel",
    bengali: "তোয়ালে",
    category: "Objects"
  },
  {
    id: "39-34",
    word: "石鹸",
    reading: "せっけん",
    romaji: "sekken",
    english: "soap",
    bengali: "সাবান",
    category: "Objects"
  },
  {
    id: "39-35",
    word: "大勢",
    reading: "おおぜい",
    romaji: "oozei",
    english: "great number of people",
    bengali: "অনেক (মানুষ)",
    category: "People"
  },
  {
    id: "39-36",
    word: "お疲れ様でした",
    reading: "おつかれさまでした",
    romaji: "otsukaresama deshita",
    english: "Thank you for your hard work",
    bengali: "কষ্টের জন্য ধন্যবাদ",
    category: "Greetings"
  },
  {
    id: "39-37",
    word: "伺います",
    reading: "うかがいます",
    romaji: "ukagaimasu",
    english: "to visit, to ask (humble)",
    bengali: "আসছি / যাচ্ছি (সম্মানসূচক)",
    category: "Verb"
  },
  {
    id: "39-38",
    word: "途中で",
    reading: "とちゅうで",
    romaji: "tochuu de",
    english: "on the way, in the middle of",
    bengali: "মাঝপথে",
    category: "Miscellaneous"
  },
  {
    id: "39-39",
    word: "トラック",
    reading: "トラック",
    romaji: "torakku",
    english: "truck",
    bengali: "ট্রাক",
    category: "Travel"
  },
  {
    id: "39-40",
    word: "ぶつかります",
    reading: "ぶつかります",
    romaji: "butsukarimasu",
    english: "to bump, to collide",
    bengali: "ধাক্কা লাগা",
    category: "Verb"
  },
  {
    id: "39-41",
    word: "並びます",
    reading: "ならびます",
    romaji: "narabimasu",
    english: "to stand in line, to list",
    bengali: "লাইনে দাঁড়ানো",
    category: "Verb"
  },
  {
    id: "39-42",
    word: "大人",
    reading: "おとな",
    romaji: "otona",
    english: "adult",
    bengali: "প্রাপ্তবয়স্ক",
    category: "People"
  },
  {
    id: "39-43",
    word: "洋服",
    reading: "ようふく",
    romaji: "youfuku",
    english: "Western-style clothes",
    bengali: "পশ্চিমা পোশাক",
    category: "Objects"
  },
  {
    id: "39-44",
    word: "西洋化します",
    reading: "せいようかします",
    romaji: "seiyou kashimasu",
    english: "to become Westernized",
    bengali: "পশ্চিমা হওয়া",
    category: "Verb"
  },
  {
    id: "39-45",
    word: "合います",
    reading: "あいます",
    romaji: "aimasu",
    english: "to fit, to suit",
    bengali: "মানানসই হওয়া",
    category: "Verb"
  },
  {
    id: "39-46",
    word: "今は",
    reading: "いまは",
    romaji: "ima wa",
    english: "now",
    bengali: "এখন",
    category: "Time"
  },
  {
    id: "39-47",
    word: "成人式",
    reading: "せいじんしき",
    romaji: "seijinshiki",
    english: "Coming-of-Age ceremony",
    bengali: "প্রাপ্তবয়স্ক হওয়ার অনুষ্ঠান",
    category: "Entertainment"
  },
  {
    id: "39-48",
    word: "伝統的な",
    reading: "でんとうてきな",
    romaji: "dentouteki na",
    english: "traditional",
    bengali: "ঐতিহ্যবাহী",
    category: "Adjective"
  },

  // Lesson 40
  {
    id: "40-1",
    word: "数えます",
    reading: "かぞえます",
    romaji: "kazoemasu",
    english: "to count",
    bengali: "গণনা করা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "数える", reading: "かぞえる", english: "to count", bengali: "গণনা করা" },
      masu: { word: "数えます", reading: "かぞえます", english: "count (polite)", bengali: "গণনা করি" },
      te: { word: "数えて", reading: "かぞえて", english: "counting", bengali: "গণনা করে" },
      nai: { word: "数えない", reading: "かぞえない", english: "not count", bengali: "গণনা করি না" }
    }
  },
  {
    id: "40-2",
    word: "測ります",
    reading: "はかります",
    romaji: "hakarimasu",
    english: "to measure, to weigh",
    bengali: "মাপা (ওজন / দৈর্ঘ্য)",
    category: "Verb"
  },
  {
    id: "40-3",
    word: "確かめます",
    reading: "たしかめます",
    romaji: "tashikamemasu",
    english: "to confirm, to make sure",
    bengali: "নিশ্চিত করা",
    category: "Verb"
  },
  {
    id: "40-4",
    word: "合います",
    reading: "あいます",
    romaji: "aimasu",
    english: "to fit (size)",
    bengali: "মানানসই হওয়া (সাইজ)",
    category: "Verb"
  },
  {
    id: "40-5",
    word: "出発します",
    reading: "しゅっぱつします",
    romaji: "shuppatsushimasu",
    english: "to depart, to set off",
    bengali: "রওনা হওয়া",
    category: "Verb"
  },
  {
    id: "40-6",
    word: "到着します",
    reading: "とうちゃくします",
    romaji: "touchakushimasu",
    english: "to arrive",
    bengali: "পৌঁছানো",
    category: "Verb"
  },
  {
    id: "40-7",
    word: "酔います",
    reading: "よいます",
    romaji: "yoimasu",
    english: "to get drunk, to get seasick",
    bengali: "মাতাল হওয়া",
    category: "Verb"
  },
  {
    id: "40-8",
    word: "危険な",
    reading: "きけん",
    romaji: "kiken na",
    english: "dangerous",
    bengali: "বিপজ্জনক",
    category: "Adjective"
  },
  {
    id: "40-9",
    word: "必要な",
    reading: "ひつよう",
    romaji: "hitsuyou na",
    english: "necessary",
    bengali: "প্রয়োজনীয়",
    category: "Adjective"
  },
  {
    id: "40-10",
    word: "忘年会",
    reading: "ぼうねんかい",
    romaji: "bounenkai",
    english: "year-end party",
    bengali: "বছরের শেষের পার্টি",
    category: "Entertainment"
  },
  {
    id: "40-11",
    word: "新年会",
    reading: "しんねんかい",
    romaji: "shinnenkai",
    english: "New Year's party",
    bengali: "নতুন বছরের পার্টি",
    category: "Entertainment"
  },
  {
    id: "40-12",
    word: "二次会",
    reading: "にじかい",
    romaji: "nijikai",
    english: "second party",
    bengali: "দ্বিতীয় পার্টি",
    category: "Entertainment"
  },
  {
    id: "40-13",
    word: "大会",
    reading: "たいかい",
    romaji: "taikai",
    english: "convention, tournament",
    bengali: "সম্মেলন / প্রতিযোগিতা",
    category: "Entertainment"
  },
  {
    id: "40-14",
    word: "マラソン",
    reading: "マラソン",
    romaji: "marason",
    english: "marathon",
    bengali: "ম্যারাথন",
    category: "Entertainment"
  },
  {
    id: "40-15",
    word: "コンテスト",
    reading: "コンテスト",
    romaji: "kontesuto",
    english: "contest",
    bengali: "প্রতিযোগিতা",
    category: "Entertainment"
  },
  {
    id: "40-16",
    word: "表",
    reading: "おもて",
    romaji: "omote",
    english: "front, surface",
    bengali: "সামনে",
    category: "Place"
  },
  {
    id: "40-17",
    word: "裏",
    reading: "うら",
    romaji: "ura",
    english: "back, reverse side",
    bengali: "পিছনে",
    category: "Place"
  },
  {
    id: "40-18",
    word: "返事",
    reading: "へんじ",
    romaji: "henji",
    english: "reply",
    bengali: "উত্তর",
    category: "Miscellaneous"
  },
  {
    id: "40-19",
    word: "申し込み",
    reading: "もうしこみ",
    romaji: "moushikomi",
    english: "application",
    bengali: "আবেদন",
    category: "Miscellaneous"
  },
  {
    id: "40-20",
    word: "本当",
    reading: "ほんとう",
    romaji: "hontou",
    english: "truth, fact",
    bengali: "সত্যি",
    category: "Miscellaneous"
  },
  {
    id: "40-21",
    word: "間違い",
    reading: "まちがい",
    romaji: "machigai",
    english: "mistake",
    bengali: "ভুল",
    category: "Miscellaneous"
  },
  {
    id: "40-22",
    word: "傷",
    reading: "きず",
    romaji: "kizu",
    english: "defect, wound, scratch",
    bengali: "ক্ষত / দাগ",
    category: "Miscellaneous"
  },
  {
    id: "40-23",
    word: "ズボン",
    reading: "ズボン",
    romaji: "zubon",
    english: "trousers, pants",
    bengali: "প্যান্ট",
    category: "Objects"
  },
  {
    id: "40-24",
    word: "長さ",
    reading: "ながさ",
    romaji: "nagasa",
    english: "length",
    bengali: "দৈর্ঘ্য",
    category: "Miscellaneous"
  },
  {
    id: "40-25",
    word: "重さ",
    reading: "おもさ",
    romaji: "omosa",
    english: "weight",
    bengali: "ওজন",
    category: "Miscellaneous"
  },
  {
    id: "40-26",
    word: "高さ",
    reading: "たかさ",
    romaji: "takasa",
    english: "height",
    bengali: "উচ্চতা",
    category: "Miscellaneous"
  },
  {
    id: "40-27",
    word: "ー便",
    reading: "ーびん",
    romaji: "-bin",
    english: "flight number -",
    bengali: "- ফ্লাইট",
    category: "Travel"
  },
  {
    id: "40-28",
    word: "ー号",
    reading: "ーごう",
    romaji: "-gou",
    english: "number - (train, typhoon, etc.)",
    bengali: "- নম্বর",
    category: "Miscellaneous"
  },
  {
    id: "40-29",
    word: "ー個",
    reading: "ーこ",
    romaji: "-ko",
    english: "counter for small objects",
    bengali: "- টি (ছোট জিনিসের জন্য)",
    category: "Miscellaneous"
  },
  {
    id: "40-30",
    word: "ー本",
    reading: "ーほん",
    romaji: "-hon",
    english: "counter for long objects",
    bengali: "- টি (লম্বা জিনিসের জন্য)",
    category: "Miscellaneous"
  },
  {
    id: "40-31",
    word: "ー杯",
    reading: "ーはい",
    romaji: "-hai",
    english: "counter for cups/glasses",
    bengali: "- কাপ / গ্লাস",
    category: "Miscellaneous"
  },
  {
    id: "40-32",
    word: "ーキロ",
    reading: "ーキロ",
    romaji: "-kiro",
    english: "- kilograms, - kilometers",
    bengali: "- কেজি / কিমি",
    category: "Miscellaneous"
  },
  {
    id: "40-33",
    word: "ーグラム",
    reading: "ーグラム",
    romaji: "-guramu",
    english: "- grams",
    bengali: "- গ্রাম",
    category: "Miscellaneous"
  },
  {
    id: "40-34",
    word: "ーセンチ",
    reading: "ーセンチ",
    romaji: "-senchi",
    english: "- centimeters",
    bengali: "- সেমি",
    category: "Miscellaneous"
  },
  {
    id: "40-35",
    word: "ーミリ",
    reading: "ーミリ",
    romaji: "-miri",
    english: "- millimeters",
    bengali: "- মিমি",
    category: "Miscellaneous"
  },
  {
    id: "40-36",
    word: "いかがですか",
    reading: "いかがですか",
    romaji: "ikaga desu ka",
    english: "How about -? (polite)",
    bengali: "কেমন হয়?",
    category: "Greetings"
  },
  {
    id: "40-37",
    word: "テスト",
    reading: "テスト",
    romaji: "tesuto",
    english: "test, examination",
    bengali: "পরীক্ষা",
    category: "Miscellaneous"
  },
  {
    id: "40-38",
    word: "成績",
    reading: "せいせき",
    romaji: "seiseki",
    english: "results, grade",
    bengali: "ফলাফল",
    category: "Miscellaneous"
  },
  {
    id: "40-39",
    word: "ところで",
    reading: "ところで",
    romaji: "tokoro de",
    english: "by the way",
    bengali: "যাই হোক",
    category: "Miscellaneous"
  },
  {
    id: "40-40",
    word: "いらっしゃいます",
    reading: "いらっしゃいます",
    romaji: "irasshaimasu",
    english: "to come (honorific)",
    bengali: "আসছেন / আছেন (সম্মানসূচক)",
    category: "Verb"
  },
  {
    id: "40-41",
    word: "様子",
    reading: "ようす",
    romaji: "yousu",
    english: "appearance, situation",
    bengali: "অবস্থা",
    category: "Miscellaneous"
  },
  {
    id: "40-42",
    word: "事件",
    reading: "じけん",
    romaji: "jiken",
    english: "incident, case",
    bengali: "ঘটনা / মামলা",
    category: "Miscellaneous"
  },
  {
    id: "40-43",
    word: "オートバイ",
    reading: "オートバイ",
    romaji: "ootobai",
    english: "motorcycle",
    bengali: "মোটরসাইকেল",
    category: "Travel"
  },
  {
    id: "40-44",
    word: "爆弾",
    reading: "ばくだん",
    romaji: "bakudan",
    english: "bomb",
    bengali: "বোমা",
    category: "Miscellaneous"
  },
  {
    id: "40-45",
    word: "積みます",
    reading: "つみます",
    romaji: "tsumimasu",
    english: "to load, to pile up",
    bengali: "বোঝাই করা",
    category: "Verb"
  },
  {
    id: "40-46",
    word: "運転手",
    reading: "うんてんしゅ",
    romaji: "untenshu",
    english: "driver",
    bengali: "চালক",
    category: "People"
  },
  {
    id: "40-47",
    word: "離れた",
    reading: "はなれた",
    romaji: "hanareta",
    english: "remote, distant",
    bengali: "দূরে",
    category: "Adjective"
  },
  {
    id: "40-48",
    word: "急に",
    reading: "きゅうに",
    romaji: "kyuu ni",
    english: "suddenly",
    bengali: "হঠাৎ",
    category: "Adverb"
  },
  {
    id: "40-49",
    word: "動かします",
    reading: "うごかします",
    romaji: "ugokashimasu",
    english: "to move, to operate",
    bengali: "সরানো",
    category: "Verb"
  },
  {
    id: "40-50",
    word: "一生懸命",
    reading: "いっしょうけんめい",
    romaji: "isshoukenmei",
    english: "with all one's effort",
    bengali: "কঠোর পরিশ্রম",
    category: "Adverb"
  },
  {
    id: "40-51",
    word: "犯人",
    reading: "はんにん",
    romaji: "hannin",
    english: "criminal",
    bengali: "অপরাধী",
    category: "People"
  },
  {
    id: "40-52",
    word: "手に入れます",
    reading: "てにいれます",
    romaji: "te ni iremasu",
    english: "to obtain, to get",
    bengali: "হাতে পাওয়া",
    category: "Verb"
  },
  {
    id: "40-53",
    word: "噂します",
    reading: "うわさします",
    romaji: "uwasashimasu",
    english: "to gossip",
    bengali: "গুজব ছড়ানো",
    category: "Verb"
  },

  // Lesson 41
  {
    id: "41-1",
    word: "いただきます",
    reading: "いただきます",
    romaji: "itadakimasu",
    english: "to receive (humble equivalent of moraimasu)",
    bengali: "গ্রহণ করা (পাওয়া)",
    category: "Verb"
  },
  {
    id: "41-2",
    word: "くださいます",
    reading: "くださいます",
    romaji: "kudasaimasu",
    english: "to give (respectful equivalent of kuremasu)",
    bengali: "দেওয়া (সম্মানসূচক)",
    category: "Verb"
  },
  {
    id: "41-3",
    word: "やります",
    reading: "やります",
    romaji: "yarimasu",
    english: "to give (to a younger person, subordinate, animal or plant)",
    bengali: "দেওয়া (ছোটদের / প্রাণীদের)",
    category: "Verb"
  },
  {
    id: "41-4",
    word: "上げます",
    reading: "あげます",
    romaji: "agemasu",
    english: "to raise, to lift",
    bengali: "তোলা / বাড়ানো",
    category: "Verb"
  },
  {
    id: "41-5",
    word: "下げます",
    reading: "さげます",
    romaji: "sagemasu",
    english: "to lower, to pull down",
    bengali: "নামানো / কমানো",
    category: "Verb"
  },
  {
    id: "41-6",
    word: "親切にします",
    reading: "しんせつにします",
    romaji: "shinsetsu ni shimasu",
    english: "to be kind to",
    bengali: "দয়া দেখানো",
    category: "Verb"
  },
  {
    id: "41-7",
    word: "かわいい",
    reading: "かわいい",
    romaji: "kawaii",
    english: "cute, lovely",
    bengali: "কিউট",
    category: "Adjective"
  },
  {
    id: "41-8",
    word: "珍しい",
    reading: "めずらしい",
    romaji: "mezurashii",
    english: "rare, unusual",
    bengali: "বিরল",
    category: "Adjective"
  },
  {
    id: "41-9",
    word: "お祝い",
    reading: "おいわい",
    romaji: "oiwai",
    english: "celebration, gift",
    bengali: "উদযাপন / উপহার",
    category: "Miscellaneous"
  },
  {
    id: "41-10",
    word: "お年玉",
    reading: "おとしだま",
    romaji: "otoshidama",
    english: "New Year's money gift",
    bengali: "নতুন বছরের টাকা",
    category: "Miscellaneous"
  },
  {
    id: "41-11",
    word: "お見舞い",
    reading: "おみまい",
    romaji: "omimai",
    english: "visit to a sick person, expression of sympathy",
    bengali: "অসুস্থ কাউকে দেখতে যাওয়া",
    category: "Miscellaneous"
  },
  {
    id: "41-12",
    word: "興味",
    reading: "きょうみ",
    romaji: "kyoumi",
    english: "interest",
    bengali: "আগ্রহ",
    category: "Miscellaneous"
  },
  {
    id: "41-13",
    word: "情報",
    reading: "じょうほう",
    romaji: "jouhou",
    english: "information",
    bengali: "তথ্য",
    category: "Miscellaneous"
  },
  {
    id: "41-14",
    word: "文法",
    reading: "ぶんぽう",
    romaji: "bunpou",
    english: "grammar",
    bengali: "ব্যাকরণ",
    category: "Miscellaneous"
  },
  {
    id: "41-15",
    word: "発音",
    reading: "はつおん",
    romaji: "hatsuon",
    english: "pronunciation",
    bengali: "উচ্চারণ",
    category: "Miscellaneous"
  },
  {
    id: "41-16",
    word: "猿",
    reading: "さる",
    romaji: "saru",
    english: "monkey",
    bengali: "বানর",
    category: "Animals"
  },
  {
    id: "41-17",
    word: "えさ",
    reading: "えさ",
    romaji: "esa",
    english: "feed, bait",
    bengali: "খাবার (প্রাণীদের)",
    category: "Food"
  },
  {
    id: "41-18",
    word: "おもちゃ",
    reading: "おもちゃ",
    romaji: "omocha",
    english: "toy",
    bengali: "খেলনা",
    category: "Objects"
  },
  {
    id: "41-19",
    word: "絵本",
    reading: "えほん",
    romaji: "ehon",
    english: "picture book",
    bengali: "ছবির বই",
    category: "Objects"
  },
  {
    id: "41-20",
    word: "はがき",
    reading: "はがき",
    romaji: "hagaki",
    english: "postcard",
    bengali: "পোস্টকার্ড",
    category: "Objects"
  },
  {
    id: "41-21",
    word: "ドライバー",
    reading: "ドライバー",
    romaji: "doraibaa",
    english: "screwdriver",
    bengali: "স্ক্রু ড্রাইভার",
    category: "Objects"
  },
  {
    id: "41-22",
    word: "ハンカチ",
    reading: "ハンカチ",
    romaji: "hankachi",
    english: "handkerchief",
    bengali: "রুমাল",
    category: "Objects"
  },
  {
    id: "41-23",
    word: "靴下",
    reading: "くつした",
    romaji: "kutsushita",
    english: "socks",
    bengali: "মোজা",
    category: "Objects"
  },
  {
    id: "41-24",
    word: "手袋",
    reading: "てぶくろ",
    romaji: "tebukuro",
    english: "gloves",
    bengali: "দস্তানা",
    category: "Objects"
  },
  {
    id: "41-25",
    word: "幼稚園",
    reading: "ようちえん",
    romaji: "youchien",
    english: "kindergarten",
    bengali: "কিন্ডারগার্টেন",
    category: "Place"
  },
  {
    id: "41-26",
    word: "暖房",
    reading: "だんぼう",
    romaji: "danbou",
    english: "heating",
    bengali: "হিটার",
    category: "Objects"
  },
  {
    id: "41-27",
    word: "冷房",
    reading: "れいぼう",
    romaji: "reibou",
    english: "air-conditioning",
    bengali: "এসি",
    category: "Objects"
  },
  {
    id: "41-28",
    word: "温度",
    reading: "おんど",
    romaji: "ondo",
    english: "temperature",
    bengali: "তাপমাত্রা",
    category: "Miscellaneous"
  },
  {
    id: "41-29",
    word: "祖父",
    reading: "そふ",
    romaji: "sofu",
    english: "(my) grandfather",
    bengali: "দাদা / নানা",
    category: "People"
  },
  {
    id: "41-30",
    word: "祖母",
    reading: "そぼ",
    romaji: "sobo",
    english: "(my) grandmother",
    bengali: "দিদিমা / নানি",
    category: "People"
  },
  {
    id: "41-31",
    word: "孫",
    reading: "まご",
    romaji: "mago",
    english: "(my) grandchild",
    bengali: "নাতি / নাতনি",
    category: "People"
  },
  {
    id: "41-32",
    word: "お孫さん",
    reading: "おまごさん",
    romaji: "omagosan",
    english: "(someone else's) grandchild",
    bengali: "নাতি / নাতনি (অন্যের)",
    category: "People"
  },
  {
    id: "41-33",
    word: "叔父",
    reading: "おじ",
    romaji: "oji",
    english: "(my) uncle",
    bengali: "চাচা / মামা",
    category: "People"
  },
  {
    id: "41-34",
    word: "叔父さん",
    reading: "おじさん",
    romaji: "ojisan",
    english: "(someone else's) uncle",
    bengali: "চাচা / মামা (অন্যের)",
    category: "People"
  },
  {
    id: "41-35",
    word: "叔母",
    reading: "おば",
    romaji: "oba",
    english: "(my) aunt",
    bengali: "চাচি / মামি",
    category: "People"
  },
  {
    id: "41-36",
    word: "叔母さん",
    reading: "おばさん",
    romaji: "obasan",
    english: "(someone else's) aunt",
    bengali: "চাচি / মামি (অন্যের)",
    category: "People"
  },
  {
    id: "41-37",
    word: "管理人",
    reading: "かんりにん",
    romaji: "kanrinin",
    english: "manager, caretaker",
    bengali: "ম্যানেজার / তত্ত্বাবধায়ক",
    category: "People"
  },
  {
    id: "41-38",
    word: "ーさん",
    reading: "ーさん",
    romaji: "-san",
    english: "suffix added to names for politeness",
    bengali: "- সাহেব",
    category: "People"
  },
  {
    id: "41-39",
    word: "この間",
    reading: "このあいだ",
    romaji: "kono aida",
    english: "the other day, recently",
    bengali: "এই তো সেদিন",
    category: "Time"
  },
  {
    id: "41-40",
    word: "一言",
    reading: "ひとこと",
    romaji: "hitokoto",
    english: "a few words",
    bengali: "এক কথা",
    category: "Miscellaneous"
  },
  {
    id: "41-41",
    word: "ーずつ",
    reading: "ーずつ",
    romaji: "-zutsu",
    english: "each, at a time",
    bengali: "- করে",
    category: "Miscellaneous"
  },
  {
    id: "41-42",
    word: "二人",
    reading: "ふたり",
    romaji: "futari",
    english: "couple, two people",
    bengali: "দুজন",
    category: "People"
  },
  {
    id: "41-43",
    word: "お宅",
    reading: "おたく",
    romaji: "otaku",
    english: "(someone else's) home (polite)",
    bengali: "আপনার বাড়ি",
    category: "Place"
  },
  {
    id: "41-44",
    word: "どうぞ お幸せに",
    reading: "どうぞ おしあわせに",
    romaji: "douzo oshiawase ni",
    english: "I wish you happiness",
    bengali: "সুখে থাকুন",
    category: "Greetings"
  },

  // Lesson 42
  {
    id: "42-1",
    word: "包みます",
    reading: "つつみます",
    romaji: "tsutsumimasu",
    english: "to wrap, to pack",
    bengali: "মোড়ানো",
    category: "Verb",
    conjugation: {
      dictionary: { word: "包む", reading: "つつむ", english: "to wrap", bengali: "মোড়ানো" },
      masu: { word: "包みます", reading: "つつみます", english: "wrap (polite)", bengali: "মোড়াই" },
      te: { word: "包んで", reading: "つつんで", english: "wrapping", bengali: "মোড়িয়ে" },
      nai: { word: "包まない", reading: "つつまない", english: "not wrap", bengali: "মোড়াই না" }
    }
  },
  {
    id: "42-2",
    word: "沸かします",
    reading: "わかします",
    romaji: "wakashimasu",
    english: "to boil (water)",
    bengali: "ফোটানো (পানি)",
    category: "Verb"
  },
  {
    id: "42-3",
    word: "混ぜます",
    reading: "まぜます",
    romaji: "mazemasu",
    english: "to mix",
    bengali: "মেশানো",
    category: "Verb"
  },
  {
    id: "42-4",
    word: "計算します",
    reading: "けいさんします",
    romaji: "keisanshimasu",
    english: "to calculate",
    bengali: "গণনা করা",
    category: "Verb"
  },
  {
    id: "42-5",
    word: "並びます",
    reading: "ならびます",
    romaji: "narabimasu",
    english: "to stand in line",
    bengali: "লাইনে দাঁড়ানো",
    category: "Verb"
  },
  {
    id: "42-6",
    word: "丈夫な",
    reading: "じょうぶな",
    romaji: "joubu na",
    english: "strong, durable",
    bengali: "মজবুত",
    category: "Adjective"
  },
  {
    id: "42-7",
    word: "アパート",
    reading: "アパート",
    romaji: "apaato",
    english: "apartment",
    bengali: "অ্যাপার্টমেন্ট",
    category: "Place"
  },
  {
    id: "42-8",
    word: "弁護士",
    reading: "べんごし",
    romaji: "bengoshi",
    english: "lawyer",
    bengali: "আইনজীবী",
    category: "People"
  },
  {
    id: "42-9",
    word: "音楽家",
    reading: "おんがくか",
    romaji: "ongakuka",
    english: "musician",
    bengali: "সঙ্গীতজ্ঞ",
    category: "People"
  },
  {
    id: "42-10",
    word: "子供たち",
    reading: "こどもたち",
    romaji: "kodomotachi",
    english: "children",
    bengali: "শিশুরা",
    category: "People"
  },
  {
    id: "42-11",
    word: "自然",
    reading: "しぜん",
    romaji: "shizen",
    english: "nature",
    bengali: "প্রকৃতি",
    category: "Nature"
  },
  {
    id: "42-12",
    word: "教育",
    reading: "きょういく",
    romaji: "kyouiku",
    english: "education",
    bengali: "শিক্ষা",
    category: "Miscellaneous"
  },
  {
    id: "42-13",
    word: "文化",
    reading: "ぶんか",
    romaji: "bunka",
    english: "culture",
    bengali: "সংস্কৃতি",
    category: "Miscellaneous"
  },
  {
    id: "42-14",
    word: "政治",
    reading: "せいじ",
    romaji: "seiji",
    english: "politics",
    bengali: "রাজনীতি",
    category: "Miscellaneous"
  },
  {
    id: "42-15",
    word: "法律",
    reading: "ほうりつ",
    romaji: "houritsu",
    english: "law",
    bengali: "আইন",
    category: "Miscellaneous"
  },
  {
    id: "42-16",
    word: "戦争",
    reading: "せんそう",
    romaji: "sensou",
    english: "war",
    bengali: "যুদ্ধ",
    category: "Miscellaneous"
  },
  {
    id: "42-17",
    word: "平和",
    reading: "へいわ",
    romaji: "heiwa",
    english: "peace",
    bengali: "শান্তি",
    category: "Miscellaneous"
  },
  {
    id: "42-18",
    word: "目的",
    reading: "もくてき",
    romaji: "mokuteki",
    english: "purpose, objective",
    bengali: "উদ্দেশ্য",
    category: "Miscellaneous"
  },
  {
    id: "42-19",
    word: "論文",
    reading: "ろんぶん",
    romaji: "ronbun",
    english: "thesis, academic paper",
    bengali: "থিসিস / প্রবন্ধ",
    category: "Miscellaneous"
  },
  {
    id: "42-20",
    word: "楽しみ",
    reading: "たのしみ",
    romaji: "tanoshimi",
    english: "pleasure, enjoyment",
    bengali: "আনন্দ",
    category: "Miscellaneous"
  },
  {
    id: "42-21",
    word: "ミキサー",
    reading: "ミキサー",
    romaji: "mikisaa",
    english: "mixer, blender",
    bengali: "মিক্সার",
    category: "Objects"
  },
  {
    id: "42-22",
    word: "やかん",
    reading: "やかん",
    romaji: "yakan",
    english: "kettle",
    bengali: "কেটলি",
    category: "Objects"
  },
  {
    id: "42-23",
    word: "蓋",
    reading: "ふた",
    romaji: "futa",
    english: "lid, cover",
    bengali: "ঢাকনা",
    category: "Objects"
  },
  {
    id: "42-24",
    word: "栓抜き",
    reading: "せんぬき",
    romaji: "sennuki",
    english: "bottle opener",
    bengali: "বোতল ওপেনার",
    category: "Objects"
  },
  {
    id: "42-25",
    word: "缶切り",
    reading: "かんきり",
    romaji: "kankiri",
    english: "can opener",
    bengali: "ক্যান ওপেনার",
    category: "Objects"
  },
  {
    id: "42-26",
    word: "缶詰",
    reading: "かんづめ",
    romaji: "kanzume",
    english: "canned food",
    bengali: "ক্যান ফুড",
    category: "Food"
  },
  {
    id: "42-27",
    word: "のし袋",
    reading: "のしぶくろ",
    romaji: "noshibukuro",
    english: "gift envelope",
    bengali: "উপহারের খাম",
    category: "Objects"
  },
  {
    id: "42-28",
    word: "風呂敷",
    reading: "ふろしき",
    romaji: "furoshiki",
    english: "wrapping cloth",
    bengali: "জাপানি মোড়ানোর কাপড়",
    category: "Objects"
  },
  {
    id: "42-29",
    word: "そろばん",
    reading: "そろばん",
    romaji: "soroban",
    english: "abacus",
    bengali: "অ্যাবাকাস",
    category: "Objects"
  },
  {
    id: "42-30",
    word: "体温計",
    reading: "たいおんけい",
    romaji: "taionkei",
    english: "thermometer",
    bengali: "থার্মোমিটার",
    category: "Objects"
  },
  {
    id: "42-31",
    word: "材料",
    reading: "ざいりょう",
    romaji: "zairyou",
    english: "material, ingredient",
    bengali: "উপকরণ",
    category: "Miscellaneous"
  },
  {
    id: "42-32",
    word: "あるー",
    reading: "あるー",
    romaji: "aru-",
    english: "a certain -, some -",
    bengali: "একটি নির্দিষ্ট -",
    category: "Miscellaneous"
  },
  {
    id: "42-33",
    word: "一生懸命",
    reading: "いっしょうけんめい",
    romaji: "isshoukenmei",
    english: "with all one's effort",
    bengali: "কঠোর পরিশ্রম",
    category: "Adverb"
  },
  {
    id: "42-34",
    word: "なぜ",
    reading: "なぜ",
    romaji: "naze",
    english: "why",
    bengali: "কেন",
    category: "Miscellaneous"
  },
  {
    id: "42-35",
    word: "どのくらい",
    reading: "どのくらい",
    romaji: "dono kurai",
    english: "how much, how many",
    bengali: "কতটুকু",
    category: "Miscellaneous"
  },
  {
    id: "42-36",
    word: "カップめん",
    reading: "カップめん",
    romaji: "kappu men",
    english: "cup noodles",
    bengali: "কাপ নুডলস",
    category: "Food"
  },
  {
    id: "42-37",
    word: "世界初",
    reading: "せかいはつ",
    romaji: "sekai hatsu",
    english: "world's first",
    bengali: "বিশ্বের প্রথম",
    category: "Miscellaneous"
  },
  {
    id: "42-38",
    word: "めん",
    reading: "めん",
    romaji: "men",
    english: "noodles",
    bengali: "নুডলস",
    category: "Food"
  },
  {
    id: "42-39",
    word: "広めます",
    reading: "ひろめます",
    romaji: "hiromemasu",
    english: "to spread, to propagate",
    bengali: "ছড়িয়ে দেওয়া",
    category: "Verb"
  },
  {
    id: "42-40",
    word: "市場調査",
    reading: "しじょうちょうさ",
    romaji: "shijou chousa",
    english: "market research",
    bengali: "বাজার জরিপ",
    category: "Miscellaneous"
  },
  {
    id: "42-41",
    word: "割ります",
    reading: "わります",
    romaji: "warimasu",
    english: "to divide, to break",
    bengali: "ভাগ করা",
    category: "Verb"
  },
  {
    id: "42-42",
    word: "注ぎます",
    reading: "そそぎます",
    romaji: "sosogimasu",
    english: "to pour",
    bengali: "ঢালা",
    category: "Verb"
  },

  // Lesson 43
  {
    id: "43-1",
    word: "増えます",
    reading: "ふえます",
    romaji: "fuemasu",
    english: "to increase (exports)",
    bengali: "বৃদ্ধি পাওয়া (রপ্তানি)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "増える", reading: "ふえる", english: "to increase", bengali: "বৃদ্ধি পাওয়া" },
      masu: { word: "増えます", reading: "ふえます", english: "increase (polite)", bengali: "বৃদ্ধি পায়" },
      te: { word: "増えて", reading: "ふえて", english: "increasing", bengali: "বৃদ্ধি পেয়ে" },
      nai: { word: "増えない", reading: "ふえない", english: "not increase", bengali: "বৃদ্ধি পায় না" }
    }
  },
  {
    id: "43-2",
    word: "減ります",
    reading: "へります",
    romaji: "herimasu",
    english: "to decrease (exports)",
    bengali: "হ্রাস পাওয়া (রপ্তানি)",
    category: "Verb",
    conjugation: {
      dictionary: { word: "減る", reading: "へる", english: "to decrease", bengali: "হ্রাস পাওয়া" },
      masu: { word: "減ります", reading: "へります", english: "decrease (polite)", bengali: "হ্রাস পায়" },
      te: { word: "減って", reading: "へって", english: "decreasing", bengali: "হ্রাস পেয়ে" },
      nai: { word: "減らない", reading: "へらない", english: "not decrease", bengali: "হ্রাস পায় না" }
    }
  },
  {
    id: "43-3",
    word: "上がります",
    reading: "あがります",
    romaji: "agarimasu",
    english: "to rise (prices)",
    bengali: "বৃদ্ধি পাওয়া (দাম)",
    category: "Verb"
  },
  {
    id: "43-4",
    word: "下がります",
    reading: "さがります",
    romaji: "sagarimasu",
    english: "to fall (prices)",
    bengali: "হ্রাস পাওয়া (দাম)",
    category: "Verb"
  },
  {
    id: "43-5",
    word: "切れます",
    reading: "きれます",
    romaji: "kiremasu",
    english: "to break, to snap (string)",
    bengali: "ছিঁড়ে যাওয়া (দড়ি)",
    category: "Verb"
  },
  {
    id: "43-6",
    word: "とれます",
    reading: "とれます",
    romaji: "toremasu",
    english: "to come off (button)",
    bengali: "খুলে যাওয়া (বোতাম)",
    category: "Verb"
  },
  {
    id: "43-7",
    word: "落ちます",
    reading: "おちます",
    romaji: "ochimasu",
    english: "to fall down (baggage)",
    bengali: "পড়ে যাওয়া (জিনিস)",
    category: "Verb"
  },
  {
    id: "43-8",
    word: "なくなります",
    reading: "なくなります",
    romaji: "nakunarimasu",
    english: "to run out, to be lost (gasoline)",
    bengali: "শেষ হয়ে যাওয়া (গ্যাস)",
    category: "Verb"
  },
  {
    id: "43-9",
    word: "変な",
    reading: "へんな",
    romaji: "hen na",
    english: "strange, peculiar",
    bengali: "অদ্ভুত",
    category: "Adjective"
  },
  {
    id: "43-10",
    word: "幸せな",
    reading: "しあわせな",
    romaji: "shiawase na",
    english: "happy",
    bengali: "সুখী",
    category: "Adjective"
  },
  {
    id: "43-11",
    word: "楽な",
    reading: "らくな",
    romaji: "raku na",
    english: "easy, comfortable",
    bengali: "সহজে / আরামদায়ক",
    category: "Adjective"
  },
  {
    id: "43-12",
    word: "うまい",
    reading: "うまい",
    romaji: "umai",
    english: "tasty, good at",
    bengali: "সুস্বাদু / দক্ষ",
    category: "Adjective"
  },
  {
    id: "43-13",
    word: "まずい",
    reading: "まずい",
    romaji: "mazui",
    english: "tastes awful",
    bengali: "বিস্বাদ",
    category: "Adjective"
  },
  {
    id: "43-14",
    word: "つまらない",
    reading: "つまらない",
    romaji: "tsumaranai",
    english: "boring, uninteresting",
    bengali: "বিরক্তিকর",
    category: "Adjective"
  },
  {
    id: "43-15",
    word: "ガソリン",
    reading: "ガソリン",
    romaji: "gasorin",
    english: "gasoline",
    bengali: "গ্যাসোলিন",
    category: "Miscellaneous"
  },
  {
    id: "43-16",
    word: "火",
    reading: "ひ",
    romaji: "hi",
    english: "fire",
    bengali: "আগুন",
    category: "Nature"
  },
  {
    id: "43-17",
    word: "パンフレット",
    reading: "パンフレット",
    romaji: "panfuretto",
    english: "pamphlet",
    bengali: "প্যামফ্লেট",
    category: "Objects"
  },
  {
    id: "43-18",
    word: "今にも",
    reading: "いまにも",
    romaji: "ima ni mo",
    english: "at any moment",
    bengali: "এখনই",
    category: "Adverb"
  },
  {
    id: "43-19",
    word: "わあ",
    reading: "わあ",
    romaji: "waa",
    english: "Oh!, Wow!",
    bengali: "ওয়াও",
    category: "Greetings"
  },
  {
    id: "43-20",
    word: "ばら",
    reading: "ばら",
    romaji: "bara",
    english: "rose",
    bengali: "গোলাপ",
    category: "Nature"
  },
  {
    id: "43-21",
    word: "ドライブ",
    reading: "ドライブ",
    romaji: "doraibu",
    english: "drive",
    bengali: "ড্রাইভ",
    category: "Entertainment"
  },
  {
    id: "43-22",
    word: "理由",
    reading: "りゆう",
    romaji: "riyuu",
    english: "reason",
    bengali: "কারণ",
    category: "Miscellaneous"
  },
  {
    id: "43-23",
    word: "謝ります",
    reading: "あやまります",
    romaji: "ayamarimasu",
    english: "to apologize",
    bengali: "ক্ষমা চাওয়া",
    category: "Verb"
  },
  {
    id: "43-24",
    word: "知り合います",
    reading: "しりあいます",
    romaji: "shiriaimasu",
    english: "to get acquainted",
    bengali: "পরিচিত হওয়া",
    category: "Verb"
  },

  // Lesson 44
  {
    id: "44-1",
    word: "泣きます",
    reading: "なきます",
    romaji: "nakimasu",
    english: "to cry",
    bengali: "কাঁদা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "泣く", reading: "なく", english: "to cry", bengali: "কাঁদা" },
      masu: { word: "泣きます", reading: "なきます", english: "cry (polite)", bengali: "কাঁদি" },
      te: { word: "泣いて", reading: "ないて", english: "crying", bengali: "কেঁদে" },
      nai: { word: "泣かない", reading: "なかない", english: "not cry", bengali: "কাঁদি না" }
    }
  },
  {
    id: "44-2",
    word: "笑います",
    reading: "わらいます",
    romaji: "waraimasu",
    english: "to laugh, to smile",
    bengali: "হাসা",
    category: "Verb",
    conjugation: {
      dictionary: { word: "笑う", reading: "わらう", english: "to laugh", bengali: "হাসা" },
      masu: { word: "笑います", reading: "わらいます", english: "laugh (polite)", bengali: "হাসি" },
      te: { word: "笑って", reading: "わらって", english: "laughing", bengali: "হেসে" },
      nai: { word: "笑わない", reading: "わらわない", english: "not laugh", bengali: "হাসি না" }
    }
  },
  {
    id: "44-3",
    word: "乾きます",
    reading: "かわきます",
    romaji: "kawakimasu",
    english: "to dry",
    bengali: "শুকানো",
    category: "Verb"
  },
  {
    id: "44-4",
    word: "濡れます",
    reading: "ぬれます",
    romaji: "nuremasu",
    english: "to get wet",
    bengali: "ভেজা",
    category: "Verb"
  },
  {
    id: "44-5",
    word: "滑ります",
    reading: "すべります",
    romaji: "suberimasu",
    english: "to slip",
    bengali: "পিছলে যাওয়া",
    category: "Verb"
  },
  {
    id: "44-6",
    word: "起きます",
    reading: "おきます",
    romaji: "okimasu",
    english: "to happen (an accident)",
    bengali: "ঘটা (দুর্ঘটনা)",
    category: "Verb"
  },
  {
    id: "44-7",
    word: "調節します",
    reading: "ちょうせつします",
    romaji: "chousetsushimasu",
    english: "to adjust",
    bengali: "সামঞ্জস্য করা",
    category: "Verb"
  },
  {
    id: "44-8",
    word: "安全な",
    reading: "あんぜんな",
    romaji: "anzen na",
    english: "safe",
    bengali: "নিরাপদ",
    category: "Adjective"
  },
  {
    id: "44-9",
    word: "危険な",
    reading: "きけんな",
    romaji: "kiken na",
    english: "dangerous",
    bengali: "বিপজ্জনক",
    category: "Adjective"
  },
  {
    id: "44-10",
    word: "濃い",
    reading: "こい",
    romaji: "koi",
    english: "strong (taste), dark (color), thick (liquid)",
    bengali: "গাঢ় / ঘন",
    category: "Adjective"
  },
  {
    id: "44-11",
    word: "薄い",
    reading: "うすい",
    romaji: "usui",
    english: "weak (taste), light (color), thin",
    bengali: "হালকা / পাতলা",
    category: "Adjective"
  },
  {
    id: "44-12",
    word: "厚い",
    reading: "あつい",
    romaji: "atsui",
    english: "thick",
    bengali: "মোটা",
    category: "Adjective"
  },
  {
    id: "44-13",
    word: "太い",
    reading: "ふとい",
    romaji: "futoi",
    english: "thick (diameter), fat",
    bengali: "মোটা (ব্যাস)",
    category: "Adjective"
  },
  {
    id: "44-14",
    word: "細い",
    reading: "ほそい",
    romaji: "hosoi",
    english: "thin (diameter), slender",
    bengali: "চিকন (ব্যাস)",
    category: "Adjective"
  },
  {
    id: "44-15",
    word: "空気",
    reading: "くうき",
    romaji: "kuuki",
    english: "air",
    bengali: "বাতাস",
    category: "Nature"
  },
  {
    id: "44-16",
    word: "波",
    reading: "なみ",
    romaji: "nami",
    english: "wave",
    bengali: "ঢেউ",
    category: "Nature"
  },
  {
    id: "44-17",
    word: "海岸",
    reading: "かいがん",
    romaji: "kaigan",
    english: "coast, shore",
    bengali: "সমুদ্র সৈকত",
    category: "Nature"
  },
  {
    id: "44-18",
    word: "工事",
    reading: "こうじ",
    romaji: "kouji",
    english: "construction work",
    bengali: "নির্মাণ কাজ",
    category: "Miscellaneous"
  },
  {
    id: "44-19",
    word: "オートバイ",
    reading: "オートバイ",
    romaji: "ootobai",
    english: "motorcycle",
    bengali: "মোটরসাইকেল",
    category: "Objects"
  },
  {
    id: "44-20",
    word: "サイズ",
    reading: "サイズ",
    romaji: "saizu",
    english: "size",
    bengali: "সাইজ",
    category: "Objects"
  },
  {
    id: "44-21",
    word: "音",
    reading: "おと",
    romaji: "oto",
    english: "sound",
    bengali: "শব্দ",
    category: "Miscellaneous"
  },
  {
    id: "44-22",
    word: "キャンセル",
    reading: "キャンセル",
    romaji: "kyanseru",
    english: "cancellation",
    bengali: "বাতিল",
    category: "Miscellaneous"
  },
  {
    id: "44-23",
    word: "どう",
    reading: "どう",
    romaji: "dou",
    english: "how",
    bengali: "কেমন",
    category: "Miscellaneous"
  },
  {
    id: "44-24",
    word: "ー以上",
    reading: "ーいじょう",
    romaji: "-ijou",
    english: "more than -, over -",
    bengali: "- এর বেশি",
    category: "Miscellaneous"
  },
  {
    id: "44-25",
    word: "ー以下",
    reading: "ーいか",
    romaji: "-ika",
    english: "less than -, under -",
    bengali: "- এর কম",
    category: "Miscellaneous"
  },

  // Lesson 45
  {
    id: "45-1",
    word: "信じます",
    reading: "しんじます",
    romaji: "shinjimasu",
    english: "to believe, to trust",
    bengali: "বিশ্বাস করা",
    category: "Verb"
  },
  {
    id: "45-2",
    word: "キャンセルします",
    reading: "キャンセルします",
    romaji: "kyanserushimasu",
    english: "to cancel",
    bengali: "বাতিল করা",
    category: "Verb"
  },
  {
    id: "45-3",
    word: "知らせます",
    reading: "しらせます",
    romaji: "shirasemasu",
    english: "to inform, to notify",
    bengali: "জানানো",
    category: "Verb"
  },
  {
    id: "45-4",
    word: "保証書",
    reading: "ほしょうしょ",
    romaji: "hoshousho",
    english: "guarantee, warranty",
    bengali: "গ্যারান্টি কার্ড",
    category: "Objects"
  },
  {
    id: "45-5",
    word: "領収書",
    reading: "りょうしゅうしょ",
    romaji: "ryoushuusho",
    english: "receipt",
    bengali: "রসিদ",
    category: "Objects"
  },
  {
    id: "45-6",
    word: "キャンプ",
    reading: "キャンプ",
    romaji: "kyanpu",
    english: "camp",
    bengali: "ক্যাম্প",
    category: "Entertainment"
  },
  {
    id: "45-7",
    word: "中止",
    reading: "ちゅうし",
    romaji: "chuushi",
    english: "cancellation, suspension",
    bengali: "বাতিল / স্থগিত",
    category: "Miscellaneous"
  },
  {
    id: "45-8",
    word: "点",
    reading: "てん",
    romaji: "ten",
    english: "point, score",
    bengali: "পয়েন্ট / নম্বর",
    category: "Miscellaneous"
  },
  {
    id: "45-9",
    word: "梅",
    reading: "うめ",
    romaji: "ume",
    english: "plum (blossom)",
    bengali: "বরই",
    category: "Nature"
  },
  {
    id: "45-10",
    word: "１１０番",
    reading: "ひゃくとおばん",
    romaji: "hyakutooban",
    english: "emergency police number",
    bengali: "১১০ নম্বর (পুলিশ)",
    category: "Miscellaneous"
  },
  {
    id: "45-11",
    word: "１１９番",
    reading: "ひゃくじゅうきゅうばん",
    romaji: "hyakujuukyuuban",
    english: "emergency fire/ambulance number",
    bengali: "১১৯ নম্বর (অ্যাম্বুলেন্স)",
    category: "Miscellaneous"
  },
  {
    id: "45-12",
    word: "急に",
    reading: "きゅうに",
    romaji: "kyuu ni",
    english: "suddenly",
    bengali: "হঠাৎ",
    category: "Adverb"
  },
  {
    id: "45-13",
    word: "無理に",
    reading: "むりに",
    romaji: "muri ni",
    english: "unreasonably, by force",
    bengali: "জোর করে",
    category: "Adverb"
  },
  {
    id: "45-14",
    word: "楽しみにしています",
    reading: "たのしみにしています",
    romaji: "tanoshimi ni shite imasu",
    english: "to look forward to",
    bengali: "অপেক্ষায় থাকা",
    category: "Verb"
  },
  {
    id: "45-15",
    word: "以上です",
    reading: "いじょうです",
    romaji: "ijou desu",
    english: "That's all",
    bengali: "এটুকুই",
    category: "Greetings"
  },
  {
    id: "45-16",
    word: "係員",
    reading: "かかりいん",
    romaji: "kakariin",
    english: "person in charge, attendant",
    bengali: "দায়িত্বরত ব্যক্তি",
    category: "People"
  },
  {
    id: "45-17",
    word: "コース",
    reading: "コース",
    romaji: "koosu",
    english: "course, route",
    bengali: "কোর্স",
    category: "Miscellaneous"
  },
  {
    id: "45-18",
    word: "スタート",
    reading: "スタート",
    romaji: "sutaato",
    english: "start",
    bengali: "শুরু",
    category: "Miscellaneous"
  },
  {
    id: "45-19",
    word: "ー位",
    reading: "ーい",
    romaji: "-i",
    english: "-th place (ranking)",
    bengali: "- তম",
    category: "Miscellaneous"
  },
  {
    id: "45-20",
    word: "優勝します",
    reading: "ゆうしょうします",
    romaji: "yuushoushimasu",
    english: "to win the championship",
    bengali: "জয়ী হওয়া",
    category: "Verb"
  },
  {
    id: "45-21",
    word: "悩み",
    reading: "なやみ",
    romaji: "nayami",
    english: "trouble, worry",
    bengali: "দুশ্চিন্তা",
    category: "Miscellaneous"
  },
  {
    id: "45-22",
    word: "目覚まし時計",
    reading: "めざましどけい",
    romaji: "mezamashidokei",
    english: "alarm clock",
    bengali: "অ্যালার্ম ঘড়ি",
    category: "Objects"
  },
  {
    id: "45-23",
    word: "目が覚めます",
    reading: "めがさめます",
    romaji: "me ga samemasu",
    english: "to wake up",
    bengali: "ঘুম ভাঙা",
    category: "Verb"
  },
  {
    id: "45-24",
    word: "大学生",
    reading: "だいがくせい",
    romaji: "daigakusei",
    english: "university student",
    bengali: "বিশ্ববিদ্যালয়ের ছাত্র",
    category: "People"
  },
  {
    id: "45-25",
    word: "回答",
    reading: "かいとう",
    romaji: "kaitou",
    english: "answer, reply",
    bengali: "উত্তর",
    category: "Miscellaneous"
  },
  {
    id: "45-26",
    word: "鳴ります",
    reading: "なります",
    romaji: "narimasu",
    english: "to ring",
    bengali: "বাজা",
    category: "Verb"
  },
  {
    id: "45-27",
    word: "セットします",
    reading: "セットします",
    romaji: "settoshimasu",
    english: "to set",
    bengali: "সেট করা",
    category: "Verb"
  },
  {
    id: "45-28",
    word: "それでも",
    reading: "それでも",
    romaji: "soredemo",
    english: "nevertheless, even so",
    bengali: "তবুও",
    category: "Miscellaneous"
  },

  // Lesson 46
  {
    id: "46-1",
    word: "渡します",
    reading: "わたします",
    romaji: "watashimasu",
    english: "to hand over",
    bengali: "হস্তান্তর করা",
    category: "Verb"
  },
  {
    id: "46-2",
    word: "帰って来ます",
    reading: "かえってきます",
    romaji: "kaette kimasu",
    english: "to come back",
    bengali: "ফিরে আসা",
    category: "Verb"
  },
  {
    id: "46-3",
    word: "出ます",
    reading: "でます",
    romaji: "demasu",
    english: "to leave, to depart (a bus)",
    bengali: "ছেড়ে যাওয়া (বাস)",
    category: "Verb"
  },
  {
    id: "46-4",
    word: "届きます",
    reading: "とどきます",
    romaji: "todokimasu",
    english: "to be delivered (parcel)",
    bengali: "পৌঁছানো (পার্সেল)",
    category: "Verb"
  },
  {
    id: "46-5",
    word: "入学します",
    reading: "にゅうがくします",
    romaji: "nyuugakushimasu",
    english: "to enter (a university)",
    bengali: "ভর্তি হওয়া (বিশ্ববিদ্যালয়)",
    category: "Verb"
  },
  {
    id: "46-6",
    word: "卒業します",
    reading: "そつぎょうします",
    romaji: "sotsugyoushimasu",
    english: "to graduate (from a university)",
    bengali: "স্নাতক হওয়া (বিশ্ববিদ্যালয়)",
    category: "Verb"
  },
  {
    id: "46-7",
    word: "焼きます",
    reading: "やきます",
    romaji: "yakimasu",
    english: "to bake, to grill, to roast",
    bengali: "ভাজা / সেঁকা",
    category: "Verb"
  },
  {
    id: "46-8",
    word: "焼けます",
    reading: "やけます",
    romaji: "yakemasu",
    english: "to be baked, to be grilled, to be roasted",
    bengali: "ভাজা হওয়া / সেঁকা হওয়া",
    category: "Verb"
  },
  {
    id: "46-9",
    word: "留守",
    reading: "るす",
    romaji: "rusu",
    english: "absence (from home)",
    bengali: "অনুপস্থিতি",
    category: "Miscellaneous"
  },
  {
    id: "46-10",
    word: "宅配便",
    reading: "たくはいびん",
    romaji: "takuhaibin",
    english: "home delivery service",
    bengali: "কুরিয়ার সার্ভিস",
    category: "Miscellaneous"
  },
  {
    id: "46-11",
    word: "原因",
    reading: "げんいん",
    romaji: "gen'in",
    english: "cause",
    bengali: "কারণ",
    category: "Miscellaneous"
  },
  {
    id: "46-12",
    word: "こちら",
    reading: "こちら",
    romaji: "kochira",
    english: "this way, this place (polite)",
    bengali: "এখানে (সম্মানসূচক)",
    category: "Place"
  },
  {
    id: "46-13",
    word: "ーの所",
    reading: "ーのところ",
    romaji: "-no tokoro",
    english: "the place around -",
    bengali: "- এর জায়গা",
    category: "Place"
  },
  {
    id: "46-14",
    word: "半年",
    reading: "はんとし",
    romaji: "hantoshi",
    english: "half a year",
    bengali: "আধা বছর",
    category: "Time"
  },
  {
    id: "46-15",
    word: "ちょうど",
    reading: "ちょうど",
    romaji: "choudo",
    english: "just, exactly",
    bengali: "ঠিক",
    category: "Adverb"
  },
  {
    id: "46-16",
    word: "たった今",
    reading: "たったいま",
    romaji: "tatta ima",
    english: "just now (used with past tense)",
    bengali: "এইমাত্র",
    category: "Time"
  },
  {
    id: "46-17",
    word: "今 いいですか",
    reading: "いま いいですか",
    romaji: "ima ii desu ka",
    english: "Is now a good time?",
    bengali: "এখন কি কথা বলা যাবে?",
    category: "Greetings"
  },
  {
    id: "46-18",
    word: "ガスサービスセンター",
    reading: "ガスサービスセンター",
    romaji: "gasu saabisu sentaa",
    english: "gas service center",
    bengali: "গ্যাস সার্ভিস সেন্টার",
    category: "Place"
  },
  {
    id: "46-19",
    word: "ガスレンジ",
    reading: "ガスレンジ",
    romaji: "gasu renji",
    english: "gas range, gas cooker",
    bengali: "গ্যাস চুলা",
    category: "Objects"
  },
  {
    id: "46-20",
    word: "具合",
    reading: "ぐあい",
    romaji: "guai",
    english: "condition",
    bengali: "অবস্থা",
    category: "Miscellaneous"
  },
  {
    id: "46-21",
    word: "申し訳ありません",
    reading: "もうしわけありません",
    romaji: "moushiwake arimasen",
    english: "I'm very sorry (polite)",
    bengali: "আমি দুঃখিত (সম্মানসূচক)",
    category: "Greetings"
  },
  {
    id: "46-22",
    word: "どちら様でしょうか",
    reading: "どちらさまでしょうか",
    romaji: "dochira-sama deshou ka",
    english: "Who is it, please? (polite)",
    bengali: "আপনি কে? (সম্মানসূচক)",
    category: "Greetings"
  },
  {
    id: "46-23",
    word: "お待たせしました",
    reading: "おまたせしました",
    romaji: "omatase shimashita",
    english: "Sorry to have kept you waiting",
    bengali: "অপেক্ষা করানোর জন্য দুঃখিত",
    category: "Greetings"
  },
  {
    id: "46-24",
    word: "向かいます",
    reading: "むかいます",
    romaji: "mukaimasu",
    english: "to head for",
    bengali: "রওনা হওয়া",
    category: "Verb"
  },
  {
    id: "46-25",
    word: "ついています",
    reading: "ついています",
    romaji: "tsuite imasu",
    english: "to be lucky",
    bengali: "ভাগ্যবান হওয়া",
    category: "Verb"
  },
  {
    id: "46-26",
    word: "床",
    reading: "ゆか",
    romaji: "yuka",
    english: "floor",
    bengali: "মেঝে",
    category: "Objects"
  },
  {
    id: "46-27",
    word: "転びます",
    reading: "ころびます",
    romaji: "korobimasu",
    english: "to fall down, to tumble",
    bengali: "পড়ে যাওয়া",
    category: "Verb"
  },
  {
    id: "46-28",
    word: "ベル",
    reading: "ベル",
    romaji: "beru",
    english: "bell",
    bengali: "বেল",
    category: "Objects"
  },
  {
    id: "46-29",
    word: "慌てて",
    reading: "あわてて",
    romaji: "awatete",
    english: "in a hurry, flustered",
    bengali: "তাড়াহুড়ো করে",
    category: "Adverb"
  },
  {
    id: "46-30",
    word: "順番に",
    reading: "じゅんばんに",
    romaji: "junban ni",
    english: "in order",
    bengali: "পর্যায়ক্রমে",
    category: "Adverb"
  },
  {
    id: "46-31",
    word: "出来事",
    reading: "できごと",
    romaji: "dekigoto",
    english: "incident, event",
    bengali: "ঘটনা",
    category: "Miscellaneous"
  },

  // Lesson 47
  {
    id: "47-1",
    word: "集まります",
    reading: "あつまります",
    romaji: "atsumarimasu",
    english: "to gather, to assemble",
    bengali: "জড়ো হওয়া",
    category: "Verb"
  },
  {
    id: "47-2",
    word: "別れます",
    reading: "わかれます",
    romaji: "wakaremasu",
    english: "to part, to separate",
    bengali: "আলাদা হওয়া",
    category: "Verb"
  },
  {
    id: "47-3",
    word: "長生きします",
    reading: "ながいきします",
    romaji: "nagaikishimasu",
    english: "to live long",
    bengali: "দীর্ঘজীবী হওয়া",
    category: "Verb"
  },
  {
    id: "47-4",
    word: "します",
    reading: "します",
    romaji: "shimasu",
    english: "to sound, to smell, to taste",
    bengali: "শব্দ হওয়া / গন্ধ হওয়া",
    category: "Verb"
  },
  {
    id: "47-5",
    word: "ひどい",
    reading: "ひどい",
    romaji: "hidoi",
    english: "terrible, severe",
    bengali: "ভয়াবহ",
    category: "Adjective"
  },
  {
    id: "47-6",
    word: "怖い",
    reading: "こわい",
    romaji: "kowai",
    english: "scary, frightening",
    bengali: "ভীতিজনক",
    category: "Adjective"
  },
  {
    id: "47-7",
    word: "実験",
    reading: "じっけん",
    romaji: "jikken",
    english: "experiment",
    bengali: "পরীক্ষা",
    category: "Miscellaneous"
  },
  {
    id: "47-8",
    word: "データ",
    reading: "データ",
    romaji: "deeta",
    english: "data",
    bengali: "ডেটা",
    category: "Miscellaneous"
  },
  {
    id: "47-9",
    word: "人口",
    reading: "じんこう",
    romaji: "jinkou",
    english: "population",
    bengali: "জনসংখ্যা",
    category: "Miscellaneous"
  },
  {
    id: "47-10",
    word: "におい",
    reading: "におい",
    romaji: "nioi",
    english: "smell, odor",
    bengali: "গন্ধ",
    category: "Miscellaneous"
  },
  {
    id: "47-11",
    word: "科学",
    reading: "かがく",
    romaji: "kagaku",
    english: "science",
    bengali: "বিজ্ঞান",
    category: "Miscellaneous"
  },
  {
    id: "47-12",
    word: "医学",
    reading: "いがく",
    romaji: "igaku",
    english: "medical science",
    bengali: "চিকিৎসা বিজ্ঞান",
    category: "Miscellaneous"
  },
  {
    id: "47-13",
    word: "文学",
    reading: "ぶんがく",
    romaji: "bungaku",
    english: "literature",
    bengali: "সাহিত্য",
    category: "Miscellaneous"
  },
  {
    id: "47-14",
    word: "パトカー",
    reading: "パトカー",
    romaji: "patokaa",
    english: "patrol car",
    bengali: "টহল গাড়ি",
    category: "Objects"
  },
  {
    id: "47-15",
    word: "救急車",
    reading: "きゅうきゅうしゃ",
    romaji: "kyuukyuusha",
    english: "ambulance",
    bengali: "অ্যাম্বুলেন্স",
    category: "Objects"
  },
  {
    id: "47-16",
    word: "賛成",
    reading: "さんせい",
    romaji: "sansei",
    english: "approval, agreement",
    bengali: "সম্মতি",
    category: "Miscellaneous"
  },
  {
    id: "47-17",
    word: "反対",
    reading: "はんたい",
    romaji: "hantai",
    english: "opposition, disagreement",
    bengali: "অসম্মতি",
    category: "Miscellaneous"
  },
  {
    id: "47-18",
    word: "大統領",
    reading: "だいとうりょう",
    romaji: "daitouryou",
    english: "president",
    bengali: "রাষ্ট্রপতি",
    category: "People"
  },
  {
    id: "47-19",
    word: "ーによると",
    reading: "ーによると",
    romaji: "-ni yoru to",
    english: "according to -",
    bengali: "- এর মতে",
    category: "Miscellaneous"
  },
  {
    id: "47-20",
    word: "婚約します",
    reading: "こんやくします",
    romaji: "kon'yakushimasu",
    english: "to get engaged",
    bengali: "বাগদান করা",
    category: "Verb"
  },
  {
    id: "47-21",
    word: "知り合います",
    reading: "しりあいます",
    romaji: "shiriaimasu",
    english: "to get acquainted",
    bengali: "পরিচিত হওয়া",
    category: "Verb"
  },
  {
    id: "47-22",
    word: "化粧",
    reading: "けしょう",
    romaji: "keshou",
    english: "makeup",
    bengali: "মেকআপ",
    category: "Miscellaneous"
  },
  {
    id: "47-23",
    word: "女性",
    reading: "じょせい",
    romaji: "josei",
    english: "woman, female",
    bengali: "নারী",
    category: "People"
  },
  {
    id: "47-24",
    word: "男性",
    reading: "だんせい",
    romaji: "dansei",
    english: "man, male",
    bengali: "পুরুষ",
    category: "People"
  },
  {
    id: "47-25",
    word: "化粧品",
    reading: "けしょうひん",
    romaji: "keshouhin",
    english: "cosmetics",
    bengali: "প্রসাধনী",
    category: "Objects"
  },
  {
    id: "47-26",
    word: "キャンプ",
    reading: "キャンプ",
    romaji: "kyanpu",
    english: "camp",
    bengali: "ক্যাম্প",
    category: "Entertainment"
  },

  // Lesson 48
  {
    id: "48-1",
    word: "下ろします",
    reading: "おろします",
    romaji: "oroshimasu",
    english: "to put down, to lower, to unload",
    bengali: "নামানো",
    category: "Verb"
  },
  {
    id: "48-2",
    word: "届けます",
    reading: "とどけます",
    romaji: "todokemasu",
    english: "to deliver",
    bengali: "পৌঁছে দেওয়া",
    category: "Verb"
  },
  {
    id: "48-3",
    word: "世話をします",
    reading: "せわをします",
    romaji: "sewa o shimasu",
    english: "to take care of",
    bengali: "যত্ন নেওয়া",
    category: "Verb"
  },
  {
    id: "48-4",
    word: "録音します",
    reading: "ろくおんします",
    romaji: "rokuonshimasu",
    english: "to record (sound)",
    bengali: "রেকর্ড করা",
    category: "Verb"
  },
  {
    id: "48-5",
    word: "塾",
    reading: "じゅく",
    romaji: "juku",
    english: "cram school, private school",
    bengali: "কোচিং সেন্টার",
    category: "Place"
  },
  {
    id: "48-6",
    word: "生徒",
    reading: "せいと",
    romaji: "seito",
    english: "pupil, student",
    bengali: "ছাত্র",
    category: "People"
  },
  {
    id: "48-7",
    word: "ファイル",
    reading: "ファイル",
    romaji: "fairu",
    english: "file",
    bengali: "ফাইল",
    category: "Objects"
  },
  {
    id: "48-8",
    word: "自由に",
    reading: "じゆうに",
    romaji: "jiyuu ni",
    english: "freely",
    bengali: "স্বাধীনভাবে",
    category: "Adverb"
  },
  {
    id: "48-9",
    word: "ー間",
    reading: "ーかん",
    romaji: "-kan",
    english: "for - (duration of time)",
    bengali: "- সময় ধরে",
    category: "Time"
  },
  {
    id: "48-10",
    word: "いいことですね",
    reading: "いいことですね",
    romaji: "ii koto desu ne",
    english: "That's good, isn't it?",
    bengali: "এটা ভালো কথা",
    category: "Greetings"
  },
  {
    id: "48-11",
    word: "お忙しいですか",
    reading: "おいそがしいですか",
    romaji: "oisogashii desu ka",
    english: "Are you busy? (polite)",
    bengali: "আপনি কি ব্যস্ত?",
    category: "Greetings"
  },
  {
    id: "48-12",
    word: "営業",
    reading: "えいぎょう",
    romaji: "eigyou",
    english: "business, sales",
    bengali: "ব্যবসা / বিক্রয়",
    category: "Miscellaneous"
  },
  {
    id: "48-13",
    word: "それまでに",
    reading: "それまでに",
    romaji: "sore made ni",
    english: "by then",
    bengali: "সেই সময়ের মধ্যে",
    category: "Time"
  },
  {
    id: "48-14",
    word: "かまいません",
    reading: "かまいません",
    romaji: "kamaimasen",
    english: "It's all right, I don't mind",
    bengali: "সমস্যা নেই",
    category: "Greetings"
  },
  {
    id: "48-15",
    word: "楽しみます",
    reading: "たのしみます",
    romaji: "tanoshimimasu",
    english: "to enjoy oneself",
    bengali: "আনন্দ করা",
    category: "Verb"
  },
  {
    id: "48-16",
    word: "親",
    reading: "おや",
    romaji: "oya",
    english: "parent",
    bengali: "বাবা-মা",
    category: "People"
  },
  {
    id: "48-17",
    word: "小学生",
    reading: "しょうがくせい",
    romaji: "shougakusei",
    english: "elementary school student",
    bengali: "প্রাথমিক বিদ্যালয়ের ছাত্র",
    category: "People"
  },
  {
    id: "48-18",
    word: "ーパーセント",
    reading: "ーパーセント",
    romaji: "-paasento",
    english: "- percent",
    bengali: "- শতাংশ",
    category: "Miscellaneous"
  },
  {
    id: "48-19",
    word: "その次",
    reading: "そのつぎ",
    romaji: "sono tsugi",
    english: "next to that",
    bengali: "তার পরের",
    category: "Miscellaneous"
  },
  {
    id: "48-20",
    word: "習字",
    reading: "しゅうじ",
    romaji: "shuuji",
    english: "calligraphy",
    bengali: "ক্যালিগ্রাফি",
    category: "Miscellaneous"
  },
  {
    id: "48-21",
    word: "普通の",
    reading: "ふつうの",
    romaji: "futsuu no",
    english: "normal, ordinary",
    bengali: "সাধারণ",
    category: "Adjective"
  },

  // Lesson 49
  {
    id: "49-1",
    word: "利用します",
    reading: "りようします",
    romaji: "riyoushimasu",
    english: "to use, to make use of",
    bengali: "ব্যবহার করা",
    category: "Verb"
  },
  {
    id: "49-2",
    word: "勤めます",
    reading: "つとめます",
    romaji: "tsutomemasu",
    english: "to work (for a bank)",
    bengali: "কাজ করা (ব্যাংকে)",
    category: "Verb"
  },
  {
    id: "49-3",
    word: "掛けます",
    reading: "かけます",
    romaji: "kakemasu",
    english: "to sit down (on a chair)",
    bengali: "বসা (চেয়ারে)",
    category: "Verb"
  },
  {
    id: "49-4",
    word: "過ごします",
    reading: "すごします",
    romaji: "sugoshimasu",
    english: "to spend (time), to pass (time)",
    bengali: "সময় কাটানো",
    category: "Verb"
  },
  {
    id: "49-5",
    word: "ご覧になります",
    reading: "ごらんになります",
    romaji: "goran ni narimasu",
    english: "to see, to look at (respectful equivalent of mimasu)",
    bengali: "দেখা (সম্মানসূচক)",
    category: "Verb"
  },
  {
    id: "49-6",
    word: "おっしゃいます",
    reading: "おっしゃいます",
    romaji: "osshaimasu",
    english: "to say (respectful equivalent of iimasu)",
    bengali: "বলা (সম্মানসূচক)",
    category: "Verb"
  },
  {
    id: "49-7",
    word: "なさいます",
    reading: "なさいます",
    romaji: "nasaimasu",
    english: "to do (respectful equivalent of shimasu)",
    bengali: "করা (সম্মানসূচক)",
    category: "Verb"
  },
  {
    id: "49-8",
    word: "召し上がります",
    reading: "めしあがります",
    romaji: "meshiagarimasu",
    english: "to eat, to drink (respectful equivalent of tabemasu, nomimasu)",
    bengali: "খাওয়া / পান করা (সম্মানসূচক)",
    category: "Verb"
  },
  {
    id: "49-9",
    word: "ご存じです",
    reading: "ごぞんじです",
    romaji: "gozonji desu",
    english: "to know (respectful equivalent of shitte imasu)",
    bengali: "জানা (সম্মানসূচক)",
    category: "Verb"
  },
  {
    id: "49-10",
    word: "挨拶",
    reading: "あいさつ",
    romaji: "aisatsu",
    english: "greeting",
    bengali: "অভিবাদন",
    category: "Greetings"
  },
  {
    id: "49-11",
    word: "旅館",
    reading: "りょかん",
    romaji: "ryokan",
    english: "Japanese-style inn",
    bengali: "জাপানি সরাইখানা",
    category: "Place"
  },
  {
    id: "49-12",
    word: "バス停",
    reading: "バスてい",
    romaji: "basutei",
    english: "bus stop",
    bengali: "বাস স্টপ",
    category: "Place"
  },
  {
    id: "49-13",
    word: "奥様",
    reading: "おくさま",
    romaji: "okusama",
    english: "(someone else's) wife (respectful)",
    bengali: "স্ত্রী (অন্যের)",
    category: "People"
  },
  {
    id: "49-14",
    word: "ー様",
    reading: "ーさま",
    romaji: "-sama",
    english: "respectful equivalent of -san",
    bengali: "- সাহেব",
    category: "People"
  },
  {
    id: "49-15",
    word: "たまに",
    reading: "たまに",
    romaji: "tamani",
    english: "once in a while, occasionally",
    bengali: "মাঝে মাঝে",
    category: "Adverb"
  },
  {
    id: "49-16",
    word: "どなたでも",
    reading: "どなたでも",
    romaji: "donata demo",
    english: "anybody (respectful)",
    bengali: "যে কেউ",
    category: "People"
  },
  {
    id: "49-17",
    word: "ーと言います",
    reading: "ーといいます",
    romaji: "-to iimasu",
    english: "one's name is -",
    bengali: "- নামে পরিচিত",
    category: "Miscellaneous"
  },
  {
    id: "49-18",
    word: "ー年ー組",
    reading: "ーねんーくみ",
    romaji: "-nen -kumi",
    english: "class - of grade -",
    bengali: "- বছর - ক্লাস",
    category: "Miscellaneous"
  },
  {
    id: "49-19",
    word: "出します",
    reading: "だします",
    romaji: "dashimasu",
    english: "to run (a fever)",
    bengali: "বের করা (জ্বর)",
    category: "Verb"
  },
  {
    id: "49-20",
    word: "よろしくお伝えください",
    reading: "よろしくおつたえください",
    romaji: "yoroshiku otsutae kudasai",
    english: "Please give my best regards to -",
    bengali: "আমার সালাম জানাবেন",
    category: "Greetings"
  },
  {
    id: "49-21",
    word: "失礼いたします",
    reading: "しつれいいたします",
    romaji: "shitsurei itashimasu",
    english: "Goodbye (humble equivalent of shitsurei shimasu)",
    bengali: "বিদায় নিচ্ছি",
    category: "Greetings"
  },
  {
    id: "49-22",
    word: "経歴",
    reading: "けいれき",
    romaji: "keireki",
    english: "career, personal history",
    bengali: "জীবনবৃত্তান্ত",
    category: "Miscellaneous"
  },
  {
    id: "49-23",
    word: "一階建て",
    reading: "いっかいだて",
    romaji: "ikkaidate",
    english: "one-story building",
    bengali: "একতলা",
    category: "Place"
  },
  {
    id: "49-24",
    word: "二階建て",
    reading: "にかいだて",
    romaji: "nikaidate",
    english: "two-story building",
    bengali: "দোতলা",
    category: "Place"
  },
  {
    id: "49-25",
    word: "講師",
    reading: "こうし",
    romaji: "koushi",
    english: "lecturer",
    bengali: "প্রভাষক",
    category: "People"
  },
  {
    id: "49-26",
    word: "作品",
    reading: "さくひん",
    romaji: "sakuhin",
    english: "work (of art, etc.)",
    bengali: "কাজ / শিল্পকর্ম",
    category: "Miscellaneous"
  },
  {
    id: "49-27",
    word: "受賞します",
    reading: "じゅしょうします",
    romaji: "jushoushimasu",
    english: "to receive an award",
    bengali: "পুরস্কার পাওয়া",
    category: "Verb"
  },
  {
    id: "49-28",
    word: "世界的に",
    reading: "せかいてきに",
    romaji: "sekaiteki ni",
    english: "world-wide",
    bengali: "বিশ্বব্যাপী",
    category: "Adverb"
  },
  {
    id: "49-29",
    word: "作家",
    reading: "さっか",
    romaji: "sakka",
    english: "writer, author",
    bengali: "লেখক",
    category: "People"
  },
  {
    id: "49-30",
    word: "長男",
    reading: "ちょうなん",
    romaji: "chounan",
    english: "eldest son",
    bengali: "বড় ছেলে",
    category: "People"
  },
  {
    id: "49-31",
    word: "障害",
    reading: "しょうがい",
    romaji: "shougai",
    english: "handicap, obstacle",
    bengali: "প্রতিবন্ধকতা",
    category: "Miscellaneous"
  },
  {
    id: "49-32",
    word: "お持ちです",
    reading: "おもちです",
    romaji: "omochi desu",
    english: "to have (respectful equivalent of motte imasu)",
    bengali: "থাকা (সম্মানসূচক)",
    category: "Verb"
  },
  {
    id: "49-33",
    word: "作曲",
    reading: "さっきょく",
    romaji: "sakkyoku",
    english: "composition (music)",
    bengali: "সুরারোপ",
    category: "Miscellaneous"
  },
  {
    id: "49-34",
    word: "活動",
    reading: "かつどう",
    romaji: "katsudou",
    english: "activity",
    bengali: "কার্যক্রম",
    category: "Miscellaneous"
  },
  {
    id: "49-35",
    word: "それでは",
    reading: "それでは",
    romaji: "soredewa",
    english: "well, then (polite)",
    bengali: "তাহলে",
    category: "Miscellaneous"
  },

  // Lesson 50
  {
    id: "50-1",
    word: "参ります",
    reading: "まいります",
    romaji: "mairimasu",
    english: "to go, to come (humble equivalent of ikimasu, kimasu)",
    bengali: "যাওয়ার / আসা (বিনীত)",
    category: "Verb"
  },
  {
    id: "50-2",
    word: "おります",
    reading: "おります",
    romaji: "orimasu",
    english: "to be (humble equivalent of imasu)",
    bengali: "থাকা (বিনীত)",
    category: "Verb"
  },
  {
    id: "50-3",
    word: "いただきます",
    reading: "いただきます",
    romaji: "itadakimasu",
    english: "to eat, to drink, to receive (humble equivalent of tabemasu, nomimasu, moraimasu)",
    bengali: "খাওয়া / পান করা / পাওয়া (বিনীত)",
    category: "Verb"
  },
  {
    id: "50-4",
    word: "いたします",
    reading: "いたします",
    romaji: "itashimasu",
    english: "to do (humble equivalent of shimasu)",
    bengali: "করা (বিনীত)",
    category: "Verb"
  },
  {
    id: "50-5",
    word: "申します",
    reading: "もうします",
    romaji: "moushimasu",
    english: "to say (humble equivalent of iimasu)",
    bengali: "বলা (বিনীত)",
    category: "Verb"
  },
  {
    id: "50-6",
    word: "拝見します",
    reading: "はいけんします",
    romaji: "haikenshimasu",
    english: "to see, to look at (humble equivalent of mimasu)",
    bengali: "দেখা (বিনীত)",
    category: "Verb"
  },
  {
    id: "50-7",
    word: "存じます",
    reading: "ぞんじます",
    romaji: "zonjimasu",
    english: "to know (humble equivalent of shitte imasu)",
    bengali: "জানা (বিনীত)",
    category: "Verb"
  },
  {
    id: "50-8",
    word: "伺います",
    reading: "うかがいます",
    romaji: "ukagaimasu",
    english: "to ask, to hear, to visit (humble equivalent of kikimasu, ikimasu)",
    bengali: "জিজ্ঞাসা করা / যাওয়া (বিনীত)",
    category: "Verb"
  },
  {
    id: "50-9",
    word: "お目にかかります",
    reading: "おめにかかります",
    romaji: "ome ni kakarimasu",
    english: "to meet (humble equivalent of aimasu)",
    bengali: "দেখা করা (বিনীত)",
    category: "Verb"
  },
  {
    id: "50-10",
    word: "いれます",
    reading: "いれます",
    romaji: "iremasu",
    english: "to make (coffee), to pour",
    bengali: "ঢালা (কফি)",
    category: "Verb"
  },
  {
    id: "50-11",
    word: "用意します",
    reading: "よういします",
    romaji: "youishimasu",
    english: "to prepare",
    bengali: "প্রস্তুত করা",
    category: "Verb"
  },
  {
    id: "50-12",
    word: "私",
    reading: "わたくし",
    romaji: "watakushi",
    english: "I (humble equivalent of watashi)",
    bengali: "আমি (বিনীত)",
    category: "People"
  },
  {
    id: "50-13",
    word: "ガイド",
    reading: "ガイド",
    romaji: "gaido",
    english: "guide",
    bengali: "গাইড",
    category: "People"
  },
  {
    id: "50-14",
    word: "メールアドレス",
    reading: "メールアドレス",
    romaji: "meeru adoresu",
    english: "e-mail address",
    bengali: "ইমেইল ঠিকানা",
    category: "Miscellaneous"
  },
  {
    id: "50-15",
    word: "スケジュール",
    reading: "スケジュール",
    romaji: "sukejuuru",
    english: "schedule",
    bengali: "শিডিউল",
    category: "Miscellaneous"
  },
  {
    id: "50-16",
    word: "さ来週",
    reading: "さらいしゅう",
    romaji: "saraishuu",
    english: "the week after next",
    bengali: "আগামী সপ্তাহের পরের সপ্তাহ",
    category: "Time"
  },
  {
    id: "50-17",
    word: "さ来月",
    reading: "さらいげつ",
    romaji: "saraigetsu",
    english: "the month after next",
    bengali: "আগামী মাসের পরের মাস",
    category: "Time"
  },
  {
    id: "50-18",
    word: "さ来年",
    reading: "さらいねん",
    romaji: "sarainen",
    english: "the year after next",
    bengali: "আগামী বছরের পরের বছর",
    category: "Time"
  },
  {
    id: "50-19",
    word: "はじめに",
    reading: "はじめに",
    romaji: "hajime ni",
    english: "first, at the beginning",
    bengali: "শুরুতে",
    category: "Miscellaneous"
  },
  {
    id: "50-20",
    word: "緊張します",
    reading: "きんちょうします",
    romaji: "kinchoushimasu",
    english: "to become tense, to be nervous",
    bengali: "নার্ভাস হওয়া",
    category: "Verb"
  },
  {
    id: "50-21",
    word: "賞金",
    reading: "しょうきん",
    romaji: "shoukin",
    english: "prize money",
    bengali: "পুরস্কারের টাকা",
    category: "Miscellaneous"
  },
  {
    id: "50-22",
    word: "きりん",
    reading: "きりん",
    romaji: "kirin",
    english: "giraffe",
    bengali: "জিরাফ",
    category: "Animals"
  },
  {
    id: "50-23",
    word: "ころ",
    reading: "ころ",
    romaji: "koro",
    english: "times, days",
    bengali: "সময়",
    category: "Time"
  },
  {
    id: "50-24",
    word: "かないます",
    reading: "かないます",
    romaji: "kanaimasu",
    english: "to come true (a dream)",
    bengali: "পূর্ণ হওয়া (স্বপ্ন)",
    category: "Verb"
  },
  {
    id: "50-25",
    word: "応援します",
    reading: "おうえんします",
    romaji: "ouenshimasu",
    english: "to support, to cheer",
    bengali: "সমর্থন করা",
    category: "Verb"
  },
  {
    id: "50-26",
    word: "心から",
    reading: "こころから",
    romaji: "kokoro kara",
    english: "from one's heart",
    bengali: "মন থেকে",
    category: "Adverb"
  },
  {
    id: "50-27",
    word: "感謝します",
    reading: "かんしゃします",
    romaji: "kanshashimasu",
    english: "to thank, to be grateful",
    bengali: "কৃতজ্ঞতা প্রকাশ করা",
    category: "Verb"
  },
  {
    id: "50-28",
    word: "お礼",
    reading: "おれい",
    romaji: "orei",
    english: "gratitude, thanks",
    bengali: "ধন্যবাদ / কৃতজ্ঞতা",
    category: "Greetings"
  },
  {
    id: "50-29",
    word: "お元気でいらっしゃいますか",
    reading: "おげんきでいらっしゃいますか",
    romaji: "o-genki de irasshaimasu ka",
    english: "How are you? (respectful equivalent of o-genki desu ka)",
    bengali: "আপনি কি ভালো আছেন?",
    category: "Greetings"
  },
  {
    id: "50-30",
    word: "迷惑をかけます",
    reading: "めいわくをかけます",
    romaji: "meiwaku o kakemasu",
    english: "to cause trouble, to annoy",
    bengali: "বিরক্ত করা",
    category: "Verb"
  },
  {
    id: "50-31",
    word: "生かします",
    reading: "いかします",
    romaji: "ikashimasu",
    english: "to make good use of",
    bengali: "কাজে লাগানো",
    category: "Verb"
  }
];
