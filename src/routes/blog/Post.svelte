<script lang="ts">
  import type { WP_REST_API_Post } from 'wp-types'

  export let post: WP_REST_API_Post
  export let index: number

  type FeaturedMedia = {
    source_url?: string
  }

  const slug = post.slug
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.at(0) as FeaturedMedia
  const src = featuredMedia.source_url
  const title = post.title.rendered
  const excerpt = post.excerpt.rendered
</script>

<div class="card ">
  <a href="/blog/{slug}" data-sveltekit-preload-data
    ><img {src} loading={index < 3 ? 'eager' : 'lazy'} alt={title} /></a
  >
  <div class="content auto-format">
    <h2>
      <a href="/blog/{slug}" data-sveltekit-preload-data>{@html title}</a>
    </h2>
    <div class="clamp">{@html excerpt}</div>
  </div>
</div>

<style>
  .card {
    box-shadow: var(--shadow);
  }
  :global(.dark) .card {
    background-color: var(--black);
  }
  .content {
    padding: var(--spacing);
  }
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
</style>
