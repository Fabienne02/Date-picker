# Human Centered Design 🧏
<img src="https://github.com/Fabienne02/Date-picker/blob/main/assets/Front-img.png" width=530>
Voor Human centred design kregen wij de opdracht te ontwerpen voor een toegewezen "human". Mijn human is Marijn, marijn heeft moeite met fijne moteriek.
Het doel van dit vak is specafiek voor jouw human te ontwerpen, hem te leren kennen en een custom applicatie voor zijn wens te maken. 
Voor Marijn ontwerp ik een website waarbij hij gemakkelijk zijn treinen kan inplannen. Deze website is ingesteld op zijn werk tijden, locaties, en data. 
Hiervoor heb ik samen met Marijn 3 keer mijn website getest om erachter te komen ik de website zo passend mogelijk kan maken voor hem. 

## Table of contents  
- [Human Centered Design](#human-centered-design)
  * [Aannames](#aannames)
  * [User scenario](#user-scenario)
    + [Who?](#who)
    + [What?](#what)
    + [How?](#how)
    + [Why?](#why)
  * [Challenges](#challenges)
  * [Concept](#concept)
  * [Features](#features)
  * [First test](#first-test-with-eric)
    + [Bevindingen](#bevindingen)
    + [Reflectie](#reflectie)
    + [Plannen](#plannen)
    + [Ontwerp test 1](#ontwerp-test-1)
  * [Second test](#second-test-with-eric)
    + [Preparations](#preparations-1)
    + [Testing](#testing-1)
    + [Insights](#insights-1)
    + [Iterations](#iterations-1)
  * [Third test with Eric](#third-test-with-eric)
    + [Preparations](#preparations-2)
    + [The flow of all commands:](#the-flow-of-all-commands)
    + [The select command:](#the-select-command)
    + [The navigate command:](#the-navigate-command)
    + [Testing](#testing-2)
    + [Insights](#insights-2)
    + [Iterations](#iterations-2)
  * [Exclusive design principles](#exclusive-design-principles)
    + [Study situation](#study-situation)
    + [Prioritise identity](#prioritise-identity)
    + [Ignore conventions](#ignore-conventions)
    + [Add nonsense](#add-nonsense)
  * [Final product](#final-product)
  * [Conclusion](#conclusion)
    + [Do's](#dos)
    + [Dont's](#donts)
  * [Tech stack](#tech-stack)
  * [Live version](#live-version)
  * [License](#license)
  * [Install](#install)  

## Aannames 
Voordat ik Marijn had ontmoet heb ik eerst wat aannames gedaan en aan de hand daarvan mijn eerste prototype gemaakt.
Mijn aannames waren als volgt: <br>
- Maakt gebruik van de tab toets
- heeft problemen met precies acties zoals 1 toets, kleine knoppen
- Gebruikt speech
- Gebruikt 9292 niet vanwege de complex dicht bij elkaar ontworpen knoppen
- Hand bewegingen zoals te zien bij Parkinson
<br>
Deze aannames heb ik gemaakt aan de hand van de user-case die als volgt luid:<br>

> Marijn is waarschijnlijk de beste developer die je ooit gaat ontmoeten. Een briljante nerd. Hij doet al jaren met heel veel plezier mee aan deze opdracht. Marijn heeft een motorische stoornis. Hij gebruikt zijn computer dus anders dan wij. Hij heeft veel moeite met fijne motoriek. Hij gebruikt zijn toetsenbord om te navigeren, en in de Accessibility settings van zijn Mac heeft hij Sticky Keys aan staan.

<br>
Aan de hand van deze user-case en aannames zag mijn eerste prototype er als volgt uit:<br><br>
<img src="https://github.com/Fabienne02/Date-picker/blob/main/assets/week%201.jpg" width=530>

## User Scenario
Als user met moteriek problemen wil ik mijn trein reis gemakkelijk kunnen kiezen doormiddel van mijn toetsenbord en keypad

### Who
Dit project heb ik gemaakt voor Marijn Meijles. Marijn heeft moeite met fijne moteriek, en kan zichzelf niet zelfstandig in en uit de trein vervoeren door zijn rolstoel. Hiervoor heeft hij hulp nodig, gelukkig kan hij die hulp krijgen, alleen moet hij zijn treinen wel inplannen om deze hulp te ontvangen.
Hierbij kan marijn minimaal 1 uur van te voren zijn trein inplannen. Om hem dit zo gemakkelijk mogelijk te maken wil ik hem helpen door een website te maken die op maat gemaakt is voor zijn tijden, locaties, data en gebruiksvoorkeuren.

### What 
Marijn heeft aangegeven een reisplanner te willen die hem helpt zijn trein in te plannen. Hierbij luid zijn case als volgt:<br>

>Ontwerp een date picker voor Marijn <br>
Hij reist veel met de trein, en hij moet van tevoren aangeven welke trein hij wil nemen zodat er iemand is om hem te helpen met zijn rolstoel. Date-pickers zijn over het algemeen priegelig, en niet ontworpen voor iemand die afhankelijk is van zijn toetsenbord?

### How 
Ik ga zijn reisplanner vormgeven in een website. Hierbij wil ik zijn toetsenbord gebruik implementeren in mijn website maar ook knoppen erin verwerken van grotere scale om meerdere gebruiks manieren mogelijk te maken. Verder ga ik kijken naar zijn gedrag en dagelijkse planning om zo veel mogelijk snel kopppelingen te verwerken zodat data voor hem al ingevuld is en klaar staat.

### Why
Bij eerste gedachten zou je denken dat een app makkelijker is om een reisplanner te maken, maar een app betekent ook een kleiner opvlak.
Daarbij kwam ik er ook achter, Marijn gebruikt meestal zijn laptop! Hierdoor denk ik dat een website met app gedrag de beste oplossing is.
Met app gedrag bedoel ik, grote knoppen, simpele layout, een centrale verzameling van data. Zo min mogelijk ruimte om frustratie te creeëren.

## Concept 
Voor Marijn ontwerp ik een website waarbij hij gemakkelijk zijn treinen kan inplannen. Deze website is ingesteld op zijn werk tijden, locaties, en data. 
Hiervoor heb ik samen met Marijn 3 keer mijn website getest om erachter te komen ik de website zo passend mogelijk kan maken voor hem. 

## Features 
Features die ik in mijn web applicatie heb verwerkt

* Must haves:
  - [X] Gebruik van HJKL toetsen
  - [X] Grote knoppen
  - [X] Autocomplete

* Should haves:
  - [X] Duidelijke feedback
  - [X] Snel knoppen

* Could haves:
  - [ ] Autocomplete op volgorde laatste gebruikt
  - [ ] Nonesense

* Would haves:
  - [ ] Autofill op basis van tijd en locatie

## First test
Voor mijn eerste ontwerp heb ik aan de hand van de user-case en mijn aannamen en web app gemaakt. Hierbij heb ik alleen een datum picker gemaakt met pijltjes met grote knoppen. Hierbij schud de knop nee als je voorbij de 31 of <1 gaat voor feedback. Hierbij werkt het prototype met tab om te kijken over deze user pattern voor hem werkt. Hierbij ben ik zijn isability aan het testen en aan het kijken hoe hij gebruik maakt van zijn toetsenbord. Na deze test wil ik pas de eerste versie van mijn concept uitwerken. 

### Bevindingen
- Marijn gebruikt pijltjes en de toesten HJKL
- Marijn gebruikt geen tab
- Marijn maakt geen gebruik van Speech
- Gebruikt rechter helft van toetsenboord
- Hij reist vooral tussen Eindhoven (thuis) en Amsterdam (werk)
- Hij stelde voor relatieve tijd tot 2  vooruit daarna absolute tijd

### Reflectie
Het was tof om te zien hoe verkeerd mijn aannames waren. Dit bewijst hoe belangrijk testen is en dat je niet aannames van je user mag maken. Tijdens het testen kwam ik erachter dat de pijl knoppen veel te klein waren en hij totaal geen tab gebruikt. Wel zag ik dat hij door de "grotere" knoppen geneigt was zijn muispad te gebruiken en leek hier erg comfortable mee te zijn. Daardoor heb ik besloten beide de toetsen HJKL en de Mousepad in mijn web app te verwerken.

### Plannen
* Concept uitwerken
* Snel knoppen naar huis en naar werk
* Tab eruit halen wel HJKL
* Tijd default op hem aanpassen

### Ontwerp test 1
![ontwerp week 1](https://github.com/Fabienne02/Date-picker/blob/main/assets/week%201.jpg)

## Second test
Tijdens deze test heb ik de datum picker getest samen met de tijd. Hieruit vroeg ik mij af of de 30 minuten en 1 uur pijlen handig voor hem zijn. Dit heb ik gedaan doormiddel van mijn prototype kort uit te leggen en hem gewoon hard op te laten denken. 

### Bevindingen
* Niet alleen in datum maar ook in dag
* Huidige tijd heeft geen zin, default 1 uur naar voren
* Alleen de grote stationen 
* Van groot naar klein of op laats bezocht

### Reflectie
Ik weet nu dat Marijn niet wil nadenken, alles makkelijk uitgewerkt en ready te gebruiken, Hierbij moet ik beter werken met defaults en overzichten. 
Verder werken de pijlen heel goed en ben ik blij mee, hij gaf wat kleine tips dus de basis staat nu goed.

### Plannen

* Autofill
* Datum picker tweake
* Add nonsence

### Ontwerp 2

![](https://github.com/Fabienne02/Date-picker/blob/main/assets/week2.jpg)

