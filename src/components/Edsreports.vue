<template>
  <v-container fluid grid-list-md>


    <v-layout row wrap  text-xs-center>

      <v-flex d-flex xs12 sm6 md6>
            <v-card>
              <v-card-title primary-title>
                <h1>Daily Reports</h1>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="search"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :rows-per-page-items="rows"
                :headers="headers"
                :items="dailyFiles"
                :search="search"
              >
                <template slot="items" slot-scope="props">
                  <td class="text-xs-left">
                    <a :href="props.item.href">{{ props.item.fileName }}</a>
                  </td>
                </template>
                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                  Your search for "{{ search }}" found no results.
                </v-alert>
              </v-data-table>
            </v-card>

      </v-flex>


      <v-flex d-flex xs12 sm6 md6>
        <v-card>
          <v-card-title>
            <h1>Fault Reports</h1>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search3"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :rows-per-page-items="rows"
            :headers="headers"
            :items="faultsFiles"
            :search="search3"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-left" >
                <a :href="props.item.href">{{ props.item.fileName }}</a>

              </td>

            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search3 }}" found no results.
            </v-alert>
          </v-data-table>
        </v-card>
      </v-flex>

    </v-layout>

  </v-container>
</template>


<script>
import axios from 'axios'

export default {
  name: 'Edsreports',
  data () {
    return {
      link: 'http://localhost:8090/EDSReport/?dir=Daily&file=',
      vag: {
        vag1: "VAG1",
        vag2: "VAG2"
      },
      rows: [ 10, 25, { "text": "$vuetify.dataIterator.rowsPerPageAll", "value": -1 } ],
      search: '',
      search3: '',
      headers: [
        { text: 'Name ', align: 'left', sortable: false, value: 'name' },
      ],
      faultsFiles: {},
      dailyFiles: {},
    }
  },
  mounted() {
    axios
      .get('http://localhost:8090/EDSReportsList')
      .then((response) => {
        this.faultsFiles = response.data.Faults;



        this.dailyFiles = response.data.Daily;

      })
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
