export type ProfileCardProps = {
  user: {
    name: string;
    title: string;
    followers: number;
    likes: number;
    photo: string;
  }
}

export function ProfileCard({
  user,
}: ProfileCardProps) {
  return (
    <div className="w-80 bg-white rounded-2*1 shadow-lg p-6 text-center" >
      <img className="w-28 h-28 rounded-full mx-auto"
           src={user.photo}
           alt={`${user.name}
            portrait`} />

      <h2 className="mt-4 text-lg font-semibold flex items-center justify-center gap-2">
          {user.name}
          <span className="text-green-500">✔</span>
      </h2>

      <p className="text-gray-600 text-sm">
          Product Designer who focuses on simplicity & usability.
      </p>

        <div className="flex justify-around mt-4 text-gray-700">
            <span>👥 {user.followers}</span>
            <span>⭐ {user.likes}</span>
        </div>

        <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            Follow&nbsp;+
        </button>
    </div>
  );
}