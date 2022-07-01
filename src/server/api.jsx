
export async function downloadArticles() {
    const cards = await fetch('https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc')
        .then(response => response.json())
        .then(data => data);
    return cards;
}
