export interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
    isVerified: boolean;
    title?: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
  replies: Comment[];
}

export const mockComments: Comment[] = [
  {
    id: "1",
    author: {
      name: "Elena Petrova",
      avatar: "https://i.pravatar.cc/150?img=1",
      isVerified: true,
      title: "Visual Arts Curator"
    },
    content: "The way you capture negative space here is breathtaking. It reminds me of early Avedon work—letting the absence speak as loudly as the presence.",
    timestamp: "2024-03-16T10:30:00Z",
    likes: 24,
    isLiked: false,
    replies: [
      {
        id: "1-1",
        author: {
          name: "Sofia Andersson",
          avatar: "/src/assets/author-marcus.jpg",
          isVerified: true,
          title: "Photographer"
        },
        content: "Thank you Elena! Avedon has always been a huge influence. His understanding of space was unparalleled.",
        timestamp: "2024-03-16T14:20:00Z",
        likes: 12,
        isLiked: false,
        replies: []
      }
    ]
  },
  {
    id: "2",
    author: {
      name: "James Chen",
      avatar: "https://i.pravatar.cc/150?img=12",
      isVerified: true,
      title: "Fashion Designer"
    },
    content: "As a fashion designer, this editorial resonates deeply. The monochromatic palette you chose lets the construction speak. Brilliant work on highlighting the architecture of each garment.",
    timestamp: "2024-03-16T09:15:00Z",
    likes: 31,
    isLiked: true,
    replies: []
  },
  {
    id: "3",
    author: {
      name: "Anonymous",
      avatar: "https://i.pravatar.cc/150?img=23",
      isVerified: false,
    },
    content: "I've been following your work for years, Sofia. This might be your most refined series yet. The restraint is powerful.",
    timestamp: "2024-03-16T08:45:00Z",
    likes: 18,
    isLiked: false,
    replies: [
      {
        id: "3-1",
        author: {
          name: "Marcus Valle",
          avatar: "https://i.pravatar.cc/150?img=33",
          isVerified: false,
        },
        content: "Completely agree! The use of light in image 3 is particularly striking.",
        timestamp: "2024-03-16T11:30:00Z",
        likes: 7,
        isLiked: false,
        replies: []
      }
    ]
  },
  {
    id: "4",
    author: {
      name: "Yuki Tanaka",
      avatar: "https://i.pravatar.cc/150?img=5",
      isVerified: true,
      title: "Art Director"
    },
    content: "The compositional choices here are masterful. Every element has purpose. This is what editorial photography should aspire to.",
    timestamp: "2024-03-16T07:20:00Z",
    likes: 29,
    isLiked: false,
    replies: []
  },
  {
    id: "5",
    author: {
      name: "Isabella Rossi",
      avatar: "https://i.pravatar.cc/150?img=9",
      isVerified: false,
    },
    content: "The model collaboration you describe—working in near silence—that's when true artistry emerges. Beautiful execution and equally beautiful reflection on process.",
    timestamp: "2024-03-15T22:10:00Z",
    likes: 15,
    isLiked: false,
    replies: []
  },
  {
    id: "6",
    author: {
      name: "Thomas Wright",
      avatar: "https://i.pravatar.cc/150?img=14",
      isVerified: true,
      title: "Photography Instructor"
    },
    content: "I'll be sharing this with my students. The way you articulate the technical dance while maintaining artistic vision is exactly what emerging photographers need to understand.",
    timestamp: "2024-03-15T20:45:00Z",
    likes: 42,
    isLiked: true,
    replies: [
      {
        id: "6-1",
        author: {
          name: "Sofia Andersson",
          avatar: "/src/assets/author-marcus.jpg",
          isVerified: true,
          title: "Photographer"
        },
        content: "That means so much coming from you, Thomas. Teaching the next generation is how we elevate the entire craft.",
        timestamp: "2024-03-15T21:30:00Z",
        likes: 19,
        isLiked: false,
        replies: []
      }
    ]
  },
  {
    id: "7",
    author: {
      name: "Amara Okafor",
      avatar: "https://i.pravatar.cc/150?img=44",
      isVerified: false,
    },
    content: "The monochrome choice was inspired. It forces the viewer to engage with texture and form in a way color never could. Absolutely stunning series.",
    timestamp: "2024-03-15T19:30:00Z",
    likes: 21,
    isLiked: false,
    replies: []
  },
  {
    id: "8",
    author: {
      name: "Lucas Bergström",
      avatar: "https://i.pravatar.cc/150?img=51",
      isVerified: true,
      title: "Magazine Editor"
    },
    content: "We'd love to feature this in our upcoming minimalism issue. The quality of thought behind each frame is evident. Will reach out via email.",
    timestamp: "2024-03-15T18:15:00Z",
    likes: 38,
    isLiked: false,
    replies: []
  },
  {
    id: "9",
    author: {
      name: "Mei Lin",
      avatar: "https://i.pravatar.cc/150?img=26",
      isVerified: false,
    },
    content: "As someone new to fashion photography, this article is incredibly valuable. The emphasis on collaboration and intention over technical perfection is a lesson I'll carry forward.",
    timestamp: "2024-03-15T17:00:00Z",
    likes: 12,
    isLiked: false,
    replies: []
  },
  {
    id: "10",
    author: {
      name: "David Morrison",
      avatar: "https://i.pravatar.cc/150?img=68",
      isVerified: true,
      title: "Fashion Stylist"
    },
    content: "Having worked on this shoot, I can attest to Sofia's meticulous vision. Every detail was considered, every moment intentional. The final images don't just document fashion—they elevate it to art.",
    timestamp: "2024-03-15T16:20:00Z",
    likes: 47,
    isLiked: true,
    replies: [
      {
        id: "10-1",
        author: {
          name: "Nina Park",
          avatar: "https://i.pravatar.cc/150?img=29",
          isVerified: false,
        },
        content: "The behind-the-scenes magic! Would love to see a BTS piece on this shoot someday.",
        timestamp: "2024-03-15T17:45:00Z",
        likes: 9,
        isLiked: false,
        replies: []
      }
    ]
  },
  {
    id: "11",
    author: {
      name: "Henri Dubois",
      avatar: "https://i.pravatar.cc/150?img=15",
      isVerified: false,
    },
    content: "The Penn quote you included is perfect. This work embodies that philosophy completely. Bravo.",
    timestamp: "2024-03-15T15:30:00Z",
    likes: 14,
    isLiked: false,
    replies: []
  },
  {
    id: "12",
    author: {
      name: "Zara Ahmed",
      avatar: "https://i.pravatar.cc/150?img=32",
      isVerified: true,
      title: "Creative Director"
    },
    content: "The natural light work here is extraordinary. So many photographers over-light editorial work. Your restraint creates this ethereal quality that feels both timeless and contemporary.",
    timestamp: "2024-03-15T14:10:00Z",
    likes: 26,
    isLiked: false,
    replies: []
  },
  {
    id: "13",
    author: {
      name: "Oliver Schmidt",
      avatar: "https://i.pravatar.cc/150?img=52",
      isVerified: false,
    },
    content: "Studied this entire series frame by frame. The consistency of vision across all images is remarkable. Each one could stand alone, yet together they create something greater.",
    timestamp: "2024-03-15T13:00:00Z",
    likes: 19,
    isLiked: false,
    replies: []
  },
  {
    id: "14",
    author: {
      name: "Priya Sharma",
      avatar: "https://i.pravatar.cc/150?img=45",
      isVerified: true,
      title: "Fashion Blogger"
    },
    content: "This is what fashion photography should be—thoughtful, intentional, beautiful. Thank you for sharing not just the images but the philosophy behind them.",
    timestamp: "2024-03-15T12:15:00Z",
    likes: 22,
    isLiked: false,
    replies: []
  }
];
