
import InteractiveBentoGallery from "@/src/components/ui/interactive-bento-gallery"

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Google cloud",
    desc: "Google Developer Student Clubs",
    url: "/1.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Google cloud",
    desc: "Google Developer Student Clubs",
    url: "/IMG_7694.jpg",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Google cloud",
    desc: "Google Developer Student Clubs",
    url: "/3.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Google cloud",
    desc: "Google Developer Student Clubs",
    url: "/4.jpeg",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "image",
    title: "Google cloud",
    desc: "Google Developer Student Clubs",
    url: "/5.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },

  {
    id: 6,
    type: "image",
    title: "Google cloud",
    desc: "Google Developer Student Clubs",
    // url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    url: "/6.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",

    // span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "image",
    title: "Cloud",
    desc: "Google Labs",
    // url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    url: "/IMG_7714-01.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 8,
    type: "image",
    title: "Cloud",
    desc: "Google Labs",
    // url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    url: "/SAVE_20221010_223959.jpg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 9,
    type: "image",
    title: "Cloud",
    desc: "Google Labs",
    // url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    url: "/WhatsApp Image 2022-11-13 at 12.20.37 AM (1).jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 10,
    type: "image",
    title: "Cloud",
    desc: "Google Labs",
    // url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    url: "/WhatsApp Image 2022-11-13 at 12.20.37 AM (2).jpeg",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",

    // span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 11,
    type: "image",
    title: "Google cloud",
    desc: "Google Developer Student Clubs",
    // url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    // url: "/11.jpeg",
    url: "/WhatsApp Image 2022-11-13 at 12.20.38 AM.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 12,
    type: "image",
    title: "Google cloud",
    desc: "Google Developer Student Clubs",
    // url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    url: "/WhatsApp Image 2022-11-13 at 12.20.38 AM.jpeg",
    // span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",

  },
  {
    id: 13,
    type: "image",
    title: "Google cloud",
    desc: "Google Developer Student Clubs",
    // url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    url: "/13.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 14,
    type: "image",
    title: "Vihaan 6.0",
    desc: "Hackathon",
    // url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    url: "/WhatsApp Image 2025-03-22 at 12.17.33 AM.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 15,
    type: "image",
    title: "Google Swag",
    desc: "My Cloud Swag",
    // url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    url: "/WhatsApp Image 2025-03-21 at 11.55.35 PM.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 16,
    type: "image",
    title: "India",
    desc: "Driven, innovative, visionary",
    url: "/WhatsApp Image 2025-03-21 at 11.55.34 PM.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 17,
    type: "image",
    title: "GDSC",
    desc: "Cloud Swag -2024",
    url: "/WhatsApp Image 2025-03-22 at 12.11.48 AM.jpeg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 18,
    type: "image",
    title: "Vihaan 6.0",
    desc: "Hackathon",
    url: "/WhatsApp Image 2025-03-22 at 12.17.34 AM.jpeg",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
]

export  default function GallerySection() {
  return (
    <div className="min-h-screen overflow-y-auto">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Gallery Shots Collection"
        description="A blend of my professional milestones and personal adventures. Explore snapshots of my achievements and travels, capturing moments of innovation, success, and exploration. Click to view more!"
      />
    </div>
  )
}
