<script setup lang="ts">
const VectorFeaturedReport = resolveComponent("VectorFeaturedReport");
const VectorFeaturedAttendance = resolveComponent("VectorFeaturedAttendance");
const VectorFeaturedPlace = resolveComponent("VectorFeaturedPlace");

const featuredItem = [
    {
        image: VectorFeaturedReport,
        head: "Buat dan pantau laporan",
        body: "Pengguna dapat membuat laporan langsung dalam aplikasi, tak perlu khawatir lupa karena kami akan selalu mengingatkan",
    },
    {
        image: VectorFeaturedAttendance,
        head: "Absensi mudah dimana saja",
        body: "Pengguna dapat melakukan absensi dimana saja dengan mudah melalui aplikasi",
    },
    {
        image: VectorFeaturedPlace,
        head: "Informasi tempat magang",
        body: "Dapatkan informasi tempat magang yang tersedia dan daftar dengan mudah",
    },
];
</script>

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

        <section class="featured">
            <header class="featured__head">mengapa internity?</header>

            <div class="featured__content">
                <div class="item" v-for="item in featuredItem">
                    <div class="item__image">
                        <component :is="item.image" />
                    </div>
                    <div class="item__head">
                        <p>{{ item.head }}</p>
                    </div>
                    <div class="item__body">
                        <p>{{ item.body }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="download">
            <div class="download__content">
                <div class="left__content">
                    <VectorDownloadNow />
                </div>
                <div class="right__content">
                    <div class="text">
                        <header class="text__head">Download Sekarang</header>
                        <p class="text__body">dapatkan segala kemudahan yang kami tawarkan</p>
                    </div>

                    <div class="action">
                        <img src="/google-play-badge.png" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <footer class="copyright">
            <p>Copyright 2022 © Internity-dev.github.io</p>
        </footer>
    </main>
</template>

<style lang="postcss" scoped>
@import "./assets/css/app.postcss";
</style>
