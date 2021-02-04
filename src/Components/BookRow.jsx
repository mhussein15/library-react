export default function BookRow({ bookInfo }) {
  return (
    <tr role="row" >
      <td>{bookInfo.id}</td>
      <td>{bookInfo.title}</td>
      <td>{bookInfo.author}</td>
    </tr>
  );
}
