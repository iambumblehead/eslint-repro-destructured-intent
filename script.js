export default () => {
  let t = true,
      f = false

  [t, f] = [t, f].map(n => String(n))

  return [t, f]
}
