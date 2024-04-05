<script lang="ts">
	export let title: string = "Window Title";
</script>

<main>
	<div id="header" class="Header">
		<span id="title" class="Title">{title}</span>
	</div>

	<div class="Content">
		<slot />
	</div>
</main>

<style lang="scss">
	$header-height: 12pt;

	main {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		.Header {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: $header-height;

			.Title {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				height: $header-height;
				text-align: center;
				font-size: calc($header-height - 4pt);
				line-height: calc($header-height);
			}
		}

		.Content {
			position: absolute;
			top: $header-height;
			left: 0;
			width: 100%;
			height: calc(100% - $header-height);
		}
	}
</style>
