<script>
  import { page } from '$app/stores'

  import pages from '$lib/models/pages'
  import slides from '$lib/models/slides'

  import 'stroopwafels/base.css'
  import '$lib/styles/stroopwafels-local.css'
  import '$lib/styles/theme.css'

  import Outliner from 'stroopwafels/Outliner.svelte'
  import Loading from 'stroopwafels/Header/Loading.svelte'
  import Header from 'stroopwafels/Header/Header.svelte'
  import Slider from 'stroopwafels/Slider/Slider.svelte'
  import Footer from 'stroopwafels/Footer.svelte'
  import BackToTop from 'stroopwafels/BackToTop.svelte'
  import Aurora from 'stroopwafels/Aurora.svelte'
</script>

<Loading />
<Outliner --background="var(--light)" --color="white" />

<div class="wrapper">
  <Header
    items={pages}
    logo={`<img src="/stroopwafel.png" alt="stroopwafel" /><div>Svelte Stroopwafels<br><small> Component Library</small></div>`}
    --width="1100px"
    --padding="1.5rem"
    --background="var(--white)"
    --color="var(--black)"
  />

  {#if $page.route?.id === '/'}
    <div id="slider">
      <Slider
        {slides}
        isAutoplay={true}
        color="white"
        --height="70vh"
        --size="8vw"
      />
    </div>
  {/if}

  {#if $page.route?.id === '/about'}
    <Aurora --padding="8rem" --duration="32s">Aurora CSS Gradient</Aurora>
  {/if}

  <main>
    <slot />
  </main>

  <Footer --padding="3rem" --background="#111" />
</div>

<BackToTop --background="var(--light)" />
