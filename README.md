# পলিটেকনিক নোটিশ বোর্ড (PNB)

বাংলাদেশের পলিটেকনিক শিক্ষার্থীদের নোটিশ, শিক্ষা সংবাদ, পরীক্ষা, ফলাফল, ভর্তি ও ক্যারিয়ার আপডেটের ওয়েবসাইট।

## দ্রুত পরিবর্তন
- ওয়েবসাইটের নাম, স্লোগান ও রং: `site-config.js`
- পোস্ট/নোটিশ যোগ, সম্পাদনা বা সরানো: `pnb-data.js`
- লোগো: `icons/pnb-logo.svg`
- মূল ডিজাইন: `index.html`

## নতুন পোস্ট যোগ
`pnb-data.js` ফাইলে `window.PNB_POSTS` array-র ভেতরে একটি object কপি করে নতুন পোস্ট যোগ করুন। `category`, `title`, `summary`, `date`, `source`, `image`, `url`, `published` সম্পাদনা করুন। প্রকাশ না করতে `published:false` দিন। গুরুত্বপূর্ণ নোটিশে মূল PDF/অফিশিয়াল লিংক দিন।

## প্রকাশ ও টিম
GitHub-এ পরিবর্তন commit করলে GitHub Pages পুনরায় deploy হবে। একাধিক সম্পাদক যোগ করতে Repository → Settings → Collaborators থেকে প্রয়োজনীয় সীমিত access দিন। সবার Admin access প্রয়োজন নেই।

## গুরুত্বপূর্ণ সীমাবদ্ধতা
এটি GitHub Pages-এ চলা static website। তাই এখানে এখনো নিরাপদ shared admin login, cloud database, multi-user publishing বা visitor account নেই। ব্রাউজারের localStorage-ভিত্তিক খসড়া সবার মধ্যে শেয়ার হয় না। এসবের জন্য পরে Supabase/Firebase বা WordPress-ভিত্তিক backend যুক্ত করতে হবে। কোনো password/API secret public repository-তে রাখবেন না।

## ডেমো কনটেন্ট
`pnb-data.js`-এর নমুনা পোস্টগুলো প্রকাশের আগে বাস্তব তথ্য দিয়ে বদলে দিন বা `published:false` করুন।