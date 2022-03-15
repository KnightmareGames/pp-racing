<template>
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <title>Tabs</title>
  </head>
  <body>
    <div class="mytabs">
      <input type="radio" id="tabGeneral" name="mytabs" checked="checked">
      <label for="tabGeneral">General</label>
      <div class="tab">
        <h2>General</h2>
        <table>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/Register">
                  Start your Planetary Pod Journey!
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/capsule">
                  Check all your capsules and open them for awesome loot!
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>

            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/chipps">
                  Get a list of your CHIPPS.
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/claim <Daily>">
                  Claim your rewards! Keep your streak going to maximize how much you get!
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/code create">
                  Create a new referral code or show existing code. Benefit from inviting your friends so you can race with and against them!
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/code redeem">
                  Redeem another users referral code so you can both get goodies!
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="garage">
                  View all your Pods and compare stats between them. 
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/help">
                  Learn what PP Racing is about and how to get started.
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/inbox">
                  Check your Messages.
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/install">
                  Install a CHIPP onto your Pod.
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/inventory">
                  View and use your consumable items.
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/Ping">
                  Pong!
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/prestige">
                  Begin the journey with a new Pod. Earn premanent bonuses and eternal planetary fame for each Prestige Level. 
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/prestige">
                  Begin the journey with a new Pod. Earn premanent bonuses and eternal planetary fame for each Prestige Level. 
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/profile">
                  Show all your friends how big your PP is, and all your other awards!
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/Shop">
                  Purchase new Pods, Parts, CHIPPs, and items from this Planet's unique shop. 
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/Weather">
                  Check the current weather on this planet.
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
        </table>
    </div>

      <input type="radio" id="tabActivies" name="mytabs">
      <label for="tabActivies">Activies</label>
      <div class="tab">
        <h2>Activies</h2>
        <table>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/duel">
                  Challenge another PP Racer to a competitive race. Choose if you'd like to wager QUID on the outcome to up the heat!
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>         
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/practice">
                  Simulate how your Pod would do on the selected track in a practice race. 
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/scavenge">
                  Explore the planet for abandoned parts and other unknown treasures.
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/skirmish">
                  Race your Pod against this planet's NPCs, adjusted to your level. 
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/trial">
                  race in a time trial to get the highest score possible and your name on the leaderboard. 
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
        </table>
      </div>

      <input type="radio" id="tabPlanet" name="mytabs">
      <label for="tabPlanet">Planet</label>
      <div class="tab">
        <h2>Planet</h2>
        <table>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/planet create">
                  Establishes this server as a planet within the Planetary Pod Racing System!
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/planet wallet">
                  Shows how much currentcy this planet has.
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/planet shop">
                  Create or upgrade a new ship for this Planet.
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/planet fuel_depot">
                  Create or Upgrade a new FUEL depot for this planet.
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/planet enable_role <role>">
                  Enable a role to use Planet commands.
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
          <tr>
            <template>
              <div class="w-1/2 m-auto pt-10">
                <Accordion title="/planet disable_role <role>">
                  Disable a Role to use planet commands.
                </Accordion>
              </div>
            </template>
            <script>
            import Accordion from './components/Accordion.vue'
            export default {
              name: 'App',
              components: {
                Accordion
              }
            }
            </script>
            <style>
            #app {
              font-family: Avenir, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            </style>
          </tr>
        </table>
      </div>
    </div>
  </body>
</html> 
</template>

<script>
export default {
  head: {
    title: 'PP Racing Commands',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'plantery-pod-racing-commands',
        name: 'keywords',
        content: 'discord, bot, game, pp, racing, planetary, pod'
      },
      {
        hid: 'commands-description',
        name: 'description',
        content: 'A list of all the commands in PPRacing Discord Bot'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
}
</script>

<style>
  body {
    background: #ccc;
    font-family: 'Roboto', sans-serif;
}
.mytabs {
    display: flex;
    flex-wrap: wrap;
    max-width: 600px;
    margin: 50px auto;
    padding: 25px;
}
.mytabs input[type="radio"] {
    display: none;
}
.mytabs label {
    padding: 25px;
    background: #e2e2e2;
    font-weight: bold;
}

.mytabs .tab {
    width: 100%;
    padding: 20px;
    background: #fff;
    order: 1;
    display: none;
}
.mytabs .tab h2 {
    font-size: 3em;
}

.mytabs input[type='radio']:checked + label + .tab {
    display: block;
}

.mytabs input[type="radio"]:checked + label {
    background: #fff;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

