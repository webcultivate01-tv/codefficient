export default function Highlights() {
  const items = [
    "🎓 Industry-Endorsed Certifications",
"📚 Comprehensive Course Materials",
"🤝 Dedicated Mentorship Support",
"🌟 Personalized Learning Paths",
"🛠 Cutting-Edge Tools & Technologies",
"👩‍💻 Expert-Led Live Sessions",
"🏆 Real-World Project Experience",
"🕒 Flexible Learning Schedule",
"📈 Career Advancement Assistance",

  ];

  // Duplicate items for seamless loop
  const allItems = [...items, ...items, ...items];

  return (
    <div className="fixed top-16 left-0 w-full bg-gradient-to-r from-orange-700 to-yellow-700 text-white py-2 overflow-hidden z-40">
      <div className="flex animate-marquee whitespace-nowrap">
        {allItems.map((item, index) => (
          <span key={index} className="mx-4">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
