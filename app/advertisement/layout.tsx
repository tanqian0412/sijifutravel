import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '北京旅游攻略 - 四季福旅行社',
  description: '北京旅游5日游攻略，包含长城、故宫等精华景点，专业导游服务',
};

export default function AdvertisementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
