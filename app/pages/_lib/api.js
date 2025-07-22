const BASE_URL = 'http://localhost:8001/api';

export async function getHomeContent() {
  const res = await fetch(`${BASE_URL}/home-content`);
  if (!res.ok) throw new Error('Error fetching data api');
  return res.json();
}

export async function getAboutContent() {
  const res = await fetch(`${BASE_URL}/about-content`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

export async function getAboutAward() {
  const res = await fetch(`${BASE_URL}/about-award`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

export async function getAboutPeopleLeader() {
  const res = await fetch(`${BASE_URL}/about-people`);
  if (!res.ok) throw new Error('Error fetching data');
  const data = await res.json();

  return data.filter(item => item.category === "Leader");
}

export async function getAboutPeopleStory() {
  const res = await fetch(`${BASE_URL}/about-people`);
  if (!res.ok) throw new Error('Error fetching data');
  const data = await res.json();

  return data.filter(item => item.category === "Client");
}

export async function getAboutPeopleByName(name) {
  const encoded = encodeURIComponent(name);
  const res = await fetch(`${BASE_URL}/about-people/name/${encoded}`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}


export async function getArticleCategory() {
  const res = await fetch(`${BASE_URL}/article-category`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

export async function getArticleDetail() {
  const res = await fetch(`${BASE_URL}/article-detail`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

export async function getService(){
  const res = await fetch(`${BASE_URL}/service/`)
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

export async function getAssetManagement(){
  const res = await fetch(`${BASE_URL}/asset-management/`)
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

export async function getServiceSlug(slug) {
  const res = await fetch(`${BASE_URL}/service-slug/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch service detail");
  }
  return await res.json();
}

export async function getArticleDetailById(id) {
  const res = await fetch(`${BASE_URL}/article-detail/${id}`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}


export async function createArticleDetail(formData){
  const res = await fetch(`${BASE_URL}/article-detail`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
    },
    body: formData,
  });
  if(!res.ok){
    const err = await res.json();
    console.error(err)
      throw new Error(err.message || 'Error Adding data to api')
  }
  return res.json();
}
