export default async function loadHomeContent(req, res){
    try{
        const response = await fetch('https://api.kiwi.co.id/api/home-content');
        const data = await response.json();
        res.status(200).json(data);
    } catch(error){
        console.error('Error fetching API:', error);
        res.status(500).json({message : 'Internal Server Error'});
    }
}