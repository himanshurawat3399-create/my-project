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
    <div className="card">
      <img className="cover" src={user.photo} alt={`${user.name} portrait`} />

      <div className="nameRow">
        <h2 className="name">{user.name}</h2>

        <svg className="verified" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2.25l2.02 2.02 2.86-.49.49 2.86 2.02 2.02-2.02 2.02.49 2.86-2.86.49L12 19.5l-2.02-2.02-2.86.49-.49-2.86L4.61 10.7l2.02-2.02-.49-2.86 2.86.49L12 2.25zm-1.1 11.73l5.2-5.2-1.4-1.41-3.8 3.8-1.5-1.5-1.41 1.42 2.91 2.89z"
          />
        </svg>
      </div>

      <p className="desc">{user.title}</p>

      <div className="footer">
        <div className="stats">
                    <span className="stat" title="Followers">
                        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              fill="currentColor"
                              d="M16 11c1.66 0 3-1.79 3-4s-1.34-4-3-4-3 1.79-3 4 1.34 4 3 4zm-8 0c1.66 0 3-1.79 3-4S9.66 3 8 3 5 4.79 5 7s1.34 4 3 4zm0 2c-2.67 0-8 1.34-8 4v2h10v-2c0-1.54.77-2.83 1.97-3.76A8.4 8.4 0 008 13zm8 0c-.74 0-1.45.07-2.12.21 1.26.94 2.12 2.23 2.12 3.79v2h8v-2c0-2.66-5.33-4-8-4z"
                            />
                        </svg>
                      {user.followers}
                    </span>

          <span className="stat" title="Links">
                        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                             <path
                               fill="currentColor"
                               d="M12.1 21.35l-1.1-1.02C5.14 14.88 2 12.03 2 8.5 2 6 4 4 6.5 4c1.54 0 3.04.81 3.9 2.09C11.46 4.81 12.96 4 14.5 4 17 4 19 6 19 8.5c0 3.53-3.14 6.38-8.9 11.83l-1.1 1.02z"
                             />
                        </svg>
            {user.likes}
                    </span>
        </div>

        <button className="btn" type="button">
          Follow&nbsp;+
        </button>
      </div>
    </div>
  );
}