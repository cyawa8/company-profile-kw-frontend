const BASE_URL = 'http://localhost:8001/api';

export async function getHomeContent(lang = "id") {
  const res = await fetch(`${BASE_URL}/home-content?lang=${lang}`, {
    headers: { 'Accept': 'application/json' }
  });
  if (!res.ok) throw new Error('Error fetching data api');
  return res.json();
}

export async function createHomeContent(formData) {
  const res = await fetch(`${BASE_URL}/home-content`, {
    method: 'POST',
     headers: {
      'Accept': 'application/json',
    },
    body: formData,
  });
  if (!res.ok) {
    const err = await res.json();
    console.error(err)
      throw new Error(err.message || 'Error Adding data from api');
    }
  return res.json();
}

export async function updateHomeContent(id, data) {
  const res = await fetch(`${BASE_URL}/home-content/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error updating data from api');
  return res.json();
}

export async function deleteHomeContent(id) {
  const res = await fetch(`${BASE_URL}/home-content/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error Deleting data from api');
  return res.json();
}

export async function getAboutContent() {
  const res = await fetch(`${BASE_URL}/about-content`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

export async function getArticleCategory() {
  const res = await fetch(`${BASE_URL}/article-category`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

export async function getAboutAchievement() {
  const res = await fetch(`${BASE_URL}/about-award`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

export async function getContact() {
  const res = await fetch(`${BASE_URL}/contacts`);
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
}

export async function createArticleCategory(formData) {
  const res = await fetch(`${BASE_URL}/article-category`, {
    method: 'POST',
     headers: {
      'Accept': 'application/json',
    },
    body: formData,
  });
  if (!res.ok) {
    const err = await res.json();
    console.error(err)
      throw new Error(err.message || 'Error Adding data from api');
    }
  return res.json();
}

export async function getServicesClient() {
  const res = await fetch(`${BASE_URL}/servicesclient`);
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}

export async function createApplicant(data) {
  const res = await fetch(`${BASE_URL}/applications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Failed to submit application");
  return result;
}

export async function checkBill(billNumber) {
  const res = await fetch(
    `${BASE_URL}/bills/${billNumber}`,
    {
      headers: { Accept: "application/json" },
    }
  );

  if (!res.ok) {
    throw new Error("Tagihan tidak ditemukan");
  }

  return res.json();
}


