import moment from 'moment';

export default {
  formatTime: function (time) {
    return moment(time).format("YYYY-MM-DD HH:mm:ss");
  },
  getLevel: function (num) {
    if (num - 1000 > 0) {
      return { name: '护国法师', level: 1 };
    } else if (num - 300 > 0) {
      return { name: '军机大臣', level: 2 };
    } else if (num - 100 > 0) {
      return { name: '各县府衙', level: 3 };
    } else {
      return { name: '无名小卒', level: 4 }
    }
  }
}                                                  