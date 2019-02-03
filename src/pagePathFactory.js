module.exports = function pagePathFactory(seed) {
  switch (seed) {
    case "index":
      return "/"
    case "404":
      return "/404.html"
    default:
      return `/${seed}/`
  }
}
