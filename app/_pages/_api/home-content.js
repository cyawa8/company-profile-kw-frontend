export default async function loadHomeContent(req, res){
    try{
        const response = await fetch('http://127.0.0.1:8000/api/home-content');
        const data = await response.json();
        res.status(200).json(data);
    } catch(error){
        console.error('Error fetching API:', error);
        res.status(500).json({message : 'Internal Server Error'});
    }
}