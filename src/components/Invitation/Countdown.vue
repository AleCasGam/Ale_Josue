<template>
    <div class="flex justify-center gap-4">
        <div v-for="(item, key) in data" :key="item.id" class="text-center">
            <h2 class="text-5xl font-serif">{{ item.value }}</h2>
            <p class="font-ui uppercase tracking-[0.2em] text-xs">
                {{ item.label }}
            </p>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        weddingDate: {
            type: String,
            // required: true,
            default: '2026-10-03T16:00:00' // Fecha de la boda en formato ISO
        }
    },

    data() {
        return {
            interval: null,

            data: {
                days: {id: 'days', value: 0, label: 'Días'},
                hours: {id: 'hours', value: 0, label: 'Horas'},
                minutes: {id: 'minutes', value: 0, label: 'Minutos'},
                seconds: {id: 'seconds', value: 0, label: 'Segundos'}
            }

        }

    },

    mounted() {
        this.updateCountdown()

        this.interval = setInterval(() => {
            this.updateCountdown()
        }, 1000)

    },

    beforeUnmount() {
        clearInterval(this.interval)
    },

    methods: {
        updateCountdown() {

            // Fecha de la boda
            const weddingDate = new Date(this.weddingDate)
            const now = new Date()
            const distance = weddingDate - now

            if (distance <= 0) {

                clearInterval(this.interval)

                this.data.days.value = 0
                this.data.hours.value = 0
                this.data.minutes.value = 0
                this.data.seconds.value = 0

                return
            }

            this.data.days.value = Math.floor(distance / (1000 * 60 * 60 * 24))

            this.data.hours.value = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            )

            this.data.minutes.value = Math.floor(
                (distance % (1000 * 60 * 60)) /
                (1000 * 60)
            )

            this.data.seconds.value = Math.floor(
                (distance % (1000 * 60)) /
                1000
            )
        }
    }
}
</script>

<style scoped>
</style>
