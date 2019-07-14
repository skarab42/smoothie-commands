export default function responseFactory ({ params, xhr }) {
  return { xhr, params, data: {}, text: xhr ? xhr.responseText : '' }
}
