// Add or remove Instagram post shortcodes here to curate the pottery gallery.
// Images are hosted locally in /public/images/pottery/<code>.jpg
const POSTS = [
  "DLNZtU6xX5z",
  "DZu3C7Dm-2L",
  "DIxCCb-ThGc",
  "DQC0xkjEg_3",
  "DN6SjwyksPk",
  "DFvu8cbTXHN",
  "DSDxLMlEiFl",
  "DZc7AIvm7Cc",
  "DQzgBJ0D_LI",
  "DYLk14OAT8a",
  "DMgBKaTP5G7",
  "DPb2vsZEtkS",
];

export default function InstagramEmbeds() {
  return (
    <div className="ig-grid">
      {POSTS.map((code) => (
        <a
          key={code}
          className="ig-photo"
          href={`https://www.instagram.com/leahceramics/p/${code}/`}
          target="_blank"
          rel="noopener"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/pottery/${code}.jpg`}
            alt="Pottery by Leah"
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
}
