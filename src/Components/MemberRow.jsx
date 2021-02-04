export default function MemberRow({ memberInfo }) {
    return (
      <tr role="row" class="even">
        <td class="sorting_1">{memberInfo.id}</td>
        <td>{`${memberInfo.firstName} ${memberInfo.lastName}`}</td>
      </tr>
    );
  }
  