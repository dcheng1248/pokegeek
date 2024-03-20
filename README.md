# Pokegeek (http://pokegeek.online)
For English, see [README_ENGLISH.MD](./README_ENGLISH.md).

Inspiriert von BoardGameGeek (https://boardgamegeek.com) bietet dieses Projekt eine Plattform für Pokemon-Liebhaber, um verschiedene Pokemon zu betrachten und zu bewerten.

Für ein detailliertes Entwicklungsprotokoll und Entwürfe, siehe [ENTWICKLUNG_NOTIZ.MD](./ENTWICKLUNGS_NOTIZ.md). 


## Funktionen
Diese Web-App besteht aus einem Typescript/Angular-Frontend, einem Java/Spring-Backend und einer mySQL-Datenbank.
1. Das Frontend kann unter http://pokegeek.online eingesehen werden. Es wird über Github-Pages deployt. 
    - Die Indexseite zeigt alle regulären Pokemon (von PokeAPI). Sie erlaubt die Filterung nach Pokemon-Typ, hat eine Autocomplete-Suchleiste und ist paginiert.
    - Ein Klick auf jede Pokemonkarte führt zur Pokemondetailseite, die Details über das Pokemon anzeigt (von PokeAPI). Sie zeigt auch die durchschnittliche Benutzerbewertung und die Gesamtzahl der Bewertungen an und ermöglicht es dem Benutzer, das Pokemon zu bewerten (aus dem Java-Backend). 
    - Die Kopfkomponente ermöglicht es dem Benutzer, zur Pokemon-Indexseite zurückzukehren. 

2. Auf das Backend kann über http://157.230.114.115:8080/api zugegriffen werden. Es wird auf einer Cloud-basierten virtuellen Maschine deployt. 
    - Es bietet einen GET-Endpunkt für jedes Pokemon (Endpunkt: /get/{pokemon_name}), der eine json-Datei mit der durchschnittlichen Bewertung und der Anzahl der Bewertungen des Pokemons zurückgibt. 
    - Es stellt einen POST-Endpunkt zur Verfügung (Endpunkt: /save), der die Benutzerbewertungen in der Datenbank speichert. 

3. Die Datenbank ist nicht öffentlich zugänglich. Sie wird auf einer Cloud-basierten virtuellen Maschine deployt. 
    - Sie verfügt über eine Tabelle, in der jede Benutzerbewertung gespeichert wird (Bewertungs-ID, Pokemon-Name, Bewertung und Datum). 
    - Es gibt eine Tabelle, die aggregierte Informationen (durchschnittliche Bewertung und Gesamtzahl der Bewertungen) für jedes Pokemon speichert, die automatisch beim Einfügen in die erste Tabelle aktualisiert wird. 

## Bekannte Probleme
1. Diese App unterstützt kein https, sie muss über http angezeigt werden (aufgrund eines fehlenden SSL-Zertifikats an der Backend-Adresse). Wenn Ihr Browser für die Verwendung von https konfiguriert ist, kann der Inkognito-Modus helfen, http beizubehalten.
2. Diese App unterstützt keine mobile Anzeige. 
3. Die App ist nur manuell getestet. Unit Tests sind noch nicht verfügbar. 
4. Integration und Deployierung erfolgen manuell.

## Anweisungen zum Erstellen/Starten aus Source
1. Stellen Sie sicher, dass Sie die Anforderungen installiert haben: [Angular](https://angular.io/guide/setup-local), [Java 17](https://docs.oracle.com/en/java/javase/17/install/#Java-Platform%2C-Standard-Edition) und [MySQL Server](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/). Wenn nicht, folgen Sie den Links, um sie zu installieren. 

2. Klonen Sie dieses Repo: `git clone git@github.com:dcheng1248/pokegeek.git`

3. Richten Sie zunächst die Datenbank ein. Loggen Sie sich in die MySQL CLI ein oder benutzen Sie die GUI, um die Datei `database/create_db.sql` auszuführen. Beachten Sie, dass diese Datei eine Zeile enthält, die anfangs eine Bewertung von 8 für Pikachu einfügt. Wenn Sie das nicht wollen, entfernen Sie diese Zeile aus der Datei, bevor Sie sie ausführen. 

4. Führen Sie im Backend-Ordner `./mvnw clean package` aus, um das Backend zu erstellen. Es kann dann mit `/usr/bin/java -jar target/pokegeek-0.0.1-SNAPSHOT.jar` ausgeführt werden. Alternativ können Sie auch `./mvnw spring-boot:run` verwenden, um das Backend direkt zu starten.

5. Ändern Sie im Frontend-Ordner die Backend-URL, falls erforderlich (in src/environments/environment.development.ts und environment.ts). Wenn das Backend lokal gestartet wird, lautet die URL normalerweise `http://localhost:8080`. Starten Sie das Frontend mit `ng serve`. 
