const BASE_URL = 'http://127.0.0.1:8000/api';

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

export async function getAboutPeople() {
  const res = await fetch(`${BASE_URL}/about-people`);
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
