<script setup lang="ts"></script>

<template>
    <main>
        <Head>
            <TheHead />
        </Head>

        <section class="jumbotron">
            <div class="logo">
                <img class="logo__image" src="/logo.png" alt="Internity" />
                <span class="logo__text">internity</span>
            </div>
        </section>
    </main>
</template>

<style lang="postcss" scoped>
.jumbotron {
    .logo {
        @apply flex items-center pt-5 pl-5;

        .logo__text {
            @apply font-inter font-bold uppercase text-text-white tracking-[0.15em] ml-2 text-lg;
        }
    }
}
</style>
