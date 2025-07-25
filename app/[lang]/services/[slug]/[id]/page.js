"use client";

import { useParams } from "next/navigation";
import Spinner from "@/app/_components/Spinner";
import { useEffect, useState } from "react";
import AssetDetail from "@/app/_components/AssetDetail";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import Container from "@/app/_components/Container";
import AssetRequestForm from "@/app/_components/AssetRequest";
import NoData from "@/app/_components/NoData";

export default function AssetDetailPage() {
  const { slug, id, lang } = useParams();
  const [asset, setAsset] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug === "asset-management") {
      fetch(`https://api.kiwi.co.id/api/${slug}/${id}?lang=${lang}`)
        .then(res => res.json())
        .then(data => {
          setAsset(data);
          setLoading(false);
        });
    }
  }, [slug, id, lang]);

  if (loading) return <Spinner />;
  if (!asset) return <NoData />;

  return (
    <Container>
      <Breadcrumbs lang={lang} />
      <AssetDetail asset={asset} lang={lang} />
      <hr className="border-t-2 border-primary-950 my-8" />
      <AssetRequestForm asset={asset} lang={lang} />
    </Container>
  );
}
