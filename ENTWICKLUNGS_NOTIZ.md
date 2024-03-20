# Entwicklungsprotokoll
Dieser Abschnitt enthält Details zu Release Schecule, Anforderungen, Design, Fehlerbehebungsprozessen und nützlichen Quellen. 

## Versionsprotokoll
Siehe Abschnitt Anforderungen für Details zu jeder Version.

20.03.2024\
Eingesetzt v1.1.0

18.03.2024\
Eingesetzt v1.0.2

17.03.2024\
Bereitgestellt v1.0.1

17.03.2024\
Eingesetzt v1.0.1

## Anforderungen
### v1.0.0 (Minimum Viable Product)
#### Funktional
1. Eine Index-Homepage, die von der Komponente "pokemon-index" gerendert wird und alle gängigen Pokemon (ID < 10000) anzeigt.
    - Diese sollte sich automatisch aktualisieren, wenn es neue Pokemon in der API gibt
    - Pokemon sollten auf Karten in einem Raster angezeigt werden
    - Jede Pokemonkarte sollte den Namen, das Bild und den Typ des Pokemons enthalten
    - Jede Pokemonkarte sollte anklickbar sein und zur Pokemondetailseite führen
    - Diese sollte eine Filterung der Pokemon nach Typ ermöglichen
    - Diese Seite sollte eine Paginierung enthalten, um die große Anzahl von Pokemon zu navigieren
2. Eine Pokemondetailseite für jedes Pokemon, die von der Komponente "pokemon-details" dargestellt wird
    - Diese sollte den Namen, das Bild, die Größe, das Gewicht, die Typen, die Fähigkeiten und die Basiswerte des Pokemons enthalten
3. Eine Kopfzeile auf jeder Seite, die von der "pokemon-header"-Komponente gerendert wird
    - Dieser sollte den Namen der Webanwendung (Pokegeek), ein Public-Domain-Pokéball-Symbol und einen Link zur Index-Homepage enthalten

#### Nicht funktionell
1. Dies sollte lokal auf `http://localhost:4200/` mit dem Befehl `ng serve` aus dem Angular CLI deployt werden

### v1.0.1 (Bereitstellung)
#### Nicht funktional
1. Dies sollte über die Github-Seiten deployt werden

### v1.0.2 (Verbesserung der Suche)
#### Funktionell
1. Die Index-Homepage (pokemon-index component) erlaubt es den Benutzern, Pokemon nach Namen zu suchen
    - Eine Liste mit Vorschlägen zur automatischen Vervollständigung sollte erstellt werden, während der Benutzer tippt
    - Wenn der Benutzer auf einen Vorschlag klickt, wird er zu diesem Pokemon weitergeleitet
    - Wenn der Benutzer die Eingabetaste drückt oder auf das Suchsymbol klickt, werden die Pokemon gefiltert, so dass nur diejenigen aufgelistet werden, die den Suchbegriff enthalten

### v1.1.0 (Backend einbinden)
#### Funktionell
1. Es sollte eine mySQL-Datenbank eingerichtet werden, um die Bewertungen der Pokemon durch die Benutzer zu erfassen und zu melden.
    - Die Datenbank sollte 1 pokemon_ratings Tabelle und eine pokemon_ratings_summary Tabelle haben
    - Neue Bewertungen sollten in der Tabelle pokemon_ratings gespeichert werden
    - Die Tabelle pokmeon_ratings_summary sollte die durchschnittliche Bewertung und die Gesamtzahl der Bewertungen für jedes Pokemon enthalten
    - Neue Einträge in der Tabelle pokemon_ratings sollten eine automatische Aktualisierung der Tabelle pokemon_rating_summary auslösen.
2. Es sollte ein Java-Backend entwickelt werden, um das Angular-Frontend mit der mySQL-Datenbank zu verbinden
    - Das Backend sollte eine PokemonRatings Entität und eine PokemonRatingsSummary Entität haben, die den beiden Datenbanktabellen entsprechen
    - Das Backend sollte einen POST-Endpunkt bereitstellen, der Bewertungsdaten zur Datenbank hinzufügt
    - Das Backend sollte einen GET-Endpunkt bereitstellen, der die Daten der Bewertungsübersicht aus der Datenbank abruft
