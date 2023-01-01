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
.jumbotron {
    @apply relative;

    .jumbotron__content {
        @apply bg-bg-primary/20 backdrop-blur;

        .jumbotron__logo {
            @apply flex items-center pt-5 pl-5;

            .logo__text {
                @apply font-inter font-bold uppercase text-text-white tracking-[0.15em] ml-2 text-lg;
            }
        }

        .jumbotron__hero {
            @apply flex justify-center items-center pt-10 px-32 gap-x-48;
            .left__content {
                .text {
                    p {
                        @apply text-4xl font-medium text-text-white leading-snug capitalize;
                        word-spacing: 0.1em;

                        span {
                            background: linear-gradient(180deg, #77f7ff 0%, #4a9dff 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                            text-fill-color: transparent;
                            font-weight: bold;
                        }
                    }
                }

                .action {
                    @apply mt-8 text-xl flex gap-x-5;
                    .action__button {
                        @apply py-2 px-5 rounded-md text-text-white font-bold inline-block;
                    }
                    .signup {
                        @apply relative z-10;
                        background-image: linear-gradient(104.81deg, #0098da 12.76%, #2aef79 105.11%, #30ffc1 105.12%);

                        &::before {
                            @apply rounded-md absolute top-0 left-0 bottom-0 right-0 bg-origin-border border-2 border-transparent -z-10 opacity-0 text-text-white;
                            @apply transition-opacity ease-in-out duration-300;
                            content: "";
                            background-image: linear-gradient(#0144a7, #0144a7), radial-gradient(circle at top left, #0098da, #30ffc1);
                            background-clip: padding-box, border-box;
                        }

                        &:hover::before {
                            @apply opacity-100;
                        }
                    }

                    .signin {
                        @apply border-2 border-transparent bg-origin-border z-10 relative;
                        background-image: linear-gradient(#0144a7, #0144a7), radial-gradient(circle at top left, #0098da, #30ffc1);
                        background-clip: padding-box, border-box;

                        &::before {
                            @apply absolute top-0 left-0 bottom-0 right-0 text-text-white -z-10 opacity-0;
                            @apply transition-opacity ease-in-out duration-300;
                            content: "";
                            background-image: linear-gradient(104.81deg, #0098da 12.76%, #2aef79 105.11%, #30ffc1 105.12%);
                        }

                        &:hover::before {
                            @apply opacity-100;
                        }
                    }
                }
            }
        }
    }

    .eclipse-1 {
        @apply absolute top-0 right-0 -z-10 drop-shadow-[0_4px_100px_#00F0C5];
    }

    .eclipse-2 {
        @apply absolute bottom-0 left-0 -z-10 drop-shadow-[0_4px_100px_#00F0C5];
    }
}
</style>
