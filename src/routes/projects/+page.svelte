<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { PinContainer } from '$lib/components/ui/ThreeDPin';
	import type { seoConfigType } from '$lib/types';
	const seoConfig: seoConfigType = {
		title: 'Johnson Macharia',
		description: 'list of my projects'
	};
</script>

<Seo {seoConfig} />

<div class=" relative">
    <div class="flex h-[40rem] w-full items-center justify-center">
        <PinContainer title="/aceternity.sveltekit.io" href="https://aceternity.sveltekit.io">
            <div
                class="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2"
            >
                <h3 class="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">Aceternity UI</h3>
                <div class="!m-0 !p-0 text-base font-normal">
                    <span class="text-slate-500">
                        Customizable Tailwind CSS and Framer Motion Components.
                    </span>
                </div>
                <div
                    class="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
                />
            </div>
        </PinContainer>
    </div>

</div>

Installation