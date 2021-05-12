import React from 'react'

function Coords () {
    return (<div>
        <div>
            <label>Name:</label>
            <label>Thierry {"M\u00E9tais"}</label>
        </div>        
        <div>
            <label>Adress:</label>
            <label>Paris, France</label>
        </div>
        <div>
            <label>Email:</label>
            <label>thmetais _AT_ gmail.com</label>
        </div>        
    </div>)
}

function Position () {
    return (<div className="cv-section">
        <h1> Position </h1>
        <div> Senior Software developer</div>
    </div>)
}

function Experience () {
    return <div className="cv-section">
        <h1>Experience</h1>
    </div>
}

function Education () {
    return <div className="cv-section">
    <h1>Formation</h1>
    <div>
    2003-2005: Master of Computer science, University of Ottawa, Canada.
    2000-2002: {"\u00C9cole Nationale Sup\u00E9rieure des T\u00E9l\u00E9communications de Paris."}
    {"Admission sur concours."}
    1997-2000: {"Classes pr\u00E9paratoires au lyc\u00E9e Sainte-Genevi\u00E8ve de Versailles. Admission sur dossier."}
    1995-1997: {"Prytan\u00E9e National Militaire de LaFl\u00E8che, Sarthe."}
     {"Obtention du baccalaur\u00E9at scientifique avec mention bien."}
     {"Admission sur concours."}
    </div>
    </div>
}

function Languages () {
    return <div className="cv-section">
        <h1>Languages</h1>
        <div>
        French : Mother tongue.
        English : Bilingual.
        German : Fluent (Zentrale Mittelstufenpruefung )
        Russian, Spanish : Knowledgeable.
        </div>
    </div>
}

export default function Curriculum () {
    return (<div>
            <h1> Curriculum </h1>
            <Coords />
            <Position />
            <Experience />
            <Education />
            <Languages />
        </div>)
}



function bof () {
    /*
    2005–2007: Développeur C++ chez Macadamian Technologies 

    Mai-Décembre 2007: équipe de 4 personnes.
    •	Implémentation d’une version sécurisée du protocole VOIP de Nortel (Unistim) pour le SoftPhone 2050. 
    •	Port de la logique audio vers GIPS.
    •	Implémentation de requêtes client pour le SoftPhone 2050 durant la phase de production finale.
    
    Janvier-Avril 2007: équipe de 2 personnes.
    •	Implémentation d’une extension Télévision sur IP pour le SoftPhone PC Client (PCC) de Nortel.
    •	Les changements apportés par ce projet couvrirent tous les aspects du SoftPhone  allant de la logique réseau (utilisation de la librairie Live555 pour le protocole RTSP, SIP, SOAP.), jusqu’à la création d’un décodeur vidéo utilisant les technologies DirectX et MFC.
    
    Septembre-Décembre 2006: équipe de 4 personnes.
    •	Corrections de défauts du  PCC allant de la pile SIP à la partie UI du client 
    •	Extension de la fonctionnalité de filtrage de services du PCC.
    
    Juillet-Septembre 2006: équipe de 2 personnes.
    •	Design et implémentation d’une solution pour prioriser et préempter des appels sur un téléphone IP de type i200x de Nortel.
    
    Janvier-Juin 2006: 1 personne.
    •	Implémentation d’un prototype du PCC utilisant une interface radio (téléphonie sans fil).
    •	Démonstration de la réduction de la durée d’établissement des appels d’environ 15% lors avec une modification au niveau du protocole SIP. 
    
    Octobre-Décembre 2005: équipe de 5 personnes.
    •	Mise en place d’un routeur SIP Express Router afin de tester l’adéquation de la nouvelle génération de téléphones IP de Nortel au standard SIP spécifié par la RFC 3261.
    •	Contribution à des fonctionnalités UI pour le téléphone IP i2004 de Nortel.
    
    
    
     Janvier 2003-Août 2005: Assistant de recherche au laboratoire Discover de l’université d’Ottawa. 
    •	Élaboration et implémentation d’une interface homme-machine en C++ utilisant la reconnaissance de gestes à partir un gant digital. 
    •	Afin de démontrer l’utilité d’une telle interface, une application présentant un environnement virtuel a été développée en Java et l’ensemble fut présenté lors de la conférence annuelle de 2004 du réseau de recherche LORNET.
    
    Juillet-Août 2001: Stage à l’institut Fraunhofer de Berlin. 
    •	Implémentation en C d’un logiciel d’optimisation numérique.
    
    Formation:
    
    2003-2005: Master of Computer science, University of Ottawa, Canada.
    2000-2002: École Nationale Supérieure des Télécommunications de Paris.
    Admission sur concours.
    1997-2000: Classes préparatoires au lycée Sainte-Geneviève de Versailles.
    Admission sur dossier.
    1995-1997: Prytanée National Militaire de LaFlèche, Sarthe.
    Obtention du baccalauréat scientifique avec mention bien.
    Admission sur concours.
    
    Connaissances informatiques:
    
    Système d’exploitation: Windows (98,2000, XP, Vista), Unix, Linux.
    Langages informatiques: C/C++ (6 ans), C#, Java (3 ans), Perl, SQL, Ada, Eiffel.
    Bibliothèques, technologies: STL, boost, COM, ATL, MFC, win32, posix, DirectX.
    Protocoles: http, sip, sdp, rstp, rtp.
    Environnements: Visual studio(2003,2005), JBuidler, Eclipse, CVS, SVN, Clearcase.
    Méthodologies: UML, OO (orienté objet).
    
    Langues:
    
    Français : Langue maternelle.
    Anglais : Bilingue (TOEFL, emploi dans un cadre professionnel).
    Allemand : Courant (Zentrale Mittelstufenpruefung )
    Russe, espagnol : Bonnes connaissances.
    
    */
    

}