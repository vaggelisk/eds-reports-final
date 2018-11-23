<template>
  <v-app dark>
    <v-toolbar
      app
      :clipped-left="clipped"
      height="100"
    >

      <v-toolbar-title><h1>EDS Reports</h1></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-item>
          <v-layout >
            <v-container mt-4  mb-2 >
              <v-layout >
                <v-flex>
                  <img height="50" src="./assets/logo3.png" alt="" >
                </v-flex>
              </v-layout>
            </v-container>
          </v-layout>
      </v-toolbar-item>

    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 Propulsion Analytics</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'EDS Reports'
    }
  },
  name: 'App'
}
</script>

