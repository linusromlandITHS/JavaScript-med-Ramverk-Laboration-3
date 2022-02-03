<script>
  import CitiesList from './components/CitiesList.vue'
  import CounterButton from './components/CounterButton.vue'
  import HelloWorld from './components/HelloWorld.vue'
  import EndScreen from './components/EndScreen.vue'

  export default {
    components: {
      CitiesList,
      CounterButton,
      HelloWorld,
      EndScreen
    }
  }
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Om</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Kontakt</RouterLink>
      </li>

      <li>
        <RouterLink to="/djur">Djur-sidan...</RouterLink>
      </li>

    </ul>
  </nav>

  Här nedan kommer main och RouterView:
  <main>
    <RouterView />
  </main>
  Main slut

  <HelloWorld msg="Hello Team!" />
  <hr />
  <CitiesList />
  <hr />
  <CounterButton />
  <hr />
  <EndScreen />

</template>
