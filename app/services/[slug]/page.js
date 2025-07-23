"use client";

import { useParams } from "next/navigation";
import AssetManagement from "@/app/_components/AssetManagement";
import Spinner from "@/app/_components/Spinner";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import Container from "@/app/_components/Container";
import { useGetServiceSlug } from "@/app/pages/hooks/useGetServiceSlug";
import NoData from "@/app/_components/NoData";

const componentMap = {
  "asset-management": AssetManagement,
};

export default function ServiceDetailPage() {


  const { slug } = useParams();
  const { data, isLoading, error } = useGetServiceSlug({ slug });

  if (isLoading) return <Spinner />;
  if (error) return <NoData />;

  const Component = componentMap[slug];

  if (!Component) {
    return (
     <NoData />
    );
  }

  return (
    <Container>
      <Breadcrumbs/>
      <Component data={data} />
    </Container>
  );
}


