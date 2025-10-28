// Local images from public/images directory
const authorAvatar = "/images/pexels-kadeem-stewart-170429769-15786936.jpg";
const aboutSofiaHero = "/images/pexels-kadeem-stewart-170429769-15786936.jpg";
const editorialEleganceHero = "/images/amina-atar-tPM3nd4J8xs-unsplash.jpg";
const desertDreamsHero = "/images/igor-rand-dlR-BNDWz3g-unsplash.jpg";
const vintageHighwayHero = "/images/dwayne-joe-9wubaeSG13U-unsplash (1).jpg";
const lavenderFieldsHero = "/images/ozge-karzan-fdZjAjPUQbk-unsplash.jpg";
const coastalClassicHero = "/images/pexels-adrienne-andersen-1174503-2661255.jpg";
const storiesUnboundHero = "/images/pexels-ayomide-isaac-66354580-16273825.jpg";
const circularHorizonsHero = "/images/pexels-brianasarejr-12417686.jpg";
const retroRevivalHero = "/images/pexels-brianasarejr-17553641.jpg";
const goldenSpheresHero = "/images/pexels-jameshausley-3328337.jpg";
const azureAwakeningHero = "/images/amina-atar-tPM3nd4J8xs-unsplash.jpg";
const minimalistVoyageHero = "/images/igor-rand-dlR-BNDWz3g-unsplash.jpg";

export interface ArticleData {
  slug: string;
  title: string;
  subtitle: string;
  publishDate: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  heroImage: string;
  readTime: string;
  viewCount: string;
  shareCount: number;
  content: {
    type: "paragraph" | "heading" | "image" | "blockquote-big";
    content?: string;
    src?: string;
    alt?: string;
    caption?: string;
    author?: string;
    level?: number;
  }[];
  relatedArticles: {
    title: string;
    description: string;
    image: string;
    tag: string;
    slug: string;
  }[];
}

