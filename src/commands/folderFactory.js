export default function folderFactory ({ path, line }) {
  const name = line.slice(0, -1)
  const folderPath = `${path}/${name}`
  return {
    type: 'folder',
    name,
    path: folderPath,
    parent: path
  }
}
