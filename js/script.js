$(document).ready(function () {
    class Timer {
        constructor() {
            this.date = '';
            this.convertDate = '';
            this.convertDay = 0;
            this.convertHour = 0;
            this.convertMinute = 0;
            this.convertSecond = 0;
            this.timeNow = 0;
            this.result = 0;
        }

        findNextFriday13() {
            const now = new Date();
            let year = now.getFullYear();
            let month = now.getMonth() + 1;

            while (true) {
                const date = new Date(year, month - 1, 13);
                if (date.getDay() === 5) {
                    return date;
                }
                month++;
                if (month > 12) {
                    month = 1;
                    year++;
                }
            }
        }

        init() {
            this.date = this.findNextFriday13();
            this.convertDate = this.date.getTime();
        }

        getNewDate() {
            setInterval(() => {
                this.timeNow = new Date().getTime();
            }, 1000);
        }

        count() {
            setInterval(() => {
                this.result = this.convertDate - this.timeNow;
                this.convertDay = Math.floor(this.result / (1000 * 60 * 60 * 24));
                this.convertHour = Math.floor(
                    (this.result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                this.convertMinute = Math.floor(
                    (this.result % (1000 * 60 * 60)) / (1000 * 60)
                );
                this.convertSecond = Math.floor((this.result % (1000 * 60)) / 1000);
            }, 1000);
        }

        showOnHtml() {
            setInterval(() => {
                $('.day').html(`${this.convertDay < 10 ? '0' : ''}${this.convertDay}`);
                $('.hour').html(`${this.convertHour < 10 ? '0' : ''}${this.convertHour}`);
                $('.minute').html(`${this.convertMinute < 10 ? '0' : ''}${this.convertMinute}`);
                $('.second').html(`${this.convertSecond < 10 ? '0' : ''}${this.convertSecond}`);
            }, 1000);
        }
    }

    let friday13 = new Timer();
    friday13.init();
    friday13.getNewDate();
    friday13.count();
    friday13.showOnHtml();
});
