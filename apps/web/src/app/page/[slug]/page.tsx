import { useParams } from 'next/navigation';

export default function PageDetail() {
  const params = useParams();
  return <div className="p-8">Page: {params.slug}</div>;
}
