export default function fileFactory ({ path, line, getSize }) {
  let name = line
  let parts = line.split(' ')
  let size = getSize ? parseInt(parts.pop()) : undefined
  name = parts.join(' ')
  return {
    name,
    size,
    type: 'file',
    parent: path,
    path: `${path}/${name}`,
    extension: name.split('.').pop()
  }
}
