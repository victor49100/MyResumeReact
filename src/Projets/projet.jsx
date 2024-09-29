import Header from "../Shared/Header";


const Projet = () => {
    return (
        <>
            <Header />
            <div style={{ color: '#50fa7b' }}>Moreau_Victor@Pc:~/Mes_Projets</div>
            <div>$ ls -la</div>
            <div id="ls">
                <div>Serveur de stream pour nichoir à oiseaux sur Raspberry</div>
                <div>Création d'une application C# de téléchargement de chapitres</div>
                <div>Création d'une application C# de convertion d'images en PDF</div>
                <div>Réalisation d'un serveur de notifications Python, pour avertir la sortie de chapitres One Piece</div>
                <div>Hébergement d'un serveur Jellyfin sur mon réseau</div>
                <div>Projet de buletin météo en Golang réaliser en cour</div>
                <div id="gap"></div>
            </div>
            <div id="ls">
                <div id="gap"></div>
            </div>
            <div id="run">
                <div style={{ color: '#50fa7b' }}>Moreau_Victor@Pc:~/Mes_Projets</div>
                <div className="blinkCursor">$ cd .. && ls</div>
            </div >
        </>
    )
}

export default Projet;