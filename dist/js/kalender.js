// --------------------------------------------------------------------------------------------------
// WOW, du schaust dir echt den Code an? Du kennst ja gar nichts :D
// 
// Na gut, wenn du schon soweit gehst um das Klopfrätsel zu knacken dann gebe ich dir einen Hinweis:
// Es geht um die Anzahl der Klopfer, aber nicht als Zahl (Integer) sondern als Wort (String).
// Mehr sag ich nicht, sonst ist es ja kein Rätsel mehr :D
// Oder du schaust dir den Code an, dann ist es auch kein Rätsel mehr, ...... oder die Lösung genau, die Lösung gibt's ja auch noch.
// --------------------------------------------------------------------------------------------------

// import Klopfraetsel from '../components/Klopfraetsel.vue';

var app = new Vue({
    el: '#app',
    components: {
      // 'Klopfraetsel': Klopfraetsel,
    },
    // template: '<Klopfraetsel></Klopfraetsel>',
    data: {
      count: 0,
      letzte_antwort:null,
      klopf:0,
      quote:false,
      eingabe:false,
      hinweis:null,
      loesung:null,
      story_heute:null,
      tuer_geschlossen:true,
      versuch:0,
      antwort:"Klopfe an die Tür!",
      show_klopf_button:true,
      // kalenderdaten:'keine Daten',
      kalenderdaten: [
        [{
            "id": 1,
            "kalender_id": 1,
            "Tuerchennummer": 0,
            "Tuerchendatum": "2023-11-16",
            "typ": 1,
            "Text": "Du Wachst auf mit einem brummenden Schädel neben einem Brunnen in der Bernner Altstadt auf. Puh, das Weihnachtsapéro gestern abend war viel zu heftig. Jetzt erstmal nach Hause zum Erholen, nie wieder Glühwein und dieser andere Drink.. Wie hiess der doch gleich wieder?",
            "Medientyp": 0,
            "Mediadatei": null,
            "Status": 1,
            "created_at": "2018-11-20T22:00:00.000000Z",
            "updated_at": "2018-11-20T22:00:00.000000Z",
            "heute":0
        },
        {
            "id": 2,
            "kalender_id": 1,
            "Tuerchennummer": 1,
            "Tuerchendatum": "2023-12-01",
            "typ": 3,
            "Text": "New York liegt am East River, wahrscheinlich hat es etwas damit zu tun.",
            "Medientyp": 1,
            "Mediadatei": 'music1.mp3',
            "Status": 1,
            "created_at": "2018-11-20T22:00:00.000000Z",
            "updated_at": "2018-11-20T22:00:00.000000Z",
            "heute":0
        },
        {
            "id": 3,
            "kalender_id": 1,
            "Tuerchennummer": 1,
            "Tuerchendatum": "2023-12-01",
            "typ": 4,
            "Text": "Manhattan",
            "Medientyp": 0,
            "Mediadatei": null,
            "Status": 1,
            "created_at": "2018-11-20T22:00:00.000000Z",
            "updated_at": "2018-11-20T22:00:00.000000Z",
            "heute":0
        },
        {
            "id": 4,
            "kalender_id": 1,
            "Tuerchennummer": 1,
            "Tuerchendatum": "2023-12-01",
            "typ": 6,
            "Text": "Ach ja genau \"\"Manhattan\"\" war's! Zufrieden mit deiner intellektuellen Leistung biegst du um die Ecke  als dein Handy vibriert. Oha eine verpasste Nachricht, doch als du dein Smartphone entsperren willst funktioniert die Gesichtserkennung nicht, wie war doch gleich der PIN? Mist, das ist schon lange her du weisst nur noch es war ein vierstelliger PIN und hat irgendwas mit Tomaten und Sommer zu tun. In deinem Portemonnaie findest du folgenden Hinweis von damals.",
            "Medientyp": 0,
            "Mediadatei": null,
            "Status": 1,
            "created_at": "2018-11-20T22:00:00.000000Z",
            "updated_at": "2018-11-20T22:00:00.000000Z",
            "heute":0
        }],
        [{
            "id": 5,
            "kalender_id": 1,
            "Tuerchennummer": 2,
            "Tuerchendatum": "2023-12-02",
            "typ": 3,
            "Text": "Das liest sich irgendwie wie ein Songtext. Gab es mal einen Song über Tomaten?",
            "Medientyp": 0,
            "Mediadatei": null,
            "Status": 1,
            "created_at": "2018-11-20T22:00:00.000000Z",
            "updated_at": "2018-11-20T22:00:00.000000Z",
            "heute":0
        },
        {
            "id": 6,
            "kalender_id": 1,
            "Tuerchennummer": 2,
            "Tuerchendatum": "2023-12-02",
            "typ": 4,
            "Text": "5820 - Genau es war die Textreihenfolge des Sommerhits von Las Ketchup: \"\"Aserejé ja de jé de jebe (5) tu de jebere seibiunouva (8)\nMajavi an de (2) bugui an de buididipi (0)\"\" Du wolltest das eigentlich schon lange Mal ändern, aber jetzt wo du den PIN schon mal gelernt hast...",
            "Medientyp": 2,
            "Mediadatei": 'music1.mp3',
            "Status": 1,
            "created_at": "2018-11-20T22:00:00.000000Z",
            "updated_at": "2018-11-20T22:00:00.000000Z",
            "heute":0
        },
        {
            "id": 7,
            "kalender_id": 1,
            "Tuerchennummer": 2,
            "Tuerchendatum": "2023-12-02",
            "typ": 6,
            "Text": " Du liest die Nachricht, es ist aus dem Familienchat  \"\"Hast du die Sachen für die Feier von der Post abgeholt?\"\". Oh nein, jetzt fällt's dir wieder ein, du hast gestern den Weihnachtsschinken und Oma's traditionelle Christbaumspitze von der Post abgeholt und das dann wohl in der Bar liegenlassen. Mist, schnell zurück zur Bar! Du kommst dir schon vor wie beider Ostereiersuche als du die Treppe absuchst, hier ein passendes Rätsel während du weitersuchst.",
            "Medientyp": 0,
            "Mediadatei": null,
            "Status": 1,
            "created_at": "2018-11-20T22:00:00.000000Z",
            "updated_at": "2018-11-20T22:00:00.000000Z",
            "heute":0
        }],
        [{
            "id": 8,
            "kalender_id": 1,
            "Tuerchennummer": 3,
            "Tuerchendatum": "2023-12-03",
            "typ": 4,
            "Text": "SchwEiz, VerEinigtes KönigrEich und Nordirland, TürkEi, WEissrussland, LiechtenstEin / HEiliger Stuhl (Vatikanstadt)",
            "Medientyp": 0,
            "Mediadatei": null,
            "Status": 1,
            "created_at": "2018-11-20T22:00:00.000000Z",
            "updated_at": "2018-11-20T22:00:00.000000Z",
            "heute":0
        },
        {
            "id": 9,
            "kalender_id": 1,
            "Tuerchennummer": 3,
            "Tuerchendatum": "2023-12-03",
            "typ": 6,
            "Text": "Scheibenkleister, du findest nur die leere Tragetasche von gestern, wo sind deine Sachen? Wenn du Oma's uralten Christbaumspitze mit dem Weihnachtsstern verloren hast und den importierten Weihnachtsschinken aus Italien, dann wird die Feier ein Debakel. Du schaust bei den Fundsachen hinten nach. Wie ein Detektiv suchst du den den Ort des Geschehens ab. Hey, wo wir grade von Sternen und Tatorten sprechen, beantworte doch folgende Frage:",
            "Medientyp": 0,
            "Mediadatei": null,
            "Status": 1,
            "created_at": "2018-11-20T22:00:00.000000Z",
            "updated_at": "2018-11-20T22:00:00.000000Z",
            "heute":0
        }],
        [{
            "id": 10,
            "kalender_id": 1,
            "Tuerchennummer": 4,
            "Tuerchendatum": "2023-12-04",
            "typ": 4,
            "Text": "1.Mikroskop (Tatwaffe), 2.Teleskop (Sternbild), 3.Kerzenleuchter (Tatwaffe), 4.Keule (Tatwaffe), 5.Luftpumpe (Sternbild), 6.Trophäe (Tatwaffe), 7.Pendeluhr (Sternbild)",
            "Medientyp": 0,
            "Mediadatei": null,
            "Status": 1,
            "created_at": "2018-11-20T22:00:00.000000Z",
            "updated_at": "2018-11-20T22:00:00.000000Z",
            "heute":1
        },
        {
            "id": 11,
            "kalender_id": 1,
            "Tuerchennummer": 4,
            "Tuerchendatum": "2023-12-04",
            "typ": 6,
            "Text": "Na das hilft ja mal gar nicht weiter. du hast weder die Christbaumspitze noch den Schinken bei den fundsachen wiedergefunden. Du verlässt die Bar und gehst traurig auf die Strasse. Wie erklärst du das bei der Feier? Plötzlich hörst du eine Kinderstimme vom Dach herunter. \"\"Hey, warum das lange Gesicht, gestern abend warst du doch noch viel fröhlicher, als du deine Sachen verschenkt hast\"\". Du blickst nach oben und siehst ein Mädchen, das oben auf dem Dach sitzt und schelmisch lächelt. Ja klar war ich dabei, jetzt sag blos du willst das Zeug wiederhaben? Ich kann dir sagen wer sie hat, beantworte mir aber erst folgende Frage. Dieses Rätsel verfolgt mich nämlich schon den ganzen Tag.\"\"",
            "Medientyp": 0,
            "Mediadatei": null,
            "Status": 1,
            "created_at": "2018-11-20T22:00:00.000000Z",
            "updated_at": "2018-11-20T22:00:00.000000Z",
            "heute":1
        }]
    ],
      numbersObject: {
        1: { text: 'eins', length: 4 },
        2: { text: 'zwei', length: 4 },
        3: { text: 'drei', length: 4 },
        4: { text: 'vier', length: 4 },
        5: { text: 'fünf', length: 4 },
        6: { text: 'sechs', length: 5 },
        7: { text: 'sieben', length: 6 },
        8: { text: 'acht', length: 4 },
        9: { text: 'neun', length: 4 },
        10: { text: 'zehn', length: 4 },
        11: { text: 'elf', length: 3 },
        12: { text: 'zwölf', length: 5 },
        13: { text: 'dreizehn', length: 7 },
        14: { text: 'vierzehn', length: 8 },
        15: { text: 'fünfzehn', length: 8 },
        16: { text: 'sechzehn', length: 8 },
        17: { text: 'siebzehn', length: 8 },
        18: { text: 'achtzehn', length: 8 },
        19: { text: 'neunzehn', length: 8 },
        20: { text: 'zwanzig', length: 7 }
      },
    currentHour: new Date().getHours(),
    },

    props: {
  },

    mounted: function(){

      // console.log("Hole Daten..")

      // Tuerchendaten holen

      // axios.get('https://redaktion.quizmacher.ch/kalender/1').then(response => {
      //   this.kalenderdaten = response.data
      //   console.log(response)
      //   console.log(response.data)
      
      // }).catch(error => {

      //   console.log("Fehler! Konnte keine Kalenderdaten beziehen.")
      
      // });
    },
    computed: {
    },

    methods: {
      play: function (name) {

        if(this.versuch == 2){

        }else{

          clearTimeout(this.klopfantwort_timeout)
          this.count++ // zählt die Anzahl Klopfer
          this.quote = false
          this.antwort = ""
          if(this.count > 20){
            
          this.quote = true
          this.antwort ="Hey! Das ist kein Heavy-Metal-Konzert! Geh's ruhiger an."
          this.klopfantwort_timeout = setTimeout(() => {
            this.antwort = "Klopfe an die Tür!"
            this.count = 0
          }, 3 * 1000); // 3 Sekunden in Millisekunden
          
        }else{
          
          let audio = new Audio('./audio/' + name + '.mp3');
          audio.play();
          
          // Hier die Anzahl der Klopfer einblenden für Leute ohne Sound
          
          
          this.klopfantwort_timeout = setTimeout(() => {

            this.quote = true
            if(this.count == 9){ //9 wird als Gegenfrage verwendet, darf daher nicht verwendet werden
              
              this.antwort ="Hey, Das ist mein Klopfzeichen! Such dir ein anderes."
              
            }else{
              this.versuch++ // zählt die Anzahl Versuche
              
              if(this.letzte_antwort == this.numbersObject[this.numbersObject[this.count].length].text){
                this.antwort ="Das ist auch "+this.numbersObject[this.numbersObject[this.count].length].text+ "!"
              }else{
                this.antwort ="Das ist "+this.numbersObject[this.numbersObject[this.count].length].text+ "!"
              }
              
            }
            
            
            this.klopfantwort_timeout = setTimeout(() => {
              this.antwort = ""
              this.quote = false
              this.count = 0
              if(this.versuch == 2){
                this.antwort = "OK, jetzt ich! Hör gut zu, welche Zahl ist dann das?"
                this.klopfantwort_timeout = setTimeout(() => {
                  this.antwort = "Na?"
                  this.quote = false
                  audio.play();
                  this.klopf_antwort = true
                }, 3 * 1000); // 3 Sekunden in Millisekunden
                
                
                
              }else{
                this.antwort = "Klopfe nochmal!"
              }
            }, 2 * 1000); // 3 Sekunden in Millisekunden
            
            this.letzte_antwort = this.numbersObject[this.numbersObject[this.count].length].text
            this.count = 0

          }, 2 * 1000); // 3 Sekunden in Millisekunden

        }

        }
        
      },

      show_hinweis: function(tuerchen){

        if(this.hinweis == tuerchen){
          this.hinweis = null
        }else{
          this.hinweis = tuerchen
        }

      },

      show_loesung: function(tuerchen,heute){

        if(this.loesung == tuerchen){
          this.loesung = null
          this.story_heute = null
        }else{
          this.loesung = tuerchen
          this.story_heute = tuerchen
        }

        // console.log('heute:'+heute)
        // console.log('story_heute:'+this.story_heute)

      },

      check_klopfantwort: function(){  
        // prüft ob die Antwort richtig ist

        //  Wenn richtig, dann Tür öffnen
        // axios-Abfrage von API (Quizmacher.ch)
        if(this.eingabe == '4'|| this.eingabe == 'vier' || this.eingabe == 'Vier' || this.eingabe == 'VIER'){

          this.klopfantwort_timeout = setTimeout(() => {
            this.antwort = "Ach ja? Und wieviel ist dann das?"
            this.quote = false
            audio.play();
            this.klopf_antwort = true
          }, 3 * 1000); // 3 Sekunden in Millisekunden

          // if(this.eingabe == '3'|| this.eingabe == 'drei' || this.eingabe == 'Drei' || this.eingabe == 'DREI'){
          //   this.antwort = "Richtig! Komm ruhig rein!"
          //   this.tuer_geschlossen = false
          // }else{
          //    // wenn falsch, dann zurücksetzen
          
          // this.versuch = 0
          // this.antwort = "Nein, falsch! Versuch's nochmal, ich hab Zeit."
          // this.klopfantwort_timeout = setTimeout(() => {
          //   this.antwort = "Klopfe an die Tür."
          // }, 3 * 1000); // 3 Sekunden in Millisekunden
          
          // this.letzte_antwort = null
          // this.klopf_antwort = false
          // }

        }else{
          // wenn falsch, dann zurücksetzen
          
          this.versuch = 0
          this.antwort = "Nein, falsch! Versuch's nochmal, ich hab Zeit."
          this.klopfantwort_timeout = setTimeout(() => {
            this.antwort = "Klopfe an die Tür."
          }, 3 * 1000); // 3 Sekunden in Millisekunden
          
          this.letzte_antwort = null
          this.klopf_antwort = false
        }
      }

          
    }
  });
  