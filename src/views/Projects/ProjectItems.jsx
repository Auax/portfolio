export const MusicQuizDescription = (
    <>
        <p>
            This project is a music quiz that allows users to select a premade playlist or use their own Spotify
            playlist to play. You have to try to guess the song title and its artist to score points.
        </p>
        <br/>
        <p>
            The technologies used for the project are:
        </p>
        <ul className="list-disc mb-4">
            <li className="ml-10 text-white/70">create-react-app</li>
            <li className="ml-10 text-white/70">Express.js</li>
        </ul>
        <p>
            Express is used to fetch all the playlists from the <b>Firebase Database</b>, then using the <b>Spotify
            API</b>, we fetch the songs to play.
        </p>
        <a href="https://github.com/Auax/auax-music-quiz" target="_blank" className="btn inline-block mt-2">GitHub</a>
    </>
);

export const RpcDescription = (
    <>
        <p>
            Discord is a popular communication platform used by gamers all over the world. Discord provides a rich
            presence feature that allows users to show off what game they are playing and what they are currently doing
            within the game. However, we can use the Discord API to create a custom rich presence.
        </p>
        <br/>
        <p>
            This is a versatile and customizable project that allows you to set a custom status for your Discord profile
            through. You can setup how to update the status, for instance, you can change how fast the elapsed time
            changes, set an offset for it, use random texts...
        </p>
        <br/>
        <p>
            Here is an example:
        </p>
        <img
            width={200}
            className="my-2"
            src="https://camo.githubusercontent.com/73aef9a601870d706baf28d424d2efa496c04dd8cbb5dcda90cb8e28b5da2454/68747470733a2f2f692e6962622e636f2f6e676753786d4b2f436170747572652e706e67"
            alt="status example"/>
        <p>
            Check the full documentation in the GitHub Repository.
        </p>

        <a href="https://github.com/Auax/DiscordRPC" target="_blank"
           className="btn inline-block mt-2">GitHub</a>
    </>
);
