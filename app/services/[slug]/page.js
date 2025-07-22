"use client";

import { useParams } from "next/navigation";
import { useGetServiceSlug } from "@/app/pages/hooks/useGetServiceSlug"
import AssetManagement from "@/app/_components/AssetManagement";
import Spinner from "@/app/_components/Spinner";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import Container from "@/app/_components/Container";

const componentMap = {
  "asset-management": AssetManagement,
};

export default function ServiceDetailPage() {


  const { slug } = useParams();
  const { data, isLoading, error } = useGetServiceSlug({ slug });

  if (isLoading) return <Spinner />;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center text-gray-500">
        Halaman untuk layanan “{slsug}” belum tersedia.
      </div>
    );
  }

  return (
    <Container>
      <Breadcrumbs/>
      <Component data={data} />
    </Container>
  );
}


