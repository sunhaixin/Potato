const app = getApp()

Page({
  data: {
    selectedDate: {
      start: '2015-06-01',
      date: '2099-01-01',
      year: '2009',
      month: '01',
    },
    total: {
      income: '0.00',
      incomeInt: '0',
      incomeFloat: '00',
      expenditure: '0.00',
      expenditureInt: '0',
      expenditureFloat: '00',
    },
    list: [
      {
        key: 1,
        income: '0',
        expenditure: '50.87',
        date: '06月14日',
        week: '星期四',
        total: '-200',
        list: [
          {
            key: 1,
            type: '1',
            detail: '小米食堂充值',
            amount: '-200',
          },
          {
            key: 2,
            type: '2',
            detail: '买衣服',
            amount: '220',
          },
          {
            key: 3,
            type: '3',
            detail: '买鞋子',
            amount: '150',
          },
        ]
      },
      {
        key: 2,
        income: '100000',
        expenditure: '100.90',
        date: '07月05日',
        week: '星期一',
        list: [
          {
            key: 1,
            type: '1',
            detail: '小米食堂充值',
            amount: '200',
          },
          {
            key: 2,
            type: '2',
            detail: '买衣服',
            amount: '220',
          },
          {
            key: 3,
            type: '2',
            detail: '买鞋子',
            amount: '160',
          },
        ]
      },
    ]
  },

  onLoad () {
    this.initDate()
  },

  initDate () {
    const today = new Date()
    const date = this.formatDate(today)
    const selectedDate = {
      date: date.date,
      year: date.year,
      month: date.month,
    }

    this.setData({selectedDate})
  },

  formatDate (date) {
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    month = month < 10 ? '0' + month : month
    day = day < 10 ? '0' + day : day

    return {
      date: `${year}-${month}-${day}`,
      year,
      month,
      day,
    }
  },

  setSelectedDate (e) {
    console.log('----selected date range', e)
  }

})
