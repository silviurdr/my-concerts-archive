export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Rock" },
  { _id: "4e21ca3eeb7f6fbccd471818", name: "Indie" },
  { _id: "3f21ca3eeb7f6fbccd471818", name: "Alternative" },
  { _id: "2z21ca3eeb7f6fbccd471818", name: "Pop-Rock" },
  { _id: "7x21ca3eeb7f6fbccd471818", name: "Pop" },
  { _id: "1y21ca3eeb7f6fbccd471818", name: "Electronic" }
];

export function getGenres() {
  return genres.filter(g => g);
}