3. Das Angular-Frontend sollte so modifiziert werden, dass Benutzerbewertungen und die Anzeige von Bewertungszusammenfassungsdaten möglich sind
    - Zusammenfassende Bewertungsdaten sollten als Anzahl der Sterne (von 10) mit der Gesamtzahl der Bewertungen in der Komponente pokemon-details angezeigt werden. 
    - Die Pokemon-Details-Komponente sollte um ein Formular erweitert werden, das es den Benutzern ermöglicht, die Pokemon zu bewerten.

#### Nicht-funktional
1. Das Frontend sollte über Github-Seiten deployt werden. Das Backend und die Datenbank sollten auf einem Cloud-Server deployt werden. 

## Entwurf
### Frontend
`/app/model/`: enthält Typescript-Schnittstellen, um Datentypen zu erzwingen

`/app/service/`: enthält http-Dienste für die API-Kommunikation

`/app/component/`: enthält Angular-Komponenten für das Frontend

`/assets/images/`: enthält die in der App verwendeten Bilder

`/environments`: enthält Umgebungsvariablen wie API-URLs

### Backend

`/src/main/java/com.pokegeek.entities`: definiert Entitäten, die mit der Datenbank verbunden sind

`/src/main/java/com.pokegeek.dao`: definiert JPA Schnittstellen für Datenbanktransaktionen

`/src/main/java/com.pokegeek.services`: definiert Servicefunktionen für Datenbanktransaktionen

`/src/main/java/com.pokegeek.controllers`: definiert API-Endpunkt-Exposition

`/src/main/java/com.pokegeek.config`: definiert API-Endpunkt-Konfigurationen

`/src/main/resources/applicatoin.properties`: enthält Spring- und Datenbankeinstellungen

`pokegeek-backend.service`: enthält die Service-Datei, die von systemctl verwendet wird, um das Backend zu starten

### Datenbank

#### Tabelle 1
|Pokemon-Bewertungen
|--------------- |
|ID (PK): int |
|Pokemon Name: varchar|
|Bewertung: number |
|Create Date: date |
#### Tabelle 2
|Pokemon Bewertungen Zusammenfassung|
|----|
|Pokemon Name (PK): varchar|
|Durchschnittliche Bewertung: decimal|
|Gesamte Bewertungen: number|

### Fehlersuche
1. Import von Angular-Browser-Animationen: Es tritt ein Fehler auf, wenn sie in Komponenten importiert werden. Sie muss in app.config.ts als provideBrowserAnimation() importiert werden.

2. Die Installation des MySQL-Servers auf der Cloud-VM ist fehlgeschlagen. Die Erhöhung des RAM von 512 MB auf 1 GB löste das Problem.

3. scp auf VM ist fehlgeschlagen. Richtige Syntax: scp [lokale Datei] root@[IP-Adresse]:/root

4. systemctl start service in VM ist fehlgeschlagen. Absoluter Path zur .JAR-Datei erforderlich. 

5. Verbindung vom https-basierten Frontend zur http-basierten Backend-API fehlgeschlagen. SSL-Zertifikat für Backend oder http (mit benutzerdefinierter Domäne) für Frontend erforderlich. 

6. Überprüfung der benutzerdefinierten Domäne in Github für das Frontend fehlgeschlagen. DNS A- und CNAME-Einträge müssen für die benutzerdefinierte Domäne aktualisiert werden. 

7. 404 Not Found Fehler für .js und .css Dateien von der benutzerdefinierten Domain des Frontends. Das Frontend musste mit `--base-href=/` statt mit `--base-href=/pokegeek/` neu diployt werden. 

### Nützliche Quellen
Angular-Bibliothek für Sternbewertungen: https://www.npmjs.com/package/ngx-stars

Deployierung von Angular für Github-Seiten: https://www.npmjs.com/package/angular-cli-ghpages

Einrichten einer eigenen Domain für Github-Seiten: https://hossainkhan.medium.com/using-custom-domain-for-github-pages-86b303d3918a

Deployierung von Spring auf Droplet: https://gsswain.medium.com/springboot-digitalocean-droplets-410b8bbc6fe6
 