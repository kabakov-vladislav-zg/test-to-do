module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "bootstrap/scss/bootstrap-utilities.scss";`
      }
    }
  }
};