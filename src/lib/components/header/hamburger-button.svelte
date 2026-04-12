<script lang="ts">
	let { checked = $bindable(false) } = $props();
</script>

<div class="menu cross menu--2">
	<label>
		<input type="checkbox" bind:checked />
		<svg viewBox="0 0 100 100" width="4rem" height="4rem" xmlns="http://www.w3.org/2000/svg">
			<path class="line--1 stroke-black dark:stroke-white" d="M0 70l28-28c2-2 2-2 7-2h64" />
			<path class="line--2 stroke-black dark:stroke-white" d="M0 50h99" />
			<path class="line--3 stroke-black dark:stroke-white" d="M0 30l28 28c2 2 2 2 7 2h64" />
		</svg>
	</label>
</div>

<style>
	input {
		display: none;
	}

	label {
		display: inline-flex;
		cursor: pointer;
		position: absolute;
	}

	@media (min-aspect-ratio: 1/1) {
		label {
			width: 20vh;
			height: 20vh;
		}
	}

	path {
		fill: none;
		stroke-width: 3;
		stroke-linecap: round;
		stroke-linejoin: round;
		--length: 24;
		--offset: -38;
		stroke-dasharray: var(--length) var(--total-length);
		stroke-dashoffset: var(--offset);
		transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
	}

	.cross input:checked + svg {
		.line--1,
		.line--3 {
			--length: 22.627416998;
		}
		.line--2 {
			--length: 0;
		}
	}

	.menu--2 {
		background-color: #0095f9;
		.line--1,
		.line--3 {
			--total-length: 111.22813415527344;
			--offset: -50.22813415527344;
		}
		.line--2 {
			--total-length: 99;
		}
		input:checked + svg {
			path {
				transform: translateX(30px);
			}
			.line--1,
			.line--3 {
				--offset: -16.9705627485;
			}
			.line--2 {
				--offset: -20;
			}
		}
	}
</style>
