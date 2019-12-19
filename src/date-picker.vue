<template>
    <div class="calendar">
        <div class="weeks">
            <span v-for="i in 7">{{weeks[i-1]}}</span>
        </div>
        <div class="days" v-for="i in 6" :key="i">
            <span v-for="j in 7" :key="j">{{visibleDays[(i-1)*7+(j-1)]}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            currentDate: {
                type: Date,
                default: () => new Date()
            },
            weeks: {
                type: Array,
                default: ['日','一','二','三','四','五','六']
            },
            visibleDays: {
                type: Array,
                default: []
            }
        },
        mounted() {
            for(let i=0;i<this.getYearMonthDay.week;i++) {
                this.visibleDays.push('')
            }
            for(let i=1;i<this.getYearMonthDay.days+1;i++) {
                this.visibleDays.push(i)
            }
        },
        methods: {
            getDate: (year,month,day) => {
                return new Date(year,month-1,day);
            }
        },
        computed: {
            getYearMonthDay() {
                let year = this.currentDate.getFullYear();
                let month = this.currentDate.getMonth() + 1;
                let day = this.currentDate.getDate();
                let firstDay = this.getDate(year,month,1);
                let week = firstDay.getDay();
                let days = this.getDate(year,month+1,0).getDate();
                return {year,month,day,week,days};
            },

        },

    }
</script>
<style lang="scss">
    .calendar {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 16px;
        > .weeks {
            > span {
                color: #c9c9c9;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: 3em;
                margin: .3em 0;
            }
        }
        > .days {
            > span {
                display: inline-flex;
                width: 3em;
                justify-content: center;
                align-items: center;
                padding: .5em;
            }
        }
    }
</style>