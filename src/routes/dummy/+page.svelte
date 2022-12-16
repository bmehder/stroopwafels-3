<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<h1 class="section">Dummy API Results</h1>

<section>
  <ul>
    {#each data.dummyData.data as { name, job }}
      <li>{name}: {job}</li>
    {/each}
  </ul>
</section>
