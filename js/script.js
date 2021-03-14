$(document).ready(function () {
    class Timer {
        constructor(date) {
            this.date = date;
            this.convertDate = '';
            this.convertDay = 0;
            this.convertHour = 0;
            this.convertMinute = 0;
            this.convertSecond = 0;
            this.timeNow = 0
            this.result = 0;
        }

        init () {
            this.convertDate = new Date(this.date).getTime();
        }

        getNewDate() {
            setInterval(() => {
                this.timeNow = new Date().getTime();
            },1000)
        }

        count () {
            setInterval(() => {
                this.result = this.convertDate - this.timeNow;
                this.convertDay = Math.floor(this.result / (1000 * 60 * 60 * 24));
                this.convertHour = Math.floor(this.result % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                this.convertMinute =  Math.floor(this.result % (1000 * 60 * 60) / (1000 * 60));
                this.convertSecond = Math.floor(this.result % (1000 * 60) / (1000));
            }, 1000)
        }

        showOnHtml (){
            setInterval(() => {
                $('.day').html(`${this.convertDay < 10 ? '0' : ''}${this.convertDay}`);
                $('.hour').html(`${this.convertHour < 10 ? '0' : ''}${this.convertHour}`);
                $('.minute').html(`${this.convertMinute < 10 ? '0' : ''}${this.convertMinute}`);
                $('.second').html(`${this.convertSecond < 10 ? '0' : ''}${this.convertSecond}`)
            }, 1000);

        }
    }

    let friday13 = new Timer('Aug 13, 2021 00:00:00');
    friday13.init();
    friday13.getNewDate();
    friday13.count()
    friday13.showOnHtml()
})