export const articlesData: Record<string, ArticleData> = {
  "about-sofia": {
    slug: "about-sofia",
    title: "Who's Sofia?",
    subtitle: "A Personal Introduction",
    publishDate: "March 20, 2024",
    author: {
      name: "Sofia Andersson",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: aboutSofiaHero,
    readTime: "8 min",
    viewCount: "4.8k",
    shareCount: 142,
    content: [
      {
        type: "paragraph",
        content: "I resisted writing an About page for years.",
      },
      {
        type: "paragraph",
        content: "But after being interviewed for Vogue, invited to speak at photography conferences, and asked repeatedly about my work, it seemed strange not to have something here. A place to point to when people ask: Who is this person behind the camera?",
      },
      {
        type: "paragraph",
        content: "So here it is.",
      },
      {
        type: "paragraph",
        content: "I'm Sofia Andersson, a 28-year-old fashion photographer based in Copenhagen. I specialize in editorial work—the kind of photography that tells stories, not just sells clothes. I shoot for Scandinavian brands, international magazines, and the occasional beauty campaign. I also run this blog, Voyager, where I document the chaos and beauty of working in fashion.",
      },
      {
        type: "paragraph",
        content: "My path here wasn't traditional. I studied photojournalism, not fashion photography. That background taught me to see stories in moments and work fast with natural light. After graduation, I spent a year assisting established photographers in Copenhagen and London—carrying equipment, adjusting reflectors, making endless coffee.",
      },
      {
        type: "paragraph",
        content: "It was unglamorous but invaluable.",
      },
      {
        type: "paragraph",
        content: "Five years ago, I took the leap and started shooting my own editorials. Built a portfolio. Reached out to magazines and brands. The work came slowly at first, then suddenly all at once.",
      },
      {
        type: "paragraph",
        content: "These days I shoot mostly on a Canon EOS R5, though I still love my Hasselblad 503CW for special projects. There's something about medium format film that digital can't replicate. My studio in Vesterbro is filled with natural light, vintage furniture, and an embarrassing number of half-empty coffee cups.",
      },
      {
        type: "blockquote-big",
        content: "The best camera is the one you have with you. The best photograph is the one you're about to take.",
        author: "Sofia Andersson",
      },
      {
        type: "paragraph",
        content: "I started Voyager in 2021 as a portfolio site. It evolved into something more—a space to share the creative process, break down shoots, and connect with other photographers who care about craft. I write about technique, inspiration, and the business of photography.",
      },
      {
        type: "paragraph",
        content: "If you want to work together, reach out. Tell me about your project, your timeline, your vision. I'm usually booked a few months out, but I always make room for work that excites me.",
      },
      {
        type: "paragraph",
        content: "Until then, I'll be here—shooting, writing, and trying to capture that perfect moment of light.",
      },
    ],
    relatedArticles: [
      {
        title: "Editorial Elegance",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
      {
        title: "Stories Unbound",
        description: "Narrative fashion photography that tells compelling visual stories.",
        image: storiesUnboundHero,
        tag: "Editorial",
        slug: "stories-unbound",
      },
      {
        title: "Desert Dreams",
        description: "A journey through minimalist landscapes where fashion meets nature in perfect harmony.",
        image: desertDreamsHero,
        tag: "Travel",
        slug: "desert-dreams",
      },
    ],
  },
  "editorial-elegance": {
    slug: "editorial-elegance",
    title: "Editorial Elegance",
    subtitle: "A Study in Minimalist Fashion",
    publishDate: "March 15, 2024",
    author: {
      name: "Sofia Andersson",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: editorialEleganceHero,
    readTime: "8 min",
    viewCount: "2.4k",
    shareCount: 89,
    content: [
      {
        type: "paragraph",
        content: "Simplicity in fashion photography is never simple.",
      },
      {
        type: "paragraph",
        content: "During Milan Fashion Week, I shot an editorial exploring minimalism—monochromatic clothes against geometric backdrops. The brief was straightforward: strip everything down to the essentials. Clean lines. Natural light. No distractions.",
      },
      {
        type: "paragraph",
        content: "Easier said than done.",
      },
      {
        type: "paragraph",
        content: "We worked in a studio with floor-to-ceiling windows, using only the soft northern light filtering through. No strobes, no reflectors, no safety nets. The model and I communicated mostly through glances and subtle adjustments. When you remove all the technical complexity, what's left is pure instinct.",
      },
      {
        type: "paragraph",
        content: "The garments were architectural—precise tailoring, deliberate draping, fabrics that moved like sculpture. My job wasn't to dress them up with clever lighting or dramatic angles. It was to get out of the way and let them speak.",
      },
      {
        type: "paragraph",
        content: "We shot entirely in black, white, and gray. Without color to anchor the eye, you notice different things. The fall of a hem. The angle of a shoulder. The negative space between figure and frame.",
      },
      {
        type: "paragraph",
        content: "The best frame came near the end of the day. The model shifted her weight slightly, the light caught the fabric at just the right angle, and for maybe three seconds everything aligned. I fired twice. That's the shot you see above.",
      },
      {
        type: "blockquote-big",
        content: "Fashion photography is the art of making people stop and look at what they might otherwise walk past.",
        author: "Irving Penn",
      },
      {
        type: "paragraph",
        content: "Minimalism forces you to be honest. There's nowhere to hide behind technique or post-production tricks. Either the image works or it doesn't. Either you captured something essential or you just photographed clothes.",
      },
      {
        type: "paragraph",
        content: "I'm still learning which is which.",
      },
    ],
    relatedArticles: [
      {
        title: "Urban Runway",
        description: "Street style meets high fashion in downtown Manhattan. Spontaneous moments of style captured in natural light.",
        image: storiesUnboundHero,
        tag: "Portrait",
        slug: "urban-runway",
      },
      {
        title: "Beauty in Motion",
        description: "Exploring fluidity and grace through beauty editorial work. Shot on medium format film for timeless quality.",
        image: goldenSpheresHero,
        tag: "Beauty",
        slug: "beauty-in-motion",
      },
      {
        title: "Desert Dreams",
        description: "A journey through minimalist landscapes where fashion meets nature in perfect harmony.",
        image: desertDreamsHero,
        tag: "Travel",
        slug: "desert-dreams",
      },
    ],
  },
  "desert-dreams": {
    slug: "desert-dreams",
    title: "Desert Dreams",
    subtitle: "Where Fashion Meets Nature",
    publishDate: "March 15, 2024",
    author: {
      name: "Sofia Andersson",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: desertDreamsHero,
    readTime: "6 min",
    viewCount: "1.8k",
    shareCount: 64,
    content: [
      {
        type: "paragraph",
        content: "The desert doesn't forgive mistakes.",
      },
      {
        type: "paragraph",
        content: "We drove three hours into the Mojave to shoot an editorial for a Copenhagen designer's new collection. Five people, one van, and enough camera equipment to fill a small studio. The call time was 5 AM to catch the light.",
      },
      {
        type: "paragraph",
        content: "Worth it.",
      },
      {
        type: "paragraph",
        content: "Desert light is different from anything you get in a city or studio. It's harsh and unforgiving at midday, but for about two hours after sunrise, it's magic. The sun sits low, casting long shadows across sand and rock. Everything glows.",
      },
      {
        type: "paragraph",
        content: "The clothes were all flowing fabrics—silk, linen, gauze. They moved beautifully in the wind, which was both a blessing and a curse. Every time we set up a shot, a gust would come through and rearrange everything. The model's hair, the dress, the carefully positioned fabric we'd laid on the ground as a prop.",
      },
      {
        type: "paragraph",
        content: "You learn to work fast.",
      },
      {
        type: "paragraph",
        content: "By 10 AM, the temperature was already climbing toward 95 degrees. We shot quickly, moved locations, shot again. The stylist kept the model cool between takes with a portable fan and cold water. I worked mostly handheld, following the movement of fabric and light.",
      },
      {
        type: "paragraph",
        content: "The best image came from pure accident. A sudden wind caught the model's dress just as she turned. The fabric billowed out horizontally, perfectly parallel to the horizon line. I shot three frames before it fell. Only one was sharp.",
      },
      {
        type: "paragraph",
        content: "That's the one everyone remembers.",
      },
      {
        type: "paragraph",
        content: "The desert strips away anything unnecessary. No props, no artificial backgrounds, no clever lighting setups. Just fabric, skin, sand, and sky. Either your composition works or it doesn't. Either the clothes look extraordinary or they disappear.",
      },
      {
        type: "paragraph",
        content: "We were back in the van by noon, exhausted and sunburned. But we got the shots. And for a few hours that morning, fashion and nature existed in perfect, temporary harmony.",
      },
    ],
    relatedArticles: [
      {
        title: "Editorial Elegance",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
      {
        title: "Vintage Highway",
        description: "A nostalgic journey through classic American style and the open road.",
        image: vintageHighwayHero,
        tag: "Travel",
        slug: "vintage-highway",
      },
      {
        title: "Lavender Fields",
        description: "Romance and elegance captured in the purple hues of Provence.",
        image: lavenderFieldsHero,
        tag: "Editorial",
        slug: "lavender-fields",
      },
    ],
  },
  "vintage-highway": {
    slug: "vintage-highway",
    title: "Vintage Highway",
    subtitle: "The Open Road Aesthetic",
    publishDate: "March 12, 2024",
    author: {
      name: "Sofia Andersson",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: vintageHighwayHero,
    readTime: "7 min",
    viewCount: "3.1k",
    shareCount: 95,
    content: [
      {
        type: "paragraph",
        content: "We found the car on Craigslist—a 1967 Mustang in faded turquoise.",
      },
      {
        type: "paragraph",
        content: "The owner lived an hour outside Palm Springs and was surprisingly okay with us shooting fashion on it for a day. He even offered to drive it to location. \"Just don't scratch the paint,\" he said, patting the hood like it was a family member.",
      },
      {
        type: "paragraph",
        content: "We didn't scratch the paint.",
      },
      {
        type: "paragraph",
        content: "The concept was simple: vintage Americana meets contemporary fashion. Think Thelma & Louise but make it 2024. We shot along Route 62, stopping at abandoned gas stations, retro diners, and stretches of empty highway that looked like they hadn't changed since 1975.",
      },
      {
        type: "paragraph",
        content: "The model wore pieces from a Danish designer's collection—clean lines, modern cuts, nothing explicitly vintage. But against the backdrop of old America, the clothes took on a different quality. They became part of the story rather than the whole story.",
      },
      {
        type: "paragraph",
        content: "That's the trick with location shooting. The place has to be more than a backdrop.",
      },
      {
        type: "paragraph",
        content: "We shot through golden hour, chasing the light as it moved across desert landscape. The car's turquoise paint caught the sun perfectly. The model leaned against the hood, sat in the driver's seat with the door open, walked along the white line down the center of an empty road.",
      },
      {
        type: "paragraph",
        content: "Every frame felt like a movie still. That's what we wanted.",
      },
      {
        type: "paragraph",
        content: "Fashion photography borrows constantly from cinema—from framing to lighting to narrative structure. This shoot was an explicit homage to road movies and the mythology of the open highway. Freedom, possibility, escape. All the things fashion promises even when we know better.",
      },
      {
        type: "paragraph",
        content: "By sunset, we'd shot maybe 200 frames. The car owner was happy, the model was exhausted, and I was already editing in my head. We returned the Mustang without a scratch and drove back to LA as the sky turned purple.",
      },
      {
        type: "paragraph",
        content: "Sometimes the best shoots are the ones that feel like little adventures.",
      },
    ],
    relatedArticles: [
      {
        title: "Desert Dreams",
        description: "A journey through minimalist landscapes where fashion meets nature in perfect harmony.",
        image: desertDreamsHero,
        tag: "Travel",
        slug: "desert-dreams",
      },
      {
        title: "Coastal Classic",
        description: "Seaside elegance meets timeless style.",
        image: coastalClassicHero,
        tag: "Editorial",
        slug: "coastal-classic",
      },
      {
        title: "Retro Revival",
        description: "Celebrating the bold patterns and colors of vintage fashion.",
        image: retroRevivalHero,
        tag: "Vintage",
        slug: "retro-revival",
      },
    ],
  },
  "lavender-fields": {
    slug: "lavender-fields",
    title: "Lavender Fields",
    subtitle: "Romance in Provence",
    publishDate: "March 8, 2024",
    author: {
      name: "Sofia Andersson",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: lavenderFieldsHero,
    readTime: "5 min",
    viewCount: "2.2k",
    shareCount: 71,
    content: [
      {
        type: "paragraph",
        content: "Provence in July is tourist season.",
      },
      {
        type: "paragraph",
        content: "We knew this going in, but I'd underestimated just how many people would be visiting the lavender fields during peak bloom. Families with cameras, couples on romantic getaways, Instagram influencers setting up elaborate poses. All perfectly reasonable. All making it nearly impossible to get a clean shot.",
      },
      {
        type: "paragraph",
        content: "We adjusted.",
      },
      {
        type: "paragraph",
        content: "The shoot was for a French label's summer collection—light fabrics, soft colors, romantic silhouettes. The kind of clothes that look natural in fields of flowers. We arrived at 6 AM, an hour before the tourists, and had maybe 90 minutes of relative solitude.",
      },
      {
        type: "paragraph",
        content: "The light at dawn was perfect. Soft, diffused, with a slight morning haze that made everything look painterly. The model moved through the rows of lavender while I shot handheld, following her movement. The flowers came up to her waist, creating natural framing for every composition.",
      },
      {
        type: "paragraph",
        content: "Purple is a tricky color to photograph. Too saturated and it looks artificial. Too desaturated and you lose what makes lavender fields special. I exposed for the highlights and let the shadows fall where they wanted.",
      },
      {
        type: "paragraph",
        content: "By 7:30, cars were pulling into the parking area. We wrapped quickly, thanked the farmer who owned the land, and left before the crowds arrived. The whole shoot lasted less than two hours, but we got everything we needed.",
      },
      {
        type: "paragraph",
        content: "Sometimes the best work happens in the small window between too early and too late.",
      },
      {
        type: "paragraph",
        content: "Back at the hotel, I reviewed the images. They had that quality I'd hoped for—romantic without being sentimental, beautiful without being precious. The clothes and the landscape complemented each other perfectly. When fashion and environment align like that, it almost doesn't feel like work.",
      },
      {
        type: "paragraph",
        content: "Almost.",
      },
    ],
    relatedArticles: [
      {
        title: "Coastal Classic",
        description: "Seaside elegance meets timeless style.",
        image: coastalClassicHero,
        tag: "Editorial",
        slug: "coastal-classic",
      },
      {
        title: "Desert Dreams",
        description: "A journey through minimalist landscapes where fashion meets nature in perfect harmony.",
        image: desertDreamsHero,
        tag: "Travel",
        slug: "desert-dreams",
      },
      {
        title: "Azure Awakening",
        description: "Blue hues and coastal inspiration.",
        image: azureAwakeningHero,
        tag: "Editorial",
        slug: "azure-awakening",
      },
    ],
  },
  "coastal-classic": {
    slug: "coastal-classic",
    title: "Coastal Classic",
    subtitle: "Seaside Elegance",
    publishDate: "March 5, 2024",
    author: {
      name: "Sofia Andersson",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: coastalClassicHero,
    readTime: "6 min",
    viewCount: "1.9k",
    shareCount: 58,
    content: [
      {
        type: "paragraph",
        content: "Shooting at the beach means accepting that nothing will go as planned.",
      },
      {
        type: "paragraph",
        content: "Sand gets everywhere. Wind ruins hair and makeup within minutes. The tide comes in faster than you expect. Reflective light from water bounces unpredictably. Every piece of equipment needs protecting from salt spray and grit.",
      },
      {
        type: "paragraph",
        content: "And yet, when it works, nothing looks better.",
      },
      {
        type: "paragraph",
        content: "This shoot was for a Danish resort wear brand—linen, cotton, easy silhouettes in white and cream. We scouted a quiet beach north of Copenhagen, far enough from the city to avoid crowds. The weather forecast promised sun. We got clouds instead, which turned out to be a gift.",
      },
      {
        type: "paragraph",
        content: "Overcast beach light is soft and even, perfect for fashion. No harsh shadows, no squinting into bright sun, just clean, diffused illumination. The model wore flowing pieces that caught the wind beautifully. We shot near the water's edge, timing frames between waves.",
      },
      {
        type: "paragraph",
        content: "Working with water requires rhythm. Watch the waves, count the intervals, shoot during the lulls. Get the shot before the next surge. One frame we nailed perfectly—the model mid-stride, fabric billowing, water just catching her feet. Three seconds later, a wave soaked her up to the knees.",
      },
      {
        type: "paragraph",
        content: "We brought towels.",
      },
      {
        type: "paragraph",
        content: "The challenge with coastal shoots is making them feel fresh when everyone's seen a thousand beach photos. We focused on clean compositions—simple lines, minimal styling, letting the environment speak for itself. Sometimes restraint is the most radical choice.",
      },
      {
        type: "paragraph",
        content: "By afternoon, the wind had picked up too much to continue. We packed up, shook sand out of camera bags, and headed back to the studio. But we'd gotten what we needed—images that felt breezy and effortless, even though nothing about the shoot was effortless at all.",
      },
      {
        type: "paragraph",
        content: "That's fashion photography in a nutshell.",
      },
    ],
    relatedArticles: [
      {
        title: "Lavender Fields",
        description: "Romance and elegance captured in the purple hues of Provence.",
        image: lavenderFieldsHero,
        tag: "Editorial",
        slug: "lavender-fields",
      },
      {
        title: "Azure Awakening",
        description: "Blue hues and coastal inspiration.",
        image: azureAwakeningHero,
        tag: "Editorial",
        slug: "azure-awakening",
      },
      {
        title: "Minimalist Voyage",
        description: "Clean lines and contemporary travel style.",
        image: minimalistVoyageHero,
        tag: "Travel",
        slug: "minimalist-voyage",
      },
    ],
  },
  "stories-unbound": {
    slug: "stories-unbound",
    title: "Stories Unbound",
    subtitle: "Narrative Fashion Photography",
    publishDate: "March 1, 2024",
    author: {
      name: "Sofia Andersson",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: storiesUnboundHero,
    readTime: "9 min",
    viewCount: "3.5k",
    shareCount: 102,
    content: [
      {
        type: "paragraph",
        content: "Fashion editorials usually follow a formula—model, clothes, location, repeat.",
      },
      {
        type: "paragraph",
        content: "This one didn't. The brief from the magazine was simple: tell a story. Not just show clothes, not just create pretty images, but build a narrative that unfolds across eight pages. The clothes were the vocabulary, but we needed to write a sentence.",
      },
      {
        type: "paragraph",
        content: "We started with character.",
      },
      {
        type: "paragraph",
        content: "Who is this person? Where is she going? What happened before this moment, and what happens after? We settled on a loose concept: a woman leaving the city, maybe for good, maybe just for the weekend. The ambiguity was intentional. Good stories leave room for the viewer to fill in gaps.",
      },
      {
        type: "paragraph",
        content: "We shot across three locations in one long day. Morning in an apartment with half-packed suitcases. Afternoon at a train station platform. Evening on a coastal road as the sun set. The model wore different pieces from the same collection, creating visual continuity while suggesting the passage of time.",
      },
      {
        type: "paragraph",
        content: "Narrative photography requires thinking beyond individual frames. Each image needs to work alone but also connect to what comes before and after. It's sequential storytelling, closer to cinema than traditional fashion photography.",
      },
      {
        type: "paragraph",
        content: "The hardest part was the ending.",
      },
      {
        type: "paragraph",
        content: "We needed a final image that felt conclusive without being too neat. The model standing at a window, looking out at the ocean. Is she arriving somewhere new or still in transit? The viewer decides. That ambiguity is the point.",
      },
      {
        type: "paragraph",
        content: "When the magazine published the story, they ran it without any text—just images and credits. The fashion spoke for itself. Or rather, the narrative we built around the fashion spoke. The clothes were beautiful, but what people remembered was the feeling. The sense of departure, possibility, transformation.",
      },
      {
        type: "paragraph",
        content: "That's when fashion photography becomes something more than just documentation. It becomes storytelling.",
      },
    ],
    relatedArticles: [
      {
        title: "Editorial Elegance",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
      {
        title: "Urban Runway",
        description: "Street style meets high fashion in downtown Manhattan.",
        image: storiesUnboundHero,
        tag: "Portrait",
        slug: "urban-runway",
      },
      {
        title: "Circular Horizons",
        description: "Geometric patterns and modern design.",
        image: circularHorizonsHero,
        tag: "Editorial",
        slug: "circular-horizons",
      },
    ],
  },
  "circular-horizons": {
    slug: "circular-horizons",
    title: "Circular Horizons",
    subtitle: "Geometric Fashion Design",
    publishDate: "February 28, 2024",
    author: {
      name: "Sofia Andersson",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: circularHorizonsHero,
    readTime: "7 min",
    viewCount: "2.7k",
    shareCount: 83,
    content: [
      {
        type: "paragraph",
        content: "Architecture and fashion have always been in conversation.",
      },
      {
        type: "paragraph",
        content: "This shoot made that conversation explicit. We worked with a Barcelona-based designer whose collection explored geometric forms—circular cutouts, angular seams, architectural draping. The clothes demanded a location that matched their precision.",
      },
      {
        type: "paragraph",
        content: "We found it in a brutalist building scheduled for demolition.",
      },
      {
        type: "paragraph",
        content: "Concrete circles, circular windows, curved staircases—the space was full of geometric repetition. Perfect. We had one day to shoot before the building closed for good. No pressure.",
      },
      {
        type: "paragraph",
        content: "The challenge was making the clothes stand out rather than disappear into all that pattern. Too much geometry becomes visual noise. We kept compositions simple—one model, one shape, clean framing. Let the circles echo each other without competing.",
      },
      {
        type: "paragraph",
        content: "Natural light came through those circular windows in beautiful, shifting patterns. We followed it around the building, shooting quickly as shadows moved across walls and floors. The model wore structured pieces that held their shape—no flowing fabrics here, just sharp lines and deliberate forms.",
      },
      {
        type: "paragraph",
        content: "My favorite frame: the model centered in a circular window, arms raised, creating another circle with her body. Three circles nested within each other—window, body, shadow on the wall behind. It sounds overly clever describing it, but in the moment it just felt right.",
      },
      {
        type: "paragraph",
        content: "Sometimes fashion photography is about harmony between environment and subject. Sometimes it's about tension. This shoot was pure harmony. The clothes belonged in that space. They were made for each other.",
      },
      {
        type: "paragraph",
        content: "When we wrapped, I walked through the empty building one more time. Within a month, it would be rubble. But we'd captured something before it disappeared—a moment when architecture and fashion aligned perfectly. That temporary intersection is what editorial photography is all about.",
      },
      {
        type: "paragraph",
        content: "Creating something beautiful, then letting it go.",
      },
    ],
    relatedArticles: [
      {
        title: "Editorial Elegance",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
      {
        title: "Golden Spheres",
        description: "Luxury and geometry in perfect balance.",
        image: goldenSpheresHero,
        tag: "Editorial",
        slug: "golden-spheres",
      },
      {
        title: "Minimalist Voyage",
        description: "Clean lines and contemporary travel style.",
        image: minimalistVoyageHero,
        tag: "Travel",
        slug: "minimalist-voyage",
      },
    ],
  },
  "retro-revival": {
    slug: "retro-revival",
    title: "Retro Revival",
    subtitle: "Vintage Vibes, Modern Vision",
    publishDate: "February 24, 2024",
    author: {
      name: "Sofia Andersson",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: retroRevivalHero,
    readTime: "8 min",
    viewCount: "4.1k",
    shareCount: 118,
    content: [
      {
        type: "paragraph",
        content: "The thrift store smelled like mothballs and old fabric softener.",
      },
      {
        type: "paragraph",
        content: "We spent three hours there pulling vintage pieces for a shoot celebrating 1970s fashion—wide collars, bold prints, flared trousers, platform shoes. The styling brief was simple: make retro feel fresh. Easier said than done when everyone's seen a thousand \"70s-inspired\" editorials.",
      },
      {
        type: "paragraph",
        content: "The trick was commitment.",
      },
      {
        type: "paragraph",
        content: "Half-vintage doesn't work. You can't put someone in a polyester shirt and jeans and call it retro. We went full immersion—authentic pieces, period-appropriate hair and makeup, even sourced vintage sunglasses and jewelry. The model looked like she'd stepped out of a 1974 Vogue editorial.",
      },
      {
        type: "paragraph",
        content: "But we didn't want it to feel like a costume or a parody. That's the balance with retro work. Honor the aesthetic but keep it current. We shot on digital, used modern framing and composition, kept the colors saturated but not artificially boosted. The fashion was vintage; the photography was contemporary.",
      },
      {
        type: "paragraph",
        content: "Location was key. We found a preserved mid-century apartment complex with orange carpet and wood paneling. It hadn't been renovated since 1978. Perfect. The model moved through these spaces like she belonged there—lounging on a velvet couch, standing by a rotary phone, looking out curtained windows.",
      },
      {
        type: "paragraph",
        content: "What makes vintage fashion compelling isn't nostalgia for its own sake. It's recognizing that good design transcends time. Those 70s silhouettes—the wide pants, the structured jackets, the bold patterns—they still work. Not because they're trendy again, but because they were well-designed in the first place.",
      },
      {
        type: "paragraph",
        content: "We wrapped the shoot and returned the borrowed clothes to the thrift store. (The owner let us borrow them for the day in exchange for credit in the magazine.) Back in the studio, editing the images, I was struck by how timeless they felt. Strip away the specific references, and what remains is just good fashion photography.",
      },
      {
        type: "paragraph",
        content: "Maybe that's the point. Maybe vintage isn't about looking backward at all.",
      },
    ],
    relatedArticles: [
      {
        title: "Vintage Highway",
        description: "A nostalgic journey through classic American style and the open road.",
        image: vintageHighwayHero,
        tag: "Travel",
        slug: "vintage-highway",
      },
      {
        title: "Golden Spheres",
        description: "Luxury and geometry in perfect balance.",
        image: goldenSpheresHero,
        tag: "Editorial",
        slug: "golden-spheres",
      },
      {
        title: "Stories Unbound",
        description: "Narrative fashion photography that tells compelling visual stories.",
        image: storiesUnboundHero,
        tag: "Editorial",
        slug: "stories-unbound",
      },
    ],
  },
  "golden-spheres": {
    slug: "golden-spheres",
    title: "Golden Spheres",
    subtitle: "Luxury and Light",
    publishDate: "February 20, 2024",
    author: {
      name: "Sofia Andersson",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: goldenSpheresHero,
    readTime: "6 min",
    viewCount: "2.9k",
    shareCount: 91,
    content: [
      {
        type: "paragraph",
        content: "Working with gold is like working with a mirror that lies.",
      },
      {
        type: "paragraph",
        content: "It reflects everything—light, shadow, the photographer, the entire set. But it also transforms what it reflects, adding warmth and weight to every image. For this shoot, we embraced that reflective quality rather than fighting it. The collection featured metallic fabrics and gold accessories, so we built the whole concept around light and reflection.",
      },
      {
        type: "paragraph",
        content: "The location was an empty gallery space with white walls and polished concrete floors. We brought in spherical mirrors and gold-colored props—balloons, geometric sculptures, metallic fabric. Everything round, everything reflective. The idea was to create a space where reality became slightly distorted, like looking through a golden lens.",
      },
      {
        type: "paragraph",
        content: "Lighting was crucial and complicated.",
      },
      {
        type: "paragraph",
        content: "Too bright and the gold became washed out. Too dim and it looked brown instead of metallic. We used a combination of warm continuous lights and carefully positioned reflectors, adjusting constantly as the model moved. Every angle created different reflections, different plays of light across the metallic surfaces.",
      },
      {
        type: "paragraph",
        content: "The model wore structured pieces in gold lamé, bronze silk, and copper-toned leather. Against all those spherical mirrors and reflective surfaces, the effect was almost sci-fi—like fashion photography from some alternate, more glamorous dimension.",
      },
      {
        type: "paragraph",
        content: "One happy accident: a gold balloon drifted into frame just as I was shooting. I almost asked someone to move it, then realized it was perfect. Sometimes the best elements are unplanned. I shot three frames before the balloon floated out of reach.",
      },
      {
        type: "paragraph",
        content: "Gold in fashion photography is tricky because it can easily become tacky. The line between luxurious and gaudy is thin. We stayed on the right side by keeping everything else minimal—simple compositions, clean backgrounds, restrained styling. Let the gold be the statement rather than compete with it.",
      },
      {
        type: "paragraph",
        content: "When we wrapped, the gallery looked like the inside of a jewelry box. All that gold, all those reflections. We left the installation up for a week, and the gallery owner sent me photos of visitors wandering through the space, taking pictures with their phones.",
      },
      {
        type: "paragraph",
        content: "Fashion photography creating accidental art installations. I'll take it.",
      },
    ],
    relatedArticles: [
      {
        title: "Circular Horizons",
        description: "Geometric patterns and modern design.",
        image: circularHorizonsHero,
        tag: "Editorial",
        slug: "circular-horizons",
      },
      {
        title: "Editorial Elegance",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
      {
        title: "Retro Revival",
        description: "Celebrating the bold patterns and colors of vintage fashion.",
        image: retroRevivalHero,
        tag: "Vintage",
        slug: "retro-revival",
      },
    ],
  },
  "azure-awakening": {
    slug: "azure-awakening",
    title: "Azure Awakening",
    subtitle: "Blue Horizons",
    publishDate: "February 16, 2024",
    author: {
      name: "Sofia Andersson",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: azureAwakeningHero,
    readTime: "5 min",
    viewCount: "2.1k",
    shareCount: 67,
    content: [
      {
        type: "paragraph",
        content: "Blue is the hardest color to photograph well.",
      },
      {
        type: "paragraph",
        content: "It shifts depending on light, time of day, even the weather. What looks like perfect azure in person can turn gray or purple on camera. For this editorial—an entire collection in various shades of blue—I knew we'd need to be meticulous about color accuracy.",
      },
      {
        type: "paragraph",
        content: "We shot outdoors at dawn, when the sky itself was blue.",
      },
      {
        type: "paragraph",
        content: "The collection ranged from deep navy to pale ice blue, with everything in between—cobalt, azure, cerulean, indigo. The designer had carefully calibrated each shade to work together. My job was to make sure the camera captured those distinctions. Shooting all blues meant any color cast would be immediately obvious.",
      },
      {
        type: "paragraph",
        content: "We worked fast, chasing that early morning light before the sun climbed too high. The model wore different pieces from the collection, moving through a series of minimalist compositions against white walls and open sky. No distracting backgrounds, just clean frames that let the blue tones speak.",
      },
      {
        type: "paragraph",
        content: "The challenge was making each image distinct when everything was the same color. We varied texture—smooth silk against rough linen, structured wool against flowing chiffon. We played with depth of field, sometimes focusing on fabric details, sometimes pulling back to show full silhouettes.",
      },
      {
        type: "paragraph",
        content: "Blue has this quality that other colors don't. It can feel cold or warm, energizing or calming, sophisticated or casual. All depending on shade and context. This collection explored that range, and the photographs needed to capture those subtle emotional shifts.",
      },
      {
        type: "paragraph",
        content: "By 8 AM, the light had changed too much to continue. We'd shot for maybe 90 minutes total, but it was enough. Back in the studio, reviewing the images, I was relieved to see the blues had held their integrity. Each shade distinct, each piece clearly different from the others.",
      },
      {
        type: "paragraph",
        content: "Color-accurate fashion photography is harder than it looks. Especially with blue. But when you get it right, there's something deeply satisfying about seeing exactly what you intended to capture.",
      },
    ],
    relatedArticles: [
      {
        title: "Coastal Classic",
        description: "Seaside elegance meets timeless style.",
        image: coastalClassicHero,
        tag: "Editorial",
        slug: "coastal-classic",
      },
      {
        title: "Lavender Fields",
        description: "Romance and elegance captured in the purple hues of Provence.",
        image: lavenderFieldsHero,
        tag: "Editorial",
        slug: "lavender-fields",
      },
      {
        title: "Minimalist Voyage",
        description: "Clean lines and contemporary travel style.",
        image: minimalistVoyageHero,
        tag: "Travel",
        slug: "minimalist-voyage",
      },
    ],
  },
  "minimalist-voyage": {
    slug: "minimalist-voyage",
    title: "Minimalist Voyage",
    subtitle: "Essential Travel Style",
    publishDate: "February 12, 2024",
    author: {
      name: "Sofia Andersson",
      title: "Fashion Photographer",
      avatar: authorAvatar,
    },
    heroImage: minimalistVoyageHero,
    readTime: "7 min",
    viewCount: "2.5k",
    shareCount: 76,
    content: [
      {
        type: "paragraph",
        content: "I shot this editorial from a single carry-on suitcase.",
      },
      {
        type: "paragraph",
        content: "The concept was simple: travel fashion for people who actually travel. Not the fantasy version with steamer trunks and outfit changes, but the reality of limited luggage space and wrinkle-prone fabrics. A Swedish brand sent me their minimalist travel collection—eight pieces, all designed to mix and match, all chosen for packability.",
      },
      {
        type: "paragraph",
        content: "We shot across three cities in one week.",
      },
      {
        type: "paragraph",
        content: "Stockholm, Copenhagen, Berlin. Airports, train stations, hotel rooms, city streets. The model wore the same eight pieces in different combinations, creating distinct looks from minimal components. That's the promise of travel fashion—versatility without bulk.",
      },
      {
        type: "paragraph",
        content: "The challenge was making it look aspirational rather than purely practical. Travel clothing often photographs boring—neutral colors, simple cuts, nothing particularly exciting. We countered this with dynamic locations and strong compositions. The clothes were minimal, so we made the photography energetic.",
      },
      {
        type: "paragraph",
        content: "One morning in Berlin, we shot at Tegel Airport before dawn. Empty terminals, harsh fluorescent lighting, the model walking through deserted gates with her carry-on. Not traditionally beautiful, but honest. This is what travel actually looks like most of the time—waiting, moving, existing in transient spaces.",
      },
      {
        type: "paragraph",
        content: "The brand loved it. They'd been marketing travel wear with vacation imagery—beaches, cafés, scenic overlooks. But their actual customers were business travelers and digital nomads. People living out of suitcases, working remotely, always between places. Our photos reflected that reality.",
      },
      {
        type: "paragraph",
        content: "By the end of the week, those eight pieces had been photographed in maybe thirty different ways. The model was exhausted, I was running on coffee and adrenaline, but we'd proven the central point: you don't need a lot to look good. You just need the right things and the willingness to remix them endlessly.",
      },
      {
        type: "paragraph",
        content: "Fashion photography often celebrates excess—more clothes, more looks, more everything. This shoot celebrated restraint. Less, but better. Minimal, but intentional.",
      },
      {
        type: "paragraph",
        content: "The art of traveling light, documented honestly.",
      },
    ],
    relatedArticles: [
      {
        title: "Desert Dreams",
        description: "A journey through minimalist landscapes where fashion meets nature in perfect harmony.",
        image: desertDreamsHero,
        tag: "Travel",
        slug: "desert-dreams",
      },
      {
        title: "Coastal Classic",
        description: "Seaside elegance meets timeless style.",
        image: coastalClassicHero,
        tag: "Editorial",
        slug: "coastal-classic",
      },
      {
        title: "Editorial Elegance",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
    ],
  },
};

export const getArticleBySlug = (slug: string): ArticleData | undefined => {
  return articlesData[slug];
};

export const getAllArticleSlugs = (): string[] => {
  return Object.keys(articlesData);
};
