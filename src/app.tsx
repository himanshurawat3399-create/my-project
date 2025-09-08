import "./app.css";
import { ProfileCard } from "./components/ProfileCard.tsx";

export function App() {
  return (
    <ProfileCard
      user={{
        name: "Sophie Bennett",
        title: "Product Designer who focuses on simplicity & usability.",
        followers: 312,
        likes: 48,
        photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
      }}
    />
  );
}
