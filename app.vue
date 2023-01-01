<script setup lang="ts"></script>

<template>
    <main>
        <Head>
            <TheHead />
        </Head>

        <section class="jumbotron">
            <div class="jumbotron__content">
                <div class="jumbotron__logo">
                    <img class="logo__image" src="/logo.png" alt="Internity" />
                    <span class="logo__text">internity</span>
                </div>

                <div class="jumbotron__hero">
                    <div class="left__content">
                        <div class="text">
                            <p>kontrol dan pantau kegiatan <span>magang</span> dengan mudah dalam satu aplikasi</p>
                        </div>
                        <div class="action">
                            <a href="" class="action__button signup">Daftar</a>
                            <a href="" class="action__button signin">Masuk</a>
                        </div>
                    </div>
                    <div class="right__content">
                        <VectorNotes />
                    </div>
                </div>
            </div>

            <div class="eclipse-1">
                <img src="/eclipse-1.png" alt="eclipse-1" />
            </div>
            <div class="eclipse-2">
                <img src="/eclipse-2.png" alt="eclipse-2" />
            </div>
        </section>
    </main>
</template>

<style lang="postcss" scoped>
@import "./assets/css/app.postcss";
</style>
