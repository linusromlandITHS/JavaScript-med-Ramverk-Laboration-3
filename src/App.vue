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
    </ul>
  </nav>
  <HelloWorld msg="Hello Team!" />
  <CitiesList />
  <CounterButton />
  <EndScreen />
  <main>
    <RouterView />
  </main>
</template>
