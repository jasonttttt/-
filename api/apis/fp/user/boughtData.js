module.exports = {
    state:1,
    data : [
      {
        id:1,
        name:'未到期产品',
        // beforeIcon:require('~/assets/img/user/report-after/new.png'),
        // afterIcon:require('~/assets/img/user/report-after/new1.png'),
        list:[
          {
            title:'新疆前海联合海盈货币B (002248)',
            money:'800万',
            date: '17/06/22',
            expire:'18/04/03',
          },
          {
            title:'新疆前海联合海盈货币 (002248)',
            money:'700万',
            date: '17/06/22',
            expire:'18/05/20',
          }
        ],
      },
      {
        id:2,
        name:'已到期产品',
        
        list: [
          {
            title:'新疆前海联合海盈货币B (002248)',
            money:'500万',
            date: '16/06/22',
            expire:'17/05/20',
          }
        ]
      }
    ]
  }