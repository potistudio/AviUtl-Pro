
<script lang="ts">
	import Window from "../lib/Window.svelte";
	import { onMount } from "svelte";

	let canvas: HTMLCanvasElement;

	onMount (() => {
		fitCanvas();

		const canvasContext = canvas.getContext("2d");
	});

	window.onresize = () => {
		fitCanvas();
	}

	function fitCanvas() {
		let parentElement: HTMLElement = canvas.parentElement!;

		canvas.width = parentElement.offsetWidth;
		canvas.height = parentElement.offsetHeight;
	}
</script>

<Window title="Preview">
	<canvas bind:this={canvas}></canvas>
</Window>

<style lang="scss">
	canvas {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
</style>
