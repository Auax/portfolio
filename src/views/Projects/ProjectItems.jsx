export const MusicQuizDescription = (
    <>
        <p>
            This project is a music quiz that allows users to select a premade playlist or use their own Spotify
            playlist to play.
        </p>
        <br/>
        <p>
            The technologies used for the project are:
            <ul className="list-disc mb-4">
                <li className="ml-10 text-white/70">create-react-app</li>
                <li className="ml-10 text-white/70">Express.js</li>
            </ul>
            Express is used to fetch all the playlists from the <b>Firebase Database</b>, then using the <b>Spotify
            API</b>, we fetch the songs to play.
        </p>
        <a href="#" className="btn">GitHub</a>
    </>
)
