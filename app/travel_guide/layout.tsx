import type { Metadata } from 'next';

const BASE_URL = 'https://sijifutravel.com';

export const metadata: Metadata = {
  title: '北京旅游攻略 - 四季福旅行社',
  description: '北京旅游5日游攻略，包含长城、故宫等精华景点，专业导游服务',
  alternates: {
    canonical: `${BASE_URL}/travel_guide`,
  },
};

export default function AdvertisementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
