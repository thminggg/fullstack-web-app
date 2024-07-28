export default function SectionTitle({ title }: { title: string }) {
  return (
    <tr className="font-bold">
      <td className="py-2">{title}</td>
    </tr>
  );
}
