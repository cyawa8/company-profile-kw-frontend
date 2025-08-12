const BASE_URL = 'https://api.kiwi.co.id/api';

export async function getHomeContent() {
  const res = await fetch(`${BASE_URL}/home-content`);
  if (!res.ok) throw new Error('Error fetching data api');
  return res.json();
}

export async function getAboutContent(lang) {
  const res = await fetch(`${BASE_URL}/about-content?lang=${lang}`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

export async function getAboutAward() {
  const res = await fetch(`${BASE_URL}/about-award`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

// export async function getAboutPeopleLeader(lang) {
//   const res = await fetch(`${BASE_URL}/about-people?lang=${lang}`);
//   if (!res.ok) throw new Error('Error fetching data');
//   const data = await res.json();

//   return data.filter(item => item.category === "Leader");
// }

// export async function getAboutPeopleStory(lang) {
//   const res = await fetch(`${BASE_URL}/about-people?lang=${lang}`);
//   if (!res.ok) throw new Error('Error fetching data');
//   const data = await res.json();

//   return data.filter(item => item.category === "Client");
// }

export async function getAboutPeopleByCategory(lang, category) {
  const res = await fetch(`${BASE_URL}/about-people?lang=${lang}&category=${category}`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

export async function getAboutPeopleByName(name, lang) {
  const encoded = encodeURIComponent(name);
  const res = await fetch(`${BASE_URL}/about-people/name/${encoded}?lang=${lang}`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}



export async function getArticleCategory() {
  const res = await fetch(`${BASE_URL}/article-category`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

export async function getArticles() {
  const res = await fetch(`${BASE_URL}/articles`, {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) throw new Error('Error fetching articles');
  return res.json();
}

export async function getArticleDetail(lang) {
  const res = await fetch(`${BASE_URL}/article-detail?lang=${lang}`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

export async function getArticleDetailByGroupId(id, lang) {
  const res = await fetch(`${BASE_URL}/article-detail/group/${id}?lang=${lang}`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

export async function getService(lang){
  const res = await fetch(`${BASE_URL}/service/?lang=${lang}`)
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

export async function getArticleDetailById(id, lang) {
  const res = await fetch(`${BASE_URL}/article-detail/${id}?lang=${lang}`);
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
