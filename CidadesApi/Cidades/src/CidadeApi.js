const URL = "http://137.184.108.252:5000/api/cidades";

export async function findAll() {
  console.log("Executando findAll()");

  const requestInfo = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDgsImV4cCI6MTc0NzUzMTY3Mn0.XsL63Q8MbDZNVtAoHimNW2GzZVlI_p3JoN3xc1uyt-w",
  },
};


  const responseHttp = await fetch(URL, requestInfo);

  if (responseHttp.ok) {
    return await responseHttp.json();
  } else {
    console.log("Falha ao tentar buscar as cidades.", responseHttp.status);
    throw new Error("Falha ao tentar buscar as cidades.");
  }
}
