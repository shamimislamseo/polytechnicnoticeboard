/* PNB CONTENT
   নতুন যাচাইকৃত পোস্ট যোগ করতে নিচের array-তে object যুক্ত করুন।
   category: নোটিশ | শিক্ষা সংবাদ | পরীক্ষা | ফলাফল | ভর্তি | ক্যারিয়ার | ইনস্টিটিউট
   প্রকাশের আগে title, summary, date, source এবং মূল official URL যাচাই করুন।
   published:false দিলে পোস্টটি ওয়েবসাইটে দেখাবে না। */
window.PNB_POSTS = [
  {
    id: "welcome-pnb",
    category: "PNB আপডেট",
    title: "পলিটেকনিক শিক্ষার্থীদের তথ্য এখন এক জায়গায়",
    summary: "PNB-তে নোটিশ, পরীক্ষা, ফলাফল, ভর্তি, ক্যারিয়ার ও ইনস্টিটিউটভিত্তিক আপডেট পাওয়া যাবে। গুরুত্বপূর্ণ তথ্য প্রকাশের আগে মূল সূত্র যাচাই করুন।",
    date: "2026-11-08",
    source: "পলিটেকনিক নোটিশ বোর্ড (PNB)",
    image: "icons/pnb-logo.svg",
    url: "",
    published: true
  }
];

/* Notice records: add only verified notices; keep published false until reviewed. */
window.PNB_NOTICES = window.PNB_NOTICES || [];


/* Web Stories: add verified, short slide-based stories here. */
window.PNB_STORIES = [];
