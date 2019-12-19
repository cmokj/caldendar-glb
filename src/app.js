import Vue from 'vue'
import DatePicker from './date-picker'

Vue.component('g-cal',DatePicker)

var app = new Vue({
    el: "#app",
    data: {
        selectedDate: "123"
    }
})