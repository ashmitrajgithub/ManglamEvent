export default function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EventPlanningService"],
    "@id": "https://manglamevents.in/#organization",
    name: "Manglam Event",
    alternateName: "Manglam Event",
    description:
      "Premier wedding and event planning company based in Sitamarhi, Bihar. Specialising in luxury weddings, destination weddings, corporate events, concerts, floral decor, and artist management since 2014.",
    url: "https://manglamevents.in",
    logo: {
      "@type": "ImageObject",
      url: "https://manglamevents.in/Logoico.png",
      width: 512,
      height: 512,
    },
    image: [
      "https://manglamevents.in/og-image.png",
      "https://manglamevents.in/11.jpeg",
      "https://manglamevents.in/01.jpeg",
    ],
    telephone: "+917635031522",
    email: "info@manglamevents.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cinema Road, Near Vishal Mega Mart",
      addressLocality: "Sitamarhi",
      addressRegion: "Bihar",
      postalCode: "843302",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.5953,
      longitude: 85.4878,
    },
    areaServed: [
      { "@type": "City", name: "Sitamarhi" },
      { "@type": "City", name: "Patna" },
      { "@type": "City", name: "Muzaffarpur" },
      { "@type": "State", name: "Bihar" },
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    priceRange: "₹₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    foundingDate: "2014",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 50,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Event Planning Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Wedding Planning", description: "Bespoke mandaps, floral architecture and flawless coordination from sangeet to vidaai." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Destination Wedding Planning", description: "From Goa beaches to Rajasthan palaces, effortless destination wedding management." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Events", description: "Conferences, launches and award nights that feel as considered as your brand." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concerts & DJ Nights", description: "Stage, sound, lights and crowd energy engineered for unforgettable nights." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Floral & Decor Design", description: "Immersive installations and themed environments made around your story." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Artist Management", description: "The right performers, booked and managed with calm, precise execution." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Photo & Film", description: "Candid photography, drone coverage and wedding films with a point of view." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Public & Cultural Events", description: "Reliable production, AV infrastructure and logistics for high-footfall events." } },
      ],
    },
    sameAs: [
      "https://www.instagram.com/manglamevent",
      "https://www.facebook.com/manglamevent",
      "https://www.youtube.com/@manglamevent",
    ],
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://manglamevents.in/#website",
    url: "https://manglamevents.in",
    name: "Manglam Event",
    description: "Premier Wedding & Event Planning in Bihar, India",
    publisher: { "@id": "https://manglamevents.in/#organization" },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://manglamevents.in/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a wedding planner cost in Bihar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wedding planning packages at Manglam Event in Bihar start from ₹2 lakh for intimate ceremonies and go up to ₹50 lakh+ for luxury destination weddings. We offer customised packages based on guest count, venue, decor requirements, and services selected. Contact us for a free consultation.",
        },
      },
      {
        "@type": "Question",
        name: "Does Manglam Event do destination weddings outside Bihar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We plan destination weddings across India — including Rajasthan palaces, Goa beaches, Kerala backwaters, and Himachal hill stations. Our team handles logistics, vendor coordination, travel, and decor at any location.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance should I book a wedding planner?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend booking 6–12 months in advance for weddings, especially for peak season (October–February). For corporate events and concerts, 2–4 months notice is typically sufficient. Contact us as early as possible to secure your date.",
        },
      },
      {
        "@type": "Question",
        name: "What areas in Bihar does Manglam Event serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manglam Event is based in Sitamarhi, Bihar and serves clients across Bihar including Patna, Muzaffarpur, Darbhanga, Motihari, Hajipur, Vaishali, and all surrounding districts. We also operate pan-India for destination events.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide photography and videography for weddings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer complete photo and film packages including candid photography, traditional photography, drone coverage, pre-wedding shoots, and cinematic wedding films. Our in-house creative team ensures every moment is captured beautifully.",
        },
      },
      {
        "@type": "Question",
        name: "Can Manglam Event manage celebrity or artist bookings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Our artist management division handles bookings for Bollywood artists, folk singers, DJs, standup comedians, and celebrity performers for weddings, corporate events, and large concerts. We manage everything from contracts to on-day logistics.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in a full-service wedding package?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A full-service Manglam Event wedding package includes: event conceptualisation and design, venue selection, catering coordination, mandap and floral decor, lighting design, bridal entry arrangements, photography and videography, hospitality management, on-day coordination, and post-event wrap-up. Everything from the first idea to the final guest goodbye.",
        },
      },
    ],
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://manglamevents.in" },
      { "@type": "ListItem", position: 2, name: "About Us", item: "https://manglamevents.in/#about" },
      { "@type": "ListItem", position: 3, name: "Services", item: "https://manglamevents.in/#services" },
      { "@type": "ListItem", position: 4, name: "Portfolio", item: "https://manglamevents.in/#portfolio" },
      { "@type": "ListItem", position: 5, name: "Contact", item: "https://manglamevents.in/#contact" },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}
