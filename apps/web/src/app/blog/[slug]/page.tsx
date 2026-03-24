import { useParams } from 'next/navigation';

export default function BlogDetailPage() {
  const params = useParams();
  return <div className="p-8">Blog Detail: {params.slug}</div>;
}
