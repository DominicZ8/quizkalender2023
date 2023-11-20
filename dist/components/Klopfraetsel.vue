<!-- Klopfraetsel.vue -->
<template>
    <div style="position:relative;">
        <div style="position:absolute;left:16px;top:20px;font-size:2em;color:lightblue; font-weight:bold;">
          <p style="font-size:6em;font-weight:bold;color:white;opacity: 0.5;" v-show="this.count>0">{{this.count}}</p>
          <p v-show="this.quote">&laquo;{{antwort}}&raquo;</p>
          <p v-show="!this.quote">{{antwort}}</p>
          <div id="eingabefeld_klopfraetsel" v-show="this.klopf_antwort">
            <input type="text" v-model="eingabe" @keyup.enter="check_klopfantwort"  />
            <button @click="check_klopfantwort">OK</button>
          </div>
        </div>
        
        <div id="klopfraetsel_tuer" style="width:100%;max-width:888px;">
          
          <img src="./images/Klopfraetsel_tuer.png" @click="play('klopf',this.count)" v-if="this.tuer_geschlossen">
          <img src="./images/Klopfraetsel_rahmen.png" v-if="!this.tuer_geschlossen">
        </div>
      </div>
</template>

<script>
export default {
  // Hier kannst du deine Komponentenlogik hinzufügen
}
</script>

<style scoped>
/* Hier kannst du deine Komponentenstyles hinzufügen */
</style>
