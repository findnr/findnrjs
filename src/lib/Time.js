module.exports = {
  data: {},
  getFormat() {
    return this;
  },
  getYear() {
    return new Date().getFullYear();
  },
  getMonth: () => {
    return new Date().getMonth() + 1;
  },
  getDate: () => {
    return new Date().getDate();
  }
};
