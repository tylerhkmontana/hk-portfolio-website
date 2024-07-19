export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const lat = searchParams.get('lat')
    const lon = searchParams.get('lon')

    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
    const res = await fetch(`${apiUrl}?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=imperial`, {
        headers: {'Content-Type': 'application/json' }
    })
    const weather = await res.json()

    return Response.json({ ...weather })
}