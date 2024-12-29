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

  let { children, canvas = $bindable(), width, height, style, ...props }: Props = $props();

  onMount(() => {
    setContext('canvas', canvas);
  });
</script>

<canvas bind:this={canvas} {width} {height} class={props.class} {style} {...props}>
  {#if canvas}
    {@render children()}
  {/if}
</canvas>
