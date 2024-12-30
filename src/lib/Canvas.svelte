<script lang="ts">
  import { onMount, setContext, type Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    canvas?: HTMLCanvasElement;
    width?: number;
    height?: number;
    class?: string;
    style?: string;
  }

  let { children, canvas = $bindable(), ...props }: Props = $props();

  onMount(() => {
    setContext('canvas', canvas);
  });
</script>

<canvas bind:this={canvas} {...props}>
  {#if canvas}
    {@render children()}
  {/if}
</canvas>